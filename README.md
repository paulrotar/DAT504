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

## Version 1.04b

Improved gameplay in Guess the Order.
Added a selection of drinks pulled from this online alcoholic cocktail database http://www.thecocktaildb.com/api/json/v1/1/random.php .

*KNOWN ISSUES*
When you try to click the profile button, there is a small square area where the click doesn't interact.
This probblem appears on mobile too. It might be because an image block the click.
<br/>
If you abuse clicking in the Game section while sound is off, you will hear a random sound from time to time.
<br/>
When selecting a game, pressing between certain mouseX,Y positions, the Guess the Order game will be affected and you will instantly receive a loss.
This can be fixed by pressing the Next prompt button. :) 

# Version 1.05

Improved movile UI

*KNOWN ISSUES*
When you try to click the profile button, there is a small square area where the click doesn't interact.
This probblem appears on mobile too. It might be because an image block the click.
<br/>
If you abuse clicking in the Game section while sound is off, you will hear a random sound from time to time.
<br/>
When selecting a game, pressing between certain mouseX,Y positions, the Guess the Order game will be affected and you will instantly receive a loss.
This can be fixed by pressing the Next prompt button. :)

# Submission achievements

Aimed to have a professional design.
<br/>
Contextual reasoning
<br/>
Version control
<br/>
Inclusion of some API
<br/>
Connecting to other database alredy existent.

# Submission failures 

MAN stack not MEAN stack :( <br/>
Express connection through socket.io failed. <br/> 
Login connection failure to mlab database.

# Expected updates and improvements

New button layout in Version 1.06. <br/>
New dedicated UI in Version 1.1 <br/>
Implement express and login system in Version 1.2 <br/>
Launch app on App Store and Google Play in Version 1.25 <br/>

# Consumption team
Euan Latimer, Will Mellor, Paul Rotar, Angus Davidson, Andrew Dunne