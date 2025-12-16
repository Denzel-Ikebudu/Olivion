import Image from "next/image"
import service1 from "@/public/service-1.jpg"
import service2 from "@/public/service-2.jpg"
import service3 from "@/public/service-3.jpg"
import service4 from "@/public/service-4.jpg"
import service5 from "@/public/service-5.jpg"

export default function Services () {
  return (
    <>
        <div className="px-[8%] lg:px-[12%] pt-20 pb-60 service relative">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/3 title pt-8">
                    <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">Our Services</span>
                </div>
                <div className="w-full lg:w-2/3">
                    <h1 className="CalSans text-4xl md:text-5xl mb-5">Explore our <span className="text-(--prim)"> comprehensive interior designs</span> services</h1>
                    <p className="text-gray-400 GolosText">We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision</p>
                </div>
            </div>
            <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row
            justify-between items-start md:items-center gap-5 mt-4">
                <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                    <h4 className="text-4xl CalSans">01</h4>
                    <div className="service-content">
                        <h2 className="mb-3 text-4xl CalSans">Residential interior design</h2>
                        <p className="GolosText text-gray-400">Tailored design services for private homes, including stylish room makeovers, complete home transformation, and personalized decor planning - creating comfortable, functional, and visually stunning living spaces that reflect each client's unique taste and lifestyle</p>
                    </div>
                </div>
                <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
                    <Image src={service1} alt="service-img" className="w-full service-img object-cover rounded-2xl border-2 border-black" />
                </div>
                <i className="bi bi-arrow-up-right transition-all duration-300"></i>
            </div>
            <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row
            justify-between items-start md:items-center gap-5 mt-4">
                <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                    <h4 className="text-4xl CalSans">02</h4>
                    <div className="service-content">
                        <h2 className="mb-3 text-4xl CalSans">Commercial Interior Design</h2>
                        <p className="GolosText text-gray-400">Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues - blending creativity with practicality to enhance brand identity, improve productivity, and inspiring environments that leave a lasting impression on clients and visitors</p>
                    </div>
                </div>
                <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
                    <Image src={service2} alt="service-img" className="w-full service-img object-cover rounded-2xl border-2 border-black" />
                </div>
                <i className="bi bi-arrow-up-right transition-all duration-300"></i>
            </div>
            <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row
            justify-between items-start md:items-center gap-5 mt-4">
                <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                    <h4 className="text-4xl CalSans">03</h4>
                    <div className="service-content">
                        <h2 className="mb-3 text-4xl CalSans">Interior Design Consultation</h2>
                        <p className="GolosText text-gray-400">Providing professional advice on concepts, color schemes, and material selection - helping clients make informed design choices that balance aesthetics and functionality while ensuring each space reflects their personal  vision, style, and desired atmosphere. </p>
                    </div>
                </div>
                <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
                    <Image src={service3} alt="service-img" className="w-full service-img object-cover rounded-2xl border-2 border-black" />
                </div>
                <i className="bi bi-arrow-up-right transition-all duration-300"></i>
            </div>
            <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row
            justify-between items-start md:items-center gap-5 mt-4">
                <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                    <h4 className="text-4xl CalSans">04</h4>
                    <div className="service-content">
                        <h2 className="mb-3 text-4xl CalSans">Outdoor and Landscape Design</h2>
                        <p className="GolosText text-gray-400">Extending design services to outdoor spaces such as gardens, patios, and decks - creating harmonious, functional, and visually appealing environments that seemlessly connect indoor and outdoor living</p>
                    </div>
                </div>
                <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
                    <Image src={service4} alt="service-img" className="w-full service-img object-cover rounded-2xl border-2 border-black" />
                </div>
                <i className="bi bi-arrow-up-right transition-all duration-300"></i>
            </div>
            <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row
            justify-between items-start md:items-center gap-5 mt-4">
                <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                    <h4 className="text-4xl CalSans">05</h4>
                    <div className="service-content">
                        <h2 className="mb-3 text-4xl CalSans">Renovation and Remodelling</h2>
                        <p className="GolosText text-gray-400">Overhauling existing spaces to modernize and improve functionality and aesthetics - environments that align with contemporary design trends and enhance everyday living experiences</p>
                    </div>
                </div>
                <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
                    <Image src={service5} alt="service-img" className="w-full service-img object-cover rounded-2xl border-2 border-black" />
                </div>
                <i className="bi bi-arrow-up-right transition-all duration-300"></i>
            </div>
        </div>    
    </>
  )
}
