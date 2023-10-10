package main

import (
	"fmt"

	"github.com/cloudinary/cloudinary-go/v2"
)

func imageOverlay(cld *cloudinary.Cloudinary) {
	// Instantiate an object for the asset with public ID "examples/shoes_kto0zb"
	image, err := cld.Image("examples/shoes_kto0zb")
	if err != nil {
		fmt.Println("could not find image", err)
	}

	// Add the transformation
	image.Transformation = "c_fill,g_auto,h_600,w_600/h_100,l_examples:sale-tag,w_100/fl_layer_apply,g_north_east,x_10,y_10"

	// Generate and print the delivery URL
	url, err := image.String()
	if err != nil {
		fmt.Println("url not generated", err)
	}

	fmt.Println(url)
}
