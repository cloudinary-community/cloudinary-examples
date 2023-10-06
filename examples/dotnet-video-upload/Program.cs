using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

Account account = new Account(
  Environment.GetEnvironmentVariable("CLOUDINARY_CLOUD_NAME"),
  Environment.GetEnvironmentVariable("CLOUDINARY_API_KEY"),
  Environment.GetEnvironmentVariable("CLOUDINARY_API_SECRET"));
  
var cloudinary = new Cloudinary(account);

var videos = new List<string>
{
    "https://res.cloudinary.com/demo/video/upload/v1689235939/video_upload_example.mp4",
    "./donut.mp4"
};

foreach(var video in videos)
{
    var uploadParameters = new VideoUploadParams
    {
        File = new FileDescription(video),
    };
    var uploadResult = await cloudinary.UploadLargeAsync(uploadParameters);
    Console.WriteLine($"Successfully uploaded {video}");
    Console.WriteLine($"> Result: {uploadResult.SecureUrl}");
}