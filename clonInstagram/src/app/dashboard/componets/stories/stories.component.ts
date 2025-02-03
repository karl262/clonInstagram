import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {InfiniteScrollCustomEvent, IonContent} from "@ionic/angular";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  standalone: false
})
export class StoriesComponent  implements OnInit {

  @Input() hideStories = false;
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  stories: { username: string, image: string, isUser?: boolean }[] = [];
  posts: { content: string }[] = [];

  ngOnInit() {
    this.generateStories();
    this.generatePosts();
  }

  private generateStories() {
    this.stories.push({ username: 'Tu historia', image: 'assets/profile-instagram.jpeg', isUser: true });
    for (let i = 1; i <= 9; i++) {
      this.stories.push({ username: `Usuario ${i}`, image: `https://picsum.photos/80/80?random=${i}` });
    }
  }

  private generatePosts() {
    for (let i = 0; i < 20; i++) {
      this.posts.push({ content: `Post ${i + 1}` });
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generatePosts();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  onScroll(event: any) {
    this.hideStories = event.detail.scrollTop > 50;
  }

  constructor(private router: Router) { }
}
