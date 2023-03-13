#!/bin/bash

# Set the repository name
REPO_NAME="Namaste_React"

# Set the commit message
COMMIT_MESSAGE="Initial commit"

# Create a new repository on GitHub using the API
curl -u "gitdeepaks" https://api.github.com/user/repos -d '{"name":"'$Namaste_React'"}'

# Initialize a Git repository locally
git init

# Add all files to the staging area
git add .

# Commit the changes with the given message
git commit -m "$initial"

# Set the remote URL for the repository on GitHub
git remote add origin "https://github.com/YOUR_GITHUB_USERNAME/$Namaste_React.git"

# Push the changes to the GitHub repository
git push -u origin master

# Print a success message
echo "Pushed first code to GitHub"
