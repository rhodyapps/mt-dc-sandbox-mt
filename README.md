# mt-dictionary-composer-ra2

This is based on the ionic angular blank template using capacitor for ios and android

The following steps were followed to create the initial app:

1. Create new ionic app
ionic start mt-dictionary-composer-v2  // choose Blank template, Angular, Capacitor

2. Install packages:

npm i @codetrix-studio/capacitor-google-auth
 ionic build
sudo gem install cocoapods
npx cap add ios
npx cap add android
npm install @angular/fire firebase --save
npm install @ionic-native/firebase
npm install @ionic/storage --save
npm install cordova-sqlite-storage --save
npm install cordova-plugin-telerik-imagepicker
npm install @ionic-native/image-picker
ionic cap sync
npm install
npm audit fix

3. Add Google Authentication
Put the app id and name (package name) in capacitor.config.json
"appId": "com.meditech.mt_dictionary_composer",
"appName": "mt-dictionary-composer"

4. Go to firebase/firestore project and add android app
android package name (as above) "com.meditech.mt_dictionary_composer",

5. In VS Code Terminal get the SHA1 debug certificate:
keytool -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
Password: android

// copy the SHA1 numbers and paste them into the firebase android app config signing certificate text box.

Click 'Register App' button to finish setting up the firebase android app
download the google-services.json folder copy and paste it into the android>app folder in VS Code
add google-services.json to .gitignore 

6. Go to GCP Console>APIs & Services>Credentials>Web Client ID
Copy the web client id

7. Go to the android app>src>main>res>values> strings file
add:
<string name="server_client_id"> paste in the web client id </string>


8. For web access,  add the client id to the src>index.html head block:
<meta name="google-signin-client_id" content=" paste in the client id"/>


9. In Firebase>Authentication>Signin method enable google signon
Check the credentials In GCP console > API & Services > Consent Screen > Dashboard>Library>Credentials

10. Configure folders, pages, services etc...
ng g module shared
ng g c shared/profile --export
ng g c shared/login --export
ng g c shared/device --export
ionic g service services/db
ionic g service services/data
ionic g service services/transaction
ionic g page pages/home
ionic g page pages/mis-holiday
ionic g interface models/transaction

11. Add menus and routing to app module etc.
12. Add data service and assets/data menus

assetts>data

13. Setup local host(s) for testing
- go into GCP Console>APIs & Services>Credentials
- select web client
Authorized Javascript Origins
- Add URI's for localhost ( You may want to have several available ):
http://localhost:8100
http://localhost:8101
http://localhost:8102

14. Put the capacitor plugin into the android code:
- Go into android/.../MainActivity
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;

and in the section:
//additional plugins go here
add(GoogleAuth.class);

15. In capacitor.config.json add the following:
"GoogleAuth": {
      "scopes": [
        "profile",
        "email"
      ],
      "serverClientId":"paste in your client id here",
      "forceCodeForRefreshToken":"true"
    }

16. Set up for IOS:
- add IOS app to the firebase project
appId com.meditech.mt-dictionary-composer
(IOS wants hyphen not underscore separators)
- Give the app a nickname:
MT Dictionary Composer IOS
- download the GoogleServices-info.plist file

17. Use Xcode for this next step, open Xcode using this command:
 npx cap open ios

- move the plist file into the root of the xcode project and all targets
- in the popup window, 
Click on the checkbox: 'copy items if needed'

18. Next open the googleService-Info.plist 
- copy the REVERSED_CLIENT_ID
Still in Xcode go to the info tab and expand the URL types
- click on + to add a new URL type
- paste the REVERSED_CLIENT_ID value into the URL Schemes text box
(this is needed by OAuth after the plugin closes)

19. Use the plugin in the app. 
-in the homePage:
add a function googleSignup() 
- in the homepage.html: 
add a button to sign up and a card to display the userinfo and signin

<div class="g-signin2" data-onsuccess="onSignIn"></div>
 

 References:

 FHIR Basic Resource 
 http://www.hl7.org/fhir/basic.html