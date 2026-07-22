# Developer Guidelines & Gemini AI Integration Rules

## Architecture Overview
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Primary AI Model:** Google Gemini 2.5 Flash (`@google/genai`)

## Commands
- `npm run dev` - Launches local development server
- `npm run build` - Builds production bundle
- `npm run lint` - Runs ESLint checks

## AI System & Coding Practices
- All AI API calls must pass through `@google/genai` in `lib/gemini.ts`.
- Backend routes live strictly inside `app/api/`.
- Maintain strict type safety using `lib/types.ts`.
- System prompts must strictly mandate warm, clear Bengali responses.
