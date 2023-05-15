export default function NextButton(props){
     const { enabled, onClick } = props
    return(
        <>
            <button
                className="embla__button embla__button--next absolute z-40   -right-7  md:right-1 top-52 bg-white rounded-full p-3 md:p-1 shadow-4xl text-white"
                onClick={onClick}
                disabled={!enabled}
                >
                       <svg xmlns="http://www.w3.org/2000/svg" className="text-5xl h-16 w-16 text-green-500 md:w-5 md:h-5"  viewBox="0 0 24 24"><path fill="" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"></path></svg>
             </button>
        </>
    )
}