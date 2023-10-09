package main

import (
	"fmt"

	"github.com/cloudinary/cloudinary-go/v2"

	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		fmt.Println("Error loading .env file")
		return
	}

	cld, err := cloudinary.New()
	if err != nil {
		fmt.Println("Error in creating Cloudinary instance", err)
		return
	}

	//image overlayed
	imageOverlay(cld)
}
