# Viam Rover
# A vanilla port of the Typescript "try viam" script to Tauri version 2

### Author: Jason Levitt
### Initial Release Date: August 29th, 2024

## viam-rover demonstrates [Tauri version 2's](https://v2.tauri.app) ability to run Typescripa-for-the-browser as an application across both desktop and mobile platforms using only one code base. 

<figure>
    <img src="https://i.imgur.com/reqeI0X.jpeg" alt="ViamRover" width="800"/>
    <figcaption>Running on MacOS</figcaption>
</figure>

## Building The App

### For prerequisites, see this page: <a href="https://v2.tauri.app/start/prerequisites/" target="_blank">Tauri prerequisites</a>
#### Note that iOS emulation requires a Mac (sorry). 

### After you clone this repo:
 ```sh 
$ cd viam-rover
```
### Install the Javascript packages 
 ```sh  
$ yarn
```
#### or
 ```sh  
$ npm install
```

### Then, to build and launch the desktop version (tested on MacOS and Windows):
 ```sh 
 $ yarn tauri dev
 ``` 
#### or
 ```sh 
 $ npm run tauri dev
 ``` 

### To build and launch the Android version:
 ```sh
$ yarn tauri android init
$ yarn tauri android dev
```
#### or
 ```sh
$ npm run tauri android init
$ npm run tauri android dev
```

### To build and launch the iOS version:
 ```sh
$ yarn tauri ios init
$ yarn tauri ios dev
```
#### or
 ```sh
$ npm run tauri ios init
$ npm run tauri ios dev
```
<br />

## Using The App

### This sample app requires:

-- a Viam API key
-- a Viam API key ID
-- a Viam App Address

### You must first create a login at Viam: https://auth.viam.com/oauth2/register 
### Go to your profile settings in the upper-right hand corner to create your API key and API key ID
### Then go to the Try Viam page here: https://app.viam.com/try
### Click on the "TRY NOW" button and wait for a rover reservation
### When it succeeds, click on the "TRY MY ROVER" button
### In the dashboard, click on "CONNECT" in the menu bar
### Copy the "Machine address (URI)" which you will use in the form form field labeled "APP ADDRESS"

### You can now run this app and populate the three fields. 
### Up to 20 seconds after you submit the form, the "Click Me" button should change color and be enabled. 
### Clicking on the "Click Me" button will display some rover actions.

### A successful run:

<figure>
    <img src="https://i.imgur.com/RG0so09.jpeg" alt="ViamRover" width="800"/>
    <figcaption>Running on MacOS</figcaption>
</figure>

## Creating an .env file
#### Once you have your Viam API key and API key ID, you can optionally 
#### create a .env file at the top-level of the repo that looks like this:

```
VITE_APP_API_KEY=joy8glxxxxxxxxxxxxxxxcngs
VITE_APP_API_KEY_ID=0dxxxxxx-9xxx-4xxx-9xxx-8xxxxx22
```
#### This will automatically populate the fields in the authentication form 
#### (TODO: they are not visible in the form).

<br />
<figure>
    <img src="https://i.imgur.com/oJD2Iua.jpeg" alt="iOS" width="300"/>
    <figcaption>Running on an iPhone Emulator as a Native iOS App</figcaption>
</figure>
