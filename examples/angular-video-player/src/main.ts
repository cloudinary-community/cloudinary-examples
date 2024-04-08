import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { videoPlayer } from 'cloudinary-video-player';
import 'cloudinary-video-player/cld-video-player.min.css';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <video
      id="player"
      controls
      muted
      class="cld-video-player cld-fluid"
    ></video>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const player = videoPlayer('player', {
      cloudName: 'demo',
      publicId: 'dog',
    });
  }
}

bootstrapApplication(AppComponent);
