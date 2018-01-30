//gloabl iterator 
var iterator = 0;

// skins array contains objects (includes all skin images)

var skins = [{
        image: "../images/skins/black-race.png",
        value: 1
    }, {
        image: "../images/skins/asian-race.png",
        value: 2
    },{
        image: "../images/skins/hispanic-race.png",
        value: 3
    },{
        image: "../images/skins/white-race.png",
        value: 4
    }];

// jersey array contains objects (includes all jersey images)

var jerseys = [ 
    "../images/jerseys/atlanta-hawks.png",
    "../images/jerseys/boston-celtics.png", 
    "../images/jerseys/brooklyn-nets.png", 
    "../images/jerseys/charlotte-hornets.png" 
    ];

// grabbing the id button "skin" for click event

document.getElementById("skin").addEventListener("click", skinChange);

//function that runs when button is clicked
function skinChange() {
   
    //checking if the iterator exceeds more than 4
    if( iterator > (skins.length -1)){
        iterator = 0;
    } else{
        iterator++;
    }

    for (var key in skins) {
        if (skins[key].value === iterator) {
            console.log(skins[key].image);
        }
    }
}