<script>
  import { CldVideoPlayer } from "svelte-cloudinary"
</script>

<CldVideoPlayer
  width={1920}
  height={1080}
  src="samples/cld-sample-video"
  colors={{
    accent: "orange",
    base: "#00ff00",
    text: "#000000",
  }}
  fontFace="Monospace"
/>

<br />
<br />

<CldVideoPlayer
  width={1920}
  height={1080}
  src="samples/cld-sample-video"
  transformation={{
    overlay: "samples:svelte-logo",
    width: 200,
    gravity: "south_east",
    x: 150,
    y: 150,
    opacity: 40,
  }}
/>

<br />
<br />

<CldVideoPlayer
  logo={{
    onClickUrl: "https://google.com",
    imageUrl: "/logo.png",
  }}
  onPause={({ player }) => {
    console.log("video is paused")
    console.log(`current time: ${player.currentTime()}`)
  }}
  onPlay={({ player }) => {
    console.log("video is played")
    console.log(`current time: ${player.currentTime()}`)
  }}
  width={1920}
  height={1080}
  src="samples/cld-sample-video"
/>
