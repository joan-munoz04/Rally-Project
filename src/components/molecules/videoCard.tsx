import { useState } from "react";
import { Icon } from "@iconify/react";

interface VideoCardProps {
  videoURL: string; // ejemplo: https://www.youtube.com/watch?v=abc123
}

const getYouTubeEmbedURL = (url: string): string => {
  const videoId = new URL(url).searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}`;
};

const getYouTubeThumbnail = (url: string): string => {
  const videoId = new URL(url).searchParams.get("v");
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const VideoCard = ({ videoURL }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedURL = getYouTubeEmbedURL(videoURL);
  const thumbnail = getYouTubeThumbnail(videoURL);

  return (
    <div className="flex flex-col gap-8 border-2 border-[#D9D9D9] rounded-xl p-4 pb-5">
      <h1 className="text-3xl font-bold text-[#1E1E1E]">
        Antójate de nuestro evento
      </h1>

      <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
        {!isPlaying ? (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={thumbnail}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
              <Icon icon="mdi:play-circle-outline" color="white" width={80} />
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`${embedURL}?autoplay=1`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      <div className="flex flex-row text-xl items-center gap-6">
        <Icon icon="logos:youtube-icon" width={80} />
        <p className="text-textGray">
          Te invitamos a ver otros videos del rally Darién y a suscribirte a nuestro canal de YouTube: <br />
          <a
            href="https://www.youtube.com/darienrally"
            className="underline hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.youtube.com/darienrally
          </a>
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
