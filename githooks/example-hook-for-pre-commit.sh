#!/bin/bash

# This file needs to be copied to the .git/hooks/pre-commit file to see the effect:
# cp hooks/set-repo-specific-github-email.sh .git/hooks/pre-commit
# But that's already done in the setup-repo.sh script!

# EMAIL_FOR_THIS_REPO=""
# CURRENT_EMAIL=$(git config user.email)

# if [ "$CURRENT_EMAIL" != "$EMAIL_FOR_THIS_REPO" ]; then
#   echo -e "Setting user email to $EMAIL_FOR_THIS_REPO for this repository.\n"
#   git config user.email "$EMAIL_FOR_THIS_REPO"
# else
#   echo -e "User email is already set to $EMAIL_FOR_THIS_REPO.\n"
# fi

echo -e "Pre-commit hook executed.\n"