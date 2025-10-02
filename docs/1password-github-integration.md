# 1Password GitHub Integration

- `op plugin init gh`
- Select the PAT.
- If you choose the "Prompt me for each new terminal session" option, you need to run `op plugin init gh` every time you kill the terminal and restart it before pushing your changes.
- If you choose the "Use automatically when in this directory or subdirectories", you don't need to run any command before pushing your changes. Approving your passkey (in my case, Touch ID) is enough.
- Double check the author and email set: `git config user.name` and `git config user.email`


## How to configure git to ignore some files locally?
- Edit the `.git/info/exclude` in the corresponding repository. For example, you can put the following to the file: `*.op`.
