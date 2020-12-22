# mt-dc-ra3

This is based on the mt-dictionary-composer template
Client ID for mt-dc-ra project: 
978507752529-rfkbbnmlodhvr3q18667c16frnf2fplk.apps.googleusercontent.com
The client id goes in the folowing places: capacitor.config.json, index.html, android>res>values>strings.xml 

App ID:     com.firebaseapp.authorspace
App Name:   mt-dictionary-composer

This version includes the following functionality:

1. SignUp/Signin with Google, Email, Apple
2. Menu Hierarchy examples
3. Transaction service API - Used to create dictionary transactions for developing the integration between MEDITECH Expanse and GCP Dictionary Composer.

Prerequisites:
You need to have Node JS, NPM and Ionic CLI installed on your computer.
Setup steps for these are available at:
https://ionicframework.com/docs/intro/environment

Clone and run this app:
1.  In VS Code, open a terminal 
2.  Navigate to your Documents directory 
3.  Create a 'meditech' folder
4.  cd meditech (navigate to the folder)
5.  Clone the repository
6.  Open the terminal in the repository folder in VS Code
7.  run> npm install
8.  run> npm audit fix
9.  run> ionic build
10. run> ionic cap sync

If all goes well you should now be able to run the app:
run> ionic serve

Enter a dictionary transaction:
1. Sign in or sign up with Google
2. Expand the screen to see the side menu
3. click on 'Home' icon
4. Click on 'Recent' button (you should see a list of Holidays)
5. Click on the + circle to add a new holiday
6. Click on the 'add' button on the bottom and go back to the list to see if your holiday is in the list


If you get errors you may need to install Node JS, Ionic

 References:

 FHIR Basic Resource 
 http://www.hl7.org/fhir/basic.html
