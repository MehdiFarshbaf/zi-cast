import Logo from "./Logo"

const Footer = () => {
    return (
        <footer className="w-full flex-center">
            <div className="inside w-full flex flex-row justify-between gap-6 py-28 border-t border-t-blackSecondary/30">
                <div className="w-[40%] flex flex-col items-start justify-start gap-8">
                    <Logo />
                    <p>یک توضیح کوتاه در مورد شرکت و خدمات اصلی که ارائه می‌دهد (مانند تولید و فرآوری محتوا، دیجیتال مارکتینگ و برندسازی).</p>
                </div>
                <p>foooter</p>
                <p>foooter</p>

            </div>
        </footer>
    )
}
export default Footer