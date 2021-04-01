import Cart from "./Models/Cart.js"
import Product from "./Models/Product.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */


  products= [new Product('Basketball',15,"It's a basketball", 100,'https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/c/7/c7dd204a5c8de77cfa036eb232a5e64659c7b2e1_WTB0516_Evolution_v2.jpg'),new Product('Pokemon Cards', 5,'Starter pack for new trainers',150,'https://images-na.ssl-images-amazon.com/images/I/61VJWSztDcL._AC_SL1022_.jpg'),new Product('Skyrim', 45,'The elder scrolls game for PS4',20,'https://hb.imgix.net/12d1d9ac840e649ca0d749b0e5d8b403d310b10e.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=ea7b42b6e2b1535675ccca94ba8c0b95'),new Product('Baseball Glove Chair', 785,'Baseball Glove as a comfy chair',5,'https://i.pinimg.com/originals/d9/af/ca/d9afca8890b8ed3b7cb2a1b342777592.jpg')]

  carts=[]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
