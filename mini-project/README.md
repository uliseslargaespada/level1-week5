
# TODO: Name your fictional workshop or event

This folder is Assignment 2, worth 5 points. Complete it independently using Week 5's taught concepts. It shares a repository with the three daily exercises, but it is a different page with its own content, code, tests, and explanation. Do not replace the daily exercises with this page.

## My plan

- Fictional event and intended visitor: TODO
- User story: As someone considering TODO, I want to switch between TODO and TODO so I can TODO.
- Exact initial summary message: TODO
- Exact preparation-details message: TODO

## Build checklist

1. Complete `index.html` with a meaningful document title, header/main/footer, one `h1`, and at least two useful sections with `h2` headings. Give the visitor enough information to understand your event.
2. Add a native `button` with `type="button"`, a readable action label, and a unique ID. Add a paragraph with its own unique ID and `aria-live="polite"`. Put your summary in this paragraph's initial HTML.
3. Keep the local stylesheet link. Link `script.js` as an external script using `defer` in the document head.
4. Complete `style.css` with readable typography, spacing, and a flexible layout. Around 320px wide the content must remain readable without horizontal scrolling. Keep keyboard focus visible on the button.
5. In `script.js`, select the button and paragraph using `document.querySelector`. Create a Boolean that means “details selected” and starts in the summary state.
6. Write a named function with one Boolean parameter that returns your selected message using `if/else`.
7. Register a `click` listener using `addEventListener`. In it, change the Boolean and update the paragraph's `textContent` with your function's return value.
8. Save and open this page in the browser. Confirm summary on load, details after one activation, and the same summary after the next activation. Check keyboard access, layout, and the browser Console.
9. Complete [TESTS.md](TESTS.md), then your explanation below. Review your changes, commit meaningful progress, push, and check that GitHub has the final files.

Keep the feature small. Forms, visitor input, arrays, external services, saved registrations, and deployment are not required.

## How to open and test my page

On a local computer, reveal `index.html` from VS Code in File Explorer/Finder and open it in a browser. Save source changes in VS Code and reload the browser. In Codespaces, use the approved forwarded preview and open `/mini-project/`.

TODO: Record the route you used and, if applicable, the command you used to start the preview. Include enough detail to reproduce the result, without private preview links or credentials.

## My explanation

- What my HTML provides: TODO
- What my CSS provides: TODO
- What my JavaScript provides: TODO
- My button ID, paragraph ID, Boolean variable, and function name: TODO
- One activation, traced from the event through the state change and return value to the visible message: TODO
- One specific decision or problem, and how I checked it: TODO
- Any unfinished work or assistance to acknowledge: TODO

## Final check

Replace TODOs with your own implementation and observations. Push the final files. Confirm that the root repository README links here. Assignment 2 is due **Sunday, November 29, 2026, at 10:59 p.m. CST (America/Tegucigalpa)**. Paste only your public repository's root URL into the separate Assignment 2 Moodle entry. Submit the same URL to Assignment 1 for its daily-exercises folder. Do not upload a ZIP, screenshot, or deployed-page link.
