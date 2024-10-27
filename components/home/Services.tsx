import { servicesList } from "@/data/data"

const Services = () => {
    return (
        <section id="services w-full flex-center">
            <div className="inside w-full">
                <p className=" text-white text-center text-[28px] sm:text-xl font-medium mb-10 sm:mb-6">ما چه خدماتی ارائه میدهیم</p>
                <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-[200px] sm:mb-[100px]">
                    {servicesList.map(service => (
                        <div key={service.id} className="flex flex-col items-center gap-4 w-full px-4 py-10 odd:bg-oddCard even:bg-evenCard rounded-2xl">
                            <img className="w-16 aspect-square" src={service.icon.src} alt={service.title} />
                            <h2 className="line-clamp-1 text-center text-blackPrimary font-medium text-xl sm:text-base">{service.title}</h2>
                            <p className="line-clamp-2 text-center text-base font-normal text-blackSecondary">{service.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Services