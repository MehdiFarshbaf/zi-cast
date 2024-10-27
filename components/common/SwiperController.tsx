import {FC} from "react";

// Icons
import ArrowRight from "@/components/icons/ArrowRight";
import ArrowLeft from "@/components/icons/ArrowLeft";

interface IProps {
    nextFunction: Function,
    prevFunction: Function
}

const SwiperController: FC<IProps> = ({nextFunction, prevFunction}) => {


    return (
        <div className="w-full flex justify-center items-center gap-4">
            <ArrowRight onClick={() => nextFunction()}/>
            <ArrowLeft onClick={() => prevFunction()}/>
        </div>
    )
}
export default SwiperController