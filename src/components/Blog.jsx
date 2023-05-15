import Link from "next/link"
export default function Blog(){
    return(
        <section className="py-10" id="blog">
            <div className="mx-16 mt-10 md:mx-5">
              <div className="text-center">
                <h1 className="font-bold text-button-color">Blog</h1>
                <h2 className="font-bold text-2xl">Latest News Feed</h2>
            </div>
            <div  className=" flex justify-between gap-y-4 mt-5 flex-wrap">
            {/* blog card */}
                <div className="max-w-md shadow-4xl">
                    <div>
                        <img src="/img13.jpg" alt="" />
                    </div>
                    <div className="px-8 md:p-3 py-3">
                        <span className="text-lg text-[#c7c7c7]">12 Feb,2023</span>
                        <h2 className="text-xl font-bold">What do you do a year before getting an apartment</h2>
                        <Link href={'/'} className="flex items-center gap-x-1 text-lg font-bold text-button-color mt-4">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#01499a" d="M11.3 19.3q-.275-.275-.288-.7t.263-.7l4.9-4.9H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.275-.275-.263-.7t.288-.7q.275-.275.7-.275t.7.275l6.6 6.6q.15.125.213.313t.062.387q0 .2-.062.375t-.213.325l-6.6 6.6q-.275.275-.7.275t-.7-.275Z"></path></svg>    
                        </Link>
                    </div>
                </div>

                
             {/* blog card */}
                <div className="max-w-md shadow-4xl">
                    <div>
                        <img src="/img17.jpg" alt="" />
                    </div>
                    <div className="px-8 md:p-3 py-3">
                        <span className="text-lg text-[#c7c7c7]">14 Feb,2023</span>
                        <h2 className="text-xl font-bold">Would the regulation of real estate Stand a better chance?</h2>
                        <Link href={'/'} className="flex items-center gap-x-1 text-lg font-bold text-button-color mt-4">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#01499a" d="M11.3 19.3q-.275-.275-.288-.7t.263-.7l4.9-4.9H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.275-.275-.263-.7t.288-.7q.275-.275.7-.275t.7.275l6.6 6.6q.15.125.213.313t.062.387q0 .2-.062.375t-.213.325l-6.6 6.6q-.275.275-.7.275t-.7-.275Z"></path></svg>    
                        </Link>
                    </div>
                </div>

            {/* blog card */}
                <div className="max-w-md shadow-4xl">
                    <div>
                        <img src="/img15.jpg" alt="" />
                    </div>
                    <div className="px-8 md:p-3 py-3">
                        <span className="text-lg text-[#c7c7c7]">12 Feb,2023</span>
                        <h2 className="text-xl font-bold">What do you do a year before getting an apartment</h2>
                        <Link href={'/'} className="flex items-center gap-x-1 text-lg font-bold text-button-color mt-4">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#01499a" d="M11.3 19.3q-.275-.275-.288-.7t.263-.7l4.9-4.9H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.275-.275-.263-.7t.288-.7q.275-.275.7-.275t.7.275l6.6 6.6q.15.125.213.313t.062.387q0 .2-.062.375t-.213.325l-6.6 6.6q-.275.275-.7.275t-.7-.275Z"></path></svg>    
                        </Link>
                    </div>
                </div>


            </div>

            </div>

        </section>
    )
}