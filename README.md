# Live Captions

Live Captions is an independent portfolio project exploring how live captions could support in-person conversations for Deaf and hard-of-hearing people with low vision. The current scaffold includes a React starter and an automated accessibility smoke test. Live transcription is planned.

I’m building this project to practice accessible design and development. Feedback from Deaf and hard-of-hearing people with low vision is still needed to validate the design.

## Local development

| Command                         | Purpose                                                  |
| ------------------------------- | -------------------------------------------------------- |
| npm ci                          | Install dependencies from the lockfile                   |
| npm run dev                     | Start the app for local development                      |
| npm run lint                    | Run ESLint                                               |
| npx playwright install chromium | Download the browser used by the tests                   |
| npm run test:browser            | Start Vite through Playwright and run the axe smoke test |
