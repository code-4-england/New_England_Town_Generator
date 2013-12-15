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
            var prefix = ['Ames','Am','Day','Sand', 'Scuttle','Somer', 'Carver', 'Co','Hopkin','Hook','New','Nor','North','South','East','West','Old', 'Ply', 'Attle','Man', 'Hud','Town','Milton','Rut','Bed', 'Stow','Fox','Box', 'Kenne','Dart', 'Glaston','Glouce','Well','War', 'Mald','Worce','Way','Wey','Charl','Port','Bright','Middle', 'Drac', 'Taunt','Gro', 'Act','Salis', 'Web', 'Wake', 'Law', 'Deer', 'Hamp', 'Pea', 'Rox', 'Marble','Frank','Belcher','Fitch','And','Ded', 'Saug', 'Nash','Dor','Lunen', 'Spring', 'Roch', 'Strat','Colch','Ux','Marl' ];
            var suffix =['well','field','harbor','ville','wich','wood','scusset','bridge','hasset','herst', 'ton','son','town','mouth','bourough','chester','head','bury','land','send','burn', 'boro','bunk','mont','coag','mantic','cut','den','wick']
            var randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
            var randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];
            NeTowns.myCanvas.innerHTML = randomPrefix+randomSuffix;
        }

};
NeTowns.setButtonEvent();