# How to delete local and remote branches?

- To delete a local branch: `git branch -d <branch_name>`
    - If it is unmerged, use `git branch -D <branch_name>`
- To delete a remote branch: `git push origin --delete <branch_name>`

Some Other Useful Commands
- `git branch`: List all local branches
- `git branch -r`: List all remote branches
- `git branch -a`: List all branches
- `git fetch prune`: Remove local references to deleted remote branches
