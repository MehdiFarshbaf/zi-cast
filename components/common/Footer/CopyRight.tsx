import {appConfig} from "@/config/appConfig";

const CopyRight = () => {
    return (
        <div className="w-full pt-2 pb-4 border-t border-blackSecondary boxShadow">
            <p className="text-center text-whiteSecondary font-light text-lg sm:text-sm">
                {`تمامی حقوق برای شرکت ${appConfig.appName} محفوط است`}
            </p>
        </div>
    )
}
export default CopyRight
