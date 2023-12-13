function Dashboard(){
    document.getElementById("homepage").style.display = "block";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "white";
    document.getElementById("Home").style.backgroundColor = "#ff5c02";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";
    
    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";
    
    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";
    
    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";
    
    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";
    
    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
// two nunber added -2
function accept21() {
    document.getElementById("Dashboard_statusCell4").innerText = "Allocated";
    document.getElementById("Dashboard_statusCell4").style.color= " #00bf4c";
    document.getElementById("Dashboard_act4").style.display = "none";
}
//two number added -4
function accept42() {
    document.getElementById("Dashboard_statusCell5").innerText = "Allocated";
    document.getElementById("Dashboard_statusCell5").style.color= " #00bf4c";
    document.getElementById("Dashboard_act5").style.display = "none";
}
// one number added -1
function accept13() { 
    document.getElementById("Dashboard_statusCell1").innerText = "Allocated";
    document.getElementById("Dashboard_statusCell1").style.color= " #00bf4c";
    document.getElementById("Dashboard_act3").style.display = "none";
}
// one number added -3
function accept34() {
    document.getElementById("Dashboard_statusCell22").innerText = "Allocated";
    document.getElementById("Dashboard_statusCell22").style.color= " #00bf4c";
    document.getElementById("Dashboard_act22").style.display = "none";
}
// two nunber added -2
function reject21() {
    document.getElementById("Dashboard_statusCell4").innerText = "Rejected";
    document.getElementById("Dashboard_statusCell4").style.color= "#ff0000";
    document.getElementById("Dashboard_act4").style.display = "none";
}
//two number added -4
function reject42() {
    document.getElementById("Dashboard_statusCell5").innerText = "Rejected";
    document.getElementById("Dashboard_statusCell5").style.color= "#ff0000";
    document.getElementById("Dashboard_act5").style.display = "none";
}
// one number adede -1
function reject13() {
    document.getElementById("Dashboard_statusCell1").innerText = "Rejected";
    document.getElementById("Dashboard_statusCell1").style.color= "#ff0000";
    document.getElementById("Dashboard_act3").style.display = "none";
}
// one number added -3
function reject34() {
    document.getElementById("Dashboard_statusCell22").innerText = "Rejected";
    document.getElementById("Dashboard_statusCell22").style.color= "#ff0000";
    document.getElementById("Dashboard_act22").style.display = "none";
}


function hotelBooking(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "block";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "white";
    document.getElementById("Hotel-Booking").style.backgroundColor = "#ff5c02";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";
    
    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";
    
    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";
    
    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";
    
    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";
    
    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
function Hotel_aprve2() {
    document.getElementById("Hotel_statusCell1").innerText = "Allocated";
    document.getElementById("Hotel_statusCell1").style.color= " #00bf4c";
    document.getElementById("Hotel_act1").style.display = "none";
}

function Hotel_rect2() {
    document.getElementById("Hotel_statusCell1").innerText = "Rejected";
    document.getElementById("Hotel_statusCell1").style.color= "#ff0000";
    document.getElementById("Hotel_act1").style.display = "none";
}

function Hotel_approve2() {
    document.getElementById("Hotel_statusCell4").innerText = "Allocated";
    document.getElementById("Hotel_statusCell4").style.color= " #00bf4c";
    document.getElementById("Hotel_act4").style.display = "none";
}

function Hotel_reject2() {
    document.getElementById("Hotel_statusCell4").innerText = "Rejected";
    document.getElementById("Hotel_statusCell4").style.color= "#ff0000";
    document.getElementById("Hotel_act4").style.display = "none";
}


function pujaBooking(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "block";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "white";
    document.getElementById("Puja-Booking").style.backgroundColor = "#ff5c02";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";
    
    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";
    
    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";
    
    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}


function puja_aprve2() {
    document.getElementById("puja_statusCell2").innerText = "Allocated";
    document.getElementById("puja_statusCell2").style.color= " #00bf4c";
    document.getElementById("puja_act2").style.display = "none";
}

function puja_rect2() {
    document.getElementById("puja_statusCell2").innerText = "Rejected";
    document.getElementById("puja_statusCell2").style.color= "#ff0000";
    document.getElementById("puja_act2").style.display = "none";
}

function puja_approve2() {
    document.getElementById("puja_statusCell4").innerText = "Allocated";
    document.getElementById("puja_statusCell4").style.color= " #00bf4c";
    document.getElementById("puja_act4").style.display = "none";
}

function puja_reject2() {
    document.getElementById("puja_statusCell4").innerText = "Rejected";
    document.getElementById("puja_statusCell4").style.color= "#ff0000";
    document.getElementById("puja_act4").style.display = "none";
}


function ujjainDarshan(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "block";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "white";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "#ff5c02";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";
    
    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";
    
    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";
    
    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";
    
    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
function ujjain_aprve4() {
    document.getElementById("ujjain_statusCell2").innerText = "Allocated";
    document.getElementById("ujjain_statusCell2").style.color= "#00bf4c";
    document.getElementById("ujjain_act2").style.display = "none";
}

function ujjain_rect4() {
    document.getElementById("ujjain_statusCell2").innerText = "Rejected";
    document.getElementById("ujjain_statusCell2").style.color= "#ff0000";
    document.getElementById("ujjain_act2").style.display = "none";
}

function ujjain_approve4() {
    document.getElementById("ujjain_statusCell4").innerText = "Allocated";
    document.getElementById("ujjain_statusCell4").style.color= "#00bf4c";
    document.getElementById("ujjain_act4").style.display = "none";
}

function ujjain_reject4() {
    document.getElementById("ujjain_statusCell4").innerText = "Rejected";
    document.getElementById("ujjain_statusCell4").style.color= "#ff0000";
    document.getElementById("ujjain_act4").style.display = "none";
}

function omkarshwarTour(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "block";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "white";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "#ff5c02";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";
    
    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";
    
    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";
    
    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
function omkarshawar_aprve4() {
    document.getElementById("omkarshawar_statusCell2").innerText = "Allocated";
    document.getElementById("omkarshawar_statusCell2").style.color= "#00bf4c";
    document.getElementById("omkarshawar_act2").style.display = "none";
}

function omkarshawar_rect4() {
    document.getElementById("omkarshawar_statusCell2").innerText = "Rejected";
    document.getElementById("omkarshawar_statusCell2").style.color= "#ff0000";
    document.getElementById("omkarshawar_act2").style.display = "none";
}

function omkarshawar_approve4() {
    document.getElementById("omkarshawar_statusCell4").innerText = "Allocated";
    document.getElementById("omkarshawar_statusCell4").style.color= "#00bf4c";
    document.getElementById("omkarshawar_act4").style.display = "none";
}

function omkarshawar_reject4() {
    document.getElementById("omkarshawar_statusCell4").innerText = "Rejected";
    document.getElementById("omkarshawar_statusCell4").style.color= "#ff0000";
    document.getElementById("omkarshawar_act4").style.display = "none";
}

function maaBaglamukkiTour(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "block";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "white";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "#ff5c02";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";

    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";
    
    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
function Maa_baglamukki_aprve4() {
    document.getElementById("Maa_baglamukki_statusCell2").innerText = "Allocated";
    document.getElementById("Maa_baglamukki_statusCell2").style.color= "#00bf4c";
    document.getElementById("Maa_baglamukki_act2").style.display = "none";
}

function Maa_baglamukki_rect4() {
    document.getElementById("Maa_baglamukki_statusCell2").innerText = "Rejected";
    document.getElementById("Maa_baglamukki_statusCell2").style.color= "#ff0000";
    document.getElementById("Maa_baglamukki_act2").style.display = "none";
}

function Maa_baglamukki_approve4() {
    document.getElementById("Maa_baglamukki_statusCell4").innerText = "Allocated";
    document.getElementById("Maa_baglamukki_statusCell4").style.color= "#00bf4c";
    document.getElementById("Maa_baglamukki_act4").style.display = "none";
}

function Maa_baglamukki_reject4() {
    document.getElementById("Maa_baglamukki_statusCell4").innerText = "Rejected";
    document.getElementById("Maa_baglamukki_statusCell4").style.color= "#ff0000";
    document.getElementById("Maa_baglamukki_act4").style.display = "none";
}


function taxiServices(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "block";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "white";
    document.getElementById("Taxi-Services").style.backgroundColor = "#ff5c02";
    
    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";
    
    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";

}



function airportRides(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "block";
    document.getElementById("About").style.display = "none";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";

    document.getElementById("Airport-Rides").style.color = "white";
    document.getElementById("Airport-Rides").style.backgroundColor = "#ff5c02";

    document.getElementById("About-Ujjain").style.color = "black";
    document.getElementById("About-Ujjain").style.backgroundColor = "white";
}
function airport_rides_ap1() {
    document.getElementById("airport_rides_statusCell2").innerText = "Allocated";
    document.getElementById("airport_rides_statusCell2").style.color= "#00bf4c";
    document.getElementById("airport_rides_act2").style.display = "none";
}

function airport_rides_re1() {
    document.getElementById("airport_rides_statusCell2").innerText = "Rejected";
    document.getElementById("airport_rides_statusCell2").style.color= "#ff0000";
    document.getElementById("airport_rides_act2").style.display = "none";
}

function airportrides_approve4() {
    document.getElementById("airport_rides_statusCell4").innerText = "Allocated";
    document.getElementById("airport_rides_statusCell4").style.color= "#00bf4c";
    document.getElementById("airport_rides_act4").style.display = "none";
}

function airportrides_reject4() {
    document.getElementById("airport_rides_statusCell4").innerText = "Rejected";
    document.getElementById("airport_rides_statusCell4").style.color= "#ff0000";
    document.getElementById("airport_rides_act4").style.display = "none";
}


function aboutUjjain(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("hotel").style.display = "none";
    document.getElementById("puja").style.display = "none";
    document.getElementById("Ujjain").style.display = "none";
    document.getElementById("Omkarshwar").style.display = "none";
    document.getElementById("Maa").style.display = "none";
    document.getElementById("Taxi").style.display = "none";
    document.getElementById("Airport").style.display = "none";
    document.getElementById("About").style.display = "block";

    document.getElementById("Home").style.color = "black";
    document.getElementById("Home").style.backgroundColor = "white";

    document.getElementById("Hotel-Booking").style.color = "black";
    document.getElementById("Hotel-Booking").style.backgroundColor = "white";

    document.getElementById("Puja-Booking").style.color = "black";
    document.getElementById("Puja-Booking").style.backgroundColor = "white";

    document.getElementById("Ujjain-Darshan").style.color = "black";
    document.getElementById("Ujjain-Darshan").style.backgroundColor = "white";

    document.getElementById("Omkarshwar-Tour").style.color = "black";
    document.getElementById("Omkarshwar-Tour").style.backgroundColor = "white";

    document.getElementById("Maa-Baglamukki-Tour").style.color = "black";
    document.getElementById("Maa-Baglamukki-Tour").style.backgroundColor = "white";

    document.getElementById("Taxi-Services").style.color = "black";
    document.getElementById("Taxi-Services").style.backgroundColor = "white";

    document.getElementById("Airport-Rides").style.color = "black";
    document.getElementById("Airport-Rides").style.backgroundColor = "white";

    document.getElementById("About-Ujjain").style.color = "white";
    document.getElementById("About-Ujjain").style.backgroundColor = "#ff5c02";
}   
