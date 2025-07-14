# Deliver 1.1 - draft 1 - KoryenAlbCraft: Albion Online Profit Calculator Project Plan

Based on your query and the provided sources, this document details a project plan for "KoryenAlbCraft," a web application designed to solve the Albion Online crafting profit calculation problem described in #bounglive633. The project will initially deliver a Minimum Viable Product (MVP) and then expand to a more comprehensive Version 1.

## Project: KoryenAlbCraft

This document outlines the development of **KoryenAlbCraft**, a web application designed to **simplify and optimize crafting and market trading in Albion Online**. It draws inspiration from the Albion Online Tools website and leverages the Albion Online Data Project for real-time market information.

### Part 1: For the Crafter (User Guide)

**The Problem We're Solving**
As an Albion Online player and crafter, you understand the frustration of constantly checking market prices and manually calculating profits in a spreadsheet. This process is incredibly **time-consuming**, often taking over an hour just to update prices across different items and cities. If prices change during this manual update, your calculations can become **outdated, leading to potential losses** when crafting or trading. Existing tools might show market prices, but they often lack the detailed, real-time profit calculations specific to crafting that you need.

**How KoryenAlbCraft Will Help You**
KoryenAlbCraft aims to **eliminate this manual effort** by providing a **fast, automated, and accurate way to calculate crafting profits** and identify profitable trading opportunities directly through a web browser. Imagine knowing instantly whether crafting a specific item will be profitable, without spending hours on data entry. This tool is designed to empower you to make smarter, quicker decisions in Albion's dynamic economy.

**Version 0.1 (MVP) - What You'll Get First**
Our initial version, the MVP (Minimum Viable Product), focuses on addressing the most critical pain point immediately. It will be delivered to you (Koryen) for testing.

With KoryenAlbCraft v0.1, you will be able to:

-   **Select a specific crafting item** (e.g., "Buttler Leather") and a specific city/location within Albion Online.
-   The application will **automatically fetch the latest market prices** for that crafted item and its required raw materials from our real-time data source.
-   It will then **calculate the profit** you would make by crafting that item, taking into account crafting costs, taxes (like the 6.5% market tax), and return rates.
-   You will **see the profit displayed instantly**, allowing you to quickly determine if crafting is worthwhile for that single item.

This initial release will provide a direct solution to the problem of manual profit calculation for a single item, paving the way for more comprehensive features.

**Version 1.0 - The Full Vision**
Building on the MVP, Version 1.0 will expand significantly to almost completely solve the crafting and market analysis problem, making KoryenAlbCraft an indispensable tool:

-   **Comprehensive Profit Calculation:** Calculate profits for a **wide range of crafting items and all qualities** (e.g., Tier 4.0 to Tier 8.4 materials) across **multiple cities simultaneously**.
-   **Dynamic Recipe Management:** Easily **select or input crafting recipes**, including precise material quantities, tax rates, and specific return rates for different crafting stations and cities.
-   **Market Arbitrage Identification:** Identify **profitable "flip" opportunities** by comparing buy and sell orders across different cities, similar to other market tools but integrated with crafting.
-   **Real-time Market Insights:** Provide **up-to-date pricing data**, including minimum and maximum buy/sell prices, and the last time prices were updated, ensuring you always have the freshest information.
-   **User-Friendly Interface:** An intuitive web interface designed for easy navigation, selection, and clear display of all calculations and market data.
-   **Economic Impact:** Our goal is for this tool to be so effective that it could potentially **"shake the market"** by allowing players to quickly identify and act on profit opportunities.

KoryenAlbCraft will be a powerful, user-friendly companion for anyone looking to master the economy of Albion Online.

### Part 2: For the Developer (Technical Project Guide)

This section outlines the technical requirements, architecture, and phased development plan for KoryenAlbCraft, a web application designed to replicate and enhance the crafting profit calculation functionality initially handled manually in an Excel sheet as described in #bounglive633. The goal is to provide a robust, scalable, and user-friendly platform, drawing architectural inspiration from `_architecture.md` and following the structured development approach from `_roadmap.md` and Phillip Choi's advice.

**1. Problem Analysis & Core Requirements (from #bounglive633)**

-   **Manual Data Collection:** The current process involves manually checking in-game prices across various cities and inputting them into an Excel sheet. This is highly inefficient.
-   **Calculation Complexity:** Crafting profit involves detailed calculations including material costs, item sell prices, market tax (6.5%), and return rates (which vary by city and focus).
-   **API Rate Limits:** Direct data fetching attempts via Google Sheets' IMPORTXML/IMPORTHTML hit API rate limits (180 requests/minute from Albion Online Data Project) requiring consolidated requests.
-   **Data Structure:** The Albion Online Data Project API provides raw JSON data with specific item codes (e.g., T4_BAG_LEATHER) and quality levels, which need to be correctly parsed and mapped to user-friendly names.
-   **Scalability:** The user desires to scale calculations to multiple items and locations rapidly.

**2. Proposed Solution & Architecture**
KoryenAlbCraft will be built as a **Next.js web application**, utilizing its App Router for both frontend and backend (API Routes) capabilities. This allows for a **feature-first and atomic design** approach, similar to `_architecture.md`.

-   **Frontend (UI Primitives & Feature Modules):**

    -   **Technology:** React, TypeScript, Tailwind CSS, shadcn/ui for UI components.
    -   **Components:**
        -   **UI Primitives (Atoms):** Basic building blocks like Button, Input, Select, Table.
        -   **Feature Modules (Molecules & Organisms):**
            -   `CraftingInputForm.tsx`: Encapsulates user inputs for selecting crafting item, desired quality, and location. Manages form state.
            -   `ProfitDisplay.tsx`: Renders the calculated profit, material breakdown, and other relevant market data in a clear, tabular format.
            -   Potentially `LocationSelector.tsx` for easy city selection.
    -   **User Flow (MVP):** Lands on Main App Interface -> Inputs Item/Quality/Location -> Clicks Calculate -> Views Profit (Adapted from `uxmapping-logic- Mermaid Chart-2025-07-08-110030.md`).

-   **Backend (Services Layer & Application/API Layer):**
    -   **Technology:** Node.js (via Next.js API Routes), TypeScript.
    -   **Services Layer (`/services/`):**
        -   `albion-data.ts`: This is the **critical module** responsible for all external communication with the Albion Online Data Project API.
            -   It will handle **consolidated requests** for multiple item IDs and locations to circumvent API rate limits.
            -   It will parse the incoming JSON data from the API, extracting relevant prices (sell_price_min, buy_price_max, etc.) and timestamps.
            -   This module will also manage the mapping between in-game item names and the server's internal item IDs (e.g., by referencing an item.txt or similar mapping data).
            -   Potentially handle data caching to further reduce API calls and improve performance.
    -   **Application/API Layer (`/api/`):**
        -   `/api/crafting-profit/route.ts`: This **secure backend endpoint** orchestrates the core feature logic.
            -   Receives user input (item, quality, location) from the frontend.
            -   Calls `albion-data.ts` to fetch required market data for both the crafted item and its raw materials.
            -   Performs the profit calculation: (Selling Price \* (1 - Market Tax Rate)) - Sum(Material Costs). This calculation will also account for return rates and potentially focus bonuses.
            -   Returns a structured JSON response to the frontend containing the calculated profit, detailed prices, and any error messages.

**3. Tech Stack**

-   **Framework:** Next.js (with App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Version Control:** Git / GitHub
-   **Deployment:** Vercel
-   **Data Source:** The Albion Online Data Project API (via NATS topics for real-time or daily database exports for batch processing, preferably NATS for desired real-time updates).

**4. Phased Development Plan**
Adopting the "6 months or less" roadmap philosophy, we'll prioritize rapid iteration and "build while learning".

**Phase 1: MVP (Version 0.1) - "Core Logic & Initial Delivery"**

-   **Goal:** Deliver 1-2 most useful features (single-item profit calculation for Koryen to test).
-   **Timeline:** Approximately Week 3-4 from the `_roadmap.md`.
-   **Tasks:**
    -   **Project Setup:** Initialize Next.js project, configure Git/GitHub, deploy boilerplate to Vercel.
    -   **Basic UI Development:** Build the minimal page layout (`page.tsx`) with input fields for item selection (e.g., a simple text input for item name/ID), quality, and a single target city/location, plus a "Calculate Profit" button and a display area for the result.
    -   **`albion-data.ts` (MVP):**
        -   Implement a function to fetch data for a **single item ID at a specific location** from the Albion Online Data Project API. This will start with basic HTTP fetch requests to `albion-online-data.com` API endpoints (like those used in Bigboung's Excel formulas).
        -   Focus on correctly parsing the `sell_price_min` and `buy_price_max` from the JSON response.
        -   _Initial Item ID Mapping:_ Hardcode or use a small, simple lookup for one specific item (e.g., T4_BAG_LEATHER and its raw materials).
    -   **`/api/crafting-profit/route.ts` (MVP):**
        -   Create the API endpoint to receive item, quality, and location from the frontend.
        -   **Hardcode a specific crafting recipe** (e.g., the "Buttler Leather" recipe and its 16 iron ores, 8 leathers) including fixed tax and return rates for initial testing.
        -   Call the `albion-data.ts` service to get the necessary prices.
        -   Perform the core profit calculation: (Item_Sell_Price \* (1 - Tax_Rate)) - SUM(Material_Costs). This calculation will also account for return rates and potentially focus bonuses.
        -   Return the calculated profit to the frontend.
    -   **Frontend-Backend Integration:** Connect the `CraftingInputForm` to the `/api/crafting-profit` endpoint using fetch. Implement basic loading states and error messages.
    -   **Testing:** Thoroughly test the end-to-end flow for calculating profit for the chosen single item.
    -   **Delivery to Koryen:** Deploy v0.1 to Vercel for Koryen's initial testing and feedback.

**Phase 2: Version 1.0 - "Comprehensive Automation & Refinement"**

-   **Goal:** Address the full scope of the problem from #bounglive633, making the tool highly functional and efficient.
-   **Tasks:**
    -   **Advanced `albion-data.ts`:**
        -   Implement **consolidated API requests** (e.g., comma-separated item IDs and locations in a single API call) to efficiently fetch data for multiple items/locations/qualities, directly addressing the rate limit issue.
        -   Develop a robust **item ID mapping solution**, perhaps by integrating with an external database or a comprehensive JSON file derived from the Albion Data Project's `item.txt`.
    -   **Recipe Management System:** Create a backend data structure and frontend interface to allow **dynamic input and storage of multiple crafting recipes**, including all required materials, quantities, specific return rates per city, and focus bonuses.
        -   Consider fetching generic crafting recipes if available from the Albion Data Project or manually curating them.
    -   **Expanded UI & Calculations:**
        -   Enhance `CraftingInputForm` to allow selection of **multiple items and cities** for comparison.
        -   Develop `ProfitDisplay` to show **comparative profit data across various items, qualities, and locations** in a clear, sortable table.
        -   Implement **percentage profit calculation**.
        -   Add functionality for **arbitrage (market flipping)** analysis, similar to Albion Online Tools' Market Flipper.
    -   **Performance Optimization:** Implement client-side and server-side caching strategies to minimize redundant API calls and speed up data retrieval.
    -   **Error Handling & User Feedback:** Comprehensive error messages for API failures, outdated data, or invalid inputs.
    -   **User Authentication (Optional/Future):** If the tool is intended for a closed community or for storing personalized recipes, integrate Auth.js with Google OAuth as demonstrated in `_architecture.md`. This would make it exclusive to "our community" as mentioned.
    -   **"Build in Public" Strategy:** Maintain a public GitHub repository and regularly share progress updates on platforms like LinkedIn or Twitter to build reputation and accountability.

By following this phased approach, KoryenAlbCraft will effectively transform a tedious, error-prone manual process into a streamlined, real-time, and powerful economic tool for Albion Online players.

### Sources

https://notebooklm.google.com/notebook/e60e4280-203e-4ecf-8d76-6e227be666ee?_gl=1*piu0ub*_ga*NzA5NzkwOTAwLjE3NDg3NjY3OTA.*_ga_W0LDH41ZCB*czE3NTI0NjYzODgkbzIkZzAkdDE3NTI0NjYzODgkajYwJGwwJGgw
