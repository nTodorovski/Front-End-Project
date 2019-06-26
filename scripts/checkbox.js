function checkBox() {
    let checkedItemsManf = [];
    let checkedItemsShops = [];
    let newPhones = [];

    for (const item of $(".input-manf")) {
        if ($(item).is(':checked')) {
            checkedItemsManf.push(item.id);
        }
    }
    for (const item of $(".input-shops")) {
        if ($(item).is(':checked')) {
            checkedItemsShops.push(item.id);
        }
    }

    //ako nema niedno selektirano od checkboxovite
    if (checkedItemsManf.length == 0 && checkedItemsShops.length == 0) {
        $(".phones").empty();
        if ($("#search-input").val().length > 0) {
            searchBtn();
        } else {
            clearFilters();
        }
        return;
    } //ako e selektirano samo od manufacturer
    else if (checkedItemsManf.length > 0 && checkedItemsShops.length == 0) {
        for (const checkedItem of checkedItemsManf) {
            for (const phone of allPhones) {
                if (phone.name.toLowerCase().includes(checkedItem.toLowerCase())) {
                    newPhones.push(phone);
                }
            }
        }
    } // selektirano samo od shops
    else if (checkedItemsManf.length == 0 && checkedItemsShops.length > 0) {
        //ako ima nesto pisano vo searchot,prvo prebaraj po toa
        if ($("#search-input").val().length > 0) {
            searchBtn();
            let currentDivs = $(".phones > div");
            let newDivs = [];
            //gi zemam divovite so tocnata prodavnica
            for (const div of currentDivs) {
                for (const item of checkedItemsShops) {
                    if ($(div).hasClass(item)) {
                        newDivs.push(div);
                    }
                }
            }
            //od tie divovi gi naogjam telefonite po ID
            for (const div of newDivs) {
                for (const phone of allPhones) {
                    if (phone.id == $(div).attr("id")) {
                        newPhones.push(phone);
                    }
                }
            }
        }// ako nema nisto vo searchot
        else{
            for (const checkedItem of checkedItemsShops) {
                for (const phone of allPhones) {
                    if (phone.shop == checkedItem) {
                        newPhones.push(phone);
                    }
                }
            }
        }
    }//ako prebaruva i po prodavnica i po proizvoditel
    else if (checkedItemsManf.length > 0 && checkedItemsShops.length > 0) {
        for (const shop of checkedItemsShops) {
            for (const manufacturer of checkedItemsManf) {
                for (const phone of allPhones) {
                    if (phone.shop == shop && phone.name.toLowerCase().includes(manufacturer.toLowerCase())) {
                        newPhones.push(phone);
                    }
                }
            }
        }
    }

    $(".phones").empty();
    //ako nema najdeno nieden telefon po prebaruvanje
    if (newPhones.length == 0) {
        noResults();
        return;
    }
    showPhones(newPhones);
    changeSlider();
    makePagination();
}