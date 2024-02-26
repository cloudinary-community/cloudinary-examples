import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CloudinaryModule } from '@cloudinary/ng';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CloudinaryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  img!: CloudinaryImage;

  title = 'angular-imagesdk';

  ngOnInit(): void {
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dv9bvcs0a',
      },
    });

    this.img = cld.image('cld-sample-5').roundCorners(byRadius(20));
  }
}
