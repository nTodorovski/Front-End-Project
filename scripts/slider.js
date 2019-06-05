function getMaxAndMinPrice() {
    let result = [];
    for (const span of $(".phones > div > div > button > span")) {
        result.push(Number($(span).text().replace('.', '')));
    }
    if(result.length == 0){
        return;
    }
    result = result.sort(function (a, b) {
        return a - b;
    })

    let min = result[0];
    let max = result[result.length - 1]

    return [min, max];
}

function changeSlider() {
    let result = getMaxAndMinPrice();
    if(result == undefined){
        return;
    }
    let oldDivs = $(".phones > div");
    $("#amount").val(result[0] + " ден" + " - " + result[1] + " ден");

    $("#slider-range").slider({
        animate: "fast",
        range: true,
        min: result[0],
        max: result[1],
        values: [result[0], result[1]],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + " ден" + " - " + ui.values[1] + " ден");
        },
        stop: function (event, ui) {
            let min = ui.values[0];
            let max = ui.values[1];
            let newPhones = [];

            for (const div of oldDivs) {
                for (const phone of allPhones) {
                    if ($(div).attr("id") == phone.id) {
                        let price = Number(phone.price.replace(".", ""))
                        if (price >= min && price <= max) {
                            newPhones.push(phone);
                        }
                    }
                }
            }

            $(".phones").empty();
            showPhones(newPhones);
            makePagination();
        }
    });
}


function setPhonesByPrice(event) {
    let text = event.target.innerHTML;

    if (text == "Ascending") {
        ascending();
    } else if (text == "Descending") {
        descending();
    }
}

function ascending() {
    let currentDivs = $(".phones > div");
    let newPhones = [];
    for (const div of currentDivs) {
        for (const phone of allPhones) {
            if (phone.id == $(div).attr("id")) {
                newPhones.push(phone);
            }
        }
    }
    newPhones = newPhones.sort(function (a, b) {
        return Number(a.price.replace(".", "")) - Number(b.price.replace(".", ""));
    })
    $(".phones").empty();
    showPhones(newPhones);
    makePagination();
}

function descending() {
    let currentDivs = $(".phones > div");
    let newPhones = [];
    for (const div of currentDivs) {
        for (const phone of allPhones) {
            if (phone.id == $(div).attr("id")) {
                newPhones.push(phone);
            }
        }
    }
    newPhones = newPhones.sort(function (a, b) {
        return Number(b.price.replace(".", "")) - Number(a.price.replace(".", ""));
    })
    $(".phones").empty();
    showPhones(newPhones);
    makePagination();
}