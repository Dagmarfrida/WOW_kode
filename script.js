
function initMap(){
var styledMap = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "0"
            },
            {
                "color": "#58106e"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e8b8f9"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#743677"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#934a9f"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#58106e"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#99278F"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#58176e"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a02aca"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#550d6f"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fafafa"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#a02aca"
            }
        ]
    }
]
//kort lavet med hjælp fra https://developers.google.com/maps/documentation/javascript/tutorial
    //function initMap(){

        var options = {
                zoom: 6,
                center:{lat:64.9631, lng:-19.0208},
                styles: styledMap
         }
        //new map
        var map = new google.maps.Map(document.getElementById('map'), options);    

        //make marker
        var beer = {
            url: 'fotos/Beer-PNG-2.png',
            scaledSize: new google.maps.Size(30, 30)   
        };

// marker options
var marker = new google.maps.Marker({
positions: map.data.loadGeoJson ('Iceland.geojson'),
map: map,
icon: map.data.setStyle({
         icon: beer,   
     }),

});

 //gets data from geojson
 var infoWindow = new google.maps.InfoWindow({maxWidth: 350});
 map.data.addListener('click', function(event) {
 var myHTML = event.feature.getProperty("Name");
 var myDesc = event.feature.getProperty("description");
 var myAddress = event.feature.getProperty("address");
 var myTown = event.feature.getProperty("town");
 var myLink = event.feature.getProperty("link");
 var myImg = event.feature.getProperty("image");
 infoWindow.setContent('<div id="iw-container">' +
 '<div class="iw-title">' + myHTML+ '</div>' +
 '<div class="iw-content">' + '<img src="' + myImg +'">' + '<p>' +myDesc+'</div>' + myAddress + '<br>' + myTown +  '<br>' + myLink + '</p>'+'</div>' +
 '<div class="iw-bottom-gradient"></div>' +
'</div>');

 infoWindow.setPosition(event.feature.getGeometry().get());
 infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -35)});
 infoWindow.open(map, marker);
 });

 //info window styling med stor hjælp fra - http://en.marnoto.com/2014/09/5-formas-de-personalizar-infowindow.html

 // Event that closes the Info Window with a click on the map
google.maps.event.addListener(map, 'click', function() {
    infoWindow.close();
});


// START INFOWINDOW CUSTOMIZE.
// before the opening of the infowindow, defined styles are applied.

google.maps.event.addListener(infoWindow, 'domready', function() {

// Reference to the DIV that wraps the bottom of infowindow
var iwOuter = $('.gm-style-iw');

/* Since this div is in a position prior to .gm-div style-iw.
* We use jQuery and create a iwBackground variable,
* and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
*/
//var iwBackground = iwOuter.prev();

// Removes background shadow DIV
//iwBackground.children(':nth-child(2)').css({'display' : 'none'});

// Removes white background DIV
//iwBackground.children(':nth-child(4)').css({'display' : 'none'});

// Moves the infowindow 115px to the right.
//iwOuter.parent().parent().css({left: '115px'});

// Moves the shadow of the arrow 76px to the left margin.
//iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

// Moves the arrow 76px to the left margin.
//iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

// Changes the desired tail shadow color.
//iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

// Reference to the div that groups the close button elements.
//var iwCloseBtn = iwOuter.next();

// Apply the desired effect to the close button
//iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});

// If the content of infowindow not exceed the set maximum height, then the gradient is removed.
//if($('.iw-content').height() < 140){
//$('.iw-bottom-gradient').css({display: 'none'});
//}

// The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
//iwCloseBtn.mouseout(function(){
//$(this).css({opacity: '1'});
//});
});

}
//google.maps.event.addDomListener(window, 'load', initMap());


//burgermenu 

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }