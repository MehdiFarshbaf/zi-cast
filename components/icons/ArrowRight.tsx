import { IClassName } from "@/interface/publicInterface"
import { FC, Fragment, HTMLProps } from "react"

interface IProps extends IClassName {
    classContainer?: HTMLProps<HTMLElement>['className']
}

const ArrowRight: FC<IProps> = ({ className,classContainer }) => {
    return (
        <div className={classContainer}>
            <svg className={`hover:pointer  ${className}`} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="33.5" y="33.5" width="33" height="33" rx="16.5" transform="rotate(180 33.5 33.5)" stroke="#FF8502" />
                <path d="M14 11L20 17L14 23" stroke="#FF8502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

export default ArrowRight