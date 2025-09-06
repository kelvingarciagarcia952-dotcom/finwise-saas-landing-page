# Finwise - Next.js Landing Page Template

## Overview
Finwise is a lightweight, easily configurable Next.js and Tailwind CSS landing page template. This project has been successfully imported and configured to run in the Replit environment.

## Recent Changes (September 06, 2025)
- ✅ Installed all project dependencies via npm
- ✅ Configured Next.js for Replit environment with proper host settings
- ✅ Set up development server to bind to 0.0.0.0:5000 for Replit proxy compatibility
- ✅ Created workflow for Frontend Development Server on port 5000
- ✅ Configured deployment settings for production (autoscale)
- ✅ Verified application compiles and runs successfully

## Project Architecture
- **Framework**: Next.js 14.2.13 with TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: React Icons (31+ icon packs)
- **Fonts**: Next.js font optimization with Source Sans 3 and Manrope
- **Structure**: App Router with modular components

### Key Components
- Hero section with call-to-action
- Partner/Client logos display
- Features/Benefits sections
- Pricing table
- Testimonials
- FAQ section
- Statistics display
- Footer with site information

### Development Setup
- **Development Server**: Runs on 0.0.0.0:5000 (configured for Replit)
- **Build Command**: `npm run build`
- **Production Start**: `npm start` (also on port 5000)
- **Deployment**: Configured for autoscale deployment target

## File Structure
```
src/
├── app/           # Next.js app router pages
├── components/    # Reusable UI components
├── data/          # Static data and content
├── types.ts       # TypeScript type definitions
└── utils.tsx      # Utility functions
```

## Environment Configuration
- Configured for Replit proxy environment
- Frontend serves on port 5000 with proper host binding
- Next.js config includes proper headers for iframe compatibility
- No backend components - pure frontend application

## User Preferences
- Project ready for customization via data files in `/src/data`
- Colors can be updated in `globals.css`
- Images should be placed in `/public/images`
- Site details configured in `siteDetails.ts`