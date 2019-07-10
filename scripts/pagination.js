'use strict';
function makePagination() {
    $(".pagination").empty();
    var numberOfitems;
    let selectedDiv;
    numberOfitems = $(".phones > div").length; // Get total number of the items that should be paginated
    selectedDiv = ".phones"
    var limitPerPage = 20;
    $(`${selectedDiv} > div:gt(${limitPerPage - 1})`).hide();
    var totalPages = Math.ceil(numberOfitems / limitPerPage);
    $(".pagination").append(`<li class='page-item' id="previous-page"><a class='page-link' href="javascript:void(0)" aria-label=Previous><span aria-hidden=true>&laquo;</span></a></li>`);
    $(".pagination").append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>"); //Add first page marker
    for (var i = 2; i <= totalPages; i++) { // Loop to insert page number for each sets of items equal to page limit 
        $(".pagination").append("<li class='page-item current-page'><a  class='page-link' href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
    }
    // Add next button after all the page numbers 
    $(".pagination").append("<li class='page-item' id='next-page'><a  class='page-link' href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");
   
    // Function that displays new items based on page number that was clicked
    $(".pagination li.current-page").on("click", function () {
        if ($(this).hasClass('active')) {
            return false;
        }
        else {
            var currentPage = $(this).index();
            $(".pagination li").removeClass('active');
            $(this).addClass('active');
            $(`${selectedDiv} > div`).hide();
            var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on
            // Loop through total items, selecting a new set of items based on page number
            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $(`${selectedDiv} > div:eq(${i})`).show();
            }
        }
    });

    // Function to navigate to the next page when users click on the next-page id (next page button)
    $("#next-page").on("click", function () {

        var currentPage = $(".pagination li.active").index(); // Identify the current active page
        if (currentPage === totalPages) {
            return false;
        }
        else {
            currentPage++;
            $(".pagination li").removeClass('active');
            $(`${selectedDiv} > div`).hide();
            var grandTotal = limitPerPage * currentPage;
            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $(`${selectedDiv} > div:eq(${i})`).show();
            }
            $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); //Make new page number the 'active' page
        }
    });

    $("#previous-page").on("click", function () {
        var currentPage = $(".pagination li.active").index(); // Identify the current active page
        if (currentPage === 1) {
            return false;
        } else {
            currentPage--;
            $(".pagination li").removeClass('active'); 
            $(`${selectedDiv} > div`).hide();
            var grandTotal = limitPerPage * currentPage;
            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $(`${selectedDiv} > div:eq(${i})`).show();
            }
            $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');  //Make new page number the 'active' page
        }
    });

    }
