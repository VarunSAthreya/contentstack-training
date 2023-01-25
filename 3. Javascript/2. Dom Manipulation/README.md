# [DOM Manipulation: Counter and Timer]()

## Problem Statement

In this example you will be creating a simple timer and counter application using DOM manipulation techniques.

Styling and UI is left up to the developer to choose. Let the choice be functional and self explanatory.

The main application UI can have a check box for selecting the application to be displayed
Based on the check-box selection the relevant application will be displayed on DOM.

## Folder Structure

The structure here represents the folder structure that will be used in the application.

```
.
├── index.html
├── readme.md
├── src
│   ├── app.js
│   ├── counter
│   │   ├── counter.js/index.js
│   │   └── README.md
│   └── timer
│       ├── timer.js/index.js
│       └── README.md
└── style
    ├── counter.css
    ├── style.css
    └── timer.css
```

`app.js` is the main application file that will work on displaying the contents on index.html file.

`counter.js` ➕ will build a counter component and `timer.js` ⏳ will build a timer component

### Additional Information

Your **`index.html`** file should contain the following structure.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DOM Manipulation</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```
