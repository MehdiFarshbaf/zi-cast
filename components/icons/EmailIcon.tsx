import {IClassName} from "@/interface/publicInterface"
import {FC} from "react"

interface IProps extends IClassName {
}

const EmailIcon: FC<IProps> = ({className}) => {
    return (
        <svg className={className} width="21" height="20" viewBox="0 0 21 20" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2892 10.0919L19.0523 13.7367V6.28931L13.2892 10.0919Z" fill="#9A9A9A"/>
            <path d="M1.94739 6.28955V13.7369L7.71055 10.0922L1.94739 6.28955Z" fill="#9A9A9A"/>
            <path
                d="M17.9859 4.11841H3.01225C2.48594 4.11841 2.05173 4.51315 1.97278 5.0263L10.4991 10.6447L19.0254 5.0263C18.9465 4.51315 18.4991 4.11841 17.9859 4.11841Z"
                fill="#9A9A9A"/>
            <path
                d="M12.3022 10.7371L10.7891 11.7371C10.697 11.7897 10.6049 11.8292 10.4996 11.8292C10.3943 11.8292 10.2891 11.8028 10.2101 11.7371L8.69698 10.7371L1.98645 14.9871C2.0654 15.5002 2.49961 15.8818 3.02592 15.895H17.9996C18.5259 15.895 18.9601 15.5134 19.0391 14.9871L12.3022 10.7371Z"
                fill="#9A9A9A"/>
        </svg>

    )
}
export default EmailIcon