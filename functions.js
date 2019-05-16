const hideAll =() => {
    $(".hide").hide();
}

const showPhones = () => {
  $(".phones").empty();
    for (const phone of telekom) {
        $(".phones").append(`
        <div class="card h-25">
        <img class="card-img-top" src="${phone.img}" alt="phone image" style="height:240px;width:240px;">
        <div class="card-body">
          <h5 class="card-title">${phone.name}</h5>
        </div>
        
        <div class="modalce">
          <h2>Modal Example</h2>
          <!-- Trigger the modal with a button -->
          <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
        
          <!-- Modal -->
          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
            
              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                  <p>Some text in the modal.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <a href="${phone.phone_url}" class="btn btn-primary buy">Buy</a>
          <img class="card-img-top logoa" src="./img/telekom.jpg" alt="telekom" >
        </div>
      </div>`)
    }

}