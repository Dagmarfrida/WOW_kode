
//Modal pop up hex gallery
//https://www.youtube.com/watch?v=MBaw_6cPmAw
const openModalImages = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalImages.forEach(img => {
  img.addEventListener('click', () => {
    let modal = document.querySelector(img.dataset.modalTarget)
    openModal(modal)
    if (modal ='#modalBeer')  {
      initMap();
      
      }
      })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//kort lavet med hjælp fra https://developers.google.com/maps/documentation/javascript/tutorial

function initMap(){
    const styledMap = [
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
                    "color": "#441151"
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
                    "color": "#99278F"
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
                    "color": "#99278F"
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
    
    const options = {
        zoom: 6,
        center:{lat:64.9631, lng:-19.0208},
        styles: styledMap
        }
    //new map
    const map = new google.maps.Map(document.getElementById('txtBeer'), options);    

    //make marker
    const beer = {
        url: 'fotos/Beer-PNG-2.png',
        scaledSize: new google.maps.Size(30, 30)   
        };
    
    // marker options
    const marker = new google.maps.Marker({
    positions: map.data.loadGeoJson ('Iceland.geojson'),
    map: map,
    icon: map.data.setStyle({
             icon: beer,   
         }),
    
    });
    
     //gets data from geojson
     let infoWindow = new google.maps.InfoWindow({maxWidth: 350});
     map.data.addListener('click', function(event) {
     let myHTML = event.feature.getProperty("Name");
     let myDesc = event.feature.getProperty("description");
     let myAddress = event.feature.getProperty("address");
     let myTown = event.feature.getProperty("town");
     let myLink = event.feature.getProperty("link");
     let myImg = event.feature.getProperty("image");
     infoWindow.setContent('<div id="iw-container">' +
     '<div class="iw-title">' + myHTML+ '</div>' +
     '<div class="iw-content">' + '<img src="' + myImg +'">' + '<p>' +myDesc+'</div>' + myAddress + '<br>' + myTown +  '<br>' +  myLink + '</div>' +
     '<div class="iw-bottom-gradient"></div>' +
    '</div>');
    
     infoWindow.setPosition(event.feature.getGeometry().get());
     infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -35)});
     infoWindow.open(map, marker);
     });
    
     //info window - http://en.marnoto.com/2014/09/5-formas-de-personalizar-infowindow.html
    
     //close info window with a click on the map
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });
    
    // before the opening of the infowindow, defined styles are applied.
    
    google.maps.event.addListener(infoWindow, 'domready', function() {
        });
    }


//burgermenu 

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  // Mobile ticket 

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


                    