function Button({operador, fn}) {

    return (
        <button
            type='button'
            className='h-10 w-10 flex items-center justify-center font-bold text-white
            text-2xl bg-slate-950 rounded-full hover:outline-none hover:ring-2
            hover:ring-offset-2 hover:ring-blue-700'
            onClick={fn}
        >{operador}</button>
    )
}

export default Button