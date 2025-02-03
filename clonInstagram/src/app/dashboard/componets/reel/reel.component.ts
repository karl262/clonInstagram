import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.scss'],
  standalone: false
})
export class ReelComponent  implements AfterViewInit, OnInit {

  @Input() reel: any;
  @Input() index!: number;
  @Output() likeEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() playPauseEvent: EventEmitter<number> = new EventEmitter<number>();
  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef>;
  isLiked = false;

  ngAfterViewInit() {
    // Reproducir automáticamente el video correspondiente
    const video = this.videoPlayers.toArray()[this.index]?.nativeElement;
    if (video) {
      video.play();
    }
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.reel.likes += this.isLiked ? 1 : -1;
    this.likeEvent.emit();
  }

  togglePlayPause() {
    const video: HTMLVideoElement = this.videoPlayers.toArray()[this.index]?.nativeElement;
    if (video) {
      video.paused ? video.play() : video.pause();
    }
  }

  constructor() { }

  ngOnInit() {}

}
