// UI Constants
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
  TOAST: 1080,
} as const;

// Common sizes
export const SIZES = {
  HEADER_HEIGHT: '64px',
  FOOTER_HEIGHT: '200px',
  SIDEBAR_WIDTH: '250px',
  CONTAINER_MAX_WIDTH: '1200px',
} as const;
