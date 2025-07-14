# KoryenAlbCraft User Experience (UX) Mapping (Phillip Choi's Approach)

This document outlines the user experience (UX) mapping for the **KoryenAlbCraft** web application, designed to optimize crafting and market trading in _Albion Online_. This mapping aligns with Phillip Choi's philosophy of building a **real project that solves a genuine problem**, focusing on user experience, data flow, and developing problem-solving muscles through immediate implementation.

## The Problem KoryenAlbCraft Solves

As an _Albion Online_ player and crafter, the process of manually checking market prices across different cities and calculating profits in a spreadsheet is **incredibly time-consuming**, often taking over an hour to update prices. This manual effort can lead to calculations becoming **outdated quickly**, potentially resulting in losses due to fluctuating market prices. Existing tools may show market prices, but they often lack the detailed, real-time profit calculations specific to crafting that crafters need.

## How KoryenAlbCraft Will Help (Solution Overview)

KoryenAlbCraft aims to **eliminate this manual effort** by providing a **fast, automated, and accurate way to calculate crafting profits** and identify profitable trading opportunities directly through a web browser. The tool is designed to empower players to make **smarter, quicker decisions** in _Albion Online_'s dynamic economy. Its goal is to transform a tedious, error-prone manual process into a streamlined, real-time, and powerful economic tool.

## UX Flow: Version 0.1 (Minimum Viable Product - MVP)

The initial version, KoryenAlbCraft v0.1, focuses on addressing the most critical pain point: manual profit calculation for a single item. This immediate solution paves the way for more comprehensive features in future versions.

### User Journey for KoryenAlbCraft v0.1

1.  **Visits Landing Page**: The user first navigates to the KoryenAlbCraft web application.
2.  **Clicks Login with Google**: If not already authenticated, the user initiates the login process via Google OAuth.
3.  **Approves Google Permissions**: The user grants the necessary permissions for the application through Google.
4.  **Lands on Main App Interface**: After successful authentication, the user arrives at the core application interface.
5.  **Selects Crafting Item, Quality, and Location**: The user inputs or selects a specific crafting item (e.g., "Buttler Leather"), its desired quality, and a specific city/location within _Albion Online_. This is done via a `CraftingInputForm.tsx` component.
6.  **Clicks "Calculate Profit" Button**: The user triggers the calculation process.
7.  **System: Fetches Market Data**: In the backend, the `albion-data.ts` module communicates with the _Albion Online Data Project API_ to automatically fetch the latest market prices for the selected crafted item and its required raw materials. This module is critical for circumventing API rate limits by handling consolidated requests.
8.  **System: Calculates Profit**: The backend's `/api/crafting-profit/route.ts` endpoint performs the profit calculation, taking into account crafting costs, taxes (like the 6.5% market tax), and return rates.
9.  **User Views Instant Profit Display**: The calculated profit is then displayed instantly on the frontend, allowing the user to quickly determine if crafting is worthwhile for that single item. This is rendered by the `ProfitDisplay.tsx` component.

### Mermaid Graph for KoryenAlbCraft v0.1 UX Flow

```mermaid
graph TD
    subgraph "Phase 1: Onboarding"
        A[Visits Landing Page] --> B{Clicks Login with Google};
        B --> C[Approves Google Permissions];
        C --> D[Lands on Main App Interface];
    end

    subgraph "Phase 2: MVP Core Functionality"
        D --> E[Selects Crafting Item, Quality & Location];
        E --> F[Clicks "Calculate Profit" Button];
        F -- Frontend Request --> G[Backend: Fetches Market Data from Albion Online Data Project API];
        G --> H[Backend: Calculates Profit];
        H -- JSON Response --> I[Views Instant Profit Display];
    end
```

````

## Expanded UX Vision: Version 1.0 (Full Automation & Refinement)

Building on the MVP, Version 1.0 will significantly expand KoryenAlbCraft, making it an indispensable tool for mastering the _Albion Online_ economy.

-   **Comprehensive Profit Calculation**: Users will be able to calculate profits for a **wide range of crafting items and all qualities** (e.g., Tier 4.0 to Tier 8.4 materials) across **multiple cities simultaneously**.
-   **Dynamic Recipe Management**: The UX will allow users to **easily select or input crafting recipes**, including precise material quantities, tax rates, and specific return rates for different crafting stations and cities.
-   **Market Arbitrage Identification**: The tool will identify **profitable "flip" opportunities** by comparing buy and sell orders across different cities, similar to other market tools but integrated with crafting. This directly addresses the need for players to quickly identify price differences to make a profit.
-   **Real-time Market Insights**: The interface will provide **up-to-date pricing data**, including minimum and maximum buy/sell prices, and the last time prices were updated, ensuring the freshest information.
-   **User-Friendly Interface**: The entire application will feature an intuitive web interface designed for easy navigation, selection, and clear display of all calculations and market data.

This phased approach embodies Phillip Choi's "build while learning" principle by starting with a core, solvable problem (MVP) and then iteratively adding complexity and features in subsequent phases. By focusing on immediate implementation and addressing real user needs, KoryenAlbCraft aims to provide significant value and empower players to overcome economic challenges in _Albion Online_.

```
```
````
