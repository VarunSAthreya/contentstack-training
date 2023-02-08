# REST Methods

This repository is an example code for using REST guidelines for doing CRUD operations on a data source.

## Prerequisites

-   [Node.js](https://nodejs.org)
-   [PNPM](https://pnpm.io)

## Folder Structure

```
.
├── package.json
├── README.md
├── src
│   ├── app.js
│   ├── controllers
│   │   └── user.controller.js
│   ├── model
│   │   └── User.model.js
│   └── routes
│       └── user.route.js
└── data
    └── data.json
```

## Routes

-   `/users`

    -   `GET`: Get all users.
    -   `POST`: Create a new user.

-   `/users/:id`
    -   `GET`: Get user by ID.
    -   `PUT`: Update(full) user by ID.
    -   `DELETE`: Delete user by ID.

## Getting Started

-   Install Dependencies:

```sh
pnpm i
```

-   Run in dev mode:

```sh
pnpm dev
```

-   Run in production mode:

```sh
pnpm start
```
