package com.demo;
//Import the required packages

import com.cloudinary.*;
import com.cloudinary.utils.ObjectUtils;
import io.github.cdimascio.dotenv.Dotenv;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Map;

public class App 
{
    public static void main( String[] args ) throws IOException, URISyntaxException
    {
        Cloudinary cloudinary = new Cloudinary("cloudinary://253746265977626:Q3znctheXSWefJaMgMsESUZVnRA@dl1dqiopl");
        cloudinary.config.secure = true;
        URL imageDirectoryURL = App.class.getResource("/images");
        File imageDirectoryPath = new File(imageDirectoryURL.toURI());
        File[] images = imageDirectoryPath.listFiles();
        for(int i=0; i<images.length; i++) {
            File image = images[i];
            Map result = cloudinary.uploader().upload(image, ObjectUtils.emptyMap());
            System.out.println("Response:\n"+result+"\n");
            System.out.println(image.getName()+" successfully uploaded\n");
        }
    }
}
