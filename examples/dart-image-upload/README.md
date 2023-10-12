# Uploading Images to Cloudinary with the Dart SDK

## 🧰 Uploading with the SDK in a Dart project

To use the SDK in a Dart project, first install the SDK:

```sh
dart pub add cloudinary_api
dart pub add cloudinary_url_gen
```
Then, add the necessary package reference

```dart
import 'dart:io';
import 'package:cloudinary_url_gen/cloudinary.dart';
import 'package:cloudinary_api/uploader/cloudinary_uploader.dart';
```

Finally, configure a new instance of Cloudinary:

```dart
var cloudName = Platform.environment['CLOUDINARY_CLOUD_NAME'];
var apiKey = Platform.environment['CLOUDINARY_API_KEY'];
var apiSecret = Platform.environment['CLOUDINARY_API_SECRET'];

var cloudinary = Cloudinary.fromStringUrl('cloudinary://${apiKey}:${apiSecret}@${cloudName}');
```

Finally, run the upload method, passing in your image source:

```dart
var uploadResult = await cloudinary.uploader().upload(File('localImagePath'));

// OR

var uploadResult = await cloudinary.uploader().upload('onlineImageURL');
```

## 🚀 Get Started with This Example

* Add the following environment variables via your shell
```sh
# In Bash
export CLOUDINARY_CLOUD_NAME=<Your Cloud Name>
export CLOUDINARY_API_KEY=<Your API Key>
export CLOUDINARY_API_SECRET=<Your API Secret>

# Or

# In CMD
set CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
set CLOUDINARY_API_KEY="<Your API Key>"
set CLOUDINARY_API_SECRET="<Your API Secret>"
```

* Install the project dependencies with:

```sh
dart pub add cloudinary_api
dart pub add cloudinary_url_gen
```

* Run the program with:

```sh
dart run bin/dart_image_upload.dart
```

The program will run in your terminal and you'll see the URL results logged.