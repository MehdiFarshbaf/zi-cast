import {FC, HTMLProps} from "react";
import Image from "next/image";
import { appConfig } from "@/config/appConfig";

interface IProps {
    className?: HTMLProps<HTMLElement>['className'],
    src: string|any,
    alt?: string,
}

const StaticImage: FC<IProps> = ({src, alt = appConfig.defaultAltImage, className}) => {
    return (
        <Image src={src} alt={alt} className={className}/>
    )
}
export default StaticImage