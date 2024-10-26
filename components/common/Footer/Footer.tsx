import Logo from "../Logo"
import SocialsNetworks from "@/components/common/SocialsNetworks";
import {listHeaderMenu} from "@/data/fakeData";
import Link from "next/link";
import PhoneIcon from "@/components/icons/PhoneIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import CopyRight from "@/components/common/Footer/CopyRight";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col justify-center items-center bg-background border-t border-blackSecondary boxShadow">
            <div
                className="inside w-full flex flex-row justify-between gap-6 py-28 border-t border-t-blackSecondary/30 sm:flex-col sm:gap-8">
                <div className="w-[40%] sm:w-full flex flex-col items-start justify-start gap-8">
                    <Logo/>
                    <p className="text-whitePrimary text-xl font-normal">یک توضیح کوتاه در مورد شرکت و خدمات اصلی که
                        ارائه می‌دهد (مانند تولید و فرآوری محتوا، دیجیتال
                        مارکتینگ و برندسازی).</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <p className="titleFooter">لینک های مفید</p>
                    <div className="flex flex-col gap-3">
                        {listHeaderMenu.map(menu => (
                            <Link key={menu.id} className="valueFooter"
                                  href={menu.path}>{menu.label}</Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <p className="titleFooter">راه های ارتباطی</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center justify-start">
                            <PhoneIcon/>
                            <p className="valueFooter">09039067633</p>
                        </div>
                        <div className="flex gap-2 items-center justify-start">
                            <EmailIcon/>
                            <p className="valueFooter">mehdifarshbaf92@gmail.com</p>
                        </div>
                        <div className="flex gap-2 items-center justify-start">
                            <LocationIcon/>
                            <p className="valueFooter">آدرس شرکت</p>
                        </div>
                    </div>
                </div>
                <SocialsNetworks/>
            </div>
            <CopyRight/>
        </footer>
    )
}
export default Footer