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

}
