interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className = "w-12 h-12" }: IconProps) {
  const icons = {
    cleaning: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
      </svg>
    ),
    office: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" fill="currentColor"/>
      </svg>
    ),
    specialized: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" fill="currentColor"/>
      </svg>
    ),
    remodel: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7 19L10.2 15.5L11.6 14.1L13.7 16.2L19.8 10.1L21.2 11.5L13.7 19ZM7.5 19C7.5 16.8 9.3 15 11.5 15C11.8 15 12.1 15 12.4 15.1L14.5 13C13.6 12.4 12.6 12 11.5 12C7.6 12 4.5 15.1 4.5 19H2L5.2 22.2L8.4 19H7.5ZM19.5 5C19.5 7.2 17.7 9 15.5 9C15.2 9 14.9 9 14.6 8.9L12.5 11C13.4 11.6 14.4 12 15.5 12C19.4 12 22.5 8.9 22.5 5H25L21.8 1.8L18.6 5H19.5Z" fill="currentColor"/>
      </svg>
    ),
    outdoor: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22L3 17V7L12 2L21 7V17L12 22ZM12 16L17.8 13L12 10L6.2 13L12 16ZM12 19.5L18 16V10.2L12 13.7V19.5ZM12 8L17.8 5L12 2L6.2 5L12 8ZM6 16L12 19.5V13.7L6 10.2V16Z" fill="currentColor"/>
      </svg>
    ),
    phone: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
      </svg>
    ),
    email: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
      </svg>
    ),
    location: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
      </svg>
    )
  };

  return icons[name as keyof typeof icons] || null;
} 