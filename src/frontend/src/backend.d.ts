import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface EnquiryInput {
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface Enquiry {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface Order {
    id: bigint;
    customerName: string;
    productId: string;
    notes: string;
    timestamp: bigint;
    quantity: bigint;
    phone: string;
}
export interface UserProfile {
    name: string;
}
export interface OrderInput {
    customerName: string;
    productId: string;
    notes: string;
    quantity: bigint;
    phone: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getAllOrders(): Promise<Array<Order>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getEnquiry(id: bigint): Promise<Enquiry>;
    getOrder(id: bigint): Promise<Order>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitEnquiry(input: EnquiryInput): Promise<[bigint, bigint]>;
    submitOrder(input: OrderInput): Promise<[bigint, bigint]>;
}
