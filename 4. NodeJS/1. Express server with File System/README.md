# Express server with File System

In this task you will create a REST api using the underlying file system.

Data will be stored in a json file in the project folder. The project will replicate the express server we build during sessions.

The API should provide CRUD capability. The Readme file will act like the documentation source.

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
│   ├── helper
│   │   ├── fileIO.js
│   │   └── AppError.js
│   ├── middleware
│   │   ├── ErrorHandler.js
│   │   └── user.middleware.js
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

-   Set environment variables:

Create a `.env` file at the root directory of the project.

```env
PORT=<PORT>
```
