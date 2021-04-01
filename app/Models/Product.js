export default class Product{
  constructor(name, price,description, inStock, imgUrl){
    this.name=name
    this.price=price
    this.description=description
    this.inStock=inStock
    this.imgUrl=imgUrl
  }

  get Template(){
    return `
    <div class="card col-4" >
    <img src="${this.imgUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <h6 class="card-title">$${this.price}</h6>
      <p class="card-text">${this.description}</p>
      <p class="card-text">in Stock: ${this.inStock}</p>
      <button class="btn btn-primary" onclick="app.cartsController.addToCart('${this.name}',${this.price},'${this.imgUrl}')">Add to Cart</button>
    </div>
  </div>`
  }
}