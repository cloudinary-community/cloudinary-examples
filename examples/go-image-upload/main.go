package main

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"

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

	filePaths := []string{
		"./images/aldebaran-s-uXchDIKs4qI-unsplash.jpg",
		"./images/brian-mcgowan-I0fDR8xtApA-unsplash.jpg",
		"./images/spacex-OHOU-5UVIYQ-unsplash.jpg",
		"./images/spacex-VBNb52J8Trk-unsplash.jpg",
		"./images/stellan-johansson-1PP0Fc-KSd4-unsplash.jpg",
		"https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
	}

	for _, filepath := range filePaths {
		uploadParams := uploader.UploadParams{
			UseFilename:              api.Bool(true),
			UseFilenameAsDisplayName: api.Bool(true),
			UniqueFilename:           api.Bool(false),
		}

		res, err := cld.Upload.Upload(context.Background(), filepath, uploadParams)

		if err != nil {
			fmt.Println("failed to upload file", err)
			continue
		}
		fmt.Println("Successfully uploaded", filepath)

		jsonRes, err := json.MarshalIndent(res, "", "  ")
		if err != nil {
			fmt.Println("Could not format result in JSON")
			fmt.Println("Upload result -", res)
		}
		fmt.Println("Upload result -", string(jsonRes))
	}
}
