angular.module('example', [
  'angular-p5'
])

.factory('exampleSketch', ['p5', function(p5) {
  return function(p) {
      
      //Creating colour scheme for design
       
     
      
      var blue = "#212649" ;
      var darkblue = "#191c37" ;
      var orange = "#ff4e00" ;
      var lightorange = "#ff9466" ;
      var darkorange = "#a33307" ;
      var white = "#efefef" ;
      var black = "#000000" ;
      var yellow = "#e69b23" ;
      var ishyellow = "#794a20" ;
      var darkyellow = "#4d2601" ;
      
      //Creates canvas for display size
      var screenwidth = p.windowWidth ;
      var screenheight = p.windowHeight ;
      
      //Images and Graphics
      var imagebg = p.loadImage('/assets/test.png');
      var imagecp1 = p.loadImage('/assets/capac1.png');
      var imagecp2 = p.loadImage('/assets/capac2.png');
      var imgabout = p.loadImage('/assets/buttonabout.png');
      var imghelp = p.loadImage('/assets/buttonhelp.png');
      var imgplay = p.loadImage('/assets/buttonplay.png');
      var imglogo = p.loadImage('/assets/logomic.png');
      var imgback = p.loadImage('/assets/buttonback.png');
      var playic = p.loadImage('/assets/playtrans.png');
      var colorm = p.loadImage('/assets/colorbmeniu.png');
      var available = p.loadImage('/assets/available.png');
      var coming = p.loadImage('/assets/comingsoon.png');
      var guesswho = p.loadImage('/assets/guesswho.png');
      var guessorder = p.loadImage('/assets/guessorder.png');
      var saboteur = p.loadImage('/assets/saboteur.png');
      var tod = p.loadImage('/assets/tod.png');
      var soundonoff = p.loadImage('/assets/soundonoff.png');
      var buttonon = p.loadImage('/assets/buttonon.png');
     
      //Sound Files
      var applause;
      var meow;
      var cheering;
      var moo;
      var boo;
      var woof;
      var neigh;
      var pageturn;
      var pling;
      var rooster;
      var volumevalue = true;
      
      //express
      var socket = io.connect('http://localhost:3000');
      
      //textes
      var helptext;
      var abouttext;
      
      //Shapes for graphics
      var rectlenght1;
      var rectlenght2;
      var rectlenght3;
      var angle;
      var anglep;
      
      var input;
      var nicefont;
      var part = 1;
      var noprofile;
      var urllog;
      var login;
      var name;
      var orderurl;
      var order;
      var ordernumber;
      var neworder;
   
   //Adapts screen resolution for phone/tablet users 
   if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
       
       screen.orientation.lock('landscape');// should lock landscape orientation on mobile
       
       p.preload = function () {
                    nicefont = p.loadFont('/assets/GochiHand-Regular.ttf');
                    name = "nousername";
                    /* urllog = 'https://api.mlab.com/api/1/databases/paulrotardb/collections/login?apiKey=LB-XNdkgi7CtjESs60AEZQLTP7PRAR1b';
                     p.loadJSON(urllog,p.gotData) */
                    orderurl = 'https://api.mlab.com/api/1/databases/paulrotardb/collections/consumptionOrder?apiKey=LB-XNdkgi7CtjESs60AEZQLTP7PRAR1b'; // connecting to the databases
                    p.loadJSON(orderurl, p.gotOrder)  
                };
                // Set up for canvas
                p.setup = function () {
                    p.createCanvas(screenwidth, screenheight);
                    p.noStroke();
                    p.textFont(nicefont);
                    rectlenght1 = 7;
                    rectlenght2 = 7;
                    rectlenght3 = 7;
                    p.angleMode(p.DEGREES);
                    angle = 0;
                    anglep = 0;
                    ordernumber = parseInt(p.random(13))
                };
                // Setting up all the parts/ other pages with a white background 
                p.draw = function () {
                    p.background(white);
                    if (part == 1) {
                        p.mainmenu();
                    }
                    if (part == 2) {
                        p.about();
                    }
                    if (part == 3) {
                        p.play();
                    }
                    if (part == 7) {
                        p.game();
                    }
                    if (part == 4) {
                        p.instructions();
                    }
                    if (part == 5) {
                        p.options();
                    }
                    if (part == 6) {
                        p.profile();
                    }
                };
                p.gotOrder = function (orderdata) {
                    order = orderdata;
                };
                // Positioning all the assets and resizing them to fit to mobile screens 
                p.mainmenu = function () {
                    //p.print(p.mouseX + "  " + p.mouseY); // shows the mouse positoning so we can get the locations of where we need to make on button clicks/ position assests
                    //p.print(p.windowWidth + " spaceeee " + p.windowHeight);
                    p.textAlign(p.CENTER);
                    p.textSize(20); // text size changes the size of the text 
                    p.fill(orange);
                    p.push(); // push and pop, allows us to make changes that only effect this section 
                    p.imageMode(p.CENTER);
                    p.image(imglogo, screenwidth / 2, screenheight / 2 - 35); // setting the position of the logo
                    imglogo.resize(751 / 1.6, 305 / 1.6); // resizing the logo to make it fit on the page
                    p.pop();
                    
                    // Following code is positioning the assets and resizing them to fit on the page 
                    p.push();
                    p.imageMode(p.CENTER);
                    p.image(imgabout, screenwidth / 2 - 250, screenheight / 2 + 125);
                    imgabout.resize(296 / 1.3, 127 / 1.3);

                    p.image(imgplay, screenwidth / 2, screenheight / 2 + 125);
                    imgplay.resize(296 / 1.3, 127 / 1.3);

                    p.image(imghelp, screenwidth / 2 + 250, screenheight / 2 + 125);
                    imghelp.resize(296 / 1.3, 127 / 1.3);

                    p.pop();

                    p.push();

                    p.imageMode(p.CENTER);
                    p.image(imagecp2, screenwidth / 2 + 300, screenheight / 2 - 135);
                    imagecp2.resize(178 / 1.5, 175 / 1.5);

                    p.pop();

                    p.push();

                    p.imageMode(p.CENTER);
                    p.image(imagecp1, screenwidth / 2 - 300, screenheight / 2 - 135);
                    imagecp1.resize(178 / 1.5, 175 / 1.5);

                    p.pop();

                    p.push();

                    p.rectMode(p.CENTER);
                    p.fill(blue);
                    p.rect(screenwidth / 2, 10, 400, 80, 10);
                    p.fill(white);
                    p.textSize(37);
                    p.textAlign(p.CENTER);
                    if (name === "nousername") {
                        if (p.mouseX > 760 && p.mouseX < 1158 && p.mouseY > 152 && p.mouseY < 223) {
                            noprofile = "Please select a profile!";
                        } else {
                            noprofile = "No profile selected!";
                        }
                        p.text(noprofile, screenwidth / 2, 32);
                    } else {
                        p.text("Hello " + name + "!", screenwidth / 2, 32);
                    }
                    p.pop();

                    /*  for( var i=0; i<login.length; i++){
                          if (login[i].username === "paulrotar"){
                              p.print("hello paul");
                          }
                      }
                      
                      */

                };
                // set up for the about page then changing the assests to fit on the page
                p.about = function () {
                    p.fill(black);
                    p.text("This game was developed by Dätmester in 2017", screenwidth / 2, screenheight / 2);

                    p.push
                    p.image(imgback, 32, 33);
                    imgback.resize(87 / 1.4, 87 / 1.4)
                    p.pop


                    p.fill(orange);
                    p.text("About", screenwidth / 2, 60);
                    p.fill(blue);
                    p.rectMode(p.CENTER);
                    p.rect(screenwidth / 2, 70, 500, 5, 5);
                    p.rectMode(p.CORNER);
                };
                // set up for the play page then changing the assests to fit on the page
                p.play = function () {
                    p.fill(blue);
                    p.image(imgback, 32, 36);
                    imgback.resize(87 / 1.4, 87 / 1.4)
                    p.fill(orange);
                    p.text("Select your game mode", screenwidth / 2, 40);
                    p.fill(blue);
                    p.rectMode(p.CENTER);
                    p.rect(screenwidth / 2, 60, 400, 5, 5);
                    p.rectMode(p.CORNER);

                    p.push();
                    p.imageMode(p.CENTER);
                    p.image(guessorder, screenwidth / 2 - 150, 170);
                    guessorder.resize(399 / 1.4, 167 / 1.4)
                    p.image(saboteur, screenwidth / 2 + 150, 170);
                    saboteur.resize(399 / 1.4, 167 / 1.4)
                    p.image(guesswho, screenwidth / 2 - 150, 300);
                    guesswho.resize(399 / 1.4, 167 / 1.4)
                    p.image(tod, screenwidth / 2 + 150, 300);
                    tod.resize(399 / 1.4, 167 / 1.4)
                    p.pop();
                    p.push();
                    if (p.mouseX > 375 && p.mouseX < 657 && p.mouseY > 113 && p.mouseY < 224) {
                        p.imageMode(p.CENTER);
                        p.image(coming, screenwidth / 2 + 150, 170)
                        coming.resize(399 / 1.4, 167 / 1.4)
                        p.imageMode(p.CORNER);
                    }

                    if (p.mouseX > 77 && p.mouseX < 355 && p.mouseY > 244 && p.mouseY < 354) {
                        p.imageMode(p.CENTER);
                        p.image(coming, screenwidth / 2 - 150, 300)
                        coming.resize(399 / 1.4, 167 / 1.4)
                        p.imageMode(p.CORNER);
                    }
                    if (p.mouseX > 375 && p.mouseX < 657 && p.mouseY > 244 && p.mouseY < 351) {
                        p.imageMode(p.CENTER);
                        p.image(coming, screenwidth / 2 + 150, 300)
                        coming.resize(399 / 1.4, 167 / 1.4)
                        p.imageMode(p.CORNER);
                    }
                    p.pop();

                };
                // set up for the  game then changing the assests to fit on the page
                p.game = function () {
                    p.fill(black);
                    p.text(order[ordernumber].question, screenwidth / 2, screenheight / 2);
                    p.image(imgback, 32, 36);
                    imgback.resize(87 / 1.4, 87 / 1.4)
                };
                // set up for the instuctionS, then changing the assests to fit on the page
                p.instructions = function () {
                    p.fill(yellow);
                    p.text(  "The person who’s turn it is clicks on the screen and is given a random prompt" , screenwidth / 2, screenheight / 2-40);
                    p.text(  "(e.g Tallest to shortest). Everyone else lines up and the player then arranges" , screenwidth / 2, screenheight / 2-10);
                    p.text(  " the others in line with the given order. All the other players then have 3 tries" , screenwidth / 2, screenheight / 2+20);
                    p.text(  "to guess the order they are in. If they guess right the player does the forfeit," , screenwidth / 2, screenheight / 2+50);
                    p.text( "if they don’t guess right, everyone else does the forfeit." , screenwidth / 2, screenheight / 2+80);
                    p.image(imgback, 32, 36);
                    imgback.resize(87 / 1.4, 87 / 1.4)
                };
                // set up for the options then changing the assests to fit on the page
                p.options = function () {
                    p.image(imgback, 32, 36);
                    imgback.resize(87 / 1.4, 87 / 1.4)
                    p.fill(orange);
                    p.text("Options", screenwidth / 2, 40);
                    p.fill(blue);
                    p.rectMode(p.CENTER);
                    p.rect(screenwidth / 2, 60, 500, 5, 5);
                    p.rectMode(p.CORNER);
                    p.push();
                    p.fill(blue);
                    p.textSize(37);
                    p.text("Color blind modes", screenwidth / 2, 120);
                    p.text("Sound effects/Music", screenwidth / 2, 160);
                    p.pop();

                    p.push();
                    p.imageMode(p.CENTER);
                    p.image(colorm, screenwidth / 2, screenheight / 2 + 40);
                    colorm.resize(928 / 1.4, 103 / 1.4)
                    if (p.mouseX > 40 && p.mouseX < 704 && p.mouseY > 213 && p.mouseY < 278) {
                        p.image(available, screenwidth / 2, screenheight / 2 + 40);
                        available.resize(815 / 1.4, 59 / 1.4)
                    }
                    p.pop();

                };
                // set up for the profile then changing the assests to fit on the page
                p.profile = function () {
                    p.profile = function () {
                        p.image(imgback, 32, 33);
                        imgback.resize(87 / 1.4, 87 / 1.4)
                    };
                };
                // set up for most mousepressed changing the locations of x and ys so when press changes the page
                p.mousePressed = function () {

                    if (part == 1 && p.mouseX > 20 && p.mouseX < 218 && p.mouseY > 297 && p.mouseY < 374) {
                        part = 2;
                    }

                    if (part == 1 && p.mouseX > 267 && p.mouseX < 465 && p.mouseY > 294 && p.mouseY < 364) {
                        part = 3;
                    }

                    if (part == 1 && p.mouseX > 513 && p.mouseX < 720 && p.mouseY > 293 && p.mouseY < 370) {
                        part = 4;
                    }

                    if (part == 1 && p.mouseX > 603 && p.mouseX < 723 && p.mouseY > 14 && p.mouseY < 129) {
                        part = 5;
                    }

                    if (part == 1 && p.mouseX > 11 && p.mouseX < 128 && p.mouseY > 12 && p.mouseY < 129) {
                        part = 6;
                    }

                    if (part == 2 && p.mouseX > 35 && p.mouseX < 90 && p.mouseY > 34 && p.mouseY < 92) {
                        part = 1;
                    }

                    if (part == 3 && p.mouseX > 35 && p.mouseX < 90 && p.mouseY > 34 && p.mouseY < 92) {
                        part = 1;
                    }

                    if (part == 3 && p.mouseX > 77 && p.mouseX < 357 && p.mouseY > 112 && p.mouseY < 224) {
                        part = 7;
                    }

                    if (part == 4 && p.mouseX > 35 && p.mouseX < 90 && p.mouseY > 34 && p.mouseY < 92) {
                        part = 1;
                    }

                    if (part == 5 && p.mouseX > 35 && p.mouseX < 90 && p.mouseY > 34 && p.mouseY < 92) {
                        part = 1;
                    }

                    if (part == 6 && p.mouseX > 35 && p.mouseX < 90 && p.mouseY > 34 && p.mouseY < 92) {
                        part = 1;
                    }
                    if (part == 7 && p.mouseX > 35 && p.mouseX < 90 && p.mouseY > 34 && p.mouseY < 92) {
                        part = 3;
                    }
                    if (part == 7) {
                        ordernumber = parseInt(p.random(13));
                    }

                };
        } else {
            
    //Requests data from database        
    p.preload = function() {
        helptext = "The person who’s turn it is clicks on the screen and is given a random prompt (e.g Tallest to shortest). Everyone else lines up and the player then arranges the others in line with the given order. All the other players then have 3 tries to guess the order they are in. If they guess right the player does the forfeit, if they don’t guess right, everyone else does the forfeit.";
        abouttext = "This game was developed by Dätmeister in 2017. Consumption will help you achieve all you need for Pre-Drinks, whether it’s to get Drunk, messy or to catch up with your already hammered friends, this game is for you. However drink responsibly!";
        
        applause = p.loadSound('/assets/sound/Applause.mp3');
        meow = p.loadSound('/assets/sound/Cat.mp3');
        cheering = p.loadSound('/assets/sound/Cheering.mp3');
        moo = p.loadSound('/assets/sound/Cow.mp3');
        boo = p.loadSound('/assets/sound/Crowd.mp3');
        woof = p.loadSound('/assets/sound/Dog.mp3');
        neigh = p.loadSound('/assets/sound/Horse.mp3');
        pageturn = p.loadSound('/assets/sound/PageTurn.mp3');
        pling = p.loadSound('/assets/sound/Pling.mp3');
        rooster = p.loadSound('/assets/sound/Rooster.mp3');
        
        nicefont = p.loadFont('/assets/GochiHand-Regular.ttf'); // loading font
        name = "nousername";
        
        //Login url
        /* urllog = 'https://api.mlab.com/api/1/databases/paulrotardb/collections/login?apiKey=LB-XNdkgi7CtjESs60AEZQLTP7PRAR1b';
        p.loadJSON(urllog,p.gotData) */
        
        //Alternative to express
        orderurl = 'https://api.mlab.com/api/1/databases/paulrotardb/collections/consumptionOrder?apiKey=LB-XNdkgi7CtjESs60AEZQLTP7PRAR1b';
        p.loadJSON(orderurl,p.gotOrder)
    }
      
    //Setup of the main webpage
    p.setup = function() {   
        
      //Create canvas    
      p.createCanvas( screenwidth, screenheight);  
        
      input = p.createInput();
        
      p.noStroke(); // set no stroke for the whole project
      p.textFont(nicefont); // setting text font for the whole project
        rectlenght1 = 7;  //
        rectlenght2 = 7;  // options rectangles
        rectlenght3 = 7;  //
      p.angleMode(p.DEGREES);
        angle = 0;  //
        anglep = 0; // resolving angle on profile and options button
        
        // As random doesn't return a whole number
        ordernumber = parseInt(p.random(13))
    };
            
    // Looping throught the webpage
    p.draw = function() {
        p.soundstate();
        p.background ( imagebg ); // setting background
        
        p.imageMode (p.CENTER);
        p.image(playic,screenwidth/2,87); // little icon at the top of webpage
        p.imageMode (p.CORNER);
        
        // Changing menus
        if (part == 1 ) {
           p.mainmenu();        // Main menu
       }
        if (part == 2 ) {
           p.about();           // About page
       }
        if (part == 3 ) {
           p.play();            // Play page
       }
        if (part == 7 ) {
            p.game();           // Guess the order game
        }
        if (part == 4 ) {
           p.instructions();    // Help page
       }
        if (part == 5 ) {
           p.options();         // Options page
       }
        if (part == 6 ) {
           p.profile();         // Profile page
       }
    };
      
      // Gets data from the login database
/*    p.gotData = function(data){
        login = data;
    }*/
      
      // Gets data from questions database
      p.gotOrder = function(orderdata){
          order = orderdata;
      }
      
    //express stuff  
      
      socket.on('questionss', function(dataquest){
    p.gotQuestions(dataquest);
      })
      
      p.gotQuestions = function(orderssss){
          neworder=orderssss;
      }
    
    // Home page
    p.mainmenu = function() {
        //p.print(p.windowWidth + " spaceeee " + p.windowHeight);
        //p.print(neworder);
        p.textAlign( p.CENTER ); //Align all text
        p.textSize(70);
        p.fill(orange);
        
        //Setting logo
        p.imageMode(p.CENTER);
        p.image( imglogo, screenwidth/2, screenheight/2);
        p.imageMode(p.CORNER);
        
        //Animations over button - about button
        p.fill(blue);
        p.rect(484,649,295,rectlenght1,10);
        if(p.mouseX > 499 && p.mouseX < 765 && p.mouseY > 662 && p.mouseY < 760){
           rectlenght1=rectlenght1+5;
            if(rectlenght1>130){
                rectlenght1=130;
            }
           } else {
               rectlenght1=rectlenght1-5;
               if(rectlenght1<7){
                   rectlenght1=7;
               }
           }
        p.image(imgabout,484,649);
        
        //Animations over button - play button
        p.fill(blue);
        p.rect(812,649,295,rectlenght2,10);
        if(p.mouseX > 827 && p.mouseX < 1093 && p.mouseY > 662 && p.mouseY < 760){
           rectlenght2=rectlenght2+5;
            if(rectlenght2>130){
                rectlenght2=130;
            }
           } else {
               rectlenght2=rectlenght2-5;
               if(rectlenght2<7){
                   rectlenght2=7;
               }
           }
        p.image(imgplay,812,649);
        
        //Animations over button - help button
        p.fill(blue);
        p.rect(1140,649,295,rectlenght3,10);
        if(p.mouseX > 1155 && p.mouseX < 1420 && p.mouseY > 662 && p.mouseY < 760){
           rectlenght3=rectlenght3+5;
            if(rectlenght3>130){
                rectlenght3=130;
            }
           } else {
               rectlenght3=rectlenght3-5;
               if(rectlenght3<7){
                   rectlenght3=7;
               }
           }
        p.image(imghelp,1139,649);
        
        //Animation over profile button
        p.push();
        
        p.imageMode(p.CENTER);
        p.translate(1419,249);
        p.rotate( angle ); // rotates the picture
        p.image(imagecp2,0,0);
        
        p.pop();
        
        if(p.mouseX > 1352 && p.mouseX < 1477 && p.mouseY > 185 && p.mouseY < 307){
           angle=angle+1;
            if ( angle == 360){
                angle = 0;
                angle=angle+1; // Clockwise if you have mouse over
            }
           } else {
               angle=angle-1;
               if(angle<0){
                   angle = 0; // Counter-clockwise if you have mouse somewhere else
               }
           }
        
        //Animation over options button
        p.push();
        
        p.imageMode(p.CENTER);
        p.translate(500,249);
        p.rotate(anglep);
        p.image(imagecp1,0,0);
        
        p.pop();
        
        if(p.mouseX > 433 && p.mouseX < 562 && p.mouseY > 185 && p.mouseY < 307){
           anglep=anglep-1;
            if ( anglep == -360){
                anglep = 0;
                anglep=anglep+1; // Counter-clockwise
            }
           } else {
               anglep=anglep+1;
               if(anglep>0){
                   anglep = 0; // Clockwise
               }
           }
        
        p.push();
        
        p.rectMode(p.CENTER);
        p.fill( blue );
        p.rect(screenwidth/2,185, 400,80,10);
        p.fill(white);
        p.textSize(43);
        p.textAlign(p.CENTER);
        
        // If username is not found
        if ( name === "nousername") {
            if ( p.mouseX > 760 && p.mouseX<1158 && p.mouseY>152 && p.mouseY<223){
                noprofile = "Please select a profile!";
            } else {
                noprofile = "No profile selected!";
            }
            p.text(noprofile,screenwidth/2,200);
        } else {
            //If user is found
            p.text( "Hello " + name + "!",screenwidth/2,200);
        }
        p.pop();
        
    //login function    
      /*  for( var i=0; i<login.length; i++){
            if (login[i].username === "paulrotar"){
                p.print("hello paul");
            }
        }
        
        */
        
    }
    
    //About menu
    p.about = function() {
        
        
        p.fill(black);
        p.image(imgback,414, 163); //back image
        p.fill ( orange );
        p.text("About",screenwidth/2,230);
        p.fill(blue);
        p.rectMode(p.CENTER);
        p.rect(screenwidth/2,250,500,5,5);
        p.rectMode(p.CORNER);
        p.push();
        p.translate(-399,-100)
        p.fill(yellow);
        p.textAlign(p.CENTER);
        p.textSize(36);
        p.text(abouttext,screenwidth/2,screenheight/2,800,500)
        p.pop();
        p.image(imgback, 414, 163);
    };
      
    //Play menu        
    p.play = function() {
        p.fill(blue);
        p.image(imgback,414, 163); // backbutton
        p.fill ( orange );
        p.text("Select your play mode",screenwidth/2,225);
        p.fill(blue);
        p.rectMode(p.CENTER);
        p.rect(screenwidth/2,250,750,5,5);
        p.rectMode(p.CORNER);
        
        //images for each mode
        p.push();
        p.imageMode(p.CENTER);
        p.image(guessorder,screenwidth/2 - 250, 400);
        p.image(saboteur,screenwidth/2 + 250, 400);
        p.image(guesswho, screenwidth/2 - 250, 630);
        p.image(tod, screenwidth/2 + 250, 630);
        p.pop();
        
        //Coming soon images
        p.push();
        if(p.mouseX > 1011 && p.mouseX < 1404 && p.mouseY > 319 && p.mouseY < 480 ){
            p.imageMode(p.CENTER);
            p.image(coming,screenwidth/2 + 250, 400)
            p.imageMode(p.CORNER);
        }
        if(p.mouseX > 511 && p.mouseX < 904 && p.mouseY > 549 && p.mouseY < 710 ){
            p.imageMode(p.CENTER);
            p.image(coming,screenwidth/2 - 250, 630)
            p.imageMode(p.CORNER);
        }
        if(p.mouseX > 1011 && p.mouseX < 1404 && p.mouseY > 549 && p.mouseY < 710  ){
            p.imageMode(p.CENTER);
            p.image(coming,screenwidth/2 + 250, 630)
            p.imageMode(p.CORNER);
        }
        p.pop();
    };
    
    //Guess the order game        
    p.game = function() {
        p.fill(black);
        p.text(order[ordernumber].question, screenwidth/2, screenheight/2);
        p.image(imgback,414, 163);
    };
      
    //Help menu
    p.instructions = function() {
        p.fill ( orange );
        p.text("Instructions",screenwidth/2,225);
        p.fill(blue);
        p.rectMode(p.CENTER);
        p.rect(screenwidth/2,250,550,5,5);
        p.rectMode(p.CORNER);
        p.push();
        p.translate(-399,-150)
        p.fill(yellow);
        p.textAlign(p.CENTER);
        p.textSize(36);
        p.text(helptext,screenwidth/2,screenheight/2,800,500)
        p.pop();
        p.image(imgback, 414, 163);
    };
      
    //Options menu        
    p.options = function() {
        p.image(imgback,414, 163);
        p.fill ( orange );
        p.text("Options",screenwidth/2,225);
        p.fill(blue);
        p.rectMode(p.CENTER);
        p.rect(screenwidth/2,250,500,5,5);
        p.rectMode(p.CORNER);
        p.push();
        p.fill(blue);
        p.textSize(60);
        p.text("Color blind modes",screenwidth/2,307);
        p.text("Sound effects/Music",screenwidth/2,screenheight/2 + 50);
        p.pop();
        
        p.push();
        p.imageMode(p.CENTER);
        p.image(colorm,screenwidth/2,400);
        
        //Color blind coming soon
        if (p.mouseX > 489 && p.mouseX < 1422 && p.mouseY > 349 && p.mouseY < 449){
            p.image(available,screenwidth/2,400);
        }
        p.pop();
        
        
        p.push();
        p.imageMode(p.CENTER);
        p.image(soundonoff,screenwidth/2,650);
        p.pop();
        if (volumevalue == true){
            p.push();
            p.imageMode(p.CENTER);
            p.image(buttonon,796,650);
            p.pop();
        } 
        if ( volumevalue == false){
            p.push();
            p.imageMode(p.CENTER);
            p.image(buttonon,1123,650 );
            p.pop();
        }
        p.text(p.mouseX + " " + p.mouseY , screenwidth/2, screenheight/2);
        
    };
     
    p.soundstate = function(){
        if (volumevalue == true){
            pageturn.setVolume(0.3);
            applause.setVolume(0.1);
            meow.setVolume(0.2);
            cheering.setVolume(0.2);
            moo.setVolume(0.2);
            boo.setVolume(0.2);
            woof.setVolume(0.2);
            neigh.setVolume(0.2);
            pling.setVolume(0.2);
            rooster.setVolume(0.2);
        } 
        if ( volumevalue == false){
            pageturn.setVolume(0);
            applause.setVolume(0);
            meow.setVolume(0);
            cheering.setVolume(0);
            moo.setVolume(0);
            boo.setVolume(0);
            woof.setVolume(0);
            neigh.setVolume(0);
            pling.setVolume(0);
            rooster.setVolume(0);
        }
    }
            
     p.credentials = function(){
        input.position(screenwidth/2,screenheight/2);
        var name = input.value();
        input.value('');
    };    
            
    //Profile menu        
    p.profile = function() {
        p.image(imgback,414, 163);
    };
            
    // If mouse pressed functions        
    p.mousePressed = function() {
        
        // If mouse pressed on about go to about
        if ( part == 1 && p.mouseX > 499 && p.mouseX < 765 && p.mouseY > 662 && p.mouseY < 760) {
            part = 2;
            pageturn.play();
        }
        
        // If mouse pressed on play go to play
        if ( part == 1 && p.mouseX > 827 && p.mouseX < 1093 && p.mouseY > 662 && p.mouseY < 760) {
            part = 3;
            pageturn.play();
        }
        
        // If mouse pressed on help go to help
        if ( part == 1 && p.mouseX > 1155 && p.mouseX < 1420 && p.mouseY > 662 && p.mouseY < 760) {
            part = 4;
            pageturn.play();
        }
       
        // If mouse pressed on options go to options
        if ( part == 1 && p.mouseX > 1352 && p.mouseX < 1477 && p.mouseY > 185 && p.mouseY < 307) {
            part = 5;
            pageturn.play();
        }
        
        // If mouse pressed on profile go to profile
        if ( part == 1 && p.mouseX > 433 && p.mouseX < 562 && p.mouseY > 185 && p.mouseY < 307) {
            part = 6;
            pageturn.play();
        }
        
        //Go back button
        if ( part == 2 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 1;
            pageturn.play();
        }
        
        //Go back button
        if ( part == 3 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 1;
            pageturn.play();
        }
        
        //Guess the order game
        if ( part == 3 && p.mouseX > 511 && p.mouseX < 904 && p.mouseY > 319 && p.mouseY < 480 ) { 
            part = 7;
            neigh.play();
        }
        
        //Go back button
        if ( part == 4 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 1;
            pageturn.play();
        }
        
        //Go back button
        if ( part == 5 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 1;
            pageturn.play();
        }
        
        if ( part == 5 && p.mouseX > 663 && p.mouseX < 929 && p.mouseY > 601 && p.mouseY < 700){
                volumevalue = true;
            }
        if ( part == 5 && p.mouseX > 990 && p.mouseX < 1256 && p.mouseY > 601 && p.mouseY < 700){
                volumevalue = false;
        }
        
        //Go back button
        if ( part == 6 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 1;
            pageturn.play();
        }
        
        //Go back button
        if ( part == 7 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 3;
            boo.play();
        }
        
        //Change question
        if ( part == 7){
            ordernumber = parseInt(p.random(13));
            meow.play();
            
        }
        
        
    };
    
      
  }
  };
}]);

/*
-------FAILED ATTEMPS ON CODING-------

--Color BLind Mode--
We wanted to implement the option to change the game interface so color blind people won't have any problems playing it.
But the moment I tryed to run the game loading just some protanopia elements, it took to much to load so I decided to not implement this into our game.
The values seen below are not implemented in the actual code above.


if ( defaultv == true ){
            p.loadPixels();
            imagebg = image1;
            imagecp1 = image2;
            imagecp2 = image3;
            imgabout = image4;
            imghelp = image5;
            imgplay = image6;
            imglogo = image7;
            imgback = image8;
            playic = image9;
            blue = "#212649" ;
            darkblue = "#191c37" ;
            orange = "#ff4e00" ;
            lightorange = "#ff9466" ;
            darkorange = "#a33307" ;
            white = "#efefef" ;
            black = "#000000" ;
            yellow = "#e69b23" ;
            ishyellow = "#794a20" ;
            darkyellow = "#4d2601" ;
            protanopia = false;
            deuteranopia = false;
            tritanopia = false;
            p.updatePixels();
        }
        
        if ( protanopia == true ){
            defaultv = false;
            deuteranopia = false;
            tritanopia = false;
            imagebg = image16;
            imgabout = image13
            imghelp = image14;
            imgplay = image15;
            playic = image10;
            blue = "#17284b" ;
            darkblue = "#101e39" ;
            orange = "#9f8e1c" ;
            lightorange = "#c0b071" ;
            darkorange = "#665b13" ;
            white = "#f1eeee" ;
            black = "#000000" ;
            yellow = "#c0ab27" ;
            ishyellow = "#5f5623" ;
            darkyellow = "#373107" ;
        
        }
        
        if (deuteranopia == true){
            defaultv = false;
            protanopia = false;
            tritanopia = false;
            blue = "#0d2948" ;
            darkblue = "#071f36" ;
            orange = "#b38600" ;
            lightorange = "#d8a862" ;
            darkorange = "#735600" ;
            white = "#ffeaf0" ;
            black = "#000000" ;
            yellow = "#d7a21f" ;
            ishyellow = "#6b511e" ;
            darkyellow = "#3e2f00" ;
        }
        
        if (tritanopia == true){
            defaultv = false;
            protanopia = false;
            deuteranopia = false;
            blue = "#182c30" ;
            darkblue = "#122123" ;
            orange = "#ff4a4d" ;
            lightorange = "#ff9099" ;
            darkorange = "#a43032" ;
            white = "#f1edff" ;
            black = "#000000" ;
            yellow = "#ec909b" ;
            ishyellow = "#7b363b" ;
            darkyellow = "#4e2326" ;
        }
--End of Color Blind--

*/