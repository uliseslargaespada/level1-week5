# Week 5 study guide: from saved files to an interactive page

Use this guide after each class. Read the explanation, predict a small example, then check the answer. The examples use fictional content and are separate from your submitted mini-project.

This week has three live lessons. The two days off are available for optional review and finishing the two assignments, both due **November 29 at 10:59 p.m. CST**.

## 1. Know what each tool changes

A file is saved when the editor writes your changes to disk. Running or opening that file shows what those saved instructions do.

Git stages selected versions of files, then commits them into local history. Pushing sends commits to the remote repository. GitHub's repository page shows the remote version. These operations do different jobs.

| Situation | Correct next check |
| --- | --- |
| A file is edited but not saved | Save before running or refreshing. |
| Changes are visible locally but absent from GitHub | Check commit and push, then refresh the remote page. |
| A file changed after it was staged | Stage its new version if it belongs in the next commit. |
| Git status is clean | Check the latest commit on GitHub too; a local commit can still need pushing. |

**Predict:** You save a new paragraph, commit it, and forget to push. Will a grader reading GitHub see the paragraph?

**Answer:** The new commit exists locally. The grader sees the last version you pushed until you push the new commit.

### Reading the workflow

```sh
git status
git diff
git add daily-exercises/day-22/index.html
git diff --cached
git commit -m "Clarify the activity introduction"
git push
```

`status` summarizes tracked, untracked, staged, and unstaged changes. The ordinary diff shows unstaged changes to tracked files. The cached diff shows what is staged for the next commit. A commit message should explain the actual change. Use the detailed [Git guide](01-git-and-github.md) for the first-time setup.

**Predict:** Why might a newly created file appear in `git status` but not in ordinary `git diff`?

**Answer:** It is untracked. Once you stage it, its content appears in the cached diff. Do not assume an empty ordinary diff means there is nothing to review.

## 2. HTML describes content; CSS controls its presentation

A small information page can use a header, a main area, meaningful sections, and a footer. Use one clear h1 for this simple page, with h2 headings for its main sections. Use an anchor for navigation and a button for an action.

```html
<main>
  <h1>Fictional story club</h1>
  <section>
    <h2>What to expect</h2>
    <p>Explore a short story with beginner readers.</p>
  </section>
</main>
```

This excerpt belongs inside a complete HTML document. The full document also needs its doctype, language, head, charset, viewport metadata, title, and body. The title identifies the browser tab; the h1 introduces the page content.

### A flexible content area

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

main {
  max-width: 60rem;
  margin-inline: auto;
  padding: 1rem;
}
```

The content can fit a narrow viewport while remaining readable on a wide display. Padding creates room beside the text. The max-width limits the wide layout. Test both narrow and wide views; a number in a stylesheet cannot prove that all content fits.

**Predict:** Is a fixed width of 900 px a good default for a main area in a 320 px viewport?

**Answer:** It can make the page wider than the viewport. Use a flexible width with an appropriate maximum and inspect the actual result.

A basic focus rule can keep keyboard selection visible:

```css
button:focus-visible,
a:focus-visible {
  outline: 3px solid #17334a;
  outline-offset: 3px;
}
```

Choose colors that remain clearly distinguishable on the actual page background. Do not remove the browser's focus outline without providing another visible one.

## 3. Browser JavaScript can refer to page elements

The browser builds a document representation from HTML. That is the DOM. A script can select elements and change their text.

```html
<p id="notice" aria-live="polite">Welcome, readers.</p>
<button id="notice-button" type="button">Show a reminder</button>
```

With those elements in the page:

```js
const notice = document.querySelector("#notice");
const noticeButton = document.querySelector("#notice-button");
```

`#notice` is a CSS selector for the ID notice. The ID must match exactly and be unique in this document. A query that finds no match returns `null`.

The HTML head loads this browser script:

```html
<script src="script.js" defer></script>
```

For this external classic script, defer schedules execution after the document has been parsed. Without the elements available, selection can fail. The browser's Console helps you investigate a misspelled selector or wrong file path.

**Predict:** The HTML uses `id="notice-button"`, but JavaScript asks for `"#noticeButton"`. Will it select the button?

**Answer:** No. The names differ. Fix the spelling and capitalization to match; do not change unrelated code first.

## 4. Use an event listener to wait for an action

```js
function showReminder() {
  notice.textContent = "Bring one short story to share.";
}

noticeButton.addEventListener("click", showReminder);
```

The definition describes what to do. Registering the listener tells the browser which function to call when the button is activated. The function reference has no parentheses in this registration.

`textContent` replaces the selected element's textual content. Here the selected node is a paragraph reserved for the message. Keep the button as its own element.

**Predict:** What is different about `addEventListener("click", showReminder())`?

**Answer:** The parentheses call the function immediately and pass its returned value as the second argument. Our function returns no callback, so this does not install the intended click behavior. Pass `showReminder` instead.

The listener receives the browser's click event, including keyboard activation of a native button. You do not need a separate keyboard handler for this simple action.

## 5. Reuse a Boolean and a function return

This small study example alternates between a greeting and a reminder:

```js
let showingReminder = false;

function getNotice(isReminder) {
  if (isReminder) {
    return "Bring one short story to share.";
  }
  return "Welcome, readers.";
}

function handleNoticeClick() {
  showingReminder = !showingReminder;
  notice.textContent = getNotice(showingReminder);

  if (showingReminder) {
    noticeButton.textContent = "Show welcome";
  } else {
    noticeButton.textContent = "Show a reminder";
  }
}

notice.textContent = getNotice(showingReminder);
noticeButton.addEventListener("click", handleNoticeClick);
```

This excerpt uses the two element selections from section 3 and replaces the single-reminder handler from section 4. Use **one** listener for the toggle version; do not append both examples together.

- The Boolean starts false and represents which message should be shown.
- `!` changes false to true and true to false.
- `getNotice` receives the current Boolean and returns a string. This is the same parameter/argument/return idea used in Week 4.
- The caller assigns that returned string to the paragraph's text.
- The button label describes what the next activation will do.

### Trace before running

| Moment | Boolean | Paragraph | Button label |
| --- | --- | --- | --- |
| Initial load | false | Welcome, readers. | Show a reminder |
| First activation | true | Bring one short story to share. | Show welcome |
| Second activation | false | Welcome, readers. | Show a reminder |

**Predict:** What happens on the third activation?

**Answer:** The Boolean becomes true again, the reminder appears, and the button offers to show the welcome.

**Predict:** If getNotice only used `console.log`, could the caller reuse that printed message as its returned string?

**Answer:** No. Displaying a message and returning a value are separate operations. Return the string when the caller needs to assign it to the paragraph.

## 6. Test an interaction as a sequence

Write down the starting state, action, expected state, and actual state. Test initial load, first activation, second activation, keyboard use, narrow/wide widths, and the browser Console. A click that causes no exception might still produce the wrong message.

If a test fails, locate the layer:

1. Is the right HTML file open?
2. Did its CSS/script path load the saved file you edited?
3. Does the selector find the intended element?
4. Is the listener registered with the handler function reference?
5. Does the Boolean change?
6. Does the function return the intended string?
7. Is that string assigned to the intended paragraph?

Use one controlled change and repeat the failed test. If the change could affect another state, test that state again too.

## 7. Prepare your own implementation

Before writing the mini-project, answer these questions in plain English:

- Who is the fictional visitor and what do they need to learn?
- What summary will they see first?
- What extra information should one activation reveal?
- How will another activation restore the summary?
- Which file contains the HTML, CSS, and event behavior?
- Which test will prove that the return-to-summary behavior works?

Then follow the [mini-project assignment](../assignments/mini-project/README.md). Keep its implementation and test evidence separate from the daily exercises. Use [the submission guide](04-repository-submission.md) to finish both Moodle entries.

## Reading references

[Git tutorial](https://git-scm.com/docs/gittutorial), [MDN responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), [DOM introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting), [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent), and [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
