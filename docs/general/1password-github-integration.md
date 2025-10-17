# 1Password CLI & GitHub CLI Integration

## Steps to follow if you have 1Password and GitHub CLIs already installed
- `op plugin init gh`
- Select the PAT.
- If you choose the *Prompt me for each new terminal session* option, you need to run `op plugin init gh` every time you kill the terminal or restart it before pushing your changes.
- If you choose the *Use automatically when in this directory or subdirectories* option, you don't need to run any command before pushing your changes. Approving your passkey (for example, Touch ID) is enough.
- Double check the author and email settings: `git config user.name` and `git config user.email`.

## Detailed instructions and reasoning

### Detailed Instructions
- Install 1Password.
- Install 1Password CLI from [here](https://developer.1password.com/docs/cli/get-started/). Check the version to verify you installed it: `op --version`.
- Make sure to enable 1Password desktop app integration. Open 1Password app, click on *Settings*, go to *Developer* and toggle the *Integrate with 1Password CLI* option.
- After enabling the app integration, you can enter any command and you'll be prompted to authenticate. For example, try `op vault list` to see all the vaults in your account.
- Create a Personal Access Token (PAT) with necessary rights (`write:packages` and `repo` should be enough). The guide about how to do it is [here](https://docs.gitHub.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). Configure the SSO (i.e., authorizing the token) if needed for your use case.
- Trigger 1Password CLI configuration: `op plugin init gh`
    - First, select the PAT.
    - Second, select when the chosen credential will be used to authenticate.
        - `Prompt me for each new terminal session`: You need to run `op plugin init gh` every time you kill the terminal
        - `Use automatically when in this directory or subdirectories`: You don't need to run any command i.e., before pushing your changes as long as you're in that directory (or subdirectories of that directory)
        - `Use as global default on my system`: The changes are done globally. Not a good option if you have i.e., work and personal setup/environments on the same machine.
- Install GitHub CLI from [here](https://cli.gitHub.com/).
- Configure your Git to use `gh` as the credential provider. For that, add the following to the `~/.gitconfig` file. Note that the blank `helper =` is used to avoid the interference of multiple credential helpers in other configs (either system or global). See the gitconfig file in [Example Gitconfig File](#example-gitconfig-file) section as the complete example.
    ```
    [credential "https://github.com/"]
    helper = 
    helper = !op plugin run -- gh auth git-credential
    ```
- Test the setup with `git clone https://<endpoint>` which should not ask for any credentials but 1Password vault. Note that using SSH remotes (e.g., `git@github.com...`) bypasses the helper since this setup only applies to HTTPS remotes.

### Reasoning
- `gh auth git-credential` is GitHub CLIs' helper that implements Git's credential protocol. Stores token for HTTPS operations to `github.com`.
- `op plugin run -- gh auth git-credential` wraps the `gh` helper via the 1Password CLI plugin so that tokens are retrieved from (also stored in) 1Password rather than storing plaintext keys/passwords on your disk/keychain.
- `[credential "https://github.com/"]` limits the scope so that it won't affect other hosts such as GitLab if you have.
    - If you want to add a plugin for another service, it's just one command. Let's assume you want to add AWS, then run the command `op plugin init aws`.
- Summary: When Git needs credentials for `github.com`, it asks `gh` via 1Password for the token. 1Password stores the token and provides it by using your fingerprint or biometrics.
- An example workflow: You want to push your changes over HTTPS to GitHub and run `git push`. Git invokes the `gh` helper which fetches the GitHub token that is stored in 1Password. The token is provided by 1Password and then returned to Git. No username/password prompts or tokens in plaintext files but the biometric you selected beforehand.

### Example Gitconfig File
```
[user]
	name = John Doe
	email = john.doe@company.com

# Load personal config when working in personal Git directory
[includeIf "gitdir:~/Documents/Personal/git/"]
    	path = ~/.gitconfig-personal

# Always rebase when pulling instead of creating merge commits
[pull]
	rebase = true

# GitHub authentication via GitHub CLI with 1Password integration
[credential "https://github.com/"]
	helper =
	helper = !op plugin run -- gh auth git-credential

# Disable paging for the git branch command
[pager]
	branch = false

# Enables Git Large File Storage filters for tracking large binaries
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true

# Converts CRLF to LF on commit but doesn't change line endings on checkout. Good for cross-platform repos
[core]
	autocrlf = input
```