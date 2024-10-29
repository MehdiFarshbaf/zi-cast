import {IClassName} from "@/data/interface/publicInterface"
import {FC} from "react"

interface IProps extends IClassName {
}


const LocationIcon: FC<IProps> = ({className}) => {
    return (
        <svg className={className} width="21" height="21" viewBox="0 0 21 21" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.5 1.75C8.6773 1.75215 6.92987 2.47717 5.64102 3.76602C4.35218 5.05486 3.62716 6.8023 3.62501 8.625C3.62282 10.1145 4.10937 11.5636 5.01001 12.75C5.01001 12.75 5.19751 12.9969 5.22813 13.0325L10.5 19.25L15.7744 13.0294C15.8019 12.9963 15.99 12.75 15.99 12.75L15.9906 12.7481C16.8908 11.5623 17.3771 10.1138 17.375 8.625C17.3729 6.8023 16.6478 5.05486 15.359 3.76602C14.0701 2.47717 12.3227 1.75215 10.5 1.75ZM10.5 11.125C10.0056 11.125 9.52221 10.9784 9.11108 10.7037C8.69996 10.429 8.37953 10.0385 8.19031 9.58171C8.00109 9.12489 7.95158 8.62223 8.04804 8.13727C8.14451 7.65232 8.38261 7.20686 8.73224 6.85723C9.08187 6.5076 9.52733 6.2695 10.0123 6.17304C10.4972 6.07657 10.9999 6.12608 11.4567 6.3153C11.9135 6.50452 12.304 6.82495 12.5787 7.23607C12.8534 7.6472 13 8.13055 13 8.625C12.9992 9.28779 12.7355 9.92319 12.2669 10.3919C11.7982 10.8605 11.1628 11.1242 10.5 11.125Z"
                fill="#9A9A9A"/>
        </svg>

    )
}
export default LocationIcon