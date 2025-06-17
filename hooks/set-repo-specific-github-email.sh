#!/bin/bash

# This file needs to be copied to the .git/hooks/pre-commit file:
# cp hooks/set-repo-specific-github-email.sh .git/hooks/pre-commit

EMAIL_FOR_THIS_REPO="berkturetken1997@hotmail.com"
CURRENT_EMAIL=$(git config user.email)

if [ "$CURRENT_EMAIL" != "$EMAIL_FOR_THIS_REPO" ]; then
  echo "Setting user email to $EMAIL_FOR_THIS_REPO for this repository."
  git config user.email "$EMAIL_FOR_THIS_REPO"
else
  echo "User email is already set to $EMAIL_FOR_THIS_REPO."
fi