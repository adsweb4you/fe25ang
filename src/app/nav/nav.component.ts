import { Component, OnInit , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
 // encapsulation: ViewEncapsulation.None,
 //encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavComponent implements OnInit {
  mytext = "bla bbla"
  constructor() { }


 ob = {
   pro:"asd",
   price:25
 }

  ngOnInit(): void {
      console.log("გვერდი ჩაიტვირთა");

      // window.addEventListener('scroll', function(e){
      //   console.log(e)
      // })


      for (const key in this.ob) {
      
          const element = key;
        console.log(element);
     
      }

  }



}
