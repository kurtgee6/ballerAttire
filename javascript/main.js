//gloabl iterator 
var skinIterator = 0;
var jerseyIterator = 0;
var hairIterator = 0;
var shortsIterator = 0;
var backgroundIterator = 0;
var accessoriesIterator = 0;

////////////////////////////////////////////////////////////////////////
//////////////////////////////// SKINS /////////////////////////////////

// skins array contains objects (includes all skin images)

var skins = [{
        image: "images/skins/black-race.png",
        value: 1
    }, {
        image: "images/skins/asian-race.png",
        value: 2
    },{
        image: "images/skins/hispanic-race.png",
        value: 3
    },{
        image: "images/skins/white-race.png",
        value: 4
}];

// grabbing the id button "skin" for click event

// document.getElementById("skinButton").addEventListener("click", skinChange);

//function that runs when button is clicked
function skinChange() {
   
    //checking if the iterator exceeds more than 4
    if( skinIterator > (skins.length -1)){
        skinIterator = 0;
    } else{
        skinIterator++;
    }

    //iterating over the object object
    for (var key in skins) {
        if (skins[key].value === skinIterator) {
            console.log(skins[key].image);
            // change src 
            document.getElementById("avatar").setAttribute("src", skins[key].image); 
        }
    }
}

////////////////////////////////////////////////////////////////////////
//////////////////////////////// HAIRS /////////////////////////////////


// hair array contains objects (includes all hair images)

var hairs = [{
        image: "images/hair/hair-one.png",
        value: 1
    },{
        image: "images/hair/hair-two.png",
        value: 2
    },{
        image: "images/hair/hair-three.png",
        value: 3
    },{
        image: "images/hair/hair-four.png",
        value: 4
    },{
        image: "images/hair/blank.png",
        value: 5
}];

// grabbing the id button "hair" for click event

// document.getElementById("hairButton").addEventListener("click", hairChange);

//function that runs when button is clicked
function hairChange() {
   
    //checking if the iterator exceeds more than 4
    if( hairIterator > (hairs.length -1)){
        hairIterator = 0;
    } else{
        hairIterator++;
    }

    //iterating over the object object
    for (var key in hairs) {
        if (hairs[key].value === hairIterator) {
            console.log(hairs[key].image);

            document.getElementById("hair").setAttribute("src", hairs[key].image); 
        }
    }
}

////////////////////////////////////////////////////////////////////////
////////////////////////////// JERSEYS /////////////////////////////////

// jersey array contains objects (includes all jersey images)

var jerseys = [{
        image: "images/jerseys/atlanta-hawks.png",
        value: 1
    }, {
        image: "images/jerseys/boston-celtics.png",
        value: 2
    },{
        image: "images/jerseys/brooklyn-nets.png", 
        value: 3
    },{
        image: "images/jerseys/charlotte-hornets.png",
        value: 4
    },{
        image: "images/jerseys/chicago-bulls.png",
        value: 5
    },{
        image: "images/jerseys/cleveland-cavaliers.png",
        value: 6
    },{
        image: "images/jerseys/dallas-mavericks.png",
        value: 7
    },{
        image: "images/jerseys/denver-nuggets.png",
        value: 8
    },{
        image: "images/jerseys/detroit-pistons.png",
        value: 9
    },{
        image: "images/jerseys/golden-state-warriors.png",
        value: 10
    },{
        image: "images/jerseys/houston-rockets.png",
        value: 11
    },{
        image: "images/jerseys/indiana-pacers.png",
        value: 12
    },{
        image: "images/jerseys/los-angeles-clippers.png",
        value: 13
    },{
        image: "images/jerseys/los-angeles-lakers.png",
        value: 14
    },{
        image: "images/jerseys/memphis-grizzlies.png",
        value: 15
    },{
        image: "images/jerseys/miami-heat.png",
        value: 16
    },{
        image: "images/jerseys/milwaukee-bucks.png",
        value: 17
    },{
        image: "images/jerseys/minnesota-timberwolves.png",
        value: 18
    },{
        image: "images/jerseys/new-orleans-pelicans.png",
        value: 19
    },{
        image: "images/jerseys/new-york-knicks.png",
        value: 20
    },{
        image: "images/jerseys/oklahoma-city-thunder.png",
        value: 21
    },{
        image: "images/jerseys/orlando-magic.png",
        value: 22
    },{
        image: "images/jerseys/philadelphia-sixers.png",
        value: 23
    },{
        image: "images/jerseys/phoenix-suns.png",
        value: 24
    },{
        image: "images/jerseys/san-antonio-spurs.png",
        value: 25
    },{
        image: "images/jerseys/toronto-raptors.png",
        value: 26
    },{
        image: "images/jerseys/utah-jazz.png",
        value: 27
    },{
        image: "images/jerseys/washington-wizards.png",
        value: 28
    },{
        image: "images/jerseys/portland-trailblazers.png",
        value: 29
    },{
        image: "images/jerseys/sacramento-kings.png",
        value: 30
}];

// grabbing the id button "jersey" for click event

document.getElementById("jerseyButton").addEventListener("click", jerseyChange);

//function that runs when button is clicked
function jerseyChange() {
   
    //checking if the iterator exceeds more than 4
    if( jerseyIterator > (jerseys.length -1)){
        jerseyIterator = 0;
    } else{
        jerseyIterator++;
    }
    
    //iterating over the object object
    for (var key in jerseys) {
        if (jerseys[key].value === jerseyIterator) {
            console.log(jerseys[key].image);
            // change src 
            document.getElementById("jersey").setAttribute("src", jerseys[key].image); 
        }
    }
}

////////////////////////////////////////////////////////////////////////
////////////////////////////// SHORTS //////////////////////////////////

// jersey array contains objects (includes all jersey images)

var shorts = [{
        image: "images/shorts/atlanta-hawks.png",
        value: 1
    }, {
        image: "images/shorts/bostons-celtics.png",
        value: 2
    },{
        image: "images/shorts/brooklyn-nets.png", 
        value: 3
    },{
        image: "images/shorts/charlotte-hornets.png",
        value: 4
    },{
        image: "images/shorts/chicago-bulls.png",
        value: 5
    },{
        image: "images/shorts/cleveland-cavaliers.png",
        value: 6
    },{
        image: "images/shorts/dallas-mavericks.png",
        value: 7
    },{
        image: "images/shorts/denver-nuggets.png",
        value: 8
    },{
        image: "images/shorts/detroit-pistons.png",
        value: 9
    },{
        image: "images/shorts/golden-state-warriors.png",
        value: 10
    },{
        image: "images/shorts/houston-rockets.png",
        value: 11
    },{
        image: "images/shorts/indiana-pacers.png",
        value: 12
    },{
        image: "images/shorts/los-angeles-clippers.png",
        value: 13
    },{
        image: "images/shorts/los-angeles-lakers.png",
        value: 14
    },{
        image: "images/shorts/memphis-grizzlies.png",
        value: 15
    },{
        image: "images/shorts/miami-heat.png",
        value: 16
    },{
        image: "images/shorts/milwaukee-bucks.png",
        value: 17
    },{
        image: "images/shorts/minnesota-timberwolves.png",
        value: 18
    },{
        image: "images/shorts/new-orleans-pelicans.png",
        value: 19
    },{
        image: "images/shorts/new-york-knicks.png",
        value: 20
    },{
        image: "images/shorts/oklahoma-city-thunder.png",
        value: 21
    },{
        image: "images/shorts/orlando-magic.png",
        value: 22
    },{
        image: "images/shorts/philadelphia-sixers.png",
        value: 23
    },{
        image: "images/shorts/phoenix-suns.png",
        value: 24
    },{
        image: "images/shorts/san-antonio-spurs.png",
        value: 25
    },{
        image: "images/shorts/toronto-raptors.png",
        value: 26
    },{
        image: "images/shorts/utah-jazz.png",
        value: 27
    },{
        image: "images/shorts/washington-wizards.png",
        value: 28
    },{
        image: "images/shorts/portland-trail-blazers.png",
        value: 29
    },{
        image: "images/shorts/sacramento-kings.png",
        value: 30
}];

// grabbing the id button "shorts" for click event

document.getElementById("shortsButton").addEventListener("click", shortsChange);

//function that runs when button is clicked
function shortsChange() {
   
    //checking if the iterator exceeds more than 4
    if( shortsIterator > (shorts.length -1)){
        shortsIterator = 0;
    } else{
        shortsIterator++;
    }
    
    //iterating over the object object
    for (var key in shorts) {
        if (shorts[key].value === shortsIterator) {
            console.log(shorts[key].image);
            // change src 
            document.getElementById("shorts").setAttribute("src", shorts[key].image); 
        }
    }
}

////////////////////////////////////////////////////////////////////////
////////////////////////// ACCESSORIES /////////////////////////////////

// accessories array contains objects (includes all accessories images)

var accessories = [{
        image: "images/accessories/basketball.png",
        value: 1
    }, {
        image: "images/accessories/drink.png",
        value: 2
    },{
        image: "images/accessories/trophy.png",
        value: 3
    },{
        image: "images/accessories/blank.png",
        value: 4
}];

// grabbing the id button "accessories" for click event

document.getElementById("accessoriesButton").addEventListener("click", accessoriesChange);

//function that runs when button is clicked
function accessoriesChange() {
   
    //checking if the iterator exceeds more than 4
    if( accessoriesIterator > (accessories.length -1)){
        accessoriesIterator = 0;
    } else{
        accessoriesIterator++;
    }
    
    //iterating over the object object
    for (var key in accessories) {
        if (accessories[key].value === accessoriesIterator) {
            console.log(accessories[key].image);
            // change src 
            document.getElementById("accessories").setAttribute("src", accessories[key].image); 
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// FUNCTION TO SHOW CREATION PAGE /////////////////////////////////

//shows the creation character content
function storePage() {

    //var for storePage view
    var storePage = document.getElementById("storeGameContainer");
    //container div for start game
    var startGameContainer = document.getElementById("startGameContainer");
    
    //if store is hidden
    if (storePage.style.display === "none" ) {

        // //initial countdown number
        var timeCounter = 4;

        // change the count down every 1 second
        var changeTime = setInterval(function() {

            // subtracting from timeCounter
            timeCounter--;

            //renders on the page 
            document.getElementById("countDown").innerHTML = timeCounter;

            if (timeCounter <= 0) {
                clearInterval(changeTime);

                //SHOW view of store page 

                storePage.style.display = "block" 

                //HIDES the button to start the game
                startGameContainer.style.display = "none";

            }
        }, 1000);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// FUNCTION TO SHOW STORE PAGE FROM HOME //////////////////////////

// var for store button
 document.getElementById("storeButton").addEventListener("click", storeViewFromHome);

 function storeViewFromHome() {
        
    //var for storePage view
    var storePage = document.getElementById("storeGameContainer");
    //var for avatar creationPage view
    var avatarView = document.getElementById("avatarView");
    //var for button creationPage view
    var buttonView = document.getElementById("buttonView");
    //var for screen shot button creationPage view
    var takeScreenShot = document.getElementById("takeScreenShot");
    //var for avatar creationPage view
    var avatarView = document.getElementById("avatarView");
    //var for button creationPage view
    var buttonView = document.getElementById("buttonView");
    //var for screen shot button creationPage view
    var takeScreenShot = document.getElementById("takeScreenShot");


    if (storePage.style.display === "none" ) {

        storePage.style.display = "block" 

        buttonView.style.display = "none";
        avatarView.style.display = "none";
        takeScreenShot.style.display = "none";

    }

 }

 // var for store button
 document.getElementById("avatarPage").addEventListener("click", home);

 function home() {
        
    //var for storePage view
    var storePage = document.getElementById("storeGameContainer");
    //var for avatar creationPage view
    var avatarView = document.getElementById("avatarView");
    //var for button creationPage view
    var buttonView = document.getElementById("buttonView");
    //var for screen shot button creationPage view
    var takeScreenShot = document.getElementById("takeScreenShot");

    if (avatarView.style.display === "none" && buttonView.style.display === "none" ) {

        storePage.style.display = "none" 

        buttonView.style.display = "block";
        avatarView.style.display = "block";
        takeScreenShot.style.display = "block";

    }

 }



//html2Canvas
$(document).ready(function() {

   $( "#takeScreenShot" ).click(function() {

        html2canvas(document.querySelector("#avatarView")).then(canvas => {

            $('#test').attr('href', canvas.toDataURL("image/png"));
            $('#test').attr('download','Test file.png');
            $('#test')[0].click();


      });

  });

});

