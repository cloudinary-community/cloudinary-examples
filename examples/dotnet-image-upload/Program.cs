using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

Account account = new Account(
  Environment.GetEnvironmentVariable("CLOUDINARY_CLOUD_NAME"),
  Environment.GetEnvironmentVariable("CLOUDINARY_API_KEY"),
  Environment.GetEnvironmentVariable("CLOUDINARY_API_SECRET"));

var cloudinary = new Cloudinary(account);

var images = new List<string>
{
  "./images/aldebaran-s-uXchDIKs4qI-unsplash.jpg",
  "./images/brian-mcgowan-I0fDR8xtApA-unsplash.jpg",
  "./images/spacex-OHOU-5UVIYQ-unsplash.jpg",
  "./images/spacex-VBNb52J8Trk-unsplash.jpg",
  "./images/stellan-johansson-1PP0Fc-KSd4-unsplash.jpg",
  "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
};

foreach(var image in images)
{
    var uploadParameters = new ImageUploadParams()
    {
        File = new FileDescription(image)
    };
    var uploadResult = await cloudinary.UploadAsync(uploadParameters);
    Console.WriteLine($"Successfully uploaded {image}");
    Console.WriteLine($"> Result: {uploadResult.SecureUrl}");
}