import { IClassName } from "@/data/interface/publicInterface"
import { FC } from "react"

interface IProps extends IClassName {
}

const TelegramIcon: FC<IProps> = ({ className }) => {
    return (
        <svg className={className} width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="40" height="40" rx="20" fill="#FF8502" fillOpacity="0.22" />
            <path d="M17.9175 23.1814L17.5205 28.7654C18.0885 28.7654 18.3345 28.5214 18.6295 28.2284L21.2925 25.6834L26.8105 29.7244C27.8225 30.2884 28.5355 29.9914 28.8085 28.7934L32.4305 11.8214L32.4315 11.8204C32.7525 10.3244 31.8905 9.73941 30.9045 10.1064L9.61445 18.2574C8.16145 18.8214 8.18345 19.6314 9.36745 19.9984L14.8105 21.6914L27.4535 13.7804C28.0485 13.3864 28.5895 13.6044 28.1445 13.9984L17.9175 23.1814Z" fill="#FF8502" />
        </svg>

    )
}
export default TelegramIcon