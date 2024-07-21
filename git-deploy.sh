#!/bin/bash

# Check if any argument is provided (commit message)
if [ -z "$1" ]; then
    echo "Please provide a commit message"
    exit 1
fi

# Adding all changes
git add -A

# Committing changes
git commit -m "$1"

# Switching to main
git checkout main

# Merging develop into main
git merge develop

# Pushing changes
git push

# Switching back to develop
git checkout develop

echo "Operation completed successfully."
