export default function NewsLetter(){
    return(
        <section className="py-10">
            <div className="bg-button-color mx-16 md:mx-5 flex flex-col justify-center items-center py-6 rounded-md">
                <h1 className="text-white text-5xl text-center md:text-2xl font-bold">Subscribe to Our Newsletter</h1>
                <div className="mt-5 w-6/12 lg:w-11/12">
                    <form action="" className="flex bg-white p-2 lg:p-0 w-full rounded-md">
                        <input type="email" name="" id="" className="w-full rounded-md focus:outline-none" placeholder="Enter your email"/>
                        <button className="text-white py-2 px-4 bg-button-color rounded-md">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}