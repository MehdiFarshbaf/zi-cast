const Hero = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center">
            <div className="inside w-full bg-whitePrimary rounded px-3 pt-[100px] pb-[172px] flex flex-col gap-8 items-center justify-center  text-blackPrimary rounded-t-2xl">
                <h1 className="text-xl md:text-2xl font-bold text-blackPrimary">محتوای حرفه‌ای، بازاریابی دیجیتال هوشمند</h1>
                <p className="text-blackPrimary">
                    از تولید و فرآوری محتوا تا اجرای استراتژی‌های دیجیتال مارکتینگ، ما همه نیازهای شما را پوشش می‌دهیم.
                    شروع پروژه خود را همین امروز با ما رقم بزنید.
                </p>
                <a href="" className="bg-primary text-whitePrimary hover:bg-secondary rounded px-6 py-2 transition-all">
                    مشاوره رایگان
                </a>
            </div>
        </section>
    )
}
export default Hero