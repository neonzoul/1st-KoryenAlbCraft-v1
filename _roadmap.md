# <font color=yellow> ----week 1-2---- </font>

[✔️] Setup WorkSpace.
[✔️] Allocate time [all day (after week 3)].
[✔️] Draft - brainstorm.md define Product Design **Version1.0**.
[✔️] best practice build MVP (v0.1) with conditions.

    - Can easy to build also easy to maintenance and scalable.
    - Security concern.
    - Must have AI Agent API.
    - Builder just me and AI.
    - Build times 6-7hrs/day-> 6days/week , holiday 3 days a month.
    - Cost of MVP 3,000/Month.
    - Deadline Build 2weeks (can late to 3weeks).
    - Don't have to use Go if have better solution for the conditions.
    - Profile Management (if possible)
    - Potential to sale in price 700THB that can use
    - Vibe code are acceptable after get Logic flow, Architecture, Component detail, To-do list.

[✔️] Tech-Stack.
[✔️] UX mapping design for mvp (include png chart for Tempo Labs prototyping.).
[✔️] Implement week 3 in document to roadmap.
[✔️] Create Phased Development Plan (from Before start 3. including implement Evidence baed learing techniques in week 3-4)
[✔️] Logic flow. (Mermaid code.)
[✔️] Data Structure. (if needded.)
[✔️] Finish Before start (optional)

# <font color = yellow> ----week 3-4 build while learning---- </font>

## Before start.

1. Sketch out exactly what my app would do
   [✔️] Prototyping V0.1 (skip have to craft very tide prompt.)
   [✔️] Prompt craft mock up 1 situation.
   [✔️] Tempo Labs prototype. (acc : boldgmail)
2. Break it into manageable components
   [✔️] Component Architecture mapping, document, Folder Structure.
3. Learn precisely what I need to build each piece(Learn, then implement immediately)
   ([✔️]Create Phased Development Plan complete in week 2)
   ex. start by mapping the user expretirnce and data flow. then can learn what needed to create each component from user authentication to data visualization. // "How should I structure this database to scale efficiently?" // "What's the most intuitive user flow for this feature?" // "How do I optimize performance for this calculation?"

Evidence baed learing techniques

1. use Pomodoro
2. Practice active recall instead of passive re-reading.
3. Implement spaced repetition for key concepts.
4. Teach what I learn to deepen understanding.

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

<!-- Here is a roadmap for KoryenAlbCraft project, formatted like a `_roadmap.md` file, incorporating details from "Deliver 1.1" plan and Phillip Choi's "What I would do to break into tech in 6 months or less in 2025" strategy, starting from Day 1 of Week 3. -->

### **----Week 3-4 Build While Learning----**

#### Before Start

1.  **Sketch out exactly what your app would do**: For KoryenAlbCraft v0.1 (MVP), a user should be able to select a specific crafting item and city, and the application will automatically fetch prices and calculate profit, displaying it instantly. This initial version provides a direct solution to the problem of manual profit calculation for a single item.

2.  **Break it into manageable components**: This includes UI Primitives (like Button, Input, Select, Table) and Feature Modules (like `CraftingInputForm.tsx`, `ProfitDisplay.tsx`, and `LocationSelector.tsx`).

3.  **Learn precisely what you need to build each piece (Learn, then Implement immediately)**: Your learning strategy will involve sketching your app's functionality, breaking it into components, and then learning only what's necessary to build each part, forcing real-world problem-solving decisions. This approach develops problem-solving muscles and makes you valuable to employers.

#### Evidence-Based Learning Techniques

To optimize your learning during this intensive sprint, consistently apply these techniques:

-   **Pomodoro Technique**: Use 25-minute focus sessions with 5-minute breaks.
-   **Practice Active Recall**: Instead of passively rereading, actively retrieve information from memory.
-   **Implement Spaced Repetition**: Revisit key concepts at increasing intervals to strengthen retention.
-   **Teach What You Learn**: Explain concepts to others (even if it's just to yourself or an AI) to deepen your understanding. This is a high-intensity sprint, with each day involving a "Learn, then Implement" cycle.

#### Week 3: Foundation, UI & Authentication Sprint

**Mission**: Go from an empty folder to a deployed application where a user can (optionally, for future v1.0) log in with Google and see the main interface for KoryenAlbCraft.

-   **Days 1-2: Project & UI Scaffolding**

    -   Day 1
    -   [✔️] **Create Repo :** initailize project Github repo. - Copilot-create files and folder from structure document.

        -   [✔️]Copilot GPT-4.1 : Create Files and Folder by context \_dev-Document and file-folder-structure.md
        -   [✔️] QC : re-check created files and folders.
        -   [✔️] logbook : create logbook for dairy review.
        -   [] **Ceremory:** commit "hello, world."

    -   **Learn**: Next.js App Router basics.
    -   **Implement**: Initialize your Next.js project, configure Git/GitHub, and deploy the boilerplate to Vercel.
    -   **Learn**: shadcn/ui installation and usage.
    -   **Implement**: Initialize shadcn/ui and build the basic page layout for KoryenAlbCraft, including a header and main content area.
        [] **Commit**: `git commit -m "feat: Initial KoryenAlbCraft scaffold and UI layout"`

-   **Days 3-4: Authentication Implementation (Optional for MVP, but good foundational practice)**

    -   **Learn**: OAuth2 basics and how to create credentials in Google Cloud.
    -   **Implement**: Create a Google Cloud project and obtain Client ID/Secret.
    -   **Learn**: Auth.js v5 "Getting Started" and "Google Provider" documentation.
    -   **Implement**: Integrate Auth.js into your project. Set up environment variables locally (`.env.local`) and on Vercel. User authentication can make the tool exclusive to your community.
    -   **Commit**: `git commit -m "feat: Implement Google authentication (foundational for future features)"`

-   **Days 5-6: Core KoryenAlbCraft Interface Development**
    -   **Learn**: React `useState` and form handling.
    -   **Implement**: Using shadcn/ui components, build the core input fields for **item selection, quality, and a single target city/location**. Add a **"Calculate Profit" button** and a display area for the result.
    -   **Implement**: Manage the input's value using `useState`.
    -   **Implement**: Conditionally show the main interface only to logged-in users (if authentication was implemented).
    -   **Commit**: `git commit -m "feat: Build core KoryenAlbCraft input and display interface"`

###### **End of Week 3 Review**

-   **Goal**: Solidify this week's foundational knowledge.
-   **Action**: From memory, answer these questions:
    1.  "Draw the flow of a user interacting with the KoryenAlbCraft input form. What are the key UI components like `CraftingInputForm.tsx` and `ProfitDisplay.tsx`?"
    2.  "What is the purpose of environment variables (like in `.env.local`) for a project like KoryenAlbCraft, especially when dealing with external APIs?"
    3.  "What is the main benefit of using a component library like shadcn/ui for this project?"

---

#### Week 4: Core Logic, Integration & Finalization Sprint

**Mission**: To build the application's "brain" for profit calculation, connect it to the UI, and finalize the MVP (Version 0.1) for testing.

-   **Days 7-9: Crafting Profit API Route & Albion Data Project Integration (MVP)**

    -   **Learn**: Next.js Route Handlers for backend logic.
    -   **Implement**: Create the `/api/crafting-profit/route.ts` API endpoint.
    -   **Learn**: How to call a third-party API (specifically the Albion Online Data Project API) from a Node.js environment, focusing on basic HTTP fetch requests to `albion-online-data.com` endpoints. The Albion Online Data Project collects real-time market information from players who run a client that monitors network traffic in-game.
    -   **Implement**: Create `albion-data.ts` within the `/services/` layer. Implement a function to fetch data for a **single item ID at a specific location** from the Albion Online Data Project API, correctly parsing `sell_price_min` and `buy_price_max` from the JSON response. This is the **critical module** for external communication.
    -   **Implement**: Integrate the `albion-data.ts` service call into your `/api/crafting-profit/route.ts` endpoint.
    -   **Commit**: `git commit -m "feat: Build API endpoint with basic Albion Data Project integration"`

-   **Days 10-12: Core Profit Calculation & Frontend Connection**

    -   **Implement**: In `/api/crafting-profit/route.ts`, **hardcode a specific crafting recipe** (e.g., "Buttler Leather" using 16 iron ores and 8 leathers). Include fixed tax (like 6.5% market tax) and return rates for initial testing.
    -   **Perform the core profit calculation**: `(Selling Price * (1 - Market Tax Rate)) - SUM(Material_Costs)`, accounting for return rates and potentially focus bonuses.
    -   **Return a structured JSON response** to the frontend containing the calculated profit, detailed prices, and any error messages.
    -   **Learn**: How to use `fetch` in a client component to `POST` to your API route.
    -   **Implement**: Connect the `CraftingInputForm` (frontend) to the `/api/crafting-profit` endpoint using `fetch`.
    -   **Commit**: `git commit -m "feat: Implement core profit calculation and connect UI to backend"`

-   **Days 13-14: Finalization & Testing (MVP v0.1)**
    -   **Implement**: Add **loading states** (e.g., a spinner on the button) and **confirmation/error messages** for the user. For example, showing "Loading..." while fetching prices or an error if the API limit is hit (Albion Data Project has a limit of 180 requests/minute).
    -   **Implement**: Perform at least 5 full, end-to-end tests of the entire flow: Input Item/Quality/Location -> Calculate -> View Profit.
    -   **Implement**: Fix any bugs or UI inconsistencies.
    -   **Action**: Prepare your "Launch Day" notes for Koryen's initial testing.
    -   **Commit**: `git commit -m "chore: Finalize and test KoryenAlbCraft v0.1 MVP"`

###### **End of Week 4 Review**

-   **Goal**: Solidify this week's logic and revisit last week's critical concepts.
-   **Action**: From memory, answer these questions:
    1.  "How does KoryenAlbCraft handle fetching market data from the Albion Online Data Project API, and why is the `albion-data.ts` module critical?"
    2.  "What are the three main steps happening in the `/api/crafting-profit/route.ts` endpoint?"
    3.  **(Spaced Repetition)** "Explain the purpose of UI Primitives (Atoms) and Feature Modules (Molecules/Organisms) in KoryenAlbCraft's architecture."

---

# <font color = yellow> ----week 5 Ship---- </font>

After completing Week 4, your KoryenAlbCraft MVP (Version 0.1) should be ready for initial delivery to Koryen for testing and feedback. This aligns with the "Build in Public" strategy (around week 8 of the broader 6-month plan) by having a minimal working product to share.

# <font color = yellow> ----Week 6+ Expansion (Towards Version 1.0)---- </font>

Future development will focus on scaling and refining KoryenAlbCraft to address the full scope of the crafting and market analysis problem:

-   **Advanced Albion Data Project Integration**: Implement **consolidated API requests** (e.g., comma-separated item IDs and locations in a single API call) to efficiently fetch data for multiple items, locations, and qualities, directly addressing the API rate limit issue (180 requests/minute). Develop a robust **item ID mapping solution**.
-   **Comprehensive Profit Calculation**: Calculate profits for a **wide range of crafting items and all qualities** across **multiple cities simultaneously**.
-   **Dynamic Recipe Management**: Create a system for **dynamic input and storage of multiple crafting recipes**, including material quantities, tax rates, specific return rates, and focus bonuses.
-   **Market Arbitrage Identification**: Identify **profitable "flip" opportunities** by comparing buy and sell orders across different cities, similar to existing tools like Albion Online Tools' Market Flipper.
-   **Performance Optimization**: Implement caching strategies to minimize redundant API calls and speed up data retrieval.
-   **User Authentication (If applicable)**: Integrate Auth.js with Google OAuth if the tool is intended for a closed community or for storing personalized recipes. This would align with the idea of keeping the tool exclusive to "our community".
-   **Build in Public**: Continue documenting your journey, sharing progress, challenges, and breakthroughs on platforms like GitHub and LinkedIn. This builds your reputation as a problem-solver and creates accountability.
-   **Accelerate with Guided Mentorship**: Around Week 12 (or as needed), consider finding a mentor to avoid costly detours, gain insider knowledge, ensure accountability, and provide psychological support, significantly compressing your learning curve.

By following this phased approach, KoryenAlbCraft will effectively transform a tedious, error-prone manual process into a streamlined, real-time, and powerful economic tool for Albion Online players, showcasing your problem-solving skills to potential employers.
