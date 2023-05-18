package com.cloudinary.android_imageview;

import android.os.Bundle;
import android.widget.ImageView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.bumptech.glide.Glide;
import com.cloudinary.android.MediaManager;
import com.cloudinary.android_imageview.databinding.ActivityMainBinding;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity  {

    ActivityMainBinding binding;

    ImageView myImageView;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        // Get image view from xml.
        myImageView = binding.myImageview;

        initMediaManager();

        String url = MediaManager.get().url().generate("/samples/animals/cat");

        // Use glide to load image from url into imageview
        Glide.with(this).load(url).into(myImageView);
    }

    private void initMediaManager() {
        Map config = new HashMap();
        config.put("cloud_name", "dkxtn2tlm");
        MediaManager.init(this, config);
    }
}
