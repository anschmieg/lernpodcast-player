import { useState } from "preact/hooks";
import AudioPlayer from "../components/AudioPlayer.tsx";
import VideoPlayer from "../components/VideoPlayer.tsx";
import FileInputs from "../components/FileInputs.tsx";
import SubtitleCarousel from "../components/SubtitleCarousel.tsx";
import SpeedControl from "../components/SpeedControl.tsx";

export default function MediaPlayer() {
  const [mediaType, setMediaType] = useState<"audio" | "video">("audio");

  return (
    <div class="container">
      <div class="player-wrapper">
        <FileInputs />
        {mediaType === "audio" ? <AudioPlayer /> : <VideoPlayer />}
        <SubtitleCarousel />
        <SpeedControl />
      </div>
    </div>
  );
}
