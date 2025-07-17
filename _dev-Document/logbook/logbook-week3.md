## <font color = #895129> Day1 25-07-14 </font>

### Title : Complete week 2 in 3hr. / commit hello world.

### Log :

-   brainstorm requrement complete week2 in 3hours with Notebook llm.
    -   \_\_v00 , genesis of project.
    -   provide project context, painpoint form #bounglive663 in youtube, previous project context, architecture information to notebook LLM.
        [✔️] Setup WorkSpace.
        [✔️] Allocate time [all day (after week 3)].
        [✔️] Draft - brainstorm.md define Product Design **Version1.0**.
        [✔️] best practice build MVP (v0.1) with conditions.
        [✔️] Data Structure, Architechture. (if needded.)
        [✔️] **Create Repo :** initailize project Github repo. - Copilot-create files and folder from structure document.
        [✔️]Copilot GPT-4.1 : Create Files and Folder by context \_dev-Document and file-folder-structure.md
        [✔️] QC : re-check created files and folders.
        [✔️] logbook : create logbook for dairy review.
        [✔️] **Ceremory:** commit "hello, world."

### Key Story : Complete Blueprint within 3 hours

```
As the morning filters through here in Songkhla, Start at 8AM after exercise and take some energy from Sun.
The realuty of today's progress in sinking in. This morning bagan with a sudden pivot.
.
A Youtube stream last night from #Bouanglive633 crystallized a problem that felt more immidiate, a pain point I was instantly more passionate and enjoy about solving.
.
I knew it was the absolute last chance to change course; with Week 3 marking the start of pure execution, the window for planning was closing fast. It was now or never.

This decision meant compressing two weeks of foundational planning for the new project, KoryenAlbCraft,
into a sigle, intense session to keep the timeline intact. The workflow was a perfect symphony of human direction and AI execution.
.
First, I fed all the high-level context--the new pain point, architectural notes from past projects, the core vision--into the Notebook LLM, which acted as my "Solutions Achitect," generating the complete project blueprint.

Then, I handed that blueprint to GitHub Copilot. Acting as the "Developer," it flawlessly executed the plan, scaffolding the entire project skeleton in minutes.
.
This hyper-efficiant process allowed me to not only complete the two weeks of planning but also finish today's original Day 1 tasks.
.
the final, ceremonaial commit, "hello, world", was the declaration that the gambit paid off.
" The project is born, and we are perdectly on schedule.


```

---

<!-- ///////////////////////////////////////////////////////////////////////////////////// -->

## <font color = #895129> Day2 25-07-15 </font>

### Title :

### Log :

-   Add "Consider - Review Stech stack for v1 (after deliver v0.1)
    -   To review maybe can replace Vercel to Docker and DigitalOcean Droplet for scalable and cost efficiancy.
-   **Learn**
    -   use Notbooklm to define learning scope for today.
    -   Provide to Gemini and learn with talking with Gemini2.5 pro
        -   Briefly review the `shadcn/ui` installation and usage documentation.
-   Setting VScode
    -   Theme, files&folders icon like Phil(Meterail Icon Theme)
-   **implement**- complete To-Do List:

    -   [✔️]Verify Local Setu:
        -   Open project terminal and run `npm install` to install all the necessary dependencies.
        -   commit "npm install"
        -   Run the development server with `npm run dev` to confirm the project works on your local machine.
    -   [✔️]Deploy to Vercel:
        -   Push your initial commit to your GitHub repository.
        -   create new email for dev part (mosspiece.dev@gmail.com)
        -   Go to your Vercel dashboard and import the GitHub repository to deploy it. This establishes your continuous deployment pipeline.
        -   Fixed Deploy error
    -   [✔️]Integrate UI Librar:
        -   Implemen: Initializeshadcn/u in project using its CLI command.
    -   [✔️]Build Basic Page Layout:
        -   Implemen using Git Copilot 3.5sonnet: Modify `/app/layout.tsx` to create the basic page structure. Add a simple header component and ensure the `children` prop is rendered within a `<main>` tag.
    -   [✔️]Commit Your Progres:
        -   Stage and commit all your changes with the planned message: `git commit -m "feat: Initial KoryenAlbCraft scaffold and UI layout"`

-   **Key learing**
    -   Deeply understand Vercel that is like automatic deploy method. (as Docker but completly auto from Github repo)
    -   Setting color theme in setting.json
    -   Fix Deploy error
        -   Vercel can't "run build"
        -   Why : route.ts file if emty
            -   (Typo GET -> Get) [Gemini 2.5 help to fine.]
        -   Solution : Gemini 2.5pro generate mockup code just for deploy. also edited Typo "GET".
    -   Fix shadcn/ui install error
        -   issue: can't find Next environment.
        -   Why: the project doesn't install Next to the project at first.
        -   Solution: Use temp-next-project directory to install Next project (use npx create-next-app@latest .) then copy package.json
            and Next.js environment from temp to Project directory. -> npm install (from package.json list.)

### Key Story : Complete Blueprint within 3 hours

```
As the morning light filters in here Songkhla, a quiet sense of satisfaction settles in.
Today wasn't just about ticking off boxes; it was about laying the badrock for **KoryenAlbCraft** with surgical precision, ensuring every piece clicked into place.

The day began by setting a clear learning scope with NotebookLM, then immediately diving into the implementation.
This whole process feels like a finely tuned machine, with me as the conductor and AI as my orchestra.
We swiftly navigated the initial project setup: $npm install humming along, then a quick $npm run dev to comfirm local vitality.

The real test cam with deployment. Vercel, in all its automated glory, was the next frontier.
Pushing to GitHub, setting up the pipeline - it almost felt too easy.
Until, of course, it wasn't. A crytic deployment error halted progress. But this is where the collaboration truly shone: Gemini
2.5Pro instantly pinpointed the culprit (an empty route.ts file and a sneaky typo, 'Get' instead of 'GET'). With a generated mockup
fix from Gemini, the pipeline finally turned green. It was a stark reminder of Vercel's deep automation, transforming GitHub commits
directly into live deployments, almost like Docker but with an invisible hand.

Then came **shadcn/ui**. Another hiccup, this time a missing Next.js project, salvaging the core package.json and environment, and bringging them
back to inject life into KoryenAlbCraft's roots. This was the rapid problem-solving, the "build while learing" in action.

By day's end, the basic page layout was crafted with the effortless assistance of GitHub Copilot3.5sonnet.
Every piece of the initial scaffold was not just built, but verified, integrated, and then ceremoniously committed
with "feat: Initial KoryenAlbCraft scaffolf and UI layout."

The core foundation is now solid, the continuous deployment pipeline is humming, and the immediate challenges have been overcome.
The thought of migrating from Vercel to Docker and DigitalOcean for v1 is already sparking ideas -- always optimizing for scalability and cost efficiency.
It's a relentless drive to build something truly robust.

---
author : Gemini2.5flash | score 2.4/5 | comment - some word picking., good for compose content.
source : Logbook 25-07-15
```

---

<!-- ///////////////////////////////////////////////////////////////////////////////////// -->

## <font color = #895129> Day3 25-07-16 </font>

### Title :

### Log :

-   Create google cloud console (mosspiece.dev@)
-   Setting Payment method
-   create credentails from google for OAuth 2.0
-   setup GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to .env.local file.
-   re check .gitignore file.

---

<!-- ///////////////////////////////////////////////////////////////////////////////////// -->

## <font color = #895129> Day4 25-07-17 </font>

### Title :

### Log :

-   NotbookLm
-   Gemini
    -   Learn (sharp knowled that pre learned yester day)
    -   Create To-do
-   **Implement**
-   To-do lists.
    1. [✔️] Install Auth.js
    2. [✔️] Configure Secrets (.env.local)
        - generate AUTH_SECRET key.
    3. [✔️] Create the Main Auth.js Configuration
        - use Kiro-Sonnet 3.7 helping comment the code and commit message.
    4. [✔️] Create the API Route Handler
    5. [] Wrap App with SessionProvider
        - Kiro sonnet3.7 recheck : syntax, typo -> comment.
        - Got issue - SessionProvider cannot directly to root.
            - Kiro gave solution. -> use it to discuss (code style) with Gimini2.5 pro [solution and reason to use..writed in learn/keylearn_week3]
    6. [] Add Environment Variables to Vercel
    7. [] Commit Changes

---

<!-- ///////////////////////////////////////////////////////////////////////////////////// -->
