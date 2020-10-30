# Silverstripe CMS / NextJS Starter

This is a simple starter project for using NextJS with 
Silverstripe CMS.

It was used in a presentation on Virtual StripeCon 2020:
https://speakerdeck.com/adiwidjaja/go-headless-but-dont-lose-your-head
Video can be found here:
https://youtu.be/0WN60I3o19s

## Installation

    git clone git@github.com:adiwidjaja/silverstripe-nextjs-starter.git demo
    cd demo
    
    # Configuration
    vi .env
     
    # PHP dependencies
    cd backend && composer install
     
    cd ..
     
    # JS dependencies
    yarn
    
    # Dev server
    yarn dev
     
## Config

Just use one config .env file for backend and frontend:

    # DB credentials
    SS_DATABASE_CLASS="MySQLDatabase"
    SS_DATABASE_SERVER="localhost"
    SS_DATABASE_USERNAME="<user>"
    SS_DATABASE_PASSWORD="<password>"
    SS_DATABASE_NAME="<database>"
    
    # Used for PreviewURL
    FRONTEND_URL="http://localhost:3000"
    
    # URL for backend
    API_PATH="http://localhost/starter/backend/public/graphql"

## Warning

This is not a complete project, but a starter.
