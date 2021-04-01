import { ProxyState } from "../AppState.js";
import {productsService} from '../Services/ProductsService.js'


//Private
function _draw() {
  let products = ProxyState.products;
  let template = ''
  products.forEach(p => template += p.Template)
  document.getElementById("products").innerHTML = template
}

//Public
export default class ProductsController {
  constructor() {
    ProxyState.on("products", _draw);
    _draw()
  }



}