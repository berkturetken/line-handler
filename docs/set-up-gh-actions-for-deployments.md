# How to set GitHub actions for deployments and add required values from Vercel as secrets in GitHub?

> Currently, the GitHub Actions setup does the exact same thing as Vercel was doing before for the deployments. I mainly had those changes for two reasons:

> 1. Provides a more realistic and enterprise setup since GitHub Enterprise Server (GHES) cannot use Vercel's built-in Git integration.
> 2. Gives more control over the deployment. For example, current behaviour (i.e., having deployments for each push to main) can easily be configured.

<br>

- Install Vercel CLI and run `vercel login` (optional)
- Run `vercel link` to create a new Vercel project when you're inside the project folder
  - Type `Y` to **"<path-to-the-project-folder>"?**
  - Select which scope the project should contain from the dropdown
  - `Y` to **Found project "<project-name-in-vercel>". Link to it?**
- `.vercel` folder will be generated at the root level where `projectId` and `orgId` can be found in the `project.json` file.
- To retrieve an access token, visit `Access Settings --> Tokens --> Enter a token name, select your project as the scope and select an expiration date --> Create`
- Go to the corresponding repository in GitHub and select `Settings`. Then, choose `Secrets and variables --> Actions`. Lastly, add the secrets above as `Repository secrets`. I choose the following names:
  - `VERCEL_TOKEN` for the access token
  - `VERCEL_PROJECT_ID` for projectId
  - `VERCEL_ORG_ID` for orgId
