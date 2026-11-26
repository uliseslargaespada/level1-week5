# Repository organization and final submission

You have **two separate Moodle assignments**, each worth **5 points**. They share one public repository because the learning workflow is the same. Each assignment grades a different folder.

**Due for both: Tuesday, November 29, 2026, at 10:59 p.m. CST (America).**

## 1. Organize the repository

Use your own account and a repository such as `level1-week5`. Its top level should contain:

```text
level1-week5/
  .gitignore
  README.md
  day-21/
    README.md
    hello.js
  day-22/
    README.md
    index.html
    style.css
    TESTS.md
  day-23/
    README.md
    index.html
    style.css
    script.js
    TESTS.md
  mini-project/
    README.md
    index.html
    style.css
    script.js
    TESTS.md
```

The repository's root README introduces the work and links to the daily exercises and mini-project. Each task's README explains that task, how to run it, and your reasoning. Its test record describes observed results. Replace the starter's TODOs with your own work. Keep Day 22, Day 23, and the mini-project self-contained so a grader can open each HTML page and find the correct CSS/script.

Your mini-project must be a separate implementation with its own fictional content and tests. Finishing the daily toggle exercise does not automatically complete Assignment 2.

## 2. Store evidence in the repository

Your repository contains the source code, short explanations, and Markdown test records requested by each assignment. Use text tables or short notes. Describe the exact file, action or input, expected result, and observed result.

You do not need to upload screenshots, submit a ZIP, record a video, or publish a live site. The instructor can inspect your code, read the evidence, open the HTML files locally, and examine the commit history.

Use real observations. If a test fails, say so, describe the repair, and retest. A claim such as “everything works” cannot show which cases you tried.

## 3. Finish the save, test, commit, push routine

1. Save every changed file in VS Code.
2. Run the Node greeting and open each webpage using the instructions in your README.
3. Complete the test records and explanations.
4. Use `git status` and `git diff` to inspect your edits.
5. Stage the intended files and inspect `git diff --cached`.
6. Commit with a message describing the work, then push.
7. Open GitHub and refresh. Check the latest commit, each task folder, and the text you just edited.

A file on your computer is not submitted if you never pushed it. Ensure the root README links open inside GitHub and that no file is buried inside an extra copied starter-folder layer.

## 4. Check public access

Open a private/incognito browser window without signing into GitHub and paste your repository URL. It should show the files. Use fictional activity names, places, and data, and a public-safe author identity. Keep credentials, personal contact information, student records, and instructor-only solutions out of it.

The teaching repository is private and is not your submission. Your profile README repository is also not this week's submission.

## 5. Submit the same root URL twice

Copy the repository's main page address. A correctly shaped example is:

```text
https://github.com/YOUR-USERNAME/level1-week5
```

Replace the example with your actual URL.

1. Open **Week 5 Assignment 1: Daily exercises** in Moodle.
2. Paste **only your root repository URL** into the online text field.
3. Save and complete any final **Submit assignment** action your course uses.
4. Open **Week 5 Assignment 2: Mini-project**.
5. Paste the **same root repository URL**, then complete submission there too.
6. Reopen both entries and confirm the saved URLs are correct.

Use the main repository URL, rather than the URL of a file, a Codespaces preview, a GitHub profile, a live deployment, or a download. Your root README directs the grader to the two parts.

If you discover a problem before the deadline, fix the source, rerun the affected tests, update the notes, commit, and push. The saved root URL stays the same. Changes after the deadline follow the instructor's late-work policy, so keep the history intact.

## Final check

- [ ] My repository is public and accessible without my login.
- [ ] The root README links to both assignment areas.
- [ ] All three daily exercise folders contain my completed work.
- [ ] The separate mini-project has my own content and implementation.
- [ ] Test records contain actual results and explanations.
- [ ] My latest work is committed and visible on GitHub.
- [ ] Both Moodle assignments contain the same root repository URL.
