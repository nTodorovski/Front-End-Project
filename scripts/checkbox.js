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


    if (checkedItemsManf.length == 0 && checkedItemsShops.length == 0) {
        $(".phones").empty();
        if ($("#search-input").val().length > 0) {
            searchBtn();
        } else {
            clearFilters();
        }
        return;
    }
    else if (checkedItemsManf.length > 0 && checkedItemsShops.length == 0) {
        for (const checkedItem of checkedItemsManf) {
            for (const phone of allPhones) {
                if (phone.name.toLowerCase().includes(checkedItem.toLowerCase())) {
                    newPhones.push(phone);
                }
            }
        }
    }
    else if (checkedItemsManf.length == 0 && checkedItemsShops.length > 0) {
        if ($("#search-input").val().length > 0) {
            searchBtn();
            let currentDivs = $(".phones > div");
            let newDivs = [];
            for (const div of currentDivs) {
                for (const item of checkedItemsShops) {
                    if ($(div).hasClass(item)) {
                        newDivs.push(div);
                    }
                }
            }
            for (const div of newDivs) {
                for (const phone of allPhones) {
                    if (phone.id == $(div).attr("id")) {
                        newPhones.push(phone);
                    }
                }
            }
        }
        else{
            for (const checkedItem of checkedItemsShops) {
                for (const phone of allPhones) {
                    if (phone.shop == checkedItem) {
                        newPhones.push(phone);
                    }
                }
            }
        }
    }
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
    if (newPhones.length == 0) {
        noResults();
        return;
    }
    showPhones(newPhones);
    changeSlider();
    makePagination();
}