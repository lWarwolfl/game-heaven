# Game Heaven

This project is a group effort to learn new technologies and master already known ones.

## Features

- Next.js framework app router for server-side rendering and optimized performance.
- Seamless functionality for handling data by utilizing next.js server actions and connecting to it using React Query.
- TypeScript for type safety and enhanced development experience.
- Using jest for unit testing and story book for documenting to insure long term support.
- Tailwind CSS for scalable and maintainable styling.
- Reusable components that can be easily integrated into other projects.

## Getting Started

To get started with Game Heaven, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/lWarwolfl/game-heaven.git
   ```

2. Navigate to the project directory:

   ```bash
   cd game-heaven
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app.

## Directory Structure

The project's directory structure is as follows:

```
sugimoto-boilerplate/
  ├── src/
    ├── app/                        # Project pages and favicon ONLY
    ├── components/                 # All project components
    ├── components/common           # Reusable UI components built on base components
    ├── components/feature          # Reusable Feature components
    ├── components/layout           # Components needed in app layouts
    ├── components/pages            # Components used in pages following this naming convention:
                                    component name: {Route Name(Pascal Case)}Component used in tsx component
                                    folder: {route}/index.tsx
                                    Eg. dashboard/index.tsx DashboardComponent
    ├── components/providers        # Wrapper components
    ├── components/ui               # Base UI components
    ├── data/                       # All mock data
    ├── lib/                        # All reusable scripts
    ├── lib/context                 # Reusable contexts for features
    ├── lib/form                    # Form configurationm files
    ├── lib/form/actions            # Serverside form actions
    ├── lib/form/validations        # Project form validation schemas
    ├── lib/hooks                   # Reusable hooks
    ├── lib/store                   # Zustand configuration
    ├── lib/typescript              # Reusable typescript definitions
    ├── lib/typescript/interfaces   # Reusable interfaces
    ├── lib/typescript/types        # Reusable types
    ├── lib/utils.ts                # All reusable functions
    ├── styles/                     # Project global styles
```
