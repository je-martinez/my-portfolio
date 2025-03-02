export const Sections = {
  Home: "home",
  About: "about",
  Skills: "skills",
  Experience: "experience",
  Contact: "contact",
} as const;

export const SectionLabels = {
  Hero: "Home",
  About: "About",
  Skills: "Skills",
  Experience: "Experience",
} as const;
export const NavLinks = Object.values(Sections).map((section) => ({
  label: section.charAt(0).toUpperCase() + section.slice(1),
  href: `#${section}`,
}));
