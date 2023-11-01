# Flutter Cloudinary CldImageWidget

With the Cloudinary Flutter SDK, we can conveniently optimize, transform, and manage assets directly within our Flutter application.

## 🧰 Using CldImageWidget in a Flutter project

### Installing the Flutter SDK

To install the Flutter SDK, open your `pubspec.yaml` file and add the following dependencies in the `dependencies` section:

```yaml
dependencies:
  # ...
  cloudinary_flutter: ^0.9.0
  cloudinary_url_gen: ^0.9.0
  # ...
```

Save the file and VS Code should automatically start to install the new packages.

### Initializing the SDK

To initialize the SDK, open your `main.dart` file and:

- Add the following imports:
  ```dart
  import 'package:cloudinary_flutter/cloudinary_context.dart';
  import 'package:cloudinary_dart/cloudinary.dart';
  ```
- Initialize the SDK in the `main` function:
  ```dart
  CloudinaryContext.cloudinary =
      Cloudinary.fromCloudName(cloudName: "[YOUR_CLOUD_NAME]");
  ```

## 🚀 Get Started with This Example

Open the project in VS Code and wait for the dependencies to install. If VS Code doesn't start installing the dependencies automatically, `cd` into this directory and execute:

```
flutter pub get
```

> ⚠️ Make sure you have the [Flutter VS Code extension](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter) installed.

To run the app:

- Hit `CMD` + `Shift` + `P` to open the command palette
- Type `Flutter: Select Device` and hit enter
- Select the device you want to run the app to (iOS Simulator, macOS, Chrome, etc...)
- Hit `F5` to build and run the app
