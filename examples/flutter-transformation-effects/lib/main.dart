import 'package:cloudinary_flutter/cloudinary_context.dart';
import 'package:cloudinary_flutter/image/cld_image.dart';
import 'package:cloudinary_url_gen/cloudinary.dart';
import 'package:cloudinary_url_gen/transformation/gravity/gravity.dart';
import 'package:cloudinary_url_gen/transformation/resize/resize.dart';
import 'package:cloudinary_url_gen/transformation/transformation.dart';
import 'package:flutter/material.dart';

void main() {
  CloudinaryContext.cloudinary =
      Cloudinary.fromCloudName(cloudName: "dba1mxrvc");

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
                publicId: "sample",
                transformation: Transformation()
                  ..resize(Resize.crop()
                    ..gravity(Gravity.autoGravity())
                    ..height(1.0)
                    ..x(30)
                    ..y(20)
                    ..aspectRatio(1.5))
                  ..generic('l_samples:cloudinary-icon,w_250,h_250')
                  ..generic('fl_layer_apply,g_center')),
          ),
        ),
      ),
    );
  }
}
