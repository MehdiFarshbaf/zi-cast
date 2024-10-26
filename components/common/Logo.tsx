
import Link from "next/link";
import StaticImage from "./StaticImage";


// logo
import logo from "@/assets/images/logo.png"

const Logo = () => {
    return (
        <Link href="/" className="relative  flex-center">
            <StaticImage src={logo} alt="logo" className="object-fill w-[97px] h-[26px]"/>
        </Link>
    )
}
export default Logo