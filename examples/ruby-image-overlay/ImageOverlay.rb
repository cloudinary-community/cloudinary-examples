require 'cloudinary'
require 'yaml'
require 'dotenv'
Dotenv.load
Cloudinary.config_from_url(ENV['CLOUDINARY_URL'])

# uncomment this if you are not using .env file and using cloudinary.yml file
# config = YAML.load_file('.config/cloudinary.yml')

# Cloudinary.config do |c|
#   c.cloud_name = config['development']['cloud_name']
#   c.api_key = config['development']['api_key']
#   c.api_secret = config['development']['api_secret']
#   c.secure = config['development']['secure']
# end

Cloudinary.config do |config|
  config.secure = true
end

def image_overlay
  image_url = Cloudinary::Utils.cloudinary_url("samples/smile.jpg",
    :transformation => [
      {:width => 700, :height => 850, :crop => "fill"},
      {:overlay => "samples:breakfast", :width => 200, :height => 200},
      {:flags => "layer_apply", :gravity => "north_east", :x => 400, :y => 400}
    ],
    :secure => true
  )
  puts image_url
end

image_overlay

