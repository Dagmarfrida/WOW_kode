<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="hefo.css">
    <link rel="stylesheet" href="/styles/style.css">
    <link rel="stylesheet" href="/FontAwesome/all.min.css">
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <!--  <link rel="stylesheet" href="./style/scss.css">-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wow air</title>
</head>

<body>
    <!--MOBIL-->
    <header class="mobilHeader">
        <img class="wowLila" src="fotos/logolila.svg" alt="WOW air logo purple">
    </header>
    <nav class="navigation">
        <ul>
            <li class="burgermenu">
                <div id="mySidepanel" class="sidepanel">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                    <a href="#"><img src="/fotos/mobile_white.svg" alt="touch screen icon">+1555-5555</a><br>
                    <a href="#"><img src="/fotos/check_white.svg" alt="check in icon">Check In</a>
                    <a href="#"><img src="/fotos/booking_white.svg" alt="my bookings icon">My Bookings</a>
                    <a href="#"><img src="/fotos/info_white.svg" alt="travel info icon">Travel Info</a>
                    <a href="#"><img src="/fotos/search_white.svg" alt="search icon">Search</a>
                </div>
            </li>
            <button class="openbtn" onclick="openNav()">☰ </button>



            <div class="form-popup" id="myForm">
                <form action="/action_page.php" class="form-container">

                    <label for="from"></label>
                    <input type="text" placeholder="From">

                    <label for="to"></label>
                    <input type="text" placeholder="To">

                    <button type="button" class="btn cancel" onclick="closeForm()"><img src="fotos/ticket.png"
                            alt="ticket icon"></button>
                </form>

            </div>
            </li>
            <div>
                <li class="ticket">
                    <a href="#"><img src="fotos/ticket.png" alt="ticket"></a>
                    <button class="open-button" onclick="openForm()"></button>
                </li>
            </div>

            <li class="liveChatLogo"><a href="#"><img src="fotos/ChatBot.svg" alt="live chat icon"></a></li>
        </ul>
    </nav>
    <section class="forsideMobil">
        <h1>The World Awaits</h1>
    </section>

    <!--TABLET/DESKTOP-->

    <header class="tabletHeader">
        <div class="headerNav">
            <img class='wowHvid' src="fotos/logohvid.png" alt="wow air logo white ">
            <ul>
                <a href="#">
                    <li>
                        <h2>Home</h2>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <h2>Check In</h2>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <h2>My Bookings</h2>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <h2>Travel Info</h2>
                    </li>
                </a>
            </ul>
        </div>
    </header>
    <section class="forside">
        <div class="bookingDesktop">
            <h2>Find flights</h2>
            <form action="">
                <div class="fromTo"><input type="text" name="from" id="from" placeholder="From:">
                    <img src="/fotos/airplane_lila.png" alt="airplane icon">
                    <input type="text" name="to" id="to" placeholder="To:">
                </div>
                <div class="searchBtnContainer">
                    <input type="submit" name="search flights" id="searchBtn" value="Search flights">
                </div>
            </form>
        </div>
        <img src="/fotos/flyverudenhjul1.svg" alt="wow airplane" id="airplane">
    </section>
    <div id="liveChatContainer"><img src="/fotos/ChatBot.svg" alt="Livechat icon" id="liveChat">
    </div>

    <!--BOOKING TABLET-->

    <section class="bookingTablet">
        <h2>Find flights</h2>
        <form action="">
            <input type="text" name="from" id="from" placeholder="From:">
            <img src="/fotos/flymaskine_hvid.png" alt="airplane icon">
            <input type="text" name="to" id="to" placeholder="To:">
            <input type="submit" name="search flights" id="searchBtn" value="Search flights">
        </form>
    </section>
    <div class="honestSign">
        <section class="honestFares">
            <h3>Honest Fares</h3>
            <div class="hfIcons">
                <div class="bags">
                    <img src="/fotos/bag.png" alt="bag icon">
                    <p>Bags</p>
                </div>
                <div class="seats">
                    <img src="/fotos/seat.png" alt="fly seat icon">
                    <p>Seats</p>
                </div>
                <div class="nutrition">
                    <img src="/fotos/cutlery.png" alt="cutlery icon">
                    <p>Nutrition</p>
                </div>
            </div>
            <p class="honestTekst">WOW air leads the industry with Honest Fares™ which means when you book on WOW air,
                your Honest Fare includes your bag, seat, food and Internet while traveling in WOW world. <br><br> WOW
                fares include all the basics one expects at an honest price <br><br> WOW world™ we offer Honest Fares.
            </p>
            <a href="#"><button id="readMoreBtn">Read more...</button></a>
        </section>
        <section class="signUp">
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_GIqo2k.json" background="transparent"
                speed="1" class="mailbox" loop autoplay></lottie-player>
            <!--you can put ´controls´ after loop to see play/pause and timeline of the animation-->
            <p class="signupTekst">Sign up to our e-mail list to get the latest news and the best deals when we start
                our service again</p>
            <form action="">
                <input type="email" id="email" name="email" value="@">
                <input id="signupBtn" type="submit" value="Sign Up!">
            </form>
        </section>
    </div>

    <!--HEXAGON MOBILE-->
    <h2 class="headerUndersider">Explore Iceland!</h2>
    <div class="scrolling-wrapper">
        <div class="card"><img src="fotos/airplane.jpg" alt="airplane"></div>
        <div class="card" title="Whales"><img data-modal-target="#modalBlueLagoon" src="fotos/Blue-lagoon-winter.jpg"
                alt="blue lagoon"></div>
        <div class="card"><img data-modal-target="#modalWhalesOfIceland"
                src="Iceland_fotos/whales_of_iceland_museum-7.jpg" alt="whale museum"></div>
        <div class="card"title="Breweries"><img data-modal-target="#modalBeer" src="Iceland_fotos/aegisgardur_beer.jpeg" alt="beer">
        </div>
        <div class="card" title="Tectonis Plates"><img data-modal-target="#modalTectonicPlates"
                src="Iceland_fotos/tectonic-plates-569347_1920.jpg" alt="tectonic plates"></div>
        <div class="card" title="Geyser"><img data-modal-target="#modalGeyser" src="Iceland_fotos/geyser-3242008_1920.jpg"
                alt="geyser"></div>
        <div class="card" title="Viking Museum"><img data-modal-target="#modalVikingeHeimar" src="Iceland_fotos/vikingaheimar.jpg"
                alt="viking museum"></div>
        <div class="card" title="Horses"><img data-modal-target="#modalHorses" src="Iceland_fotos/horses-2427513_1920.jpg"
                alt="horses"></div>
        <div class="card"><img class="mobilelogo" src="fotos/logohvid.svg" alt="logo"></div>
    </div>

    <!--HEXAGON TABLET-->
    <section class="hexagon-gallery">
        <div class="hex"><img src="fotos/airplane.jpg" alt="airplane"></div>
        <div class="hex" title="Blue Lagoon"><img data-modal-target="#modalBlueLagoon" src="fotos/Blue-lagoon-winter.jpg" alt="blue lagoon">
        </div>
        <div class="hex" title="Whales"><img data-modal-target="#modalWhalesOfIceland"
                src="Iceland_fotos/whales_of_iceland_museum-7.jpg" alt="whale museum"></div>
        <div class="hex" title="Horses"><img data-modal-target="#modalHorses" src="Iceland_fotos/horses-2427513_1920.jpg" alt="horses">
        </div>
        <div class="hex" title="Geyser"><img data-modal-target="#modalGeyser" src="Iceland_fotos/geyser-3242008_1920.jpg" alt="geyser">
        </div>
        <div class="hex" title="Breweries"><img data-modal-target="#modalBeer" src="Iceland_fotos/aegisgardur_beer.jpeg" alt="beer"></div>
        <div class="hex" title="Basalt Bars"><img data-modal-target="#modalBasaltBars" src="Iceland_fotos/basalt-bars-2173278_1920.jpg"
                alt="balsalt"></div>
        <div class="hex" title="Puffins"><img data-modal-target="#modalPuffins" src="Iceland_fotos/puffins-2819126_1920.jpg"
                alt="puffins"></div>
        <div class="hex"><img src="fotos/logohvid.svg" alt="logo"></div>
    </section>

    <!--HEXAGON DESKTOP-->

    <section class="hexagon-gallery1">
        <div class="hex1"><img src="fotos/flyver1.svg" alt="airplane"></div>
        <div class="hex1" title="Blue Lagoon"><img data-modal-target="#modalBlueLagoon" src="fotos/Blue-lagoon-winter.jpg"
                alt="blue lagoon"></div>
        <div class="hex1" title="Whales"><img data-modal-target="#modalWhalesOfIceland"
                src="Iceland_fotos/whales_of_iceland_museum-7.jpg" alt="whale museum"></div>
        <div class="hex1">
            <div class="icelandhex">Iceland</div>
        </div>
        <div class="hex1" title="Basalt Bars"><img data-modal-target="#modalBasaltBars" src="Iceland_fotos/basalt-bars-2173278_1920.jpg"
                alt="balsalt"></div>
        <div class="hex1">
            <div class="summerhex">Summer</div>
        </div>
        <div class="hex1" title="Puffins"><img data-modal-target="#modalPuffins" src="Iceland_fotos/puffins-2819126_1920.jpg"
                alt="puffins"></div>
        <div class="hex1" title="Horses"><img data-modal-target="#modalHorses" src="Iceland_fotos/horses-2427513_1920.jpg"
                alt="horses"></div>
        <div class="hex1" title="Hut"><img data-modal-target="#modalHut" src="Iceland_fotos/iceland-269977_1920.jpg" alt="hut">
        </div>
        <div class="hex1">
            <div class="vacationhex">Vacation</div>
        </div>
        <div class="hex1" title="Geyser"><img data-modal-target="#modalGeyser" src="Iceland_fotos/geyser-3242008_1920.jpg"
                alt="geyser"></div>
        <div class="hex1" title="Breweries"><img data-modal-target="#modalBeer" src="Iceland_fotos/aegisgardur_beer.jpeg" alt="beer">
        </div>
        <div class="hex1"><img class="desktoplogo" src="fotos/logohvid.svg" alt="logo"></div>
    </section>

    <!--Blue Lagoon Pop-up-->
    <div class="modal" id="modalBlueLagoon">
        <div class="modal-header">
            <div class="title">Blue Lagoon</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div id="txtBlueLagoon" class="modal-body">
            <div class="modal-body">
                <img class="textWrap" src="fotos/Blue-lagoon-winter.jpg" alt="blue lagoon" height="110" width="100">
                <p>The Blue Lagoon’s geothermal seawater is 70% ocean water and 30% freshwater, enriched with silica,
                    algae, and minerals. Not only is it a delight simply to soak in, it heals, rejuvenates, and
                    nourishes.
                </p>
            </div>
        </div>
    </div>
    <!--Whales of Iceland Pop-up-->
    <div class="modal" id="modalWhalesOfIceland">
        <div class="modal-header">
            <div class="title">Whales of Iceland</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div id="txtWhales" class="modal-body">
            <div class="modal-body">
                <img class="textwwrap" src="Iceland_fotos/whales_of_iceland_museum-7.jpg" alt="whale museum"
                    height="110" width="100">
                <p>The Whales of Iceland Exhibition consists of 23 man-made life size models of the various whale
                    species found in Icelandic waters</p>

            </div>
        </div>
    </div>
    <!--Basalt Bars Pop-up-->
    <div class="modal" id="modalBasaltBars">
        <div class="modal-header">
            <div class="title">Basalt Bars</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div id="txtBasaltBars" class="modal-body">
            <div class="modal-body">
                <img class="textWrap" src="Iceland_fotos/basalt-bars-2173278_1920.jpg" alt="balsalt" height="110"
                    width="100">
                <p>Reynisfjara is a world-famous black-sand beach found on the South Coast of Iceland, just beside the
                    small fishing village of Vík í Mýrdal. With its enormous basalt stacks, roaring Atlantic waves and
                    stunning panoramas, Reynisfjara is widely considered to be the most beautiful example of Iceland’s
                    black
                    sand beaches. In 1991, National Geographic voted Reynisfjara as one of the Top 10 non-tropical
                    beaches
                    to visit on the planet.</p>
            </div>
        </div>
    </div>
    <!--Puffins Pop-up-->
    <div class="modal" id="modalPuffins">
        <div class="modal-header">
            <div class="title">Puffins</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div id="txtPuffins" class="modal-body">
            <div class="modal-body">
                <img class=textWrap src="Iceland_fotos/puffins-2819126_1920.jpg" alt="puffins" height="110" width="100">
                <p>Iceland is, without doubt, the puffin watching capital of the world. Bird watchers and scientists
                    from
                    all over the world come to Iceland to see this interesting species for themselves. Thanks to the
                    incredibly cute and funny appearance of these birds, puffin watching has become one of the top
                    favorite
                    summer activities for visitors in Iceland!</p>
            </div>
        </div>
    </div>
    <!--Horses Pop-up-->
    <div class="modal" id="modalHorses">
        <div class="modal-header">
            <div class="title">Horses</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div id="txtHorses" class="modal-body">
            <div class="modal-body">
                <img class="textWrap" src="Iceland_fotos/horses-2427513_1920.jpg" alt="horses" height="110" width="100">
                <p>The Icelandic horse is a breed of horse developed in Iceland. Although the horses are small, at times
                    pony-sized, most registries for the Icelandic refer to it as a horse. Icelandic horses are
                    long-lived
                    and hardy. In their native country they have few diseases.</p>
            </div>
        </div>
    </div>
    <!--Hut Pop-up-->
    <div class="modal" id="modalHut">
        <div class="modal-header">
            <div class="title">Hut</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div id="txtHut" class="modal-body">
            <div class="modal-body">
                <img class="textWrap" src="Iceland_fotos/iceland-269977_1920.jpg" alt="hut" height="110" width="100">
                <p>The Volcano Huts are located in the Þórsmörk Nature Reserve. Our location is only accessible by a
                    mountain bus or on foot.</p>

            </div>
        </div>
    </div>
    <!--Geyser Pop-up-->
    <div class="modal" id="modalGeyser">
        <div class="modal-header">
            <div class="title">Geyser</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div id="txtGeyser" class="modal-body">
            <div class="modal-body">
                <img class="textWrap" src="Iceland_fotos/geyser-3242008_1920.jpg" alt="geyser" height="110" width="100">
                <p>A favorite stop along the Golden Circle is the highly active Geysir Hot Spring Area with boiling mud
                    pits, exploding geysers and the lively Strokkur which spouts water 30 metres (100 ft) into the air
                    every few minutes.</p>
            </div>
        </div>
    </div>
    <!--Beer Pop-up-->
    <div class="modal" id="modalBeer">
        <div class="modal-header">
            <div class="title">Iceland Breweries</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div id="txtBeer" style="height: 100%" class="modal-body">

            <div id="map"></div>
        </div>
    </div>
    <!--Tectonic Plates Pop-up-->
    <div class="modal" id="modalTectonicPlates">
        <div class="modal-header">
            <div class="title">Tectonic Plates</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div id="txtTectonicPlates" class="modal-body">
            <div class="modal-body">
                <img class="textWrap" src="Iceland_fotos/tectonic-plates-569347_1920.jpg" alt="Tectonic Plates"
                    height="110" width="100">
                <p>The North American and Eurasian tectonic plates meet in Thingvellir, where they're visible to
                    visitors walking through the Thingvellir National Park. You might recognize it from Season 4 of
                    "Game of Thrones"</p>
            </div>
        </div>
    </div>

    <!--Vikinge Heimar Pop-up-->
    <div class="modal" id="modalVikingeHeimar">
        <div class="modal-header">
            <div class="title">Vikinge Heimar</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div id="txtVikingeHeimar" class="modal-body">
            <div class="modal-body">
                <img class="textWrap" src="Iceland_fotos/vikingaheimar.jpg" alt="viking museum" height="110"
                    width="100">
                <p>At Viking World you can also find the Viking millennium exhibition produced by the Smithsonian
                    Institution called Vikings: The North Atlantic Saga. This exhibition sheds light onto the Norse
                    settlement and explorations of unknown lands.</p>
            </div>
        </div>
    </div>




    <div id="overlay"></div>

    <img class="landscape" src="fotos/telt.jpg" alt="Landscape">

    <h2 class="headerUndersider">Just a flight away</h2>
    <div class="responsive">
        <div class="gallery">
            <img src="fotos/reykjavik1.jpg" alt="Reykjavik" width="400" height="600">
            <p class="txt1">Reykjavik</p>
            <p class="price1">$99</p>
            </a>

        </div>
    </div>

    <div class="responsive">
        <div class="gallery">
            <img src="fotos/stpeters1.jpg" alt="St. Petersburg" width="400" height="600">
            <p class="txt1">St. Petersburg</p>
            <p class="price2">$99</p>
            </a>

        </div>
    </div>

    <div class="responsive">
        <div class="gallery">
            <img src="fotos/paris1.jpg" alt="Paris" width="400" height="600">
            <p class="txt1">Paris</p>
            <p class="price3">$99</p>
            </a>

        </div>
    </div>

    <div class="responsive">
        <div class="gallery">
            <img src="fotos/cph1.jpg" alt="Copenhagen" width="400" height="600">
            <p class="txt1">Copenhagen</p>
            <p class="price4">$99</p>
            </a>
        </div>
    </div>

    <img class="landscape1" src="fotos/telt1.jpg" alt="Landscape">

    <footer class="footer">
        <div class="footer_left">
            <h4>WOW air</h4>
            <a href="#">
                <p>Contact</p>
            </a>
            <a href="#">
                <p>Airports</p>
            </a>
            <p>News from WOW</p>

        </div>
        <div class="footer_center">
            <h4>WOW World</h4>
            <p>About WOW</p>

            <p class="noMobil">WOW air Cargo</p>
            <p>Honest Fares</p>
            <p class="noMobil">WOW Magazine</p>
        </div>
        <div class="footer_right">
            <h4>Fly with us</h4>
            <div class="soMe_icons">
                <a href="#"><img src="fotos/Facebook_icon.png" alt="Facebook icon"></a>
                <a href="#"><img src="fotos/Instagram_icon.png" alt="Instagram icon"></a>
                <a href="#"><img src="fotos/Twitter_icon.png" alt="Twitter icon"></a>
                <a href="#"><img src="fotos/Linkedin_icon.png" alt="Linkedin icon"></a>
            </div>
            <div class="soMe_iconsL">
                <a href="#"> <img src="fotos/Facebook_iconL.png" alt="Facebook icon"></a>
                <a href="#"><img src="fotos/Instagram_iconL.png" alt="Instagram icon"></a>
                <a href="#"><img src="fotos/Twitter_iconL.png" alt="Twitter icon"></a>
                <a href="#"><img src="fotos/Linkedin_iconL.png" alt="Linkedin icon"></a>
            </div> <br>
           
        </div>
    </footer>

    <script src="script.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByiX6jUaUpt57IBb7ObN9P8qjFHbZP0QY" async
        defer></script>

    <script type="text/javascript" src="jquery-3.5.1.js"></script>

</body>

</html>
