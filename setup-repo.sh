#!/bin/bash

CURRENT_EMAIL=$(git config user.email)

echo "Repo Setup"
echo "============================"
echo ""

### Configuring Git Email for the Repository
if [ -n "$CURRENT_EMAIL" ]; then
    echo "Current email is set to: $CURRENT_EMAIL"
else
    echo "No email currently configured for this repository."
fi

echo ""
echo "Please select an option for email configuration:"
echo "1) Use your global Git email"
echo "2) Enter a custom email"
[ -n "$CURRENT_EMAIL" ] && echo "3) Keep current email ($CURRENT_EMAIL)"
echo ""
read -p "Select option [1-3]: " EMAIL_OPTION

case $EMAIL_OPTION in
    1)
        GLOBAL_EMAIL=$(git config --global user.email)
        if [ -n "$GLOBAL_EMAIL" ]; then
            GIT_EMAIL="$GLOBAL_EMAIL"
            echo "Using your global email: $GLOBAL_EMAIL"
        else
            echo "No global email configured. Please enter an email address:"
            read -p "Email: " GIT_EMAIL
        fi
        ;;
    2)
        read -p "Enter email address: " GIT_EMAIL
        ;;
    3)
        GIT_EMAIL="$CURRENT_EMAIL"
        echo "Keeping current email: $CURRENT_EMAIL"
        ;;
    *)
        echo "Invalid option. Exiting."
        exit 1
        ;;
esac

[ -n "$GIT_EMAIL" ] && git config user.email "$GIT_EMAIL"


### Configuring Git Auto Setup Remote for Push
git config push.autoSetupRemote true


### Configuring pre-commit hook
cp githooks/example-hook-for-pre-commit.sh .git/hooks/pre-commit


echo -e "\n✅ Repository configuration completed successfully ⬇️\n"
echo "Email: $(git config user.email)"
echo "Auto setup remote for push is enabled."
echo "Pre-commit hook has been set up."