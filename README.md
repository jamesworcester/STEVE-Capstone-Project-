1. Install Node.js 16.16.0 LTS https://nodejs.org/en/
2. Install Android Studio https://developer.android.com/studio
2a. In Android Studio, click on 'More Actions' -> 'Virtual Device Manager' -> 'Create device', then create a new android device
3. Clone the main git repo https://github.com/jamesworcester/STEVE onto your system (eg. using GitHub Desktop)
4. In a terminal, cd into the root directory of the program
5. In the root directory in your terminal, run: npm install --legacy-peer-deps
5a. If using a mac, run: npx pod-install
6. Run: npm start
7. Open a new terminal (don't close the first one) and cd into the root directory of the program
8. In that new terminal, run: npx react-native run-android
