import Container from '@/components/Container';
import CldVideoPlayer from '@/components/CldVideoPlayer';

async function Home() {
  return (
    <Container>
      <h2 className="text-xl font-bold mb-4">Shoppable Video</h2>

      <div>
        <CldVideoPlayer
          id="my-video"
          src="docs/shoppable_demo"
          width={800}
          height={500}
          source={{
            shoppable: {
              transformation: {
                crop: "pad",
                aspect_ratio: "1"
              },
              products: [
                {
                  productId: 1,
                  productName: "Sunglasses",
                  startTime: 0,
                  endTime: 2,
                  publicId:
                    "docs/shoppable_sunglasses",
                  hotspots: [
                    {
                      time: "00:02",
                      x: "50%",
                      y: "50%",
                      tooltipPosition: "left",
                      clickUrl: "https://cloudinary.com/blog/get_interactive_with_cloudinary_s_shoppable_video_and_video_player"
                    }
                  ],
                  onHover: {
                    action: "overlay",
                    args: "Click to see this product in the video"
                  },
                  onClick: {
                    action: "seek",
                    pause: 5,
                    args: {
                      time: "00:02"
                    }
                  }
                },
                {
                  productId: 2,
                  productName: "Green Dress",
                  startTime: 2,
                  endTime: 5,
                  publicId: "docs/shoppable_dress",
                  onClick: {
                    action: "goto",
                    pause: true,
                    args: {
                      url: "https://cloudinary.com/blog/get_interactive_with_cloudinary_s_shoppable_video_and_video_player"
                    }
                  }
                },
                {
                  productId: 3,
                  productName: "Brown Bag",
                  startTime: 7,
                  endTime: 11,
                  publicId:
                    "docs/shoppable_bag",
                  onHover: {
                    action: "switch",
                    args: {
                      publicId:
                        "docs/shoppable_bag2"
                    }
                  },
                  onClick: {
                    action: "goto",
                    pause: true,
                    args: {
                      url:
                        "https://cloudinary.com/blog/get_interactive_with_cloudinary_s_shoppable_video_and_video_player"
                    }
                  }
                }
              ]
            }
          }}
        />
      </div>

      <div className="mt-12 py-10 border-[0] border-t border-solid border-slate-300">
        <p>
          Find more Cloudinary examples at: <a className="underline text-inherit" href="https://github.com/cloudinary-community/cloudinary-examples">github.com/cloudinary-community/cloudinary-examples</a>.
        </p>
      </div>
    </Container>
  )
}

export default Home;
