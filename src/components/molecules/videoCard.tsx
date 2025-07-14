import { Icon } from "@iconify/react/dist/iconify.js";

interface VideoCardProps {
    videoURL: string;
}

const VideoCard = ({ videoURL }: VideoCardProps) => {
    return(
        <div className="flex flex-col gap-2 border-2 border-[#D9D9D9] rounded-xl">
            <h1 className="text-3xl text-[#1E1E1E]">Antójate de nuestro evento</h1>
            <video src={videoURL}></video>
            <div className="flex flex-row gap-2">
                <Icon icon="logos:youtube-icon"></Icon>
                <p className="text-grey">Te invitamos a ver otros videos del rally Darién y a suscribirte a nuestro canal de Youtube: <br /><a href="https://www.youtube.com/darienrally"></a></p>
            </div>
        </div>
    )
}

export default VideoCard;