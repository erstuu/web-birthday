import { Music, Pause } from "lucide-react";

export default function FloatingMusicButton({
  audioRef,
  music,
  toggleMusic,
  isPlaying,
}) {
  return (
    <>
      <audio ref={audioRef} src={music} loop />

      <button
        onClick={toggleMusic}
        className="fixed top-6 left-6 z-50 w-16 h-16 rounded-full bg-pink-400 hover:bg-pink-500 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {isPlaying ? <Pause size={20} /> : <Music size={20} />}
      </button>
    </>
  );
}
