# Innowise Lab Internship: Level 2: Mini-paint

## [Task](https://mail.google.com/chat/u/2/#chat/space/AAAAg3mEYtY)

## How to run the app:

1. Clone this repo

```
$git clone https://github.com/mikepetrusha/innowise-lab-internship-level-2-mini-paint.git
```

2. Open the directory in code editor
3. Run `$ npm install` to install all the dependencies
4. Run app with `$ npm run start` to run the app in your browser

## Additional scripts
- `$ npm run test` runs the tests
- `$ npm run build` builds the app for production to the `dist` folder

## Database snapshot
<img width="825" alt="image" src="https://user-images.githubusercontent.com/87857659/212333846-b0a67f78-f57f-440b-8731-b65fef7c9182.png">


## Application stack
- React 
- Firebase
- react-router-dom
- Typescript 
- Prettier
- ESLint

## Folders structure
```
📦src
 ┣ 📂api
 ┃ ┗ 📜firebase.config.ts
 ┣ 📂asserts
 ┃ ┣ 📜CircleIcon.tsx
 ┃ ┣ 📜ColorPickIcon.tsx
 ┃ ┣ 📜LineIcon.tsx
 ┃ ┣ 📜PenIcon.tsx
 ┃ ┣ 📜RectangleIcon.tsx
 ┃ ┗ 📜SizeIcon.tsx
 ┣ 📂components
 ┃ ┣ 📂Canvas
 ┃ ┃ ┣ 📜Canvas.css
 ┃ ┃ ┣ 📜Canvas.tsx
 ┃ ┃ ┗ 📜ICanvas.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.css
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┗ 📂Tools
 ┃ ┃ ┣ 📜ITools.tsx
 ┃ ┃ ┣ 📜Tools.css
 ┃ ┃ ┗ 📜Tools.tsx
 ┣ 📂contexts
 ┃ ┣ 📜AuthContext.tsx
 ┃ ┗ 📜ThemeContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜postTypeSelector.ts
 ┃ ┗ 📜reduxHooks.ts
 ┣ 📂pages
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📜Auth.css
 ┃ ┃ ┣ 📜SignIn.tsx
 ┃ ┃ ┗ 📜SignUp.tsx
 ┃ ┣ 📂Dashboard
 ┃ ┃ ┣ 📜Dashboard.css
 ┃ ┃ ┗ 📜Dashboard.tsx
 ┃ ┗ 📂Editor
 ┃ ┃ ┣ 📜Editor.css
 ┃ ┃ ┗ 📜Editor.tsx
 ┣ 📂router
 ┃ ┗ 📜AppRoute.tsx
 ┣ 📂store
 ┃ ┣ 📂slices
 ┃ ┃ ┗ 📜postSlice.ts
 ┃ ┗ 📜store.ts
 ┣ 📂types
 ┃ ┗ 📜post.ts
 ┣ 📂utils
 ┃ ┗ 📜FetchPost.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```
