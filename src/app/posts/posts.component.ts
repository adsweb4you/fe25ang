import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  lang = 'fgdf'

   Posts = [
     {
       title:"post2",
       created_at:"25/03/2022",
       img:"assets/img/img.png",
       view:87,
       slide:[
        "assets/img/img1.jpg",
        "assets/img/img2.png",
        "assets/img/img3.png",
        "assets/img/img4.png",
       ]
     },
     {
      title:"post3",
      created_at:"25/03/2022",
      img:"assets/img/img.png",
      view:654,
      slide:[
        "assets/img/img1.jpg",
        "assets/img/img2.png",
        "assets/img/img3.png",
        "assets/img/img4.png",
       ]
    },
    {
      title:"post4",
      created_at:"25/03/2022",
      img:"assets/img/img.png",
      view:500,
      slide:[
        "assets/img/img1.jpg",
        "assets/img/img2.png",
        "assets/img/img3.png",
        "assets/img/img4.png",
       ]
    },
    {
      title:"post5",
      created_at:"25/03/2052",
      img:"assets/img/img.png",
      view:6897,
      slide:[
        "assets/img/img1.jpg",
        "assets/img/img2.png",
        "assets/img/img3.png",
        "assets/img/img4.png",
       ]
    },
   ]

  constructor() { }

  ngOnInit(): void {

    this.Posts.forEach((el,index)=>{
      console.log(el,index)
    })
  }


  changimg(src:any, id:any){
   this.Posts[id].img = src
  }


 

}
