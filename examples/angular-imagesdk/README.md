# Install and Configure Cloudinary in Angular

View Demo: https://cloudinary-angular-imagesdk.netlify.app/

## 🧰 Using the Cloudinary SDK in a Angular project


To use Cloudinary DSK in Angular import the below module in the component and add it in imports array

```ts
import { CloudinaryModule } from '@cloudinary/ng';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CloudinaryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

```

Next use your cloud instance to configure the Cloudinary SDK

```ts

import { Cloudinary } from '@cloudinary/url-gen';

@Component({
})
{
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const cld = new Cloudinary({
      cloud: {
        cloudName: '<cloud-name>',
      },
    });

  }
}

```

Next create an image instance and render it in component

```ts

import { CloudinaryModule } from '@cloudinary/ng';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';

@Component({
  imports: [CloudinaryModule],
})
export class AppComponent implements OnInit {
  img!: CloudinaryImage;


  ngOnInit(): void {
    const cld = new Cloudinary({
      cloud: {
        cloudName: '<cloud-name>',
      },
    });

    this.img = cld.image('<image-name>').roundCorners(byRadius(20));
  }

```

Add below code in `app.component.html`

```html
<advanced-image [cldImg]="img"></advanced-image>
```


## 🚀 Get Started with This Example

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
