$(document).ready(function () {
    //ajaxCalls
    ajaxCall(telekomUrl, fillTelekom);
    ajaxCall(amcUrl, fillAmc);
    ajaxCall(setecUrl, fillSetec);
    ajaxCall(neptunUrl, fillNeptun);
    ajaxCall(ledikomUrl, fillLedikom);

    // Show Phones
    $("#showPhones").click(getPhones);

    //CheckBoxes
    $(".input-manf").click(checkBox);
    $(".input-shops").click(checkBox);

    // priceAscDsc
    $(".dropdown-item").click(setPhonesByPrice);

    //compare
    $("#compare").click(compare)

    //clear filters
    $("#clear-filters").click(clearFilters);
});

