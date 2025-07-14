Based on the project plan for KoryenAlbCraft, which leverages a **Next.js web application** with its App Router, and adopts a **feature-first and atomic design** approach, here is the planned file and folder structure for the Version 0.1 (MVP):

The architecture draws inspiration from the Component-Based Architecture (CBA) principles, emphasizing separation of concerns and reusability, which is highly suitable for a solo developer.

```
/
├── app/                                  # Next.js App Router root for pages and API routes
│   ├── api/                              # Backend API routes
│   │   └── crafting-profit/              # API endpoint for profit calculation
│   │       └── route.ts                  # Secure backend endpoint orchestrating core logic
│   └── page.tsx                          # Main application entry point (Home Page Container)
│                                         # Conditionally renders Login/Main Interface
│
├── components/                           # Reusable UI components and feature modules
│   ├── features/                         # Feature Modules (Molecules & Organisms) - Grouped by domain
│   │   └── crafting-profit/              # Components specific to crafting profit feature
│   │       ├── CraftingInputForm.tsx     # Encapsulates user inputs (item, quality, location)
│   │       ├── ProfitDisplay.tsx         # Renders calculated profit and material breakdown
│   │       ├── LocationSelector.tsx      # (Potentially) For easy city selection in UI
│   │       └── index.ts                  # Re-exports all components in this feature folder
│   │
│   └── ui/                  # UI Primitives (Atoms) - Basic building blocks (from shadcn/ui)
│       ├── Button.tsx             # Consistent, accessible button
│       ├── Input.tsx              # Standardized text input field
│       ├── Select.tsx             # For item/location selection
│       ├── Table.tsx              # For displaying calculated results
│       └── index.ts               # Re-exports all UI primitives
│
├── lib/                                  # Business logic and reusable server-side functions
│   ├── profit-calculation.ts             # Core logic for profit calculation
│   │                                     # Accounts for market tax (6.5%) and return rates
│   ├── item-mapping.ts                   # Manages mapping between in-game item names and server IDs
│   └── recipes.ts                        # Stores crafting recipes (initially hardcoded for MVP)
│
├── services/                             # Server-side modules for external API communication
│   └── albion-data.ts                    # Critical module for Albion Online Data Project API.
│                                         # Handles fetching market data and initial item ID mapping
│
├── styles/                               # Global styles and theme constants
│   ├── theme.ts                          # Color, spacing, typography constants
│   └── globals.css                       # Tailwind CSS global styles
│
├── types/                                # TypeScript type definitions
│   └── index.d.ts                        # Centralized type declarations for application data
│
└── utils/                                # Helper functions and utility modules
    └── api-helpers.ts                    # General utility functions (e.g., for API request consolidation, though `albion-data.ts` will handle core consolidation)
```

**Explanation for KoryenAlbCraft V0.1 (MVP) Focus:**

-   **Core Objective:** The MVP aims to provide a fast, automated, and accurate way to calculate crafting profits for a **single item in a specific city/location**.
-   **Technology Stack:** The project utilizes **Next.js with App Router**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** for UI components.
-   **Problem Solved by MVP:** It directly addresses the manual, time-consuming process of checking market prices and calculating profits in an Excel sheet.
-   **Key Modules:**
    -   `CraftingInputForm.tsx` and `ProfitDisplay.tsx` are central to the user interface, allowing input and displaying results.
    -   `/api/crafting-profit/route.ts` acts as the secure backend endpoint.
    -   `albion-data.ts` is a **critical module** responsible for fetching real-time market data from the Albion Online Data Project API, handling item ID mapping, and managing API rate limits (though full consolidation will be refined in V1.0).
    -   `profit-calculation.ts` encapsulates the core business logic, including market tax (6.5%) and return rates.
-   **Phased Development:** This structure supports the "build while learning" approach, allowing for the initial MVP features to be built efficiently while providing a scalable foundation for future comprehensive features in Version 1.0, such as comprehensive profit calculations across multiple items and cities, dynamic recipe management, and market arbitrage identification.
