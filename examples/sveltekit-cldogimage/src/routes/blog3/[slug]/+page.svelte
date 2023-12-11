<script>
  import { getContext } from "svelte"
  import { CldOgImage, CldImage } from "svelte-cloudinary"

  export let data

  const posts = getContext("posts")
  const post = posts.find(p => p.slug === `/blog/${data.slug}`)
</script>

<CldOgImage
  src={post.image_id}
  alt={post.image_alt}
  twitterTitle={post.title}
  effects={[{ colorize: "100", color: "white" }]}
  overlays={[
    {
      publicId: post.image_id,
      position: {
        gravity: "north_east",
      },
      effects: [
        {
          crop: "fill",
          gravity: "auto",
          width: 1000,
          height: 2000,
        },
      ],
    },
    {
      width: 1000,
      crop: "fit",
      text: {
        color: "black",
        fontFamily: "Source Sans Pro",
        fontSize: 180,
        fontWeight: "bold",
        lineSpacing: "-85",
        text: post.title,
      },
      position: {
        x: 70,
        y: -160,
        gravity: "west",
      },
    },
    {
      width: 900,
      crop: "fit",
      text: {
        color: "black",
        fontFamily: "Source Sans Pro",
        fontSize: 100,
        lineSpacing: "-35",
        text: post.tagline,
      },
      position: {
        x: 70,
        y: 160,
        gravity: "west",
      },
    },
  ]}
/>

<main class="container">
  <a class="home-link" href="/">&lt; Go Home</a>
  <div class="heading-with-dash">
    <h1>{post.title}</h1>
  </div>
  <div class="post__cover">
    <CldImage
      width={960}
      height={600}
      src={post.image_id}
      alt={post.image_alt}
    />
  </div>
  <div class="post__content">{@html post.html}</div>
</main>

<style>
  .home-link {
    color: #aaa;

    &:hover {
      color: yellow;
    }
  }

  h1 {
    color: white;
    font-size: 3rem;
  }

  .post__cover {
    border-radius: 20px;
    overflow: hidden;
    margin: 20px auto;
  }

  .post__content {
    color: white;
    max-width: 700px;
    margin: 0 auto;
    padding: 20px 0;
  }

  .post__content :global(h2) {
    margin: 20px 0;
    font-size: 2rem;
    color: yellow;
  }

  .post__content :global(p) {
    margin: 0 0 30px;
    font-size: 1.2rem;
    line-height: 1.7;
  }

  .post__content :global(img) {
    margin-bottom: 30px;
    border-radius: 10px;
  }
</style>
