import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.page.html',
  styleUrls: ['./reels.page.scss'],
  standalone: false
})
export class ReelsPage implements OnInit, AfterViewInit {

  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef>;

  reels = [
    {
      username: 'User 2',
      userAvatar: 'https://picsum.photos/51',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      caption: 'Check this out! 😍',
      likes: 125000,
      comments: 500,
      shares: 150000,
      isLiked: false
    }
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.videoPlayers.first) {
        this.videoPlayers.first.nativeElement.play();
      }
    }, 500);
  }

  togglePlayPause(index: number) {
    const video: HTMLVideoElement = this.videoPlayers.toArray()[index]?.nativeElement;
    if (video) {
      video.paused ? video.play() : video.pause();
    }
  }

  toggleLike(index: number) {
    this.reels[index].isLiked = !this.reels[index].isLiked;
    this.reels[index].likes += this.reels[index].isLiked ? 1 : -1;
  }

}
