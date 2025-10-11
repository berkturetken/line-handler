# How to change a commit message after it got pushed to remote?


- `git rebase -i HEAD~N`: `N` refers to the last N commits.
- An editor will be opened and you will see something like this at the top of the file:
    ```
    pick abc1234 Second to last commit message
    pick def5678 Last commit message
    ```
- Change `pick` to `reword` (or only `r`) for the commit you would like to change. Note that you need to press `i` to be able to change anything on the file (some basic Vim rules 🙂)
- Save and close the editor (i.e., `:wq`)
- Then, another editor will be opened where you can actually change the commit message. Change the commit message in the first line.
- Saving and closing completes the rebase.
- `git push --force`: Force push your changes
    - Alter the command above accordingly if you're on a branch.
    - ❗️There is also safer push option which won't overwrite if remote has already changed: `git push --force-with-lease`

## How to abort a rebase at different stages?
- If you are still in the first editor (pick/reword thingy):
    - Quit without saving (i.e., `:q!`)
- If you are in the second editor (commit message):
    - Quit without saving (i.e., `:q!`), and Git will detect this and abort the rebase.
- If you already completed the rebase:
    - `git rebase --abort`
    - If the abort does not work, find the previous state before rebase:
        - `git reflog`
        - Look for an entry like *HEAD@{1} rebase (start): checkout HEAD@{2}*... The entry before that is the original state. Therefore, reset to that state: `git reset --hard HEAD@{1}`, in this case particular case.