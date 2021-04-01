export default class Cart{
  constructor(name, price,imgUrl='//placehold.it/150x150'){
    this.name=name
    this.price=price
    this.imgUrl=imgUrl
    this.qty=0;
    this.total=0;
  }

  get Template(){
    return `
            <div class="row flex-direction-row ">
                <img src="${this.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-dark">${this.name}</h5>
                  <h5 class="card-title text-dark">$${this.price}</h5>
                  <h5 class="card-title text-dark">${this.qty}</h5>
                  <h class="card-title text-dark">$${this.total}</h>
                  <a href="#" class="btn btn-primary text-dark">Remove from cart</a>
                </div>
              </div>
    `
  }
}