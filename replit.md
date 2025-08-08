# Envobit - Complete Product Development Platform

## Overview

Envobit is a premium marketing website for a full-service product development agency that combines elite development capabilities with neuroscience-based customer experience optimization and proven growth strategies. The platform serves as a conversion-optimized landing page targeting companies with $50K+ budgets seeking complete product development and launch solutions.

This is a React-based marketing website built with modern web technologies, featuring sophisticated animations, responsive design, and conversion-focused architecture that implements Cialdini's persuasion principles throughout the user journey.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Tailwind CSS** for utility-first styling with custom design system
- **Framer Motion** for sophisticated animations and micro-interactions
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **shadcn/ui** component library for consistent, accessible UI components
- **TanStack Query** for server state management and data fetching

### Component Structure
- Modular section-based architecture with dedicated components for each landing page section
- Reusable UI component library following design system patterns
- Custom hooks for mobile responsiveness and toast notifications
- Responsive navigation with mobile menu support

### Styling System
- Custom CSS variables for brand colors (navy, light-blue, supporting-gray)
- Typography system using Inter and Montserrat fonts
- Glass morphism effects and sophisticated shadow system
- Responsive breakpoints optimized for mobile-first design

### Backend Architecture
- **Express.js** server with TypeScript support
- Modular route registration system with separation of concerns
- In-memory storage implementation with extensible interface pattern
- Custom error handling and request logging middleware

### Database Design
- **Drizzle ORM** configured for PostgreSQL with type-safe queries
- User schema with username/password authentication structure
- Migration system for database version control
- Environment-based database configuration

### Development Workflow
- **TypeScript** for full-stack type safety
- **ESBuild** for production bundling and optimization
- Hot module replacement in development mode
- Separate build processes for client and server code

### Content Management
- Static content architecture optimized for marketing copy
- Brand positioning documents and conversion copywriting materials
- Structured component organization for easy content updates

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React 18, React DOM, TypeScript support
- **Vite**: Build tooling with plugin ecosystem for development experience
- **Express.js**: Node.js web framework for server-side functionality

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Headless component primitives for accessibility
- **shadcn/ui**: Pre-built component library with consistent design patterns
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library for consistent iconography

### Database and ORM
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Neon Database**: Serverless PostgreSQL for cloud deployment
- **Drizzle Kit**: Migration and introspection tools

### Development Tools
- **tsx**: TypeScript execution engine for development
- **ESBuild**: Fast bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

### State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation for form schemas

### Utilities
- **date-fns**: Date manipulation and formatting
- **clsx/twMerge**: Conditional CSS class management
- **nanoid**: Unique ID generation
- **Wouter**: Lightweight client-side routing