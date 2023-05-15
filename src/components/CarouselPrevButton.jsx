export default function PrevButton(props){
      const { enabled, onClick } = props
    return (
        <>
             <button
      className="embla__button embla__button--prev absolute z-40 -left-7 md:left-1 top-52 md:top-50 bg-white rounded-full p-3 md:p-1 shadow-4xl"
      onClick={onClick}
      disabled={!enabled}
    >
   <svg xmlns="http://www.w3.org/2000/svg" className="text-5xl text-green-500 md:w-5 md:h-5 h-16 w-16" viewBox="0 0 24 24"><path fill="" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z"></path></svg>
   
    </button>
        </>
    )
}