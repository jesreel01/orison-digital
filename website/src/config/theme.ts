/**
 * Theme Configuration
 * 
 * Current Status: LOCKED TO LIGHT THEME
 * 
 * This configuration controls the theme behavior of the application.
 * Currently set to light theme only for development focus.
 */

export const THEME_CONFIG = {
  // Theme mode: 'light' | 'dark' | 'system'
  mode: 'light' as const,
  
  // Whether to allow theme switching
  allowToggle: false,
  
  // Whether to respect system preference
  respectSystemPreference: false,
  
  // Default theme for new users
  defaultTheme: 'light' as const,
} as const;

export type ThemeMode = typeof THEME_CONFIG.mode;

/**
 * Theme class utilities
 */
export const THEME_CLASSES = {
  light: '',
  dark: 'dark',
} as const;

/**
 * Theme related constants
 */
export const THEME_CONSTANTS = {
  STORAGE_KEY: 'orison-theme',
  ATTRIBUTE_NAME: 'data-theme',
  CLASS_NAME: 'dark',
} as const;
