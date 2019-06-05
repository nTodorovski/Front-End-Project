function compare() {
    collapseNavBar();
    $("#main_page").hide();
    $("#phones-div").hide();
    $("#compare-div").removeClass("hidden");
    $("#compare-div").empty();
    $("#compare-div").append(`
    <div class="row" id="specifications">
        <div id="first-phone-specs" class="col-sm-12 col-lg-4 col-md-6">
            <div class="input-group mb-3 ui-widget">
                <input type="search" id="first-phone" class="form-control search-inputs" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" onsearch="">
            </div>
            <div class="card card-compare first-phone-card" style="min-height:960px;">
            </div>
        </div>
        <div id="second-phone-specs" class="col-sm-12 col-lg-4 col-md-6" >
            <div class="input-group mb-3">
                <input type="search" id="second-phone" class="form-control search-inputs" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" onsearch="">
            </div>
            <div class="card card-compare second-phone-card" style="min-height:960px;">
            </div>
        </div>
        <div id="third-phone-specs" class="col-sm-12 col-lg-4 col-md-6">
            <div class="input-group mb-3">
                <input type="search" id="third-phone" class="form-control search-inputs" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" onsearch="">
            </div>
            <div class="card card-compare third-phone-card" style="min-height:960px;">
            </div>
        </div>
    </div>`)

    let availableTags = [];
    let phones = [];
    for (const phone of allPhones) {
        let name = phone.name.replace(/ Black| Blue| Gold| White| Pink| Green| Dark Grey| Twilight| Rose| Aurora| Breathing Crystal| Yellow| Purple| Cherry Red| Anthracite| Silver| Deep Indigo| Grey| Lavender| Marble| Bleen| Saphire| Midnight| Glcier Gray/g, '').toUpperCase();
        if (availableTags.indexOf(name) === -1) {
            availableTags.push(name);
            phones.push(phone);
        }
    }
    availableTags = availableTags.sort();
    $("#first-phone").autocomplete({
        source: availableTags,
        select: function( event, ui ) {
            for (const phone of phones) {
                if(phone.name.toUpperCase().includes(ui.item.value)){
                    let div = "first-phone";
                    $(".first-phone-card").empty();
                    appendPhone(phone,div);
                    return;
                }
            }
        }
    });

    $("#second-phone").autocomplete({
        source: availableTags,
        select: function( event, ui ) {
            for (const phone of phones) {
                if(phone.name.toUpperCase().includes(ui.item.value)){
                    let div = "second-phone";
                    $(".second-phone-card").empty();
                    appendPhone(phone,div);
                    return;
                }
            }
        }
    });

    $("#third-phone").autocomplete({
        source: availableTags,
        select: function( event, ui ) {
            for (const phone of phones) {
                if(phone.name.toUpperCase().includes(ui.item.value)){
                    let div = "third-phone";
                    $(".third-phone-card").empty();
                    appendPhone(phone,div);
                    return;
                }
            }
        }
    });
        
}

function appendPhone(phone,div){
    let specs = phone.specifications;
    $(`.${div}-card`).append(`
        <img src="${phone.img}" class="img-fluid" style="width:90%;max-height:286px">
        <div class="card-body">
            <div style="min-height:115px">
                <h2>${phone.name.toUpperCase()}</h2>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td class="red">SCREEN</td>
                        <td>${specs.screen}</td>
                    </tr>
                    <tr>
                        <td class="red">OS</td>
                        <td>${specs.os}</td>
                    </tr>
                    <tr>
                        <td class="red">CHIPSET</td>
                        <td>${specs.chipset}</td>
                    </tr>
                    <tr>
                        <td class="red">CPU</td>
                        <td>${specs.cpu}</td>
                    </tr>
                    <tr>
                        <td class="red">RAM</td>
                        <td>${specs.ram}</td>
                    </tr>
                    <tr>
                        <td class="red">MEMORY</td>
                        <td>${specs.memory}</td>
                    </tr>
                    <tr>
                        <td class="red">MAIN CAMERA</td>
                        <td>${specs.main_camera}</td>
                    </tr>
                    <tr>
                        <td class="red">SELFIE CAMERA</td>
                        <td>${specs.selfie_camera}</td>
                    </tr>
                    <tr>
                        <td class="red">BATTERY</td>
                        <td>${specs.battery}</td>
                    </tr>
                </tbody>
            </table>
        </div>`)
}