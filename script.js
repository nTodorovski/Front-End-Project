let telekom = [];
let amc;
let setec;
let neptun;
let ledikom;

let telekomUrl = "https://raw.githubusercontent.com/nTodorovski/Front-End-Project/master/telekom_final.json";
$(async () => {
    $.ajax({
        url: 'https://raw.githubusercontent.com/nTodorovski/Front-End-Project/master/telekom_final.json',
        type: 'GET',
        crossDomain: 'true',
        success: function (data) {
           let results = JSON.parse(data);
           for (const phone of results) {
            telekom.push(new Phone(phone))
           }
        },
        error: function (e) {
            console.log("error");
        }
    });
})
$("#showPhones").click(()=>{
    hideAll();
    showPhones();
})