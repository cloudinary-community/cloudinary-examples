import 'package:cloudinary_flutter/cloudinary_context.dart';
import 'package:cloudinary_dart/cloudinary.dart';
import 'package:cloudinary_flutter/image/cld_image.dart';
import 'package:flutter/material.dart';

void main() {
  CloudinaryContext.cloudinary =
      Cloudinary.fromCloudName(cloudName: "dkxtn2tlm");

  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: SizedBox(
            width: 200,
            height: 200,
            child: CldImageWidget(
              publicId: "samples/animals/cat",
            ),
          ),
        ),
      ),
    );
  }
}
