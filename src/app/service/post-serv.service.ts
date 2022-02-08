import { Injectable } from '@angular/core';
import { HttpClient  , HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostServService {

  constructor(private http:HttpClient) { }

   GetPost(pric:any){
     let par:any  = {name:"asd", par2:"asdas"};
     par = JSON.stringify(par)
     return this.http.get('https://jsonplaceholder.typicode.com/posts', {
      params: new HttpParams({fromString:`name=25&price_to=200&price_from=${pric}`}) 
     });
   }

}
