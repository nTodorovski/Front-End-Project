function getPhones() {
  collapseNavBar();
  hideMainPage();
  showPhones(allPhones);
  addComponentsToPhones();
  makePagination();
  changeSlider();
}

function showPhones(phones) {
  for (const phone of phones) {
    //na sekoj div mu stavame ID
    $(".phones").append(`
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 ${phone.shop}" id="${phone.id}"> 
        <div class="card">
          <div style="width:100%; text-align:center; min-height:215px">
          <img class="card-img-top img-responsive img-${phone.class}" src="${phone.img}" alt="${phone.class}" style="height: 180px;">
          </div>
          <div class="card-body">
            <div class='card-title-div'>
              <h3 class="card-title">${phone.name.toUpperCase()}</h3>
            </div>
            <button type="button" class="btn btn-primary btn-text" data-toggle="modal" data-target="#exampleModal${phone.id}" style="margin-bottom:5px;">
              Specifications
            </button>
            <a href="${phone.phone_url}" class="btn ${phone.class} btn-text" target="_blank">
              <div>Buy from <img class="img-fluid logos" src="${phone.logo}" alt="telekom">
              </div>
            </a>
          </div>
          <div class="modal fade" id="exampleModal${phone.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <span class="badge specs">${phone.name.toUpperCase()}</span>
                </div>
                <div class="modal-body">
                  <ul>
                    <li>SCREEN: ${phone.specifications.screen}</li>
                    <li>CPU: ${phone.specifications.cpu}</li>
                    <li>CHIPSET: ${phone.specifications.chipset}</li>
                    <li>RAM: ${phone.specifications.ram}</li>
                    <li>MEMORY: ${phone.specifications.memory}</li>
                    <li>MAIN CAMERA: ${phone.specifications.main_camera}</li>
                    <li>SELFIE CAMERA: ${phone.specifications.selfie_camera}</li>
                    <li>BATTERY: ${phone.specifications.battery}</li>
                    <li>OS: ${phone.specifications.os}</li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn orange" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
            <button type="button" class="btn btn-primary price-btn">
              Price: <span class="badge badge-light" id="${phone.id}">${phone.price}</span>
            </button>
        </div>
      </div>`)
  }
}

//funkcijata searchBtn se povikuva i na ENTER i na X-ceto
function searchBtn(clearShopItem) {
  clearManfItems();
  if(clearShopItem){
    clearShopsItems();
  }
  // ako stisnal ENTER flag e TRUE
  let flag = true;
  //gi delam celiot input na zborcinja
  let inputs = $("#search-input").val().toLowerCase().split(" ");
  let selectedPhones = [];
  //ako stisnal na X-ceto flag e FALSE
  if ($("#search-input").val().length == 0) {
    enableManfButtons();
    clearCheckedItems();
    flag = false;
  }

  for (const phone of allPhones) {
    let counter = 0;
    for (const input of inputs) {
      //ako go sodrzi inputot zgolemi go counter
      if (phone.name.toLowerCase().includes(input)) {
        counter++;
      }
    }
    //ako counterot e ist so site zborcinja od searchot togas dodaj go telefonot
    if (counter == inputs.length)
      selectedPhones.push(phone)
  }
  $(".phones").empty();
  if (selectedPhones.length == 0) {
    noResults();
    return;
  } else {
    if (flag) {
      //ako stisnal ENTER 
      disableManfButtons();
    }
    showPhones(selectedPhones);
    changeSlider();
    makePagination();
  }
}