import { Component } from '@angular/core';
import { NgForm, NgModel,  FormGroup,  FormControl, Validators} from '@angular/forms';
import { PostServService } from './service/post-serv.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  Allposts:any = '';

  

  constructor (public Posts:PostServService) { 

    this.Posts.GetPost(800).subscribe((date:any)=>{
     this.Allposts = date;
    })

  }

  addcart(id:any, e:any){
    e.target.classList.replace('btn-success', 'btn-warning');
    e.target.innerText = "დამატებულია";
    e.target.disabled = true;
  }
     
 
 
//   mydata= "ჩემი პირველი მონაცემი";
//   isOpen = false;
//   src = "../assets/img/img.png"
//   alt = "ფოტო ვერ დარენდერდა";
//   respImg = "myrespimg";
//   imgtype = true;

//   Blog = {
//     title:"ბლოგის დასახელება",
//     img:"assets/img/img.png",
//     price:250,
//     disc:false,
//     weight:350
//   }

//   open = false;

//   updateDate(){
//     this.mydata = " განახლებულ მნიშვბელობას"
//     this.isOpen = true;
//     this.imgtype = !this.imgtype;
//   }

// show(){
//   this.open = true;
// }

 
// // Product = [
// //   {
// //     name:"sony",
// //     proper0:{color:"red", price:200, img:"asset/img/img.png"},
// //     proper1:{color:"black", price:360, img:"asset/img/img.png"},
// //     proper2:{color:"blue", price:150, img:"asset/img/img.png"},
// //   },

// //   {
// //     name:"sony1",
// //     proper0:{color:"red", price:200, img:"asset/img/img.png"},
// //     proper1:{color:"black", price:360, img:"asset/img/img.png"},
// //     proper2:{color:"blue", price:150, img:"asset/img/img.png"},
// //   }

// // ]

// activecolor = 2;


// Prod:any = {
//   name:"sony",
//   id:50,
//   proper:[
//       {color:"red", price:200, img:"assets/img/img.png"},
//       {color:"black", price:360, img:"assets/img/img2.png"},
//       {color:"blue", price:150, img:"assets/img/img4.png"},
//   ]
 
// }

// changedata(index:any){
// this.activecolor = index;
// }
 

// addcart(){
//   let type = this.Prod.proper[this.activecolor].color;
//   let id = this.Prod.id;
//   let price =  this.Prod.proper[this.activecolor].price;
//   console.log(id, type, price)
// }

// stordate(dat:any){
//   console.log(dat);
//    let ksdat = JSON.stringify(dat);
//   sessionStorage.setItem('json', ksdat)
// }

 
// Loginform = new FormGroup({
//   email : new FormControl(''),
//   password : new FormControl(''),
//   city : new FormControl(''),
//   ram : new FormControl('')
// })


// get email(){
//   return this.Loginform.get('email')
// }

// get password(){
//   return this.Loginform.get('password')
// }

// get city(){
//   return this.Loginform.get('city')
// }

// get ram(){
//   return this.Loginform.get('ram')
// }

// myform(){
//   console.log(this.Loginform.value)
// }
//  vl:any = [];
// setram(event:any){
 
//   let val = event.target.value;
//   let checkid = this.vl.find((el:any)=>{
//     return el == val;
//   }) 

//   let ind = this.vl.findIndex((x:any) =>{
//     return x == val
//   } )
   
 
//   checkid == undefined ? this.vl.push(val) :  this.vl.splice(ind, 1);

//    this.Loginform.patchValue({
//     ram:   this.vl
//   })
 
//   console.log(this.vl);
 
// }
 
}
