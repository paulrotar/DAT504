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
      var nicefont;
      var part = 1;

   if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
           p.setup = function() {
            p.createCanvas( screenwidth, screenheight);
            p.background ("#000000");
           }
        } else {
            
    p.preload = function() {
        nicefont = p.loadFont('/assets/GochiHand-Regular.ttf');
    }
      
    p.setup = function() {
      p.createCanvas( screenwidth, screenheight);
      p.noStroke();
      p.textFont(nicefont);
    };

    p.draw = function() {
        p.background ( imagebg );
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
          
    p.mainmenu = function() {
        //p.print(p.windowWidth + " spaceeee " + p.windowHeight);
        p.textAlign( p.CENTER );
        p.textSize(70);
        p.fill(orange);
        p.imageMode(p.CENTER);
        p.image(imagecp2,1419,249);
        p.image(imagecp1,500,249);
        p.image( imglogo, screenwidth/2, screenheight/2);
        p.imageMode(p.CORNER);
        p.image(imgabout,484,649);
        p.image(imgplay,812,649);
        p.image(imghelp,1139,649);
        p.text(p.mouseX + " spaceee " + p.mouseY, screenwidth/2, screenheight/2);
        
        
    }
    
    p.about = function() {
        p.fill(black);
        p.text(p.mouseX + " spaceee " + p.mouseY, screenwidth/2, screenheight/2);
        p.image(imgback,414, 163);
        p.fill ( orange );
        p.text("About",screenwidth/2,230);
    };
      
    p.play = function() {
        p.fill(blue);
        p.text(p.mouseX + " spaceee " + p.mouseY, screenwidth/2, screenheight/2);
    };
      
    p.instructions = function() {
        p.fill(yellow);
        p.text(p.mouseX + " spaceee " + p.mouseY, screenwidth/2, screenheight/2);
    };
      
    p.options = function() {
        
    };
      
    p.profile = function() {
        
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
        
    };
    
      
  }
  };
}]);
