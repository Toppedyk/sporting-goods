import { ProxyState } from "../AppState.js";
import Cart from "../Models/Cart.js"
import { productsService } from "./ProductsService.js";

class CartsService {
  addToCart(name, price,imgUrl){
    let carts=ProxyState.carts
    let cart = new Cart(name,price,imgUrl)
    let inCart = false

    // write a find method that searches through cart array
    // if it finds something that is already there
    // write a conditional and manipulate item quantity 
    
    

    for (let i = 0; i < carts.length; i++) {
      const title = carts[i].name;
      if(cart.name==title){
        carts[i].qty++
        inCart=true
      }
    }
    if(inCart==true){
      debugger
      console.log('Already in cart')
      carts.qty++
      ProxyState.carts = ProxyState.carts
    }else{
      console.log('added to cart')
      cart.qty++
      ProxyState.carts = [...ProxyState.carts, cart]
    }
  }
}

export const cartsService = new CartsService();


