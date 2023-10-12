import 'dart:io';
import 'package:cloudinary_url_gen/cloudinary.dart';
import 'package:cloudinary_api/uploader/cloudinary_uploader.dart';

var cloudName = Platform.environment['CLOUDINARY_CLOUD_NAME'];
var apiKey = Platform.environment['CLOUDINARY_API_KEY'];
var apiSecret = Platform.environment['CLOUDINARY_API_SECRET'];

var cloudinary = Cloudinary.fromStringUrl('cloudinary://${apiKey}:${apiSecret}@${cloudName}');

Future<void> main() async {
  cloudinary.config.urlConfig.secure = true;

  await localUpload();
  await onlineUpload();
}

localUpload() async {
  var localImages = [
    './images/aldebaran-s-uXchDIKs4qI-unsplash.jpg',
    './images/brian-mcgowan-I0fDR8xtApA-unsplash.jpg',
    './images/spacex-OHOU-5UVIYQ-unsplash.jpg',
    './images/spacex-VBNb52J8Trk-unsplash.jpg',
    './images/stellan-johansson-1PP0Fc-KSd4-unsplash.jpg'
  ];

  for(var localImage in localImages) {
    var uploadResult = await cloudinary.uploader().upload(File(localImage));
    print('Successfully uploaded ${localImage}');
    print('> Result: ${uploadResult?.data?.secureUrl}');
  }
}

onlineUpload() async {
  var onlineImage = "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
  
  var uploadResult = await cloudinary.uploader().upload(onlineImage);
  print('Successfully uploaded ${onlineImage}');
  print('> Result: ${uploadResult?.data?.secureUrl}');
}