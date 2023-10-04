# Uploading Images to Cloudinary with the Java SDK

## 🧰 Uploading Images with the SDK in a Java project

To use the SDK in a Java project, first import library:

```
import com.cloudinary.*;
import com.cloudinary.utils.ObjectUtils;    (For Setting the configuration parameters )
```

Then configure a new instance of Cloudinary:

```
Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
"cloud_name", "my_cloud_name",
"api_key", "my_api_key",
"api_secret", "my_api_secret",
"secure", true));

//or

Cloudinary cloudinary = new Cloudinary("cloudinary://my_key:my_secret@my_cloud_name");

//or

Cloudinary cloudinary = new Cloudinary(dotenv.get("CLOUDINARY_URL"));
```

Finally, run project, passing in your image source:

```
URL imageDirectoryURL = App.class.getResource("/images"); // give location of the images under resources (In this example Images are under resources package)
Map result = cloudinary.uploader().upload(contents[i], ObjectUtils.emptyMap());
```

## 🚀 Get Started with This Example

* Create an environment variable file `.env` and inside add:
```
CLOUDINARY_URL=cloudinary://my_key:my_secret@my_cloud_name
```

* Open Eclipse IDE and click on file menu then click on import

* Expand Maven and then click on Maven Existing Projects

* Browse to project folder location then click on finish

* Now on side bar you will see java-image-upload project downloading dependencies

* Expand java-image-upload

* Expand src/main/java

* Expand demo

* Double click on App.java and click on Run App button

The script will run in your terminal and you'll see the results logged.


