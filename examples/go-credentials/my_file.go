package main

import (
	"fmt"
	"log"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	cld, err := cloudinary.New()
	if err != nil {
		log.Fatalf("failed to initialize Cloudinary client: %v", err)
	}

	// Create the object for "cld-sample"
	img, err := cld.Image("cld-sample")
	if err != nil {
		fmt.Println("error")
	}

	// Generate and log the delivery URL
	url, err := img.String()
	if err != nil {
		fmt.Println("error")
	} else {
		fmt.Println("Image URL: ", url)
	}

}
