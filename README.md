# Kord Snap & Solve

Kord Snap & Solve is a React Native Expo app that can easily solve mathematical questions in step by step, by uploading the image of the question to solve.

## Introduction

Expo is an open-source platform for making universal native apps that run on Android, iOS, and the web. It includes a universal runtime and libraries that let you build native apps by writing React and JavaScript.


<br/>

<!-- Banner Image -->
<p align="center">
  <a href="https://expo.dev/">
     <img alt="expo sdk" height="128" src="https://raw.githubusercontent.com/expo/expo/main/.github/resources/banner.png">
    <h1 align="center">Expo</h1>
  </a>
</p>

## Features

- **Routing**: Easily navigate between screens using Expo App Router.
- **Theming**: Implement custom themes for app using Context API.
- **Custom Drawer & Tabs**: Implement custom drawer and Tabs for app using React Navigation Drawer.
- **Firebase Integration**: Integrate Firebase services for authentication, firestore, storage and other functionalities.
- **REST API Integration**: Communicate with RESTful APIs to fetch or send data.
- **User Authentication**: Implement user authentication features using Firebase Auth.
- **Document Scanning**: Easily scan, edit and save documents.
- **MathPix OCR API**: Implement OCR API for converting images to LATEX.
- **CHATGPT**: Implement GPT-3.5 Turbo for solving LATEX to step by step mathematical solution.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/awais2723/Kord-Snap-and-Solve.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Kord-Snap-and-Solve
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Usage

1. Start the development server:

   ```bash
   npx expo start
   ```

2. Open the Expo Go app on your mobile device.
3. Scan the QR code displayed in the terminal to open the app.

### Scripts

1. start: This script is used to start the Expo development server. You can run it using `npm start` or `yarn start`. It launches the development server and allows you to preview your app in a development environment.

2. start:clear: Similar to the start script, but it clears the Metro bundler cache before starting the server. This can be useful if you're encountering issues related to caching. You can run it using `npm run start:clear` or `yarn start:clear`.

3. android: This script starts the Expo development server and opens your app in an Android emulator or device. You can run it using `npm run android` or `yarn android`.

4. ios: Similar to the android script, but it opens your app in an iOS simulator or device. You can run it using `npm run ios` or `yarn ios`.

5. web: This script starts the Expo development server and opens your app in a web browser. You can run it using `npm run web` or `yarn web`.

6. upgrade: This script is used to upgrade Expo dependencies to the latest versions. You can run it using `npm run upgrade` or `yarn upgrade`.

7. build:android: This script builds the Android version of your app using EAS CLI in preview mode. You can run it using `npm run build:android` or `yarn build:android`.

8. build:ios: This script builds the iOS version of your app using EAS CLI in preview mode. You can run it using `npm run build:ios` or `yarn build:ios`.

9. build:web: This script exports the web version of your app using Expo CLI. It cleans the output directory before exporting. You can run it using `npm run build:web` or `yarn build:web`.

10. publish: This script is used to publish your app updates using EAS CLI. You can run it using `npm run publish` or `yarn publish`.

11. publish:web: This script deploys your web app to Firebase hosting. You can run it using `npm run publish:web` or `yarn publish:web`.

12. prepare: This script is used for Husky, a tool for Git hooks. It prepares Husky for running pre-commit hooks. It doesn't need to be manually executed, but if you want to run it manually, you can use `npm run prepare` or `yarn prepare`.

13. format: This script formats your code using Prettier. It automatically formats all files in your project. You can run it using `npm run format` or `yarn format`.

14. format:check: Similar to the format script, but it checks if the code needs formatting without actually modifying the files. You can run it using `npm run format:check` or `yarn format:check`.

15. lint: This script checks your code for syntax and style errors using ESLint. It doesn't fix the errors automatically. You can run it using `npm run lint` or `yarn lint`.

16. lint:fix: Similar to the lint script, but it also attempts to fix the errors found by ESLint. You can run it using `npm run lint:fix` or `yarn lint:fix`.

17. test: This script is used for running tests using Jest. You can run it using `npm run test` or `yarn test`.

18. commit: This script assists in making Git commits by adding files to the staging area and opening a commit message prompt using git-cz. You can run it using `npm run commit` or `yarn commit`.

19. release: This script is used for releasing a new version of the project. It prepares the changelog and updates the version number according to the Semantic Versioning convention using standard-version. You can run it using `npm run release` or `yarn release`.

20. eject: This script is used to eject your app from Expo. It converts your project into a standard React Native project. You can run it using `npm run eject` or `yarn eject`. (Note: Be cautious when using eject as it's an irreversible action.)

### Technologies Used

- TypeScript
- Tailwind CSS
- Firebase
- Axios
- Async Storage
- Expo App Router
- React Native Responsive Screen
- React Native Document Scanner Plugin
- Redux Toolkit
- React Hook Form
- Zod Validator
- Jest Testing

### Python Server
https://github.com/awais2723/Kord-Snap-and-Solve/assets/91328326/5f900e95-3a59-450a-9dbb-3af4efb634b4

### Contributing

Contributions are welcome! If you have suggestions or found bugs, please open an issue or create a pull request.

### License

This project is licensed under the [License](LICENSE).
