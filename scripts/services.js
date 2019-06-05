function clearCheckedItems() {
    for (const item of $(".input-manf")) {
        $(item).prop('checked', false);
    }
    for (const item of $(".input-shops")) {
        $(item).prop('checked', false);
    }
}

function clearFilters() {
    $(".phones").empty();
    debugger
    $("#search-input").val("");
    clearCheckedItems();
    enableManfButtons();
    showPhones(allPhones);
    changeSlider();
    makePagination();
}

function noResults() {
    $(".chooseAscDsc").hide();
    $(".pagination").empty();
    $(".phones").addClass("no-result-container");
    $(".phones").append(`
        <div class="jumbotron jumbo-square">
            <div class="container">
                <img src="./img/search.png" alt="magnifier" style="width: 250px;height: 250px">
                <h1 class="display-4">No Results</h1>
            </div>
        </div>`);
    disableAllButtons();
    setTimeout(() => {
        $(".phones").removeClass("no-result-container");
        $(".phones").empty();
        if($("#search-input").val().length>0){
            searchBtn();
            enableAllButtons();
            clearCheckedItems();
        }else{
            $("#search-input").val("");
            $(".chooseAscDsc").show();
            enableAllButtons();
            clearCheckedItems();
            showPhones(allPhones);
            changeSlider();
            makePagination();
        }
    }, 3000);
}

function collapseNavBar() {
    if (!$(".navbar-toggler").hasClass("collapsed")) {
        $(".navbar-toggler").addClass("collapsed")
        $(".navbar-collapse").removeClass("show")
    }
}

function hideMainPage() {
    $("#main_page").hide();
    $(".phones").empty();
    $("#phones-div").show();
    $("#compare-div").addClass("hidden");
}

function addComponentsToPhones() {
    $("#settings").removeClass("hidden")
    $("#settings1").removeClass("hidden")
}

function disableAllButtons() {
    for (const item of $(".input-manf")) {
        $(item).attr('disabled', true);
    }
    for (const item of $(".input-shops")) {
        $(item).attr('disabled', true);
    }
}

function enableAllButtons() {
    for (const item of $(".input-manf")) {
        $(item).attr('disabled', false);
    }
    for (const item of $(".input-shops")) {
        $(item).attr('disabled', false);
    }
}

function disableManfButtons() {
    for (const item of $(".input-manf")) {
        $(item).attr('disabled', true);
    }
}

function enableManfButtons() {
    for (const item of $(".input-manf")) {
        $(item).attr('disabled', false);
    }
}