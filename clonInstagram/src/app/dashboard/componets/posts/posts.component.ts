import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: false
})
export class PostsComponent  implements OnInit {

  posts: {
    username: string;
    userImage: string;
    location: string;
    image: string;
    likes: number;
    caption: string;
    timeAgo: string;
  }[] = [];

  ngOnInit() {
    this.generatePosts();
  }

  private generatePosts() {
    this.posts = [];
    for (let i = 1; i <= 15; i++) {
      this.posts.push({
        username: `Usuario ${i}`,
        userImage: `https://picsum.photos/50/50?random=${i}`,
        location: `Ubicación ${i}`,
        image: `https://picsum.photos/500/500?random=${i}`,
        likes: Math.floor(Math.random() * 1000) + 1,
        caption: `Descripción del post ${i}.`,
        timeAgo: ` Hace ${Math.floor(Math.random() * 24) + 1} horas`,
      });
    }
  }

  constructor() { }

}
