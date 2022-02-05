import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostsComponent } from './posts/posts.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
