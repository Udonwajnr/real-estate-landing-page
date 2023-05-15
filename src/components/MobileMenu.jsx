import Link from "next/link"
export default function MobileMenu({toggle}){
    return(
        
        <div className="fixed w-full bg-button-color h-screen z-50">
            <div className="absolute right-0 " onClick={toggle
            }>
                 <svg xmlns="http://www.w3.org/2000/svg"  width="3em" height="3em" viewBox="0 0 24 24"><path fill="#fff" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"></path></svg>
            </div>
              <div>
                    <ul className="flex flex-col text-3xl justify-evenly items-center text-white  gap-x-3 h-screen text-black font-semibold ">
                        <li><Link className="" href={'#home'}>Home</Link></li>
                        <li><Link href={'#about'}>About</Link></li>
                        <li><Link href={"#service"}>Service</Link></li>
                        <li><Link href={"#properties"}>Properties</Link></li>
                        <li><Link href={"#blog"}>Blog</Link></li>
                    </ul>
                </div>
        </div>
    )
}