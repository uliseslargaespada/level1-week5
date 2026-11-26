
# Day 23: A two-message interaction

Complete this separate page for Assignment 1. Use your own fictional activity and two useful messages.

## Steps

1. Complete the HTML title and page content in `index.html`.
2. Add a native `button` with `type="button"`, a readable action label, and a unique ID. Add a paragraph with a different unique ID and `aria-live="polite"`. Its initial HTML should contain your first message.
3. Link `script.js` as an external script with `defer` in the HTML head. Keep the `style.css` link and give the page readable spacing and a usable narrow layout.
4. In `script.js`, select your button and paragraph with `document.querySelector`. Declare a Boolean that tracks which message is selected.
5. Define a named function with one Boolean parameter. Use `if/else` to return the correct message string for each state. Returning a value and displaying a value are different jobs.
6. Attach a `click` listener with `addEventListener`. In it, switch the Boolean and assign the message function's returned value to the paragraph's `textContent`.
7. Save all files. Open this `index.html` in a browser, or `/day-23/` in the Codespaces forwarded preview. Do not try to run this DOM script with Node.
8. Predict and test initial text, one activation, and a second activation. The second activation must restore the exact initial message. Test the focused native button with Enter and Space. Inspect the browser Console for errors.
9. Complete [TESTS.md](TESTS.md) and the explanation below. Review Git changes, commit, push, and verify GitHub shows your final files.

## My explanation

- Fictional activity and why these two messages help a visitor: TODO
- My button ID and paragraph ID: TODO
- My Boolean variable and what each value means: TODO
- My function name and the parameter it receives: TODO
- Trace one activation from event to returned message to visible result: TODO
- What `defer` helps with in this page: TODO
- Any repair, retest, or unfinished part: TODO

## How I opened the page

TODO: Explain the local file route or the Codespaces preview command/path you actually used, without credentials or private preview links.
