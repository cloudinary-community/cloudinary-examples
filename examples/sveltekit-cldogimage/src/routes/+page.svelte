<script>
  import { getContext } from "svelte"
  import { CldImage } from "svelte-cloudinary"

  const posts = getContext("posts")
</script>

<main class='container'>
  <div class="heading-with-dash">
    <h1>My Blog</h1>
  </div>
  <div class="posts">
    {#each posts as post}
      <a href={post.slug} class="post">
        <div class="post__cover">
          <CldImage
            width={960}
            height={600}
            src={post.image_id}
            alt={post.image_alt}
          />
        </div>
        <div class="post__details">
          <h2>{post.title}</h2>
          <span class="post__date">{post.created_at}</span>
        </div>
      </a>
    {/each}
  </div>
</main>

<style>
  h1,
  h2 {
    color: white;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  .posts {
    margin-top: 30px;
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  .post {
    border: 3px solid #454545;
    border-radius: 5px;
    overflow: hidden;
    transition: border-color 300ms;
  }

  .post:hover,
  .post:focus {
    border-color: yellow;
  }

  .post:hover .post__cover img,
  .post:focus .post__cover img {
    transform: scale(1.1);
  }

  .post__cover {
    overflow: hidden;
  }

  .post__cover img {
    transition: transform 300ms;
  }

  .post__details {
    padding: 10px 20px 20px;
  }

  .post__date {
    font-size: 0.8rem;
    color: #aaa;
  }
</style>
