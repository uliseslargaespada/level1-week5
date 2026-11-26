# Git and GitHub: from a folder to your first push

**Goal:** run one saved file, keep a local history of changes, and publish that history in your own public Week 5 repository. Your GitHub profile repository from Week 4 is a separate project. This repository is called `level1-week5`.

The editor changes files. Git records selected file versions on your computer. GitHub stores the versions you push online. A successful save, commit, and push are three separate events.

## 1. Check Git before starting

Open VS Code and choose **Terminal → New Terminal**. Type:

```sh
git --version
node --version
```

A version number from each command means the commands are available. You do not need the instructor's exact version.

### Windows

If `git` is unrecognized, use the [official Git for Windows download](https://git-scm.com/install/windows). Choose the installer for your system architecture. During installation keep command-line availability enabled and keep Git Credential Manager selected. Use the standard options unless your school's device policy says otherwise. Close and reopen VS Code afterward, then try `git --version` in a fresh terminal. PowerShell is suitable for this week's commands.

### macOS

Try `git --version` first. If Git is absent, the [official Git installation page](https://git-scm.com/install/mac) lists Apple's Command Line Tools as an option. In Terminal:

```sh
xcode-select --install
```

Complete the system installer, reopen VS Code, and check Git again. If tools are already installed, do not reinstall them merely because the version differs from the instructor's.

### Linux note

Git may already be installed. If it is not, use your distribution's approved package manager or ask a TA; do not paste Windows or macOS installer commands into Linux. The Git commands below work across these systems.

If installation requires permissions you do not have, ask a TA and use the Codespaces route in section 9. Keep your existing working Node setup.

## 2. Create your own work folder

Choose **one** route.

**Separate starter ZIP:** download the instructor's `week-5-student-starter.zip`. In Windows File Explorer choose **Extract All**; on macOS open the ZIP to extract it. Open the extracted folder in VS Code. The files should be `README.md`, `daily-exercises/`, and `mini-project/` directly inside. You can rename this folder `level1-week5`.

**Full student pack:** extract the full `week-5-student-pack.zip` and keep it as your reading material. Copy the **contents** of `assets/student-starter/`, including `.gitignore`, into a new folder called `level1-week5`. Open the new folder in VS Code.

Use **File → Open Folder** to open that exact work folder. Open a fresh integrated terminal. Check your current location with `Get-Location` on Windows PowerShell or `pwd` on macOS/Linux. Confirm the file listing with `Get-ChildItem` or `ls`. Use the VS Code Explorer to confirm `.gitignore` exists, even if the operating system hides dotfiles.

Do not copy the complete instructor course repository or a `.git` folder into your work. Keep one repository for the whole week's two assignments.

## 3. Create local history and set your identity

Run this once, from the work folder:

```sh
git init -b main
```

If `git status` already works and shows a repository, stop and inspect before initializing again. Do not create a second repository inside a daily folder.

A commit includes an author name and email. In your GitHub email settings find the exact GitHub-provided **noreply** address if you want your personal email to stay private. Replace both example values below with your own selected identity:

```sh
git config user.name "Your chosen name"
git config user.email "COPY-YOUR-EXACT-GITHUB-NOREPLY-ADDRESS"
git config --get user.name
git config --get user.email
```

These settings apply to this repository. The name is a commit author label. It is not a login command. Do not use the instructor's name or email, and do not leave the placeholder as your address.

## 4. Make the first real change

Read Assignment 1's Monday instructions. Edit `daily-exercises/day-21/hello.js` and the root `README.md` as directed. Save the files. From the root terminal:

```sh
node daily-exercises/day-21/hello.js
git status
git diff
```

Read your greeting in the terminal. `git status` reports new or changed files. `git diff` shows changes to already tracked files; a brand-new untracked file is listed by status but may not appear in this diff yet.

Review the files before staging. Keep the supplied `.gitignore`; it excludes local environment files and common computer metadata. A file can still contain private information even if its name is ordinary, so review its content too.

Stage the starting source and documentation, then inspect the staged snapshot:

```sh
git add .gitignore README.md daily-exercises mini-project
git diff --cached --stat
git diff --cached
git status
```

Files listed as staged are the versions your next commit will contain. If you edit again after staging, save and stage that updated file again.

Make the first commit:

```sh
git commit -m "Start Week 5 exercises and project structure"
git log --oneline
```

The log should contain a short identifier and your message. The files are still local at this point.

## 5. Create an empty public repository on GitHub

In your browser sign in to **your own** GitHub account, then create a new repository:

1. Under **Owner**, select your own username.
2. Name it `level1-week5`.
3. Select **Public**. Use fictional activity names and content.
4. Leave the remote README, .gitignore, and license initialization options **off**. Your local starting commit already contains your files.
5. Create the repository. On its setup page copy the **HTTPS** repository URL.

Use a new repository for this work. Do not put it in your profile README repository or the Academy teaching repository.

## 6. Connect the remote and push

Replace the example username in the first command. The actual URL is available from GitHub's setup page:

```sh
git remote add origin https://github.com/YOUR-USERNAME/level1-week5.git
git remote -v
git push -u origin main
```

Read the remote URL and confirm it belongs to you before pushing. On the first push you may need to sign in using a browser window.

### Authentication help

With Git Credential Manager installed, follow its browser sign-in and any normal account verification privately. Git for Windows includes GCM. For macOS, GCM provides a `.pkg` installer through its [official installation instructions](https://github.com/git-ecosystem/git-credential-manager/blob/main/docs/install.md#macos) and [releases](https://github.com/git-ecosystem/git-credential-manager/releases); choose the package matching your machine, then retry the push. A TA can help select the approved installer.

If GitHub CLI is **already** your configured authentication route, use `gh auth login`, choose GitHub.com and HTTPS, approve Git authentication, and complete the browser login. You do not need to set up both tools.

Your GitHub account password is not a password for Git HTTPS pushes. If a terminal asks for a credential you do not understand, stop and ask a TA. Do not paste a token into source code, a remote URL, a chat, or a README. Authentication settings and login status are different from Git's author name/email.

After a successful push, refresh the repository page in your browser. Confirm that the files and most recent commit message appear. Saving a file in VS Code does not update this page.

## 7. Use the same routine after meaningful work

After editing and saving, test the file or page and read the result. Then:

```sh
git status
git diff
git add PATH-TO-THE-FILE-YOU-CHANGED
git diff --cached
git commit -m "Explain the change you actually made"
git push
```

Replace the example path and commit message. You can list multiple paths after `git add`. Commit real progress such as adding a readable layout, fixing a selector, or recording tests. There is no required artificial number of commits.

Finish with:

```sh
git status
git log --oneline -5
```

A clean working tree means no local changes are waiting to be committed. It does not by itself prove that you pushed the last commit. Refresh GitHub and check the commit and changed file there too.

## 8. Diagnose a blocked command

| Symptom | First useful check |
| --- | --- |
| `git` is unrecognized | Reopen VS Code after installation; check the installation or use Codespaces. |
| Not a Git repository | Confirm which folder the terminal is in. Return to the root you initialized. |
| Author identity unknown | Set this repository's name and exact email, then retry the commit. |
| Nothing to commit | Check that you saved and staged the intended change in the intended copy of the folder. |
| `origin` already exists | Read `git remote -v`. If it is wrong, ask a TA before changing it. |
| `src refspec main does not match any` | Check whether you made the first commit and whether the current branch is actually main. |
| Permission denied or repository not found | Check the URL, owner, signed-in account, and access. |
| Push rejected because the remote has work | Stop. The remote may have been initialized separately or edited online. Ask a TA to reconcile the histories without losing work. |
| New work appears locally but not on GitHub | Check that you committed and pushed, and inspect the repository and branch you are viewing. |

Keep the full error message and tell the TA what you expected. Do not use force push, delete repositories, or erase local history to make a setup error disappear.

## 9. Codespaces route when local Git setup is blocked

Use an approved Codespace for **your own Week 5 repository**. If you already pushed the first commit, open that repository and use **Code → Codespaces**. If no push is possible yet, ask a TA to help create your public repository with an initial README, open its Codespace, then copy/upload the **contents** of the student starter into that workspace. Preserve its existing `.git` folder.

In that route Git is already initialized and the remote is configured, so skip `git init` and `git remote add`. Run `git status` and `git remote -v` to check where you are, then use the same save, test, stage, commit, push routine. Do not run the local empty-repository sequence over an existing Codespace.

Use [the browser guide](02-browser-and-devtools.md#codespaces-preview) for webpage previews. Save and push before closing. Stop the Codespace when finished; availability and usage limits depend on the account. If access is blocked, tell a TA rather than entering payment details for the course exercise.

## Further reading

- [Git: introductory tutorial](https://git-scm.com/docs/gittutorial)
- [GitHub: adding locally hosted code](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [GitHub: commit email address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)
- [GitHub: credential caching](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git)
