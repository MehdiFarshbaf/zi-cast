import TwitterIcon from "@/components/icons/TwitterIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";

const SocialsNetworks = () => {
    return (
        <div className="flex flex-col gap-5 sm:flex-row sm:w-full sm:justify-center">
            <TwitterIcon/>
            <InstagramIcon/>
            <TelegramIcon/>
        </div>
    )
}

export default SocialsNetworks