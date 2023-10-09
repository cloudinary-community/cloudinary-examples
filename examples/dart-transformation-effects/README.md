# Transformations & Effects in Dart with Cloudinary Dart SDK

Cloudinary's Dart SDK provides simple, yet comprehensive image and video transformation capabilities that you can implement using code that integrates seamlessly with your existing Dart application.

## 🧰 Using the SDK in a Dart project

To use the SDK in a Dart project, first add the following dependencies to your `pubspec.yaml`:

```yaml
dependencies:
  cloudinary_url_gen: ^1.0.0
  cloudinary_api: ^1.0.0
```

Then configure a new instance of Cloudinary:

```
final cloudinary = Cloudinary.fromStringUrl('cloudinary://API_KEY:API_SECRET@CLOUD_NAME');

```

Where you can generate a Cloudinary URL by using the `cld.image` method such as:

```
cloudinary.image('<Your Public ID>')
```

## 🚀 Get Started with This Example

* Create an environment variable file `.env` and inside add:
```
CLOUDINARY_API_KEY="<your-api-key>"
CLOUDINARY_API_SECRET="<your-api-secret>"
CLOUDINARY_CLOUD_NAME="<your-cloud-name>"
```

* Add the following dependency to your `pubspec.yaml` to read environment variable: 
```yaml
dependencies:
  # ...
  dotenv: ^4.1.0
```

* Install the project dependencies with:

```
dart pub get
```

* Run the dart app with:

```
dart run <filename>
```

For example, inside the `examples/dart-transformation-effects` directory:

```
dart run lib/image-overlay.dart
```

The script will run in your terminal and you'll see the URL results logged.

## Further reference
- [Cloudinary Dart SDK Quick Start](https://cloudinary.com/documentation/dart_quick_start) for more details on installation, configuration, and additional usage examples for the Dart SDKs.
- [Dart Media Transformations](https://cloudinary.com/documentation/dart_media_transformations) to get an overview on how Cloudinary creates dynamic urls based on your provided transformation parameters and also some examples of common transformations.