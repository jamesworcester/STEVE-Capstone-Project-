Instructions to run the program on your local machine (mac may be screwy because it's screwy
1. Install and properly configure react-native expo: https://reactnative.dev/docs/environment-setup
2. . Install Node.js 16.16.0 LTS https://nodejs.org/en/
3. Install Android Studio https://developer.android.com/studio
4. . In Android Studio, click on 'More Actions' -> 'Virtual Device Manager' -> 'Create device', then create a new android device
5. Clone the main git repo https://github.com/jamesworcester/STEVE onto your system (eg. using GitHub Desktop)
6. In a terminal, cd into the root directory of the program
7. In the root directory in your terminal, run: npm install --legacy-peer-deps
8. . If using a mac, run: npx pod-install
9. Run: npm start
10. Open a new terminal (don't close the first one) and cd into the root directory of the program
11. In that new terminal, run: npx react-native run-android
