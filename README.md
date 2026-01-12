# Portfolio — Vicki Ye

Welcome! This repository contains the source code for my personal website: yevicki.github.io

## Introduction
On my personal website find technical portfolio of all the projects I've worked on over the years, along with my academic and career expierences. 

## Key files & structure 🔍
- `gitprofile.config.ts` — Repository-level configuration (profile, socials, header image, projects, and feature flags).
- `src/components/profile-card/` — Top profile component (avatar, name, socials, optional header background).
- `src/components/gitprofile.tsx` — Main layout and page composition — mounts profile, projects, and content sections.
- `src/components/*-card/` — Reusable UI cards (projects, experience, education, certifications).
- `src/utils/` — Helper utilities and configuration sanitizers (data fetching, formatting, and config mapping).
- `src/components/lazy-image/` — Lightweight lazy-loading image component used for avatars and headers.
- `public/` — Static assets served at root (place local images in `public/images/` and reference them as `/images/<name>`).
- `README.md` — Project overview, setup, and customization instructions.

## Technologies Used
- `Vite` development server & build tool
- `React 18` UI library
- `TypeScript` static typing and developer tooling
- `Tailwind CSS & DaisyUI` utility-first styling and component helpers
- `React Icons` icon set used across the UI
- `Axios` GitHub API requests
- `ESLint & Prettier` linting and formatting

## License & Contact
This project is licensed under the MIT License — see `LICENSE` for details.