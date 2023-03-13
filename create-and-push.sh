#!/bin/bash

# Set the GitHub repository URL
REPO_URL="https://github.com/gitdeepaks/Namaste_React.git"

# Set the branch name
BRANCH_NAME="master"

# Set the commit message
COMMIT_MESSAGE="Commit message goes here"

# Add all changes to the staging area
git add .

# Commit the changes with the given message
git commit -m "$COMMIT_MESSAGE"

# Push the changes to the GitHub repository
git push $REPO_URL $BRANCH_NAME

# Print a success message
echo "Pushed changes to GitHub"
