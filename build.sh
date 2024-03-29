#!/bin/sh

# Clean the 'dist' directory
rm -rf dist

# Compile TypeScript files
tsc --project tsconfig.json

# Copy static files to 'dist' directory
cp -r src/views dist/views
cp -r src/public dist/public

echo "Build complete."