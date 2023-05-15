import Link from "next/link"
import Image from "next/image"
export default function About(){
    return(
        <section className="relative py-16 z-20" id="about">
            <div className="flex flex-wrap gap-y-5 justify-between items-center mx-16 md:mx-5">
                <div className="border-8 border-button-color">
                        <Image src={"/img2.jpg"} className="max-w-lg" width={400} height={400} alt="picture"/>
                </div>

                <div className="">
                    <h4 className="text-button-color font-bold text-lg">About</h4>
                    <p className="font-bold text-xl text-black">We Provide the Best Property For You</p>
                    <p className="text-black md:text-sm">Real estate is considered as one of the valuable <br /> asset and important asset that people can <br /> own as it acn appreciate with value over time and provide a source of <br /> income through rental properties</p>
                     <ul className="list-disc ml-5 text-black md:text-sm">
                        <li>Resident and Commercial soles</li>
                        <li>Investing Services</li>
                        <li>Financing Service</li>
                    </ul>
                    <Link className=" inline-block rounded-md px-3 py-2 bg-button-color text-white mt-3" href={'/'}>Read More</Link>
                </div>
            </div>
            <div className="absolute h-full bg-bg1 p-5 -z-10 w-80 top-0 md:w-full">
     
            </div>
        </section>
    )
}