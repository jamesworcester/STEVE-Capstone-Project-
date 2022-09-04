# STEVE
## Instructions to set up and use the current main-branch STEVE Program
### STEP 1: Run the code below ONCE per computer:
1. Install and properly configure react-native expo: https://reactnative.dev/docs/environment-setup
2. Install Node.js 16.16.0 LTS https://nodejs.org/en/
3. Install Android Studio https://developer.android.com/studio
4. In Android Studio, click on 'More Actions' -> 'Virtual Device Manager' -> 'Create device', then create a new android device
5. Run the android emulator for the device you just created
6. Install the Amplify CLI using the 'cURL (Mac and Linux)' or 'cURL (Windows)' link from here: https://docs.amplify.aws/cli/start/install/
7. In a terminal run: `amplify configure`
8. Sign in to your AWS administrator account when the CLI opens a browser window
9.  Press 'Enter' in the terminal window
```
region: ap-southeast-2
user name: amplify-user (it will open a browser, just quit out of the browser without doing anything)
Press 'Enter'
Enter the access key of the newly created user:
    accessKeyId: (James can send you the accessKeyId for amplify user)
    secretAccessKey: (James can send you the secretAccessKey for amplify user)
Profile Name: default
```
### STEP 2: Run the code below whenever you create a new clone from Github
1. Clone the main git repo https://github.com/jamesworcester/STEVE onto your system (eg. using GitHub Desktop)
2. In a terminal, cd into the root directory of STEVE
3. Run: `npm install`
4. Run: `amplify init`
```
    Do you want to use an existing environment? Yes
    Choose the environment you would like to use: staging
    Choose your default editor: Visual Studio Code
    Select the authentication method you want to use: AWS profile
    Please choose the profile you want to use: default
```
5. Run: `expo start`