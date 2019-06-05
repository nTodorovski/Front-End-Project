$(document).ready(function () {
    // navbar changes color
    $(document).scroll(function () {
        let nav = $(".fixed-top");
        nav.addClass('scrolled')
        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    });

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

