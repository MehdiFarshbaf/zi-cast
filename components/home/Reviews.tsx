import userImage from "@/assets/images/user.png"

const Reviews = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center mb-[200px] sm:mb-[100px]">
            <p className="text-center  text-whitePrimary font-medium text-[40px] mb-16 sm:mb-8"> نظر مشتری ها درباره ما چیست</p>
            <div className="inside grid grid-cols-3 sm:grid-cols-1 gap-4 sm:gap-6">
                {[1, 2, 3].map((review, index) => (
                    <div key={index} className="bg-color41 border border-color3 rounded-2xl flex flex-col gap-4 p-4 shadowReviews">
                        <img className="w-24 aspect-square rounded-full" src={userImage.src} alt="" />
                        <p className="font-bold text-whitePrimary text-md">زهرا کریمی</p>
                        <p className="line-clamp-1 text-whiteSecondary">مدیر مارکتینگ استارتاپ سیگنال</p>
                        <p className="text-color32 line-clamp-4 text-whitePrimary">تجربه ما با Digital Cast بسیار حرفه‌ای و دقیق بود. تیم تولید محتوا کاملاً با نیازهای ما هماهنگ بود و نتیجه‌ای که دریافت کردیم فراتر از انتظارمان بود. قطعاً همکاری ما ادامه خواهد داشت</p>
                    </div>
                ))}

            </div>
        </section>
    )
}
export default Reviews