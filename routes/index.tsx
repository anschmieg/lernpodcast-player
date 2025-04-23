import { Head } from "$fresh/runtime.ts";
import MediaPlayer from "../islands/MediaPlayer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Audio Player</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <div id="fullscreen-container">
        <div class="background"></div>
        <div class="aurora"></div>
        <MediaPlayer />
      </div>
    </>
  );
}
