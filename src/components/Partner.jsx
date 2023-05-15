import Image from "next/image"

export default function Partner(){
    return (
        <>
        <section className="mx-16 md:mx-5">
            <div className="text-center my-5">
                <h1 className="text-black font-bold text-3xl">Our Home Partners</h1>
            </div>
            <div className="flex justify-between image-scroll">
                <img src={'/download__2_-removebg-preview.png'} className="md:w-10 md:h-10 w-24 h-24"/>
                <img src={'/download__3_-removebg-preview.png'} className=" md:w-10 md:h-10 w-24 h-24"/>
                <img src={'/download__4_-removebg-preview.png'} className="md:w-10 md:h-10 w-24 h-24"/>
                <img src={'/HBL-Logo-removebg-preview.png'} className="md:w-10 md:h-10 w-24 h-24"/>
                <img src={'/png-transparent-mcb-bank-limited-pakistan-mauritius-commercial-bank-bank-text-logo-online-banking-removebg-preview.png'} className="md:w-10 md:h-10 w-24 h-24"/>
            </div>  
        </section>
        </>
    )
}