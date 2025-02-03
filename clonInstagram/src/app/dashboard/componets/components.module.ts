import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {NavBarComponent} from "./nav-bar/nav-bar.component.";
import {FooterComponent} from "./footer/footer.component";
import {PostsComponent} from "./posts/posts.component";
import {StoriesComponent} from "./stories/stories.component";
import {ReelComponent} from "./reel/reel.component";



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    PostsComponent,
    StoriesComponent,
    ReelComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    PostsComponent,
    StoriesComponent,
    ReelComponent
  ]
})
export class ComponentsModule { }
