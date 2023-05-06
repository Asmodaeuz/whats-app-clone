# WhatsApp Clone

## A WhatsApp clone made entirely with HTML, CSS and vanilla JavaScript

### Disclaimer

This project was created using HTML for page markup, CSS for stylization, and vanilla JavaScript for everything else.
No frameworks or libraries were used. FontAwesome's CDN was used for icons to ensure nothing was installed.
Furthermore, this is only for visual enhancement. No tags, scripts, functions or classes were affected or created by third parties.

### About

Since nothing outside the scope of what was specified could be used for this test,
I had to make some adjustments to make everything work as expected.
All scripts are written in .js files, divided into:

-   Page functions: necessary for constructing the page markup;
-   General functions: basic operations like class toggles and my unique id generator;
-   Chat functions: everything that makes the app behave like an actual messaging app,
    such as loading messages and sending messages;
-   Data: to ensure the app is as realistic as possible, this file is used to emulate
    some initial entries so that it looks accurate even before the user does anything.

It's worth mentioning that only the initial data was hard-coded.
Throughout the usage, everything is saved, read and retrieved from LocalStorage, which acts as a database here.

### Getting started

Simply do a git clone and then run Live Server (VS Code and other code editors alike)
or open the index.html file. No need to install anything.

### Usage

The code is commented in various sections. Feel free to read and modify here and there to better 
understand the purpose of each part. In the textarea, new messages are sent by pressing "Enter". 
All icons are purely illustrative, except for the vertical ellipsis at the top right corner of the "all chats" list. 
This icon is used to switch between users. When a user is switched, the chats list is updated to show only the chats 
the user is participating in. This feature was added to better demonstrate the message exchange being made, as you can really 
simulate a conversation between two users this way.

#### Note: Given the short time frame to complete, I will be updating this project from time to time to see how far a complex app like this can go without extra help (third parties like libraries and frameworks).

**Front End:** HTML, CSS, JavaScript
**Aditional Styling:** FontAwesome icons
**Back End:** JavaScript, LocalStorage