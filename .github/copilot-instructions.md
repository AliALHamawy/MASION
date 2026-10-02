# GitHub Copilot Project Guidelines

## Tech Stack & Architecture
- **Framework:** Next.js (App Router) with TypeScript.
- **Styling:** Tailwind CSS (v4) + custom OKLCH CSS Variables for dynamic theme switching.
- **State Management:** Redux Toolkit (RTK) with typed hooks (`useAppDispatch`, `useAppSelector`) for Cart & Multi-Currency state.
- **UI Components:** shadcn/ui (installed on-demand).
- **Icons:** Hugeicons (`@hugeicons/react` with `@hugeicons/core-free-icons`).
- **Direction & Language:** LTR, English only.

## Build, Lint & Execution Controls
- **Automated Checks:** DO NOT automatically trigger `pnpm run build` or `pnpm run lint` during code generation. Run them ONLY when explicitly instructed by the user to save tokens and CI resources.
- **Icon Imports:** Always use `HugeiconsIcon` from `@hugeicons/react` and import icon definitions in PascalCase from `@hugeicons/core-free-icons` (e.g., `import { Search02Icon } from '@hugeicons/core-free-icons'`). Render via `<HugeiconsIcon icon={Search02Icon} className="..." />`.

## Editorial Luxury Design & Layout System
- **Theme & Aesthetic:** "Editorial Luxury" off-white/cream base (`#FAF9F6` / `oklch(0.985 0.003 85)`) with high-contrast dark accents and subtle glass overlays.
- **Canvas Spacing:** Full-width layout with a precise 20px margin (`w-[calc(100%-40px)] mx-auto`) and large rounded corners (`rounded-[32px]`).
- **Hero Height:** The Hero section must span full viewport height (`min-h-[calc(100vh-2.5rem)]`) and sit directly underneath the floating header without top white space.
- **Floating Header:** Top fixed glass header (`bg-white/75 backdrop-blur-md border border-neutral-200/70 shadow-sm rounded-full fixed top-7 left-1/2 -translate-x-1/2 w-[calc(100%-60px)] z-50`).
- **Brand Story Section:** Split-layout grid featuring an editorial portrait image displaying craftsmanship details on the right, replacing standard feature cards.
- **Product Card Architecture:** Outer card with a 4px inner padding (`p-1`), `rounded-[28px]`, and a bottom 45% seamless gradient blur layer containing details and a floating round "+ Add" CTA.

## Navigation & Flow Architecture
- **Mobile Navigation:** Include a Mobile Hamburger icon in the Header (`md:hidden`) toggling a clean glassmorphism Dropdown Menu with all navigation links.
- **Cart Interface:** Slide-over Popup Drawer appearing from the right with blur overlay upon clicking the Cart icon.
- **Checkout Page:** Isolated, distraction-free page with NO top Header or Bottom Dock, featuring only a minimal logo and a "Back to Shop" action.
- **Bottom Navigation Dock:** Floating centered bottom dock (`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-white/80 backdrop-blur-xl border border-black/10`).

## Performance & Motion Rules
- **GPU Acceleration:** Use `transform-gpu` or `will-change-transform` for motion components.
- **Optimized Backdrop Blur:** Use `backdrop-blur-md` on fixed floating elements (Header, Bottom Dock, Slide-over Cart) while keeping scrollable product grids clean to preserve FPS and Lighthouse score.
- **Images:** Always use Next.js `<Image />` component with `object-cover` and explicit responsive sizes.

## Code Standards & Structure
- Functional React components with strict, explicit TypeScript interfaces.
- Keep components organized under `@/components/` (`ui/`, `layout/`, `features/`, `MyComponents/`).