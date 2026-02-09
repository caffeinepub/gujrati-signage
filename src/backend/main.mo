import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Principal "mo:core/Principal";

import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";


actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Enquiry = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  type Order = {
    id : Nat;
    productId : Text;
    customerName : Text;
    phone : Text;
    quantity : Nat;
    notes : Text;
    timestamp : Int;
  };

  public type UserProfile = {
    name : Text;
  };

  var nextEnquiryId = 0;
  var nextOrderId = 0;

  // Using persistent Map for stable storage.
  let enquiries = Map.empty<Nat, Enquiry>();
  let orders = Map.empty<Nat, Order>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  public type EnquiryInput = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  public type OrderInput = {
    productId : Text;
    customerName : Text;
    phone : Text;
    quantity : Nat;
    notes : Text;
  };

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Store new enquiry and return id and timestamp.
  // Accessible to anyone including guests (no authorization check)
  public shared ({ caller }) func submitEnquiry(input : EnquiryInput) : async (Nat, Int) {
    // Validate input
    if (input.name == "" and input.phone == "" and input.message == "") {
      Runtime.trap("Some fields are required");
    };

    let currentId = nextEnquiryId;
    let timestamp = Time.now();

    let newEnquiry = {
      id = currentId;
      name = input.name;
      phone = input.phone;
      email = input.email;
      message = input.message;
      timestamp = timestamp;
    };

    enquiries.add(currentId, newEnquiry);
    nextEnquiryId += 1;

    (currentId, timestamp);
  };

  // Store new order and return id and timestamp.
  // Accessible to anyone including guests (no authorization check)
  public shared ({ caller }) func submitOrder(input : OrderInput) : async (Nat, Int) {
    // Validate input
    if (input.customerName == "" or input.phone == "") {
      Runtime.trap("Customer name and phone are required");
    };

    let currentId = nextOrderId;
    let timestamp = Time.now();

    let newOrder = {
      id = currentId;
      productId = input.productId;
      customerName = input.customerName;
      phone = input.phone;
      quantity = input.quantity;
      notes = input.notes;
      timestamp = timestamp;
    };

    orders.add(currentId, newOrder);
    nextOrderId += 1;

    (currentId, timestamp);
  };

  // Admin: Get all enquiries.
  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can retrieve all enquiries");
    };
    let iter = enquiries.values();
    iter.toArray();
  };

  // Admin: Get all orders.
  public query ({ caller }) func getAllOrders() : async [Order] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can retrieve all orders");
    };
    orders.values().toArray();
  };

  // Admin: Get single order by id
  public query ({ caller }) func getOrder(id : Nat) : async Order {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can retrieve orders");
    };
    switch (orders.get(id)) {
      case (null) { Runtime.trap("Order not found") };
      case (?order) { order };
    };
  };

  // Admin: Get single enquiry by id
  public query ({ caller }) func getEnquiry(id : Nat) : async Enquiry {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can retrieve enquiries");
    };
    switch (enquiries.get(id)) {
      case (null) { Runtime.trap("Enquiry not found") };
      case (?enquiry) { enquiry };
    };
  };
};
