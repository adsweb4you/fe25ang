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
