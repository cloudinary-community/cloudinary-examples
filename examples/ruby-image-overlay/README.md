# Applying Image Transformations in Ruby with Ruby/Rails SDK

The Cloudinary Ruby SDK provides a simple interface for applying transformations to images in Ruby.

### There are two main ways to configure the SDK - using a .env file or a cloudinary.yml file.

To use the SDK in a Ruby project, first install libraries:

1. Install the cloudinary gem & dotenv gem:

```
gem install cloudinary 
```
```
gem install dotenv
```

## Configuring with a .env file

2. Create a .env file with your Cloudinary credentials:

```
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
```

3. Load the .env file and configure Cloudinary:

```
require 'cloudinary'
require 'dotenv'

Dotenv.load
Cloudinary.config_from_url(ENV['CLOUDINARY_URL'])
```
## Configuring with a cloudinary.yml file

2. Create a cloudinary.yml file with your credentials:

```
development:
  cloud_name: your_cloud_name
  api_key: your_api_key
  api_secret: your_api_secret
  secure: true

production:
  cloud_name: your_cloud_name
  api_key: your_api_key
  api_secret: your_api_secret
  secure: true
```

3. Load and configure Cloudinary:

```
require 'cloudinary'
require 'yaml'

config = YAML.load_file('cloudinary.yml')
Cloudinary.config do |c|
  c.cloud_name = config['development']['cloud_name']
  c.api_key = config['development']['api_key']
  c.api_secret = config['development']['api_secret']
  c.secure = config['development']['secure']
end
```
## Applying Transformations

Once configured, you can apply transformations to an image:

```
def image_overlay
  image_url = Cloudinary::Utils.cloudinary_url("(public_id_of_image).jpg",
    :transformation => [
      {:width => 700, :height => 850, :crop => "fill"},
      {:overlay => "(public_id_of_image)", :width => 200, :height => 200},
      {:flags => "layer_apply", :gravity => "(direction)", :x => 400, :y => 400}
    ],
    :secure => true
  )
  puts image_url
end
```

## 🚀 Get Started with This Example

* Create an environment variable file `.env` and inside add:
```
CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
```

* Install all project dependencies:

```
bundle install
```
Add sudo before the command if permission is denied.

* Run the Ruby file with:

```
ruby <filename>
```

For example, inside the `examples/ruby-image-overlay` directory:

```
ruby ImageOverlay.rb
```

The result will be outputted in your terminal in the form of a url. 

And there you have it - a simple example of using the Cloudinary Ruby SDK to overlay the image! 

Check out the [Cloudinary Ruby/Rails SDK Quick Start](https://cloudinary.com/documentation/ruby_rails_quickstart) for more details on installation, configuration, and additional usage examples for the Ruby and Rails SDKs.