import Image from "next/image"
import Link from "next/link"
export default function Testimonial(){
    return (
        <section className="py-10">
          <div className="mx-16 mt-10 md:mx-5">
              <div className="text-center">
                <h1 className="font-bold text-button-color">Testimonials</h1>
                <h2 className="font-bold text-2xl">Our Happy Client</h2>
            </div>
            <div className="flex flex-wrap lg:justify-center  justify-between items-center  lg:gap-y-3  mt-5">
              {/* first card */}
                <div className="card max-w-sm shadow-4xl p-8 md:p-3 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <Image src="/img10.png" alt="picture" width={300} height={300} className="w-28 rounded-full" />
                  </div>
                  <div>
                    <h1 className="text-center mt-3 text-xl font-bold">Amelia Kerr</h1>
                    {/* rating */}
                    <div className="flex justify-center ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="text-green-500" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                    </div>
                    <p className="mt-2 text-black md:text-sm"> I am glad that  Contacted this company "Real Estate"  on the      recommendation of friends who have repeatedly applied here. I will  not hide it. I really liked working with you, all that it was...
                    </p>
                    <Link href={'/'} className="text-[#FDCC0D]">Read More</Link>
                  </div>
                </div>
              {/* first card ending*/}

              
              {/* second card */}
                <div className="card max-w-sm shadow-4xl p-8 md:p-3 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <Image src="/img9.png" alt="picture" width={300} height={300} className="w-28 rounded-full" />
                  </div>
                  <div>
                    <h1 className="text-center mt-3 text-xl font-bold">Henry Johns</h1>
                    {/* rating */}
                    <div className="flex justify-center ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="text-green-500" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                    </div>
                    <p className="mt-2 text-black md:text-sm"> 
                      The best real estate company I have ever dealt with.Very professional, experienced and helpful agents and brokers.Highly recommended.
                    </p>
                    <Link href={'/'} className="text-[#FDCC0D]">Read More</Link>
                  </div>
                </div>
              {/* second card ending*/}

              
              {/* first card */}
                <div className="card max-w-sm shadow-4xl p-8 md:p-3 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <Image src="/img11.png" alt="picture" width={300} height={300} className="w-28 rounded-full" />
                  </div>
                  <div>
                    <h1 className="text-center mt-3 text-xl font-bold">James Smith</h1>
                    {/* rating */}
                    <div className="flex justify-center ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="text-green-500" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.49 1l-13.809-2.013L24 5Z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#FDCC0D" stroke="#FDCC0D" strokeLinejoin="round" strokeWidth="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013L24 5Z"></path></svg>
                    </div>
                    <p className="mt-2 text-black md:text-sm"> 
                      Great environment professional and nice People, clean and beautiful office set up.they care about their client and train their agents frequently so they are always updated with what's going on in the market.
                    </p>
                   <Link href={'/'} className="text-[#FDCC0D]">Read More</Link>
                  </div>
                </div>
              {/* second card ending*/}

              
            </div>
          </div>
        </section>
    )
}