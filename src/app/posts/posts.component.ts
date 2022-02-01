import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

   Posts = [
     {
       title:"post2",
       created_at:"25/03/2022",
       img:"assets/img/img.png",
       view:87,
     },
     {
      title:"post3",
      created_at:"25/03/2022",
      img:"assets/img/img.png",
      view:654,
    },
    {
      title:"post4",
      created_at:"25/03/2022",
      img:"assets/img/img.png",
      view:500,
    },
    {
      title:"post5",
      created_at:"25/03/2052",
      img:"assets/img/img.png",
      view:6897,
    },
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
