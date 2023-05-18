package com.cloudinary.kotlin_imageview

import android.os.Bundle
import android.widget.ImageView
import androidx.activity.ComponentActivity
import androidx.core.view.WindowCompat
import com.bumptech.glide.Glide
import com.cloudinary.Cloudinary
import com.cloudinary.config.CloudinaryConfig
import com.cloudinary.kotlin_imageview.databinding.ActivityMainBinding

class MainActivity: ComponentActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var myImageView: ImageView;

    private lateinit var cloudinary: Cloudinary;

    override fun onCreate(savedInstanceState: Bundle?) {
        WindowCompat.setDecorFitsSystemWindows(window, false)
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        myImageView = binding.myImageview;

        initCloudinary();

        var url = cloudinary.image().generate("/samples/animals/cat");

        Glide.with(baseContext).load(url).into(myImageView);
    }

    fun initCloudinary() {
        cloudinary = Cloudinary("cloudinary://@dkxtn2tlm")
    }
}