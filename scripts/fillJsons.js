let amcUrl = "https://raw.githubusercontent.com/nTodorovski/Front-End-Project/master/amc_final.json";
let setecUrl = "https://raw.githubusercontent.com/nTodorovski/Front-End-Project/master/setec_final.json";
let neptunUrl = "https://raw.githubusercontent.com/nTodorovski/Front-End-Project/master/neptun_final.json";
let ledikomUrl = "https://raw.githubusercontent.com/nTodorovski/Front-End-Project/master/ledikom_final.json";
let telekomUrl = "https://raw.githubusercontent.com/nTodorovski/Front-End-Project/master/telekom_final.json";

//counter za dodavanje na sekoj telefon ID
let counter = 0;
let telekom = [];
let amc = [];
let neptun = [];
let setec = [];
let ledikom = [];
let allPhones = [];


function fillTelekom(data) {
    telekom = data;
    for (const phone of telekom) {
        //klasa za css
        phone.class = 'telekomMK';
        //logo
        phone.logo = './img/telekom.jpg';
        phone.id = counter;
        phone.shop = "telekom";
        counter++;
    }
    return telekom;
}

function fillAmc(data) {
    amc = data;
    for (const phone of amc) {
        phone.class = 'amcMK';
        phone.logo = './img/amc.jpg';
        phone.id = counter;
        phone.shop = "amc";
        counter++;
    }
    return amc;
}

function fillSetec(data) {
    setec = data;
    for (const phone of setec) {
        phone.class = 'setecMK';
        phone.logo = "./img/setec.jpg";
        phone.id = counter;
        phone.shop = "setec";
        counter++;
    }
    return setec;
}

function fillLedikom(data) {
    ledikom = data;
    for (const phone of ledikom) {
        phone.class = 'ledikomMK';
        phone.logo = './img/ledikom.jpg';
        phone.id = counter;
        phone.shop = "ledikom";
        counter++;
    }
    return ledikom;
}

function fillNeptun(data) {
    neptun = data;
    for (const phone of neptun) {
        phone.class = 'neptunMK';
        phone.logo = "./img/neptun.jpg"
        phone.id = counter;
        phone.shop = "neptun";
        counter++;
    }
    return neptun;
}

function ajaxCall(url, fillFunction) {
    $.ajax({
        url: url,
        type: 'GET',
        crossDomain: 'true',
        async: false,
        success: function (data) {
            //fillFunction e funkcija od gorenavedenite koja vrakja niza od telefoni
            let filledData = fillFunction(JSON.parse(data));
            for (const phone of filledData) {
                allPhones.push(phone);
            }
        },
        error: function () {
            console.log("error");
        }
    });
}