import { Component } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-video-player';

  player: any;
  isPlaying = false;

  constructor() {}

  ngOnInit(): void {
    this.player = videojs('my-video');
  }

  play(): void {
    this.player.play();
    this.isPlaying = true;
  }

  restart(): void {
    this.player.currentTime(0);
  }

  fastForward(): void {
    const currentTime = this.player.currentTime();
    this.player.currentTime(currentTime + 10);
  }
  fastBackward(): void {
    const currentTime = this.player.currentTime();
    this.player.currentTime(currentTime - 10);
  }

  pause(): void {
    this.player.pause();
    this.isPlaying = false;
  }
}
