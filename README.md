# Consumption

This project was generated with the MANP5 stack ( MAN stack + P5.js), no express. SOZ :(.

## Instruction to install

Go in your Node.js terminal.

```
-git clone https://github.com/paulrotar/DAT504 
cd DAT504
npm install
npm install -g bower
npm install -g @angular/cli
bower install
cd src/server
npm install

*IF EXPRESS WORKS YOU SHOULD RUN THE NEXT INSTRUCTIONS*
type *node app.js* in terminal
you sould now see Express started on port 3000

Now you need to get into a new terminal window 
cd inside the DAT504 folder and run *npm start*

*You can see the web app on localhost:4200*


*IF EXPRESS DOESN'T WORK*
cd ..
cd ..
npm start


*You can now see it on localhost:4200* 

```

Alternatively if you want to see the webapp on your mobile, please find your computer ip adress, it should be something like this: *192.168.0.somenumber*, and run  

```
ng serve --host 0.0.0.0

```
instead of 
```
npm start

```
Now go onto your mobile browser and enter your computer ip adress with :4200 at the end of it
it should look something like this 

```
192.168.0.152:4200
```


If git is not installed, just download the zip file 

# Version 1.00

Animations are fully done, awaiting for questions database implementation.
Success attempt over verifying login credentials. ( Expected: Version 1.04);
Failed attempt over color blind change.

*KNOWN ISSUES*
When you try to click the profile button, there is a small square area where the click doesn't interact.
Trying to fix issue.

# Version 1.01

Received question database.
Simple implementation.
A more complex example will be available in next version ( Version 1.02 ).

*KNOWN ISSUES*
When you try to click the profile button, there is a small square area where the click doesn't interact.
Still no fix, hopefully there will be one in Version 1.04. 

# Version 1.02

Express implementation failed. Project will continue at the moment without it. An alternative to express might be sockets.io. It it will work, there will be a Version 1.03b update.

*KNOWN ISSUES*
When you try to click the profile button, there is a small square area where the click doesn't interact.
Still no fix, hopefully there will be one in Version 1.04. 

# Version 1.03

Consumption works perfectly on mobile !
Adding comments over the code

*KNOWN ISSUES*
When you try to click the profile button, there is a small square area where the click doesn't interact.
This probblem appears on mobile too. It might be because an image block the click.
Still no fix, hopefully there will be one in Version 1.04. 

## Version 1.03b

Failed implementation of express. Continuing with the other targets.

# Version 1.04

Added sound for the web version of Consumption app.

*KNOWN ISSUES*
When you try to click the profile button, there is a small square area where the click doesn't interact.
This probblem appears on mobile too. It might be because an image block the click.
Still no fix, hopefully there will be one in Version 1.06.

### Target for Version 1.06, final beta version for assignment upload

Implement express, do better graphics, Login system.

# Expected updates

Improved dedicated mobile/tablet UI in Version 1.05.<br/>

New button layout in Version 1.06. <br/>