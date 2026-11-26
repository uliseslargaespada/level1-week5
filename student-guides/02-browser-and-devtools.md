# Open a webpage and inspect it with DevTools

**Goal:** know which tool runs your code, inspect the page you actually opened, and test a small interaction at more than one width.

| File or task                          | Where it runs                    | Where to look for results                    |
| ------------------------------------- | -------------------------------- | -------------------------------------------- |
| `day-21/hello.js`                   | Node in the terminal             | Terminal output                              |
| `day-22/index.html`                 | Your browser                     | Visible webpage and DevTools                 |
| `day-23/script.js` linked from HTML | Browser, after it reads the page | Visible paragraph/button and browser Console |
| Git commands                          | Terminal in repository root      | Git's status, diff, log, and push messages   |

Browser JavaScript has access to `document`, which represents the webpage. A normal Node script has no webpage document. If `node script.js` reports `document is not defined`, open the HTML page in a browser instead.

## Local preview: Windows and macOS

1. Save your HTML, CSS, and JavaScript in VS Code. Find the **exact** `index.html` you want to test.
2. On Windows, reveal it in File Explorer; on macOS, reveal it in Finder. Open that HTML file using Chrome, Edge, or Firefox. You can also use your browser's **Open File** action and select it.
3. Read the address bar. A local file address begins with `file://`. Its folder should end with the exercise you intended, such as `daily-exercises/day-23/index.html`.
4. Check the visible title and content. If you opened Day 22 while editing Day 23, refreshing will never show the correct change.
5. After every code change, **save in VS Code**, return to the browser, and refresh. This week's plain local files do not automatically refresh.
6. Keep both windows available so you can compare the saved source with the rendered result.

You do not need an extension, bundler, or deployment. Relative paths such as `href="style.css"` and `src="script.js"` work because these files live alongside the HTML file. Keep spelling and capitalization consistent.

## Check that HTML links its resources

In the HTML head, the resource references for a browser task look like:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

The CSS link applies that file's styles. The script path loads that JavaScript file. On an external classic script, `defer` lets the browser finish parsing the document before running the script. That matters when the script selects the paragraph and button.

Do not add the script tag to Day 22 if its assignment asks for an HTML/CSS page only. Keep each task's files together. An HTML-looking response from a wrong path is not a successful JavaScript load.

## Open DevTools

Use the browser menu's **Developer tools** action, or right-click part of the webpage and choose **Inspect**. This avoids depending on a keyboard shortcut that may differ by operating system.

- **Elements** (or **Inspector**) shows the current document and CSS.
- **Styles** and **Computed** let you investigate which declarations affect a selected element.
- **Console** reports browser JavaScript messages and errors.
- The **device toolbar** or **responsive design mode** helps set a narrow viewport.

A DevTools change is an experiment in the open page. It usually disappears on refresh. Make a wanted change in VS Code, save, and refresh to confirm that the actual source implements it.

## Inspect one CSS rule

1. Inspect your main content container.
2. Find the rule controlling its width, padding, or spacing.
3. Temporarily change one value in DevTools and observe the result.
4. If the change is useful, implement it in `style.css`.
5. Save, refresh, and confirm the result persists.
6. Record the element, property, before/after observation, and saved change in the task's `TESTS.md`.

Use the Console for JavaScript evidence. A CSS rule that is crossed out in Styles is different from a JavaScript exception.

## Test 320 pixels and 1280 pixels

In responsive mode, set the page's **CSS viewport width** to 320 px. Then test at 1280 px. If the device toolbar asks for height too, 800 px is a useful starting height.

At each width check:

1. Can you read all the content without horizontal scrolling?
2. Do sections wrap and keep comfortable spacing?
3. Does the button's label fit?
4. Is content still available when you scroll vertically?

A `max-width` on the content container and flexible wrapping can be enough for this week's small page. A media query is an optional improvement if your layout needs one. Test the result rather than judging responsiveness by whether a media query exists.

## Test the button without a mouse

1. Reload the page to reset its starting state.
2. Press **Tab** until the button receives focus. You should be able to see which control is selected.
3. Press **Enter** to activate it and inspect the changed paragraph.
4. Activate it again with **Space**, then inspect the restored state.
5. Check the browser Console for errors related to your page.

A native `<button type="button">` supports keyboard activation. Keep its focus indication visible. The demo adds `aria-live="polite"` to the changing paragraph so assistive technologies can announce updates. This attribute does not make the click handler work or replace the paragraph's visible text.

## Codespaces preview

A Codespace runs on a remote machine. Opening a path from that machine as a local `file://` address will not preview it on your computer.

From the repository root in the Codespace terminal, check Python:

```sh
python3 --version
```

If available, start the standard-library static file server:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Keep that terminal running. In the **Ports** panel, confirm port 8000 is forwarded, keep its visibility **private**, and use **Open in Browser**. At the end of the forwarded URL, open the path for your task:

```text
/daily-exercises/day-22/index.html
/daily-exercises/day-23/index.html
/mini-project/index.html
```

For example, choose the Day 23 path when editing that folder. Refresh after saving. If Python is unavailable or the forwarded page will not open, ask a TA for the approved static preview route. You do not need to install a framework to serve these files.

Press **Ctrl+C** in the serving terminal when finished. Commit and push from a separate terminal, then stop your Codespace. A private forwarded preview is a development tool. Your Moodle submission remains the **public repository URL**.

## Troubleshooting

| Observation                            | Next check                                                                  |
| -------------------------------------- | --------------------------------------------------------------------------- |
| My new text is absent                  | Save the source, check the browser path, and refresh.                       |
| My CSS is missing                      | Compare the HTML href with the actual CSS filename and folder.              |
| The button does nothing                | Read the Console; check the script path and listener registration.          |
| A selector result is null              | Match the exact ID and check that the script runs after the elements exist. |
| The change happens before I click      | Pass the handler function to the listener without calling it there.         |
| DevTools edits disappear               | Apply the intended change to the saved source in VS Code.                   |
| Only the Codespaces root listing opens | Add the actual exercise or mini-project HTML path.                          |

Write the inputs/actions, expected result, actual result, and any fix into the provided test table. Use a description you observed; do not mark a test passed before you perform it.

References: [MDN DevTools](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), [external scripts](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script), [responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), [semantic HTML and keyboard access](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML), [Codespaces port forwarding](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace).
