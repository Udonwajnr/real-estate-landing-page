import Link from "next/link";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function Property(){
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 700,
      slidesToShow:3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
       cssEase: "linear",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
    };
    return (
    <section className="py-10" id="#properties">
        <div className="mx-16 md:mx-5 mt-10">
            <div className="text-center">
                <h1 className="font-bold text-button-color">Our Properties</h1>
                <h2 className="font-bold text-2xl">Latest Properties</h2>
            </div>
                    <div className="relative mt-5">
                                        <Slider {...settings}>
                                            
                                            <div className="max-w-sm  lg:w-full shadow-3xl pb-5 embla__slide lg:text-xs">
                                                <div>
                                                    <Image src="/img3.jpg" className="max-w-sm" alt="picture" width={300} height={300} />
                                                </div>
                                                <div className="px-4 lg:px-1 mt-3 text-black">
                                                    <h2 className="text-xl font-bold ">Luxury House</h2>
                                                    <span className="flex items-center font-bold" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M24 44s15-12 15-25c0-8.284-6.716-15-15-15c-8.284 0-15 6.716-15 15c0 13 15 25 15 25Z"></path><path d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></path></g></svg>
                                                        Tokyo
                                                    </span>
                                                </div>
                                                <div className="grid-cols-3 grid gap-y-4 px-6 lg:px-2 mt-4 font-bold text-sm">
                                                    {/* beds */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2H2Zm11-9h6V8q0-.425-.288-.713T18 7h-4q-.425 0-.713.288T13 8v2Zm-8 0h6V8q0-.425-.288-.713T10 7H6q-.425 0-.713.288T5 8v2Zm-1 5h16v-2q0-.425-.288-.713T19 12H5q-.425 0-.713.288T4 13v2Zm16 0H4h16Z"></path></svg>
                                                        </div>
                                                        4 Beds
                                                    </span>
                                                    
                                                    {/* baths */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M9 17c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm3-4v2H5v-2c0-3.53 2.61-6.43 6-6.92V3h2v2.08c3.39.49 6 3.39 6 6.92zm-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5h10zm-9 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1z"></path></svg>
                                                        </div>
                                                        4 Baths
                                                    </span>
                                                    {/* kitchen */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M8 8V5h2v3H8Zm0 9v-5h2v5H8Zm-2 5q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.588 1.413T18 22H6Zm0-2h12v-9H6v9ZM6 9h12V4H6v5Z"></path></svg>
                                                        </div>
                                                    2 Kitchen
                                                    </span>                
                                                    {/* square feet */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className=" " width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0"  d="M3 21V2.45l4.1 4.1L5.75 7.9l.7.7L7.8 7.25l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35L21.55 21H3Zm3-3h8.3L6 9.7V18Z"></path></svg>
                                                        </div>
                                                            3100 Sq ft
                                                    </span>
                                                </div>
                                                <div className="flex justify-between mt-4 px-4 ">
                                                    <Link href={'/'} className=" rounded-md px-4 py-2 bg-button-color text-white inline-block lg:text-xs">Details</Link>
                                                    <span className="font-bold text-lg lg:text-xs">$415,000</span>
                                                </div>
                                            </div>
                                          
                                            <div className="max-w-sm  lg:w-full shadow-3xl pb-5 embla__slide lg:text-xs">
                                                <div>                                                    
                                                        <Image src="/img7.jpg" alt="picture" width={300} height={300} className="max-w-sm" />                                                    
                                                </div>
                                                <div className="px-4 lg:px-1 mt-3 text-black">
                                                    <h2 className="text-xl font-bold ">Luxury House</h2>
                                                    <span className="flex items-center font-bold" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M24 44s15-12 15-25c0-8.284-6.716-15-15-15c-8.284 0-15 6.716-15 15c0 13 15 25 15 25Z"></path><path d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></path></g></svg>
                                                        Tokyo
                                                    </span>
                                                </div>
                                                <div className="grid-cols-3 grid gap-y-4 px-6 lg:px-2 mt-4 font-bold text-sm">
                                                    {/* beds */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2H2Zm11-9h6V8q0-.425-.288-.713T18 7h-4q-.425 0-.713.288T13 8v2Zm-8 0h6V8q0-.425-.288-.713T10 7H6q-.425 0-.713.288T5 8v2Zm-1 5h16v-2q0-.425-.288-.713T19 12H5q-.425 0-.713.288T4 13v2Zm16 0H4h16Z"></path></svg>
                                                        </div>
                                                        4 Beds
                                                    </span>
                                                    
                                                    {/* baths */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M9 17c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm3-4v2H5v-2c0-3.53 2.61-6.43 6-6.92V3h2v2.08c3.39.49 6 3.39 6 6.92zm-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5h10zm-9 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1z"></path></svg>
                                                        </div>
                                                        4 Baths
                                                    </span>
                                                    {/* kitchen */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M8 8V5h2v3H8Zm0 9v-5h2v5H8Zm-2 5q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.588 1.413T18 22H6Zm0-2h12v-9H6v9ZM6 9h12V4H6v5Z"></path></svg>
                                                        </div>
                                                    2 Kitchen
                                                    </span>                
                                                    {/* square feet */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className=" " width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0"  d="M3 21V2.45l4.1 4.1L5.75 7.9l.7.7L7.8 7.25l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35L21.55 21H3Zm3-3h8.3L6 9.7V18Z"></path></svg>
                                                        </div>
                                                            3100 Sq ft
                                                    </span>
                                                </div>
                                                <div className="flex justify-between mt-4 px-4 ">
                                                    <Link href={'/'} className=" rounded-md px-4 py-2 bg-button-color text-white inline-block lg:text-xs">Details</Link>
                                                    <span className="font-bold text-lg lg:text-xs">$415,000</span>
                                                </div>
                                            </div>
                                          
                                            <div className="max-w-sm  lg:w-full shadow-3xl pb-5 embla__slide lg:text-xs">
                                                <div>                                                
                                                        <Image  src="/img5.jpg" alt="picture" width={300} height={300} className="max-w-sm" />
                                                </div>
                                                <div className="px-4 lg:px-1 mt-3 text-black">
                                                    <h2 className="text-xl font-bold ">Luxury House</h2>
                                                    <span className="flex items-center font-bold" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M24 44s15-12 15-25c0-8.284-6.716-15-15-15c-8.284 0-15 6.716-15 15c0 13 15 25 15 25Z"></path><path d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></path></g></svg>
                                                        Tokyo
                                                    </span>
                                                </div>
                                                <div className="grid-cols-3 grid gap-y-4 px-6 lg:px-2 mt-4 font-bold text-sm">
                                                    {/* beds */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2H2Zm11-9h6V8q0-.425-.288-.713T18 7h-4q-.425 0-.713.288T13 8v2Zm-8 0h6V8q0-.425-.288-.713T10 7H6q-.425 0-.713.288T5 8v2Zm-1 5h16v-2q0-.425-.288-.713T19 12H5q-.425 0-.713.288T4 13v2Zm16 0H4h16Z"></path></svg>
                                                        </div>
                                                        4 Beds
                                                    </span>
                                                    
                                                    {/* baths */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M9 17c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm3-4v2H5v-2c0-3.53 2.61-6.43 6-6.92V3h2v2.08c3.39.49 6 3.39 6 6.92zm-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5h10zm-9 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1z"></path></svg>
                                                        </div>
                                                        4 Baths
                                                    </span>
                                                    {/* kitchen */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M8 8V5h2v3H8Zm0 9v-5h2v5H8Zm-2 5q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.588 1.413T18 22H6Zm0-2h12v-9H6v9ZM6 9h12V4H6v5Z"></path></svg>
                                                        </div>
                                                    2 Kitchen
                                                    </span>                
                                                    {/* square feet */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className=" " width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0"  d="M3 21V2.45l4.1 4.1L5.75 7.9l.7.7L7.8 7.25l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35L21.55 21H3Zm3-3h8.3L6 9.7V18Z"></path></svg>
                                                        </div>
                                                            3100 Sq ft
                                                    </span>
                                                </div>
                                                <div className="flex justify-between mt-4 px-4 ">
                                                    <Link href={'/'} className=" rounded-md px-4 py-2 bg-button-color text-white inline-block lg:text-xs">Details</Link>
                                                    <span className="font-bold text-lg lg:text-xs">$415,000</span>
                                                </div>
                                            </div>

                                            <div className="max-w-sm  lg:w-full shadow-3xl pb-5 embla__slide lg:text-xs">
                                                <div>                                        
                                                        <Image src="/img6.jpg" alt="picture" width={300} height={300} className="max-w-sm" />                                                    
                                                </div>
                                                <div className="px-4 lg:px-1 mt-3 text-black">
                                                    <h2 className="text-xl font-bold ">Luxury House</h2>
                                                    <span className="flex items-center font-bold" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M24 44s15-12 15-25c0-8.284-6.716-15-15-15c-8.284 0-15 6.716-15 15c0 13 15 25 15 25Z"></path><path d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></path></g></svg>
                                                        Tokyo
                                                    </span>
                                                </div>
                                                <div className="grid-cols-3 grid gap-y-4 px-6 lg:px-2 mt-4 font-bold text-sm">
                                                    {/* beds */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2H2Zm11-9h6V8q0-.425-.288-.713T18 7h-4q-.425 0-.713.288T13 8v2Zm-8 0h6V8q0-.425-.288-.713T10 7H6q-.425 0-.713.288T5 8v2Zm-1 5h16v-2q0-.425-.288-.713T19 12H5q-.425 0-.713.288T4 13v2Zm16 0H4h16Z"></path></svg>
                                                        </div>
                                                        4 Beds
                                                    </span>
                                                    
                                                    {/* baths */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M9 17c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm3-4v2H5v-2c0-3.53 2.61-6.43 6-6.92V3h2v2.08c3.39.49 6 3.39 6 6.92zm-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5h10zm-9 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1z"></path></svg>
                                                        </div>
                                                        4 Baths
                                                    </span>
                                                    {/* kitchen */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0" d="M8 8V5h2v3H8Zm0 9v-5h2v5H8Zm-2 5q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.588 1.413T18 22H6Zm0-2h12v-9H6v9ZM6 9h12V4H6v5Z"></path></svg>
                                                        </div>
                                                    2 Kitchen
                                                    </span>                
                                                    {/* square feet */}
                                                    <span className="flex gap-x-1 items-center lg:text-xs">
                                                        <div className="p-2 bg-bg1 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className=" " width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#3a6eb0"  d="M3 21V2.45l4.1 4.1L5.75 7.9l.7.7L7.8 7.25l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35L21.55 21H3Zm3-3h8.3L6 9.7V18Z"></path></svg>
                                                        </div>
                                                            3100 Sq ft
                                                    </span>
                                                </div>
                                                <div className="flex justify-between mt-4 px-4 ">
                                                    <Link href={'/'} className=" rounded-md px-4 py-2 bg-button-color text-white inline-block lg:text-xs">Details</Link>
                                                    <span className="font-bold text-lg lg:text-xs">$415,000</span>
                                                </div>
                                            </div>
                                        </Slider>
                    </div>
        </div>
    </section>
    )
}