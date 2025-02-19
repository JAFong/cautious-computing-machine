# cautious-computing-machine

Take Home

## How to run App

Navigate to the `my-app` directory

Run `npm i`

`npm run dev` for the developer build

`npm run prod` for production ready Build

Will host locally at `http://localhost:3000`

## Pages

### Public Lead Page

http://localhost:3000/lead

Form implemented with JSON Forms and has form validation. Upon form submission a Success screen is shown to users.

### Internal Leads List UI

http://localhost:3000/list

**Testing Steps**
Login with

email: `admin`

password: `password`

Mocked `logout` in bottom left corner

Table implemented with AG Grid to enable quick sorting, pagination, and filtering features. Data stored with `zustand`. `Reach Out` Button will make a call to an API and update the data.

### Server Side

API Routes implemented with Next.js

Auth is a naive implementation using sessionStorage

## Additional Documentation

Refer to DESIGN.md for further explanation of application and design decisions.
