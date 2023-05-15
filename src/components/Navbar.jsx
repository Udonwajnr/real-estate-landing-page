import Link from "next/link"

export default function Navbar({toggle}){
    return(
        <header className="py-4  bg-bg1">

            <nav className="flex justify-between items-center mx-16 md:mx-5">
                <div className="hidden md:block cursor" onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#000" d="M3 15.5V13h18v2.5H3ZM3 11V8.5h18V11H3Zm0-4.5V4h18v2.5H3ZM3 20v-2.5h18V20H3Z"></path></svg>
                </div>
                <div className="">
                    <Link href={'/'} className="flex items-center gap-x-1 text-2xl md:text-base text-black font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                        </svg>
                        
                        <h2>
                            Real Estate
                        </h2>
                    </Link>
                </div>

                <div className="md:hidden">
                    <ul className="flex  gap-x-3 text-black font-semibold md:text-xs">
                        <li><Link className="" href={'/'}>Home</Link></li>
                        <li><Link href={'/'}>About</Link></li>
                        <li><Link href={'/'}>Service</Link></li>
                        <li><Link href={'/'}>Properties</Link></li>
                        <li><Link href={'/'}>Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <Link className=" rounded-md px-3 md:px-2 py-2 md:py-1 bg-button-color text-white" href={'/'}>Contact</Link>
                </div>
            </nav>
        </header>
    )
}