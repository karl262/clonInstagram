import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {NavBarComponent} from "./nav-bar/nav-bar.component.";
import {FooterComponent} from "./footer/footer.component";
import {PostsComponent} from "./posts/posts.component";
import {StoriesComponent} from "./stories/stories.component";



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    PostsComponent,
    StoriesComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    PostsComponent,
    StoriesComponent
  ]
})
export class ComponentsModule { }
