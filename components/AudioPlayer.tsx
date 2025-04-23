export default function AudioPlayer({ src }: { src?: string }) {
  return (
    <audio id="audioPlayer" class="audio-player" controls>
      {src && <source src={src} type="audio/mpeg" />}
      Your browser does not support the audio element.
    </audio>
  );
}
