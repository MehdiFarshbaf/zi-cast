import { IClassName } from "@/interface/publicInterface"
import { FC, HTMLProps } from "react"

interface IProps extends IClassName {
    classContainer?: HTMLProps<HTMLElement>['className'],
    onClick: Function
}

const ArrowLeft: FC<IProps> = ({ className, classContainer,onClick }) => {
    return (
        <div className={`group: ${classContainer}`} onClick={()=>onClick()}>
            <svg className={` ${className}`} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="group-hover:stroke-primary" x="-0.5" y="0.5" width="33" height="33" rx="16.5" transform="matrix(1 8.74228e-08 8.74228e-08 -1 1 34)" stroke="#9D9D9D" />
                <path className="group-hover:stroke-primary" d="M20 11L14 17L20 23" stroke="#9D9D9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg></div>

    )
}

export default ArrowLeft