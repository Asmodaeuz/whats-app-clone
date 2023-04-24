# WhatsApp Clone
## A WhatsApp clone made entirely with HTML, CSS and vanilla JavaScript

### Disclaimer 
This project was created using HTML for the page markup, CSS for stylization and vanilla 
JavaScript to do the rest. No frameworks or libraries where used. The icons provided by 
FontAwesome's CDN to ensure nothing was installed. Besides, this is only for a visual plus, 
no tags, scripts, functions or classes were affected by nor created by third parties.

### About
Since for this test nothing outside the scope of what was specified could be used, I had to make
some adjustments in order to everything work as expected. All scripts are written in .js files,
divided between:
* Page functions: necessary for the construction of the page's markup;
* General functions: basic operations like class toggles and my unique id generator;
* Chat functions: here I wrote what makes the app behaves like an acctual message
exchanging app, such as load messages, send messages and so on;
* Data: To ensure the app comports as realistic as I could make, I used this file to emulate
some initial entries so that it lools accurate even before the user even do anything.

Now, it's worth mentioning that only the initial data were hard-coded. Throughout the usage,
everything is saved, read and retrieved from LocalStorage, which acts here as a database.

### Getting started
Just do a git clone then run the Live Server (VS Code and other code editors alike) or
simply open the index.html file, no need to install anything.

### Usage
The code is commented out in various sections, feel free to read and modify here and there to 
better understand the purpose of each part. In the textarea, new messaes are sent by pressing "Enter".
All icons are purely illustrative, except for the vertical ellipsis at the top right corner of the "all chats"
list. This icon is used to switch between users. When a user is switched, the chats list is updated to show only
the chats the user is participating of. This feature was added to better demonstrate the message exchange being made,
since you can really simulate a conversation between two users this way.

#### Obs.: In light of the short time to finish, I will be updating this project from time to time in order to see
how far a complex app like this can go without extra help (third partis like libs and frameworks).

**Front End:** HTML, CSS, JavaScript
**Aditional Styling:** FontAwesome icons
**Back End:** JavaScript, LocalStorage
