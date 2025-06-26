/**
 * Validates email format using regex
 * @param email - The email string to validate
 * @returns True if email is valid, false otherwise
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates password strength
 * @param password - The password to validate
 * @returns Object with validation results
 */
export const validatePassword = (password: string) => {
  const minLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const isValid = minLength && hasUpperCase && hasLowerCase && hasNumbers;

  return {
    isValid,
    errors: {
      minLength: !minLength,
      hasUpperCase: !hasUpperCase,
      hasLowerCase: !hasLowerCase,
      hasNumbers: !hasNumbers,
      hasSpecialChar: !hasSpecialChar,
    },
  };
};

/**
 * Validates phone number format
 * @param phone - The phone number to validate
 * @returns True if phone number is valid, false otherwise
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

/**
 * Validates URL format
 * @param url - The URL to validate
 * @returns True if URL is valid, false otherwise
 */
export const validateURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
