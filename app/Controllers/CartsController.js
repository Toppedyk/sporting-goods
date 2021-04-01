import { ProxyState } from "../AppState.js";
import {cartsService} from "../Services/CartsService.js";



//Private
function _draw() {
  let carts = ProxyState.carts;
  let template = `<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-dark" id="staticBackdropLabel">CART</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-flex flex-direction-row ">`
  carts.forEach(c => template += c.Template)
  template+=`        </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Understood</button>
  </div>
</div>
</div>
</div>`
  document.getElementById("cart").innerHTML = template

}

//Public
export default class CartsController {
  constructor() {
    
    ProxyState.on("carts", _draw);
    _draw()
  }

  addToCart(name, price,imgUrl){
   
    cartsService.addToCart(name, price,imgUrl)
  }


}