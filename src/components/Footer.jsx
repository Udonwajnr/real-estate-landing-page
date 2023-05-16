import Link from "next/link"
export default function Footer(){
    return (
        <footer className="py-10 bg-bg1">
            <div className="mx-16 md:mx-5">
                <div className="flex md:flex-col justify-between flex-wrap gap-2">
                    <div>
                        <Link href={'/'} className="flex items-center gap-x-1 text-2xl text-black font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                            </svg>
                            
                            <h2>
                                Real Estate
                            </h2>
                        </Link>
                        <p className="text-black">Real estate refers to buying and selling, <br /> and renting of House,building and other <br /> properties</p>
                    </div>

                    <div>
                        <h1 className="font-bold">Quick Links</h1>
                        <ul className="text-black font-bold">
                            <li><Link href={'/'}>About Us</Link></li>
                            <li><Link href={'/'}>Service </Link></li>
                            <li><Link href={'/'}>Blog</Link></li>
                            <li><Link href={'/'}>Contact</Link></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h1 className="font-bold">Services</h1>
                        <ul className="text-black font-bold">
                            <li><Link href={'/'}>Contact Support</Link></li>
                            <li><Link href={'/'}>Help Center</Link></li>
                            <li><Link href={'/'}>Privacy Policy</Link></li>
                            <li><Link href={'/'}>Team</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="font-bold">Contact</h1>
                        <ul className="text-black font-bold">
                            <li><Link href={'/'}>Address:11 Guiberg lahore</Link></li>
                            <li><Link href={'/'}>Phone: +92 23 5432132</Link></li>
                            <li><Link href={'/'}>Email: estate@gmail.com</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-16 border-2"/>
                <div className="mt-5 flex gap-x-2 items-center text-black justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#5b5e65" d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23c.23.01.44.05.63.13c.2.09.38.21.52.36s.25.33.34.53s.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01s-.66-.5-1.08-.66s-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92s-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35s.72.69 1.2.91c.48.22 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63s.56-.58.74-.94s.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46s-.32.23-.52.3c-.19.07-.39.09-.6.1c-.36-.01-.66-.08-.89-.23c-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88s-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"></path></svg>
                    All Right Reversed By,Real Estate Ltd 2023
                </div>
            </div>
        </footer>
    )
}