# MASTER PROMPT — PORTFOLIO REDESIGN + REFACTOR

You are a SENIOR FRONTEND ARCHITECT, PRODUCT DESIGNER, UI/UX ENGINEER, MOTION DESIGNER, and CREATIVE DEVELOPER.

Your task is to completely redesign, modernize, refactor, and improve my existing developer portfolio.

IMPORTANT:
Do NOT treat this as a simple styling task.

The goal is to transform the existing portfolio into a highly polished, modern, memorable, production-quality developer portfolio that feels intentionally designed rather than like a generic AI-generated portfolio.

The final website should communicate:

- strong software engineering ability
- full-stack development capability
- backend engineering
- modern frontend development
- technical depth
- creativity
- product thinking
- attention to detail
- ability to build polished digital experiences

The final result should be suitable for:
- recruiters
- software engineering hiring managers
- freelance clients
- technical collaborators
- startup founders

==================================================
0. PROJECT CONTEXT
==================================================

I already have an existing portfolio project.

FIRST:
Inspect the entire existing project before modifying anything.

Do NOT immediately start rewriting components.

Understand:

- current architecture
- framework
- routing
- components
- assets
- styles
- fonts
- dependencies
- existing animations
- existing UI patterns
- responsive behavior
- accessibility
- project data
- contact functionality
- resume functionality
- social links
- unused/duplicate components
- legacy code
- performance issues
- potential bugs

Create a mental map of the existing application before making changes.

Preserve useful content and working functionality.

Do not remove meaningful portfolio information unless there is a clear reason.

==================================================
1. MCP SERVERS AVAILABLE
==================================================

The following MCP servers are available.

Use them intelligently.

DO NOT use every MCP simply because it exists.

Choose the MCP based on the actual requirement.

--------------------------------------------------
SHADCN MCP
--------------------------------------------------

Use as the PRIMARY UI foundation.

Use for:

- buttons
- inputs
- forms
- dialogs
- navigation
- dropdowns
- tooltips
- sheets
- accessible primitives
- reusable UI components

Prefer shadcn components instead of manually recreating standard UI primitives.

--------------------------------------------------
MAGIC UI MCP
--------------------------------------------------

Use selectively for:

- premium hero effects
- animated typography
- subtle marquee
- polished hover effects
- background effects
- micro-interactions
- reveal effects

Do NOT cover the entire website in Magic UI effects.

--------------------------------------------------
ACETERNITY UI MCP
--------------------------------------------------

Use for sophisticated/cinematic interactions.

Consider it for:

- hero interactions
- spotlight effects
- scroll-based effects
- sticky sections
- parallax
- image effects
- 3D card interactions
- text reveals
- project storytelling

If a requested effect is cinematic, check Aceternity first.

--------------------------------------------------
REACT BITS MCP
--------------------------------------------------

Use for creative React interactions.

Consider:

- cursor effects
- text animation
- hover effects
- image interactions
- creative backgrounds
- transitions
- particles ONLY when genuinely useful

Prefer existing proven components over writing complicated effects from scratch.

--------------------------------------------------
SPECTRUM UI MCP
--------------------------------------------------

Use only if shadcn does not provide an appropriate component or layout.

Maintain a single visual language.

Do NOT mix unrelated component styles.

--------------------------------------------------
AI CANVAS MCP
--------------------------------------------------

Use as an additional source for creative sections when the other UI libraries do not provide an appropriate solution.

Prefer free components.

--------------------------------------------------
MOTION / REACT ANIMATION MCP
--------------------------------------------------

Use for custom animation logic.

Use for:

- scroll progress
- useScroll
- useTransform
- useSpring
- layout animations
- page transitions
- stagger animations
- gesture interactions
- image transformations
- section choreography

Do NOT replace meaningful scroll-driven interactions with simple CSS fade animations.

--------------------------------------------------
PLAYWRIGHT MCP
--------------------------------------------------

MANDATORY FOR VALIDATION.

After implementing major changes:

1. Start the development server.
2. Open the website in a real browser.
3. Test desktop.
4. Test mobile.
5. Click navigation.
6. Test project links.
7. Test resume/CV interaction.
8. Test contact form.
9. Test external links.
10. Check console errors.
11. Check runtime errors.
12. Check animation behavior.
13. Check responsive layout.
14. Fix problems.
15. Test again.

Never consider the project complete merely because it compiles.

--------------------------------------------------
BLENDER MCP
--------------------------------------------------

Use ONLY when an actual 3D asset or 3D experience improves the portfolio.

Potential uses:

- hero 3D asset
- architectural visualization
- project visualization
- technical 3D scene
- rendered portfolio asset

DO NOT turn the entire website into a 3D website.

Performance is more important than unnecessary 3D.

==================================================
2. DESIGN PHILOSOPHY
==================================================

The most important rule:

DO NOT CREATE A GENERIC AI PORTFOLIO.

Avoid:

- excessive gradients
- excessive glassmorphism
- random glowing borders
- excessive rounded cards
- purple/blue gradient everywhere
- excessive particles
- excessive floating elements
- excessive 3D cards
- random animations
- animation on every section
- huge unnecessary hero
- component-library Frankenstein UI
- inconsistent typography
- inconsistent spacing
- visual noise

The design should feel:

- premium
- editorial
- technical
- modern
- intentional
- minimal
- expressive
- highly polished

Think:

MODERN ENGINEERING PORTFOLIO
+
EDITORIAL DESIGN
+
INTERACTIVE PRODUCT EXPERIENCE

NOT:

GENERIC AI SAAS LANDING PAGE.

==================================================
3. NEW VISUAL DIRECTION
==================================================

Use a dark editorial technical aesthetic.

Base:

- near-black background
- off-white primary text
- muted secondary text
- subtle borders
- controlled accent color
- minimal glow
- subtle texture/noise if appropriate

Use a restrained color system.

Do NOT use multiple unrelated gradients.

Define design tokens for:

- background
- foreground
- muted foreground
- surface
- border
- accent
- accent foreground
- success
- error

Centralize these tokens.

==================================================
4. TYPOGRAPHY
==================================================

Replace the current typography system if necessary.

Create a deliberate typography hierarchy.

Use:

DISPLAY FONT
for:

- hero heading
- major section headings
- project titles

BODY FONT
for:

- descriptions
- paragraphs
- navigation

MONOSPACE FONT
for:

- technologies
- dates
- labels
- metadata
- technical information

Possible font direction:

Display:
Space Grotesk / Sora / Manrope

Body:
Inter / Geist

Mono:
JetBrains Mono / Geist Mono / IBM Plex Mono

Choose ONE coherent combination.

Do not randomly mix fonts.

Make typography responsive using clamp() where appropriate.

==================================================
5. INFORMATION ARCHITECTURE
==================================================

Redesign the portfolio around this structure:

NAVIGATION

↓

HERO

↓

SELECTED WORK

↓

WHAT I BUILD

↓

EXPERIENCE

↓

ENGINEERING STACK

↓

PLAYGROUND / LAB

↓

ABOUT

↓

EDUCATION / ACHIEVEMENTS

↓

CONTACT

↓

FOOTER

Do not force every section to look like a card.

Use composition and whitespace.

==================================================
6. NAVIGATION
==================================================

Create a minimal premium navigation.

Desktop:

GOKUL S

Work
About
Lab
Contact

Resume ↗

The navigation should:

- remain accessible
- have a subtle active-section indicator
- transition smoothly when scrolling
- work perfectly on mobile
- use an accessible mobile menu

Mobile:

GOKUL S

+

Open a clean full-screen/mobile sheet.

Use shadcn for accessible primitives.

Use Motion only for meaningful transitions.

==================================================
7. HERO
==================================================

COMPLETELY REDESIGN THE HERO.

Do not simply modify the existing hero.

The hero should immediately communicate who I am and what I build.

Example conceptual structure:

GOKUL S

SOFTWARE ENGINEER

I build digital products,
backend systems and
interactive experiences.

[ VIEW WORK ]
[ RESUME ]

Then include a distinctive visual element.

Potential visual:

- portrait
- project preview
- technical visual
- subtle interactive geometry
- code/data visualization
- Blender-generated visual

The hero should feel unique.

Use:

Aceternity / Magic UI / React Bits / Motion

ONLY where appropriate.

Possible interactions:

- subtle cursor response
- text reveal
- image movement
- layered parallax
- animated metadata
- subtle spotlight

Do NOT create excessive animation.

The first screen should remain fast and readable.

==================================================
8. HERO ANIMATION
==================================================

Animation must have purpose.

Use a staged entrance:

1. small metadata appears
2. name/title reveals
3. description appears
4. CTA appears
5. visual element settles into place

Use Motion or a suitable MCP component.

Avoid:

- fake loading screens
- long intro animations
- animations that delay content
- excessive bouncing
- constant movement

Respect:

prefers-reduced-motion.

==================================================
9. SELECTED WORK
==================================================

Projects should become the centerpiece of the portfolio.

Do NOT use a simple grid of identical cards as the primary presentation.

Create a storytelling-oriented project section.

Each major project should communicate:

- project name
- problem
- solution
- role
- technology
- result/achievement
- links

Use large visual presentations.

Possible structure:

PROJECT 01

STREAMLINE PROCESSING

Real-time event processing system

large visual

Problem
Solution
Technology
Result

[ GitHub ]
[ Live / Case Study ]

Then PROJECT 02, PROJECT 03, etc.

Use project-specific visuals.

==================================================
10. PROJECT SCROLL EXPERIENCE
==================================================

For major projects, consider a scroll-driven storytelling interaction.

Example:

Project title

↓

large image

↓

image transforms / expands

↓

technical information appears

↓

technology stack appears

↓

result appears

↓

next project

Use:

Aceternity
+
Motion

Potential techniques:

- sticky sections
- scroll progress
- scale
- opacity
- translate
- perspective
- subtle rotation
- parallax

Do NOT use simple fade-in for everything.

The interaction should feel smooth and premium.

Do not make the animation so complicated that it hurts performance or usability.

==================================================
11. WHAT I BUILD
==================================================

Create a section with three primary capabilities.

01
PRODUCT ENGINEERING

Modern web applications,
dashboards and digital products.

02
BACKEND SYSTEMS

APIs, authentication,
databases and scalable systems.

03
INTERACTIVE EXPERIENCES

Modern interfaces,
animations and visual experiences.

Use strong typography rather than excessive cards.

Add subtle interaction on hover.

==================================================
12. EXPERIENCE
==================================================

Transform experience into a professional timeline.

Example:

2026 — PRESENT

TEAM LEAD / SOFTWARE ENGINEER
Company

Description

Technology

Then previous experience.

Use:

Motion
+
subtle scroll progress

Do not over-animate the timeline.

Make dates and metadata visually distinct using monospace typography.

==================================================
13. ENGINEERING STACK
==================================================

Create a modern technical stack section.

Organize technologies logically.

CORE

Java
JavaScript / TypeScript
Python

FRONTEND

React
Next.js
Tailwind

BACKEND

Node.js
Express
Spring Boot
NestJS

DATABASE

PostgreSQL
MongoDB
MySQL

INFRASTRUCTURE

Docker
Git
Cloud
Kafka

Only include technologies genuinely represented by my existing portfolio/project data.

Do not invent experience.

Avoid giant walls of technology logos.

==================================================
14. PLAYGROUND / LAB
==================================================

Create a unique "LAB" or "PLAYGROUND" section.

This is where experimental work can live.

Potential experiments:

- animation experiments
- 3D architectural visualization
- interactive UI
- data visualization
- creative coding
- Blender work
- technical prototypes

Use React Bits / Aceternity / Motion selectively.

This section should demonstrate experimentation without contaminating the professional sections.

==================================================
15. BLENDER / 3D
==================================================

If the existing Blender assets are useful, integrate ONE high-quality 3D visual.

Potentially:

- architectural visualization
- technical environment
- digital workspace
- product visualization

The 3D asset must:

- look realistic
- load efficiently
- have fallback behavior
- not block initial page rendering
- work on mobile
- respect reduced-motion preferences

Do not create a full WebGL-heavy portfolio unless there is a compelling reason.

==================================================
16. ABOUT
==================================================

Rewrite the visual structure of the About section.

Avoid generic paragraphs such as:

"I am passionate about technology..."

Instead communicate:

- who I am
- what I build
- what I care about technically
- how I approach engineering
- current direction

Keep the writing concise.

Use visual hierarchy.

==================================================
17. EDUCATION
==================================================

Keep education concise.

Example:

B.E. Computer Science and Engineering
Kongu Engineering College
2022 — 2026

Include achievements only when meaningful.

Education should not overpower projects and experience.

==================================================
18. ACHIEVEMENTS
==================================================

Highlight meaningful achievements such as:

- hackathons
- awards
- project recognition
- certifications
- technical accomplishments

Use large typography or editorial layout instead of ordinary cards.

==================================================
19. CONTACT
==================================================

Make contact feel like a strong closing section.

Example:

LET'S BUILD SOMETHING.

Have an idea?
Need a developer?
Want to collaborate?

Email

[ SEND MESSAGE ]

LinkedIn
GitHub
LeetCode

If the existing EmailJS/contact form works, preserve it and refactor it rather than unnecessarily replacing functionality.

Add:

- loading state
- success state
- error state
- validation
- accessible labels

==================================================
20. FOOTER
==================================================

Minimal footer.

GOKUL S

Software Engineer

Social links

© 2026

Do not make the footer visually heavy.

==================================================
21. ANIMATION SYSTEM
==================================================

Create ONE coherent animation language.

Animation principles:

- smooth
- subtle
- responsive
- purposeful
- fast
- interruptible
- accessible

Use different animation levels:

LEVEL 1 — MICRO

Buttons
Links
Icons
Hover

LEVEL 2 — SECTION

Text reveals
Image transitions
Scroll progress

LEVEL 3 — FEATURE

Project storytelling
Hero interaction
Lab experiments

Do NOT make every element Level 3.

Use spring physics where appropriate.

Avoid excessive delay.

Use stagger carefully.

Respect:

prefers-reduced-motion.

==================================================
22. PAGE TRANSITIONS
==================================================

If the project has multiple routes, use subtle page transitions.

Do not create cinematic transitions that make navigation slow.

Transitions should communicate continuity.

==================================================
23. RESPONSIVE DESIGN
==================================================

Design mobile intentionally.

Do not simply shrink desktop.

Test:

360px
390px
430px
768px
1024px
1440px+

Pay special attention to:

- typography
- navigation
- project images
- horizontal overflow
- sticky sections
- scroll animations
- touch interactions
- forms
- buttons

Disable or simplify expensive animations on mobile where necessary.

==================================================
24. ACCESSIBILITY
==================================================

Ensure:

- semantic HTML
- keyboard navigation
- visible focus states
- accessible buttons
- accessible forms
- alt text
- sufficient contrast
- reduced motion support
- correct heading hierarchy
- no inaccessible hover-only interactions

Do not sacrifice accessibility for visual effects.

==================================================
25. PERFORMANCE
==================================================

Performance is a major requirement.

Optimize:

- images
- fonts
- JavaScript
- animation workload
- 3D assets
- lazy loading
- component rendering

Avoid unnecessary dependencies.

Do not install a library if a small amount of maintainable code solves the problem.

Avoid excessive React re-renders.

Do not run expensive animations continuously when the user is not interacting.

==================================================
26. CODE ARCHITECTURE
==================================================

Refactor the existing code into a maintainable structure.

Target conceptual structure:

src/

components/
  ui/
  navigation/
  hero/
  projects/
  experience/
  about/
  skills/
  lab/
  contact/
  shared/

data/
  projects
  experience
  skills
  social

hooks/
  animation hooks
  scroll hooks
  responsive hooks

lib/
  utilities

styles/
  tokens
  globals

Do not duplicate components.

Remove obsolete components only after confirming they are unused.

Avoid giant components.

Keep data separate from presentation.

==================================================
27. DESIGN TOKENS
==================================================

Create a centralized design system.

Define:

colors
spacing
radius
typography
shadows
transitions
breakpoints

Use CSS variables or the project's appropriate token system.

Do not hard-code random values throughout the project.

==================================================
28. COMPONENT RULE
==================================================

Before creating a component:

1. Check shadcn.
2. Check Magic UI if visual/premium.
3. Check Aceternity if cinematic.
4. Check React Bits if creative.
5. Check Spectrum UI if a standard layout is missing.
6. Check Motion if custom animation is required.
7. Only then write custom code.

Do not force MCP components where they do not fit.

The final design matters more than which MCP was used.

==================================================
29. IMPORTANT — DO NOT OVERWRITE CONTENT BLINDLY
==================================================

Before changing portfolio content:

Inspect the existing data.

Preserve:

- project names
- project descriptions
- technologies
- achievements
- links
- experience
- education
- social links

Improve wording where appropriate, but do not invent achievements, companies, technologies, clients, or metrics.

If information is missing, keep the existing information or use a clear placeholder rather than inventing facts.

==================================================
30. REMOVE LEGACY / DUPLICATE CODE
==================================================

Inspect for:

- duplicate components
- unused components
- unused CSS
- unused imports
- dead assets
- old layouts
- duplicate navigation
- old animation implementations

Examples of potentially legacy files/components should be investigated before removal.

Do NOT delete something merely because its name looks old.

Confirm usage first.

==================================================
31. NO BLIND DEPENDENCY INSTALLATION
==================================================

Before installing anything:

Check the existing project dependencies.

Prefer existing dependencies.

Only install a dependency when:

- it provides significant value
- it is compatible with the existing stack
- it is actively useful
- there is no simpler maintainable solution

Do not introduce paid services.

Prefer free/open-source solutions.

==================================================
32. IMPLEMENTATION ORDER
==================================================

Follow this sequence.

PHASE 1
Audit existing project.

PHASE 2
Create design system.

PHASE 3
Refactor architecture.

PHASE 4
Build new navigation.

PHASE 5
Build hero.

PHASE 6
Build project storytelling section.

PHASE 7
Build capabilities section.

PHASE 8
Build experience timeline.

PHASE 9
Build engineering stack.

PHASE 10
Build Lab/Playground.

PHASE 11
Build About/Education/Achievements.

PHASE 12
Build Contact/Footer.

PHASE 13
Implement animation system.

PHASE 14
Responsive optimization.

PHASE 15
Accessibility pass.

PHASE 16
Performance pass.

PHASE 17
Playwright testing.

PHASE 18
Fix all issues.

PHASE 19
Playwright re-test.

==================================================
33. TESTING CHECKLIST
==================================================

After implementation, use Playwright.

Test:

DESKTOP

- navigation
- hero
- buttons
- project interactions
- project links
- experience
- lab
- contact
- resume
- social links

MOBILE

- menu
- touch interactions
- scrolling
- project sections
- forms
- typography
- overflow

FUNCTIONAL

- no console errors
- no broken links
- no broken images
- no runtime errors
- no layout shifts caused by animation
- no horizontal overflow
- forms work
- external links work

ACCESSIBILITY

- keyboard navigation
- focus states
- reduced motion
- semantic structure

==================================================
34. VISUAL QA
==================================================

Do not stop after functional testing.

Visually inspect the website.

Look for:

- inconsistent spacing
- awkward alignment
- typography hierarchy problems
- excessive effects
- animation jitter
- poor mobile layouts
- excessive empty space
- cramped sections
- inconsistent card radius
- inconsistent borders
- poor contrast
- visual noise

If something looks generic, improve the composition rather than adding more effects.

==================================================
35. FINAL QUALITY BAR
==================================================

Before declaring the project complete, ask:

Does this look like a generic AI portfolio?

If YES:
REDESIGN the problematic area.

Does every animation have a purpose?

If NO:
REMOVE unnecessary animation.

Does the portfolio communicate what I actually build within 5 seconds?

If NO:
Improve the hero.

Can a recruiter quickly understand:

- who I am
- what I build
- my strongest projects
- my experience
- my technical stack
- how to contact me

If NO:
Improve the information hierarchy.

Does the site still look good without animations?

If NO:
The underlying design is weak.

Does the mobile version feel intentionally designed?

If NO:
Fix it.

Is the code maintainable?

If NO:
Refactor it.

==================================================
36. MOST IMPORTANT DESIGN PRINCIPLE
==================================================

DO NOT TRY TO IMPRESS THE USER WITH THE NUMBER OF EFFECTS.

IMPRESS THE USER WITH:

- composition
- typography
- storytelling
- interaction quality
- technical depth
- visual consistency
- performance
- attention to detail

Use MCPs as tools.

Do not use MCPs as decoration.

The final portfolio should feel like a carefully designed digital product created by a strong software engineer.

==================================================
37. FINAL EXECUTION RULE
==================================================

Do NOT ask me unnecessary questions.

Inspect the project first.

Make reasonable engineering/design decisions based on the existing code.

If a decision has multiple reasonable options, choose the option that provides:

1. Better UX
2. Better visual quality
3. Better maintainability
4. Better performance
5. Better responsiveness

Do not stop at a superficial redesign.

Actually refactor the architecture where necessary.

Actually improve the interaction design.

Actually test the website.

Actually fix the problems found during testing.

The final result should be production-quality.

BEGIN:

1. Inspect the complete project.
2. Analyze the current architecture.
3. Analyze existing assets and content.
4. Analyze current UI/UX.
5. Identify legacy/duplicate code.
6. Map features to the appropriate MCP servers.
7. Establish the new design system.
8. Refactor.
9. Redesign.
10. Implement interactions.
11. Optimize.
12. Test with Playwright.
13. Fix issues.
14. Test again.
15. Only then consider the redesign complete.

