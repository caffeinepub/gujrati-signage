interface WordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'text-base sm:text-lg',
  md: 'text-xl sm:text-2xl',
  lg: 'text-2xl sm:text-3xl md:text-4xl',
  xl: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
};

export default function Wordmark({ className = '', size = 'md' }: WordmarkProps) {
  return (
    <span
      className={`font-display font-bold tracking-tight text-white wordmark-premium ${sizeClasses[size]} ${className}`}
    >
      Gujrati signage
    </span>
  );
}
