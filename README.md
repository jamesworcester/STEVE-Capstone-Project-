# STEVE
## Instructions to set up and use the current main-branch STEVE Program
Amplify CLI once off steps per machine:
1. Install the Amplify CLI using the 'cURL (Mac and Linux)' or 'cURL (Windows)' link from here: https://docs.amplify.aws/cli/start/install/
2. Run: amplify configure
3. Sign in to your AWS administrator account when the CLI opens a browser window
4. Press 'Enter'
5. region: ap-southeast-2
6. user name: amplify-user (it will open a browser, just quit out of the browser without doing anything)
7. Press 'Enter'
8. Enter the access key of the newly created user:
accessKeyId: (James can send you the accessKeyId for amplify user)
secretAccessKey: (James can send you the secretAccessKey for amplify user)
9. Profile Name: default

Other once off steps per machine:
1. Install and properly configure react-native expo: https://reactnative.dev/docs/environment-setup
2. Install Node.js 16.16.0 LTS https://nodejs.org/en/
3. Install Android Studio https://developer.android.com/studio
4. In Android Studio, click on 'More Actions' -> 'Virtual Device Manager' -> 'Create device', then create a new android device
5. Run the android emulator for the device you just created

Steps to get and run the code from github
1. Clone the main git repo https://github.com/jamesworcester/STEVE onto your system (eg. using GitHub Desktop)
2. In a terminal, cd into the root directory of STEVE
3. Run: amplify init
Do you want to use an existing environment? Yes
Choose the environment you would like to use: dev
Choose your default editor: Visual Studio Code
Select the authentication method you want to use: AWS profile
Please choose the profile you want to use: default
4. Run expo start

Github standard practice:
- Once you get the main branch working, please create a New Branch to continue working on so we don't end up with a bunch of stuff in main that is in development
- Once you want to merge back to main once you've confirmed nothing is broken, initiate a pull request to the main branch
