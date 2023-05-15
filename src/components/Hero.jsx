import Link from "next/link"
import Image from "next/image"
export default function Hero(){
return(
    <>
    <div className="bg-bg1 relative" >
        <div className="flex justify-between lg:flex-wrap-reverse items-center py-5 mx-16 md:mx-5 relative">
            <div className="">
                <div className="md:mt-5">
                    <h1 className="text-5xl md:text-2xl font-bold ">Find Your Dream Place</h1>
                    <p className="text-black mt-2 ">Buying a home is a life changing experience, <br /> so shouldn't real estate agent be a life <br /> changer.</p>
                </div>
                <div className="flex gap-x-3 mt-16 md:mt-5 relative">
                    <Link href={'/'} className="border-button-color md:text-sm text-button-color rounded-md font-bold px-5  py-2 border inline-block transition hover:bg-button-color duration-300 hover:text-white">Buy</Link>
                    <Link href={'/'} className="border-button-color md:text-sm text-button-color rounded-md font-bold px-5  py-2 border inline-block transition hover:bg-button-color duration-300 hover:text-white">Sale</Link>
                    <Link href={'/'} className="border-button-color md:text-sm text-button-color rounded-md font-bold px-5  py-2 border inline-block transition hover:bg-button-color duration-300 hover:text-white">Rent</Link>
                </div>
                    {/* <div className="absolute bg-white bottom-21 rounded-lg z-10">
                        <form action="" className="flex gap-x-10 py-3 px-6">
                            <div className="flex flex-col border-r-2 px-3">
                                <label htmlFor="" className="font-bold">Location</label>
                                <select name="" id="" className="focus:outline-none">
                                    <option value="" selected disabled hidden>Select your city</option>
                                    <option value="">New York</option>
                                    <option value="">Tokyo</option>
                                    <option value="">London</option>
                                    <option value="">Moscow</option>
                                    <option value="">madrid</option>
                                    <option value="">Berlin</option>
                                </select>
                            </div>


                            <div className="flex flex-col border-r-2 px-3">
                                <label htmlFor="" className="font-bold">Property Type</label>
                                <select name="" id="" className="focus:outline-none">
                                    <option value="" selected disabled hidden>Property Type</option>
                                    <option value="">Residential</option>
                                    <option value="">Commercial</option>
                                    <option value="">Industrial</option>
                                    <option value="">Raw land</option>
                                </select>
                            </div>
                            
                            <div className="flex flex-col px-3">
                                <label htmlFor="" className="font-bold">Average Price</label>
                                <select name="" id="" className="focus:outline-none">
                                    <option value="" selected disabled hidden >Average Price</option>
                                    <option value="">$4000</option>
                                    <option value="">$5000</option>
                                    <option value="">$3300</option>
                                    <option value="">$7000</option>
                                    <option value="">$9000</option>
                                    
                                </select>
                            </div>

                            <div>
                                <button className="text-white bg-button-color flex rounded-md px-3 py-2 gap-x-1 items-center">
                                    Search
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </div>
                            
                        </form>
                    </div> */}
                  </div>
                 {/* hero image */}
            <div>
                 <Image src={'/img14.jpg'} className="max-w-3xl h-auto" alt="picture" width={300} height={300}/>
            </div>   
        </div>
    </div>
    </>
)
}