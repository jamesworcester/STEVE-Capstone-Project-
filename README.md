# STEVE (the Staff Engagement Visualisation Exeperience)
## Winner of the 2022 La Trobe CS/IT 'Top Technical Project Implementation'

**STEVE** is the **iOS** & **Android** app our team of five developed for our **final-year Capstone Industry Project**, and was developed in consulation with our **Industry Client**, **Planit Testing**.

Please feel free to read the **supplied documentation** in the '**DOCUMENTATION**' folder in the main branch.

![Employee data](/STEVE/DOCUMENTATION/Engineering & IT student poster (A1).PNG?raw=true "Employee Data title")

## Installation Instructions
Note: For a complete installation guide with image-based step-by-step instructions please refer to the installation guide in the submitted User Manual. This README guide is largely based off those instructions, and will try to get you up and running as quickly as possible. Both guides assume the user either wants to install the app on their Android device, or is using Windows 10 and wants to set up the development environment with Android Studio.

## Android .apk Quick-start Guide:
1. Transfer the supplied .apk file to your Android device
2. Install the .apk file
3. Open the newly installed 'STEVE' app

## Windows 10 Development Environment Quick-start Guide:
### Requirements:
1. You must have been supplied with the 'accessKeyId' and 'secretAccessKey' for the 'amplify-user' user
2. You must have been supplied with the 'aws-exports.js' file


### Step 1. Installing nodejs
1. In your browser, navigate to https://nodejs.org/en
2. Download the most recent LTS build and install node.js. Just accept the installation defaults on every screen by clicking 'Next', then finally 'Install' and 'Finish'

### Step 2. Installing AWS Amplify CLI
1. Run the following command in Command Prompt:
```
curl -sL https://aws-amplify.github.io/amplify-cli/install-win -o install.cmd && install.cmd
```

### Step 3. Configuring AWS Amplify CLI
1. Run the following command in Command Prompt:
```
amplify configure
```
2. The Command Prompt will ask you to 'Sign in to your AWS administrator account' and will open a browser window. Please ignore this, close the browser window, and press Enter in the Command Prompt to continue.
3. You will be asked to ‘Specify the AWS Region’. Use the Up and Down arrow keys to navigate to ‘ap-southeast-2' and make sure it is highlighted in blue before pressing Enter to confirm the region
4. You will be asked to ‘Specify the username of the IAM user'. Please enter:
```
amplify-user
```
5. The Command Prompt will ask you to ‘Complete the user creation using the AWS console’ and will open a browser windows. Please ignore this, close the browser window, and press Enter in the Command Prompt to continue.
6. You will now be asked to enter the access key of the newly created user. For the ‘accessKeyId’, please enter the supplied 'accessKeyId' for amplify-user
7. When it asks you to enter the 'secretAccessKey', please enter the supplied secretAccessKey for amplify-user
8. When it asks for a ‘Profile Name’, simply press Enter to select the default profile
9. Installation of the AWS Amplify CLI is now complete

### Step 4. Cloning the GitHub repo
1. In your browser, sign in to the same GitHub account where you have access to the Team Freeware STEVE repository. Then navigate to https://github.com/jamesworcester/STEVE and click on the green button that says ‘Code’, then click on ‘Download ZIP’
2. Once the file has downloed, Extract it
3. Copy the path of the newly extracted folder where you can see a bunch of different directories and files
4. In Command Prompt, cd into that directory
5. In Command Prompt, run:
```
npm install
```
6. Copy the supplied 'aws-exports.js' file into 'STEVE-main\src'

### Step 5. Installing Android Studio and Configuring an Emulated Android Device
1. Navigate to https://developer.android.com/studio and download Android Studio
2. Accept all the terms and just accept the defaults on every screen by clicking 'Next', 'Install' and 'Finish', after which Android Studio should start
3. In Android Studio, select 'Do not import settings' and click 'OK'
4. Just keep clicking 'Next' on all the screens, accept the license agreements and click 'Finish' and wait for the download to complete and click 'Finish'
5. On the 'Welcome to Android Studio' screen, click on the blue text that says 'More Actions' to open a dropdown menu, then click on 'Virtual Device Manager'
6. Click on 'Create device'
7. Select 'Pixel 5' and click on 'Next'
8. Under 'Release Name', click on the Download icon next to 'S' and wait for the download to finish
9. Once the download has completed, click on 'Finish'
10. When selecting a System Image, highlight the one with release name 'S' and press 'Next'
11. Click on 'Show Advanced Settings'
12. Scroll down to where it says 'Memory and Storage' and set the 'Internal Storage' to 2000 MB and press 'Finish'
13. For the new Pixel 5 emulated device you created, click on the white Play buton that looks like a triangle and wait for the emulated Pixel 5 device to boot up

### Step 6. Installing Expo and booting up
1. Once the device has booted up, open a Command Prompt, cd into the STEVE-main directory and run:
```
npx expo start
```
and press Enter to install the Expo CLI globally

2. Once the Expo CLI has been installed and started, you should see a screen in the Command Prompt with a QR code and some instructions. Press 'a' in the Command Prompt to begin installing the Expo Go app on your emulated device

3. Once Expo has installed, the JavaScript code for the STEVE app will be bundled and sent to the emulated device, and you should now see the login screeen for the app

4. Remember each session that when first signing into the app or creating an account, please allow 40-50 seconds between your first attempt and your second to allow the database compute functions to spin up. Once spun up, the database will only spin down again once it has been 20 minutes since the last API/SQL request.

### Step 7. Cleaning Up
1. When you're done with the device, you may power it down the same way you would an actual android phone, and you can close the Command Prompt window

### Step 8. Opening up the app again
1. If you ever want to open the app up again, first start your emulated Pixel 5 Android device in Android Studio, then open a Command Prompt, cd into the 'STEVE-main' directory and run:
```
expo start
```
2. Once the Expo CLI has started, press 'a' to launch the app in the Android Emulator

