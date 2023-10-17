# Uploading Images to Cloudinary with the Dart SDK

## 🧰 Uploading with the SDK in a Dart project

To use the SDK in a Dart project, first install the SDK:

```sh
dart pub add cloudinary_api
dart pub add cloudinary_url_gen
```
Then, add the necessary package references

```dart
import 'dart:io';
import 'package:cloudinary_url_gen/cloudinary.dart';
import 'package:cloudinary_api/uploader/cloudinary_uploader.dart';
```

Finally, configure a new instance of Cloudinary:

```dart
final cloudName = 'CLOUDINARY_CLOUD_NAME';
final apiKey = 'CLOUDINARY_API_KEY';
final apiSecret = 'CLOUDINARY_API_SECRET';

final cloudinary = Cloudinary.fromStringUrl('cloudinary://${apiKey}:${apiSecret}@${cloudName}');
```

> Note: always use environment variables in production environments

Finally, run the upload method, passing in your image source:

```dart
var uploadResult = await cloudinary.uploader().upload(File('localImagePath'));

// OR

var uploadResult = await cloudinary.uploader().upload('onlineImageURL');
```

## 🚀 Get Started with This Example

* Rename the file `.env.example` to `.env` and update the following environment variables
```
CLOUDINARY_CLOUD_NAME=<Your Cloud Name>
CLOUDINARY_API_KEY=<Your API Key>
CLOUDINARY_API_SECRET=<Your API Secret>
```

* Install the project dependencies with:

```sh
dart pub get
```

* Run the program with:

```sh
dart run bin/dart_image_upload.dart
```

The program will run in your terminal and you'll see the URL results logged.