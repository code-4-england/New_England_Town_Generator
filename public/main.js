var NeTowns = {
 myButton: document.getElementById("button"),
 myCanvas: document.getElementById("town"),

setButtonEvent: function() {
  'use strict';
  NeTowns.myButton.addEventListener('click', NeTowns.clickResponse);
},

 clickResponse: function () {
          NeTowns.generateTown();
            //Page.changeCanvasClass();
           // Page.changeButtonText();
        },

generateTown: function () {
            'use strict';
            var prefix = ['Sand', 'Scuttle', 'Carver', 'Co','Hopkin','New','Old', 'Ply', 'Attle'];
            var suffix =['well','harbor','ville','wich','scusset','bridge','hasset', 'ton','town','mouth','bourough']
            var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
            var randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];
            NeTowns.myCanvas.innerHTML = randomPrefix+randomSuffix;


        }

};
NeTowns.setButtonEvent();