import Logo from "../common/Logo"

const Slogan = () => {
    return (
        <section id="contact-us" className="w-full flex flex-col justify-center items-center mb-[200px] sm:mb-[100px]">
            <div className="inside flex flex-col justify-center items-center">
                <Logo />
                <p className="bg-gradient-to-r from-secondary via-whitePrimary to-whiteSecondary font-normal text-transparent bg-clip-text text-[40px] sm:text-2xl mt-8 mb-10 text-center">
                    از تولید ویدیو تا فرآوری و انتشار حرفه‌ای، همه چیز را به ما بسپارید.
                </p>
                <button className="bg-whiteSecondary text-blackPrimary rounded px-6 py-2 pointer text-center h-12 w-[170px]">
                    مشاوره رایگان
                </button>
            </div>

        </section>
    )
}
export default Slogan
