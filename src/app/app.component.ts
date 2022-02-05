import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  mydata= "ჩემი პირველი მონაცემი";
  isOpen = false;
  src = "../assets/img/img.png"
  alt = "ფოტო ვერ დარენდერდა";
  respImg = "myrespimg";
  imgtype = true;

  Blog = {
    title:"ბლოგის დასახელება",
    img:"assets/img/img.png",
    price:250,
    disc:false,
    weight:350
  }

  open = false;

  updateDate(){
    this.mydata = " განახლებულ მნიშვბელობას"
    this.isOpen = true;
    this.imgtype = !this.imgtype;
  }

show(){
  this.open = true;
}

 
// Product = [
//   {
//     name:"sony",
//     proper0:{color:"red", price:200, img:"asset/img/img.png"},
//     proper1:{color:"black", price:360, img:"asset/img/img.png"},
//     proper2:{color:"blue", price:150, img:"asset/img/img.png"},
//   },

//   {
//     name:"sony1",
//     proper0:{color:"red", price:200, img:"asset/img/img.png"},
//     proper1:{color:"black", price:360, img:"asset/img/img.png"},
//     proper2:{color:"blue", price:150, img:"asset/img/img.png"},
//   }

// ]

activecolor = 2;


Prod:any = {
  name:"sony",
  id:50,
  proper:[
      {color:"red", price:200, img:"assets/img/img.png"},
      {color:"black", price:360, img:"assets/img/img2.png"},
      {color:"blue", price:150, img:"assets/img/img4.png"},
  ]
 
}

changedata(index:any){
this.activecolor = index;
}
 

addcart(){
  let type = this.Prod.proper[this.activecolor].color;
  let id = this.Prod.id;
  let price =  this.Prod.proper[this.activecolor].price;
  console.log(id, type, price)
}

}
