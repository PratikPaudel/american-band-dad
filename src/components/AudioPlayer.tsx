import { useState, useRef, useEffect } from "react"

const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  // references
  const audioPlayer = useRef<HTMLAudioElement|any>(null); // reference our audio component

  useEffect(()=> {
      setDuration(audioPlayer.current.duration)
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
        audioPlayer.current.play();
    } else {
        audioPlayer.current.pause();
    }
  }

  return (
    <div>
      <audio ref={audioPlayer} src="./public/audio/porsche.mp3" preload="metadata"></audio>
      <button>back 30</button>
      <button onClick={togglePlayPause}>
        { isPlaying ? "Pause" : "Play"}
      </button>
      <button>forward 30</button>

      {/* current time */}
      <div>0:00</div>

      {/* progress bar */}
      <div>
        <input type="range" />
      </div>

      {/* duration */}
      <div>0</div>
    </div>
  )
}

export default AudioPlayer
