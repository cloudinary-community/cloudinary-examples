# Uploading Images to Cloudinary with the .NET SDK

## 🧰 Uploading with the SDK in a .NET project

To use the SDK in a .NET project, first install the SDK:

```sh
dotnet add package CloudinaryDotNet
```
Then, add the necessary package reference

```csharp
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
```

Finally, configure a new instance of Cloudinary:

```csharp
Account account = new Account(
  "<Your Cloud Name>",
  "<Your API Key>",
  "<Your API Secret>");

Cloudinary cloudinary = new Cloudinary(account);
```

Finally, run the upload method, passing in your image source:

```csharp
var uploadParams = new ImageUploadParams()
{
  File = new FileDescription("<Image Location or URL>")
};
var uploadResult = await cloudinary.UploadAsync(uploadParams);
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
dotnet restore
```

* Run the program with:

```sh
dotnet run
```

The program will run in your terminal and you'll see the URL results logged.