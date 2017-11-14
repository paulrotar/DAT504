angular.module('example', [
  'angular-p5'
])
.factory('exampleSketch', ['p5', function(p5) {
  return function(p) {
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
      var screenwidth = p.windowWidth ;
      var screenheight = p.windowHeight ;
      var imagebg = p.loadImage('/assets/test.png');
      var imagecp1 = p.loadImage('/assets/capac1.png');
      var imagecp2 = p.loadImage('/assets/capac2.png');
      var imgabout = p.loadImage('/assets/buttonabout.png');
      var imghelp = p.loadImage('/assets/buttonhelp.png');
      var imgplay = p.loadImage('/assets/buttonplay.png');
      var imglogo = p.loadImage('/assets/logomic.png');
      var imgback = p.loadImage('/assets/buttonback.png');
      var playic = p.loadImage('/assets/playtrans.png');
      var rectlenght1;
      var rectlenght2;
      var rectlenght3;
      var angle;
      var anglep;
      var nicefont;
      var part = 1;
      var noprofile;
      var url;
      var login;
      var name;

   if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
           p.setup = function() {
            p.createCanvas( screenwidth, screenheight);
            p.background ("#000000");
           }
        } else {
            
    p.preload = function() {
        nicefont = p.loadFont('/assets/GochiHand-Regular.ttf');
        name = "nousername";
       /* url = 'https://api.mlab.com/api/1/databases/paulrotardb/collections/login?apiKey=LB-XNdkgi7CtjESs60AEZQLTP7PRAR1b';
        p.loadJSON(url,p.gotData) */
    }
      
    p.setup = function() {
      p.createCanvas( screenwidth, screenheight);
      p.noStroke();
      p.textFont(nicefont);
        rectlenght1 = 7;
        rectlenght2 = 7;
        rectlenght3 = 7;
      p.angleMode(p.DEGREES);
        angle = 0;
        anglep = 0;
    };

    p.draw = function() {
        p.background ( imagebg );
        
        p.imageMode (p.CENTER);
        p.image(playic,screenwidth/2,87);
        p.imageMode (p.CORNER);
        if (part == 1 ) {
           p.mainmenu();
       }
        if (part == 2 ) {
           p.about();
       }
        if (part == 3 ) {
           p.play();
       }
        if (part == 4 ) {
           p.instructions();
       }
        if (part == 5 ) {
           p.options();
       }
        if (part == 6 ) {
           p.profile();
       }
    };
            
    p.gotData = function(data){
        login = data;
    }
          
    p.mainmenu = function() {
        //p.print(p.windowWidth + " spaceeee " + p.windowHeight);
        p.textAlign( p.CENTER );
        p.textSize(70);
        p.fill(orange);
        p.imageMode(p.CENTER);
        p.image( imglogo, screenwidth/2, screenheight/2);
        p.imageMode(p.CORNER);
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
        
        p.push();
        
        p.imageMode(p.CENTER);
        p.translate(1419,249);
        p.rotate( angle );
        p.image(imagecp2,0,0);
        
        p.pop();
        
        if(p.mouseX > 1352 && p.mouseX < 1477 && p.mouseY > 185 && p.mouseY < 307){
           angle=angle+1;
            if ( angle == 360){
                angle = 0;
                angle=angle+1;
            }
           } else {
               angle=angle-1;
               if(angle<0){
                   angle = 0;
               }
           }
        
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
                anglep=anglep+1;
            }
           } else {
               anglep=anglep+1;
               if(anglep>0){
                   anglep = 0;
               }
           }
        
        p.push();
        
        p.rectMode(p.CENTER);
        p.fill( blue );
        p.rect(screenwidth/2,185, 400,80,10);
        p.fill(white);
        p.textSize(43);
        p.textAlign(p.CENTER);
        if ( name === "nousername") {
            if ( p.mouseX > 760 && p.mouseX<1158 && p.mouseY>152 && p.mouseY<223){
                noprofile = "Please select a profile!";
            } else {
                noprofile = "No profile selected!";
            }
            p.text(noprofile,screenwidth/2,200);
        } else {
            p.text( "Hello " + name + "!",screenwidth/2,200);
        }
        p.pop();
        
      /*  for( var i=0; i<login.length; i++){
            if (login[i].username === "paulrotar"){
                p.print("hello paul");
            }
        }
        
        */
        
    }
    
    p.about = function() {
        p.fill(black);
        p.text(p.mouseX + " spaceee " + p.mouseY, screenwidth/2, screenheight/2);
        p.image(imgback,414, 163);
        p.fill ( orange );
        p.text("About",screenwidth/2,230);
        p.fill(blue);
        p.rectMode(p.CENTER);
        p.rect(screenwidth/2,250,500,5,5);
        p.rectMode(p.CORNER);
    };
      
    p.play = function() {
        p.fill(blue);
        p.text(p.mouseX + " spaceee " + p.mouseY, screenwidth/2, screenheight/2);
        p.image(imgback,414, 163);
    };
      
    p.instructions = function() {
        p.fill(yellow);
        p.text(p.mouseX + " spaceee " + p.mouseY, screenwidth/2, screenheight/2);
        p.image(imgback,414, 163);
    };
      
    p.options = function() {
        p.image(imgback,414, 163);
        p.fill(black);
        p.text(p.mouseX + " spaceee " + p.mouseY, screenwidth/2, screenheight/2);
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
        p.text("Sound effects/Music",screenwidth/2,screenheight/2 + 50)
        p.pop();
        
    };
      
    p.profile = function() {
        p.image(imgback,414, 163);
    };
    
    p.mousePressed = function() { 
        if ( part == 1 && p.mouseX > 499 && p.mouseX < 765 && p.mouseY > 662 && p.mouseY < 760) {
            part = 2;
        }
        
        if ( part == 1 && p.mouseX > 827 && p.mouseX < 1093 && p.mouseY > 662 && p.mouseY < 760) {
            part = 3;
        }
        
        if ( part == 1 && p.mouseX > 1155 && p.mouseX < 1420 && p.mouseY > 662 && p.mouseY < 760) {
            part = 4;
        }
        
        if ( part == 1 && p.mouseX > 1352 && p.mouseX < 1477 && p.mouseY > 185 && p.mouseY < 307) {
            part = 5;
        }
        
        if ( part == 1 && p.mouseX > 433 && p.mouseX < 562 && p.mouseY > 185 && p.mouseY < 307) {
            part = 6;
        }
        
        if ( part == 2 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 1;
        }
        
        if ( part == 3 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 1;
        }
        
        if ( part == 4 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 1;
        }
        
        if ( part == 5 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 1;
        }
        
        if ( part == 6 && p.mouseX > 414 && p.mouseX < 500 && p.mouseY > 163 && p.mouseY < 248) {
            part = 1;
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
