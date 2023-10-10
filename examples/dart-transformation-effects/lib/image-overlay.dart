// Import the Cloudinary packages.
import 'package:cloudinary_url_gen/cloudinary.dart';
import 'package:cloudinary_url_gen/transformation/resize/resize.dart';
import 'package:cloudinary_url_gen/transformation/transformation.dart';
import 'package:dotenv/dotenv.dart';

// Get environment variables
final env = DotEnv()..load(['.env']);

// Create a Cloudinary instance and set your cloud name.
final cloudinary =
    Cloudinary.fromStringUrl("cloudinary://${env['CLOUDINARY_API_KEY']}:${env['CLOUDINARY_API_SECRET']}@${env['CLOUDINARY_CLOUD_NAME']}");

main() {
  cloudinary.config.urlConfig.secure = true;
  overlayImage();
}

void overlayImage() {
  String url = (cloudinary.image('samples/bike.jpg')
        ..transformation(
          Transformation()
            ..resize(
              Resize.fill()
                ..width(800)
                ..height(600),
            )
            ..addTransformation('l_samples:cloudinary-icon,w_250,h_250')
            ..addTransformation('fl_layer_apply,g_center'),
        ))
      .toString();

  print(url);
}
