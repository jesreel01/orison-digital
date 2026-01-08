export const ROUTES = {
  HOME: "/",
  ABOUT: "#about",
  SERVICES: "#services",
  WORK: "#work",
  CONTACT: "#contact",
} as const;

export const NAVIGATION_ITEMS = [
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Work", href: ROUTES.WORK },
  { label: "About", href: ROUTES.ABOUT },
] as const;
