import { listHeaderMenu } from "@/data/fakeData"
import Logo from "../common/Logo"
import Link from "next/link"

const Header = () => {
    return (
        <header className="w-full flex-center py-4 mb-14">
            <div className="inside w-full flex justify-between items-center">
                <Logo />
                <nav className="flex flex-row gap-6 sm:hidden">{listHeaderMenu.map(menu => (
                    <Link key={menu.id} href={menu.path} className="text-whitePrimary hover:text-primary transition-all" >{menu.label}</Link>
                ))}</nav>
                <button className="rounded px-3 py-1 text-blackPrimary bg-whitePrimary border-none outline-none">اجاره استودیو</button>

            </div>
        </header>
    )
}
export default Header