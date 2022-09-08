import { useEffect, useRef } from 'react'
import gif from '../img/0.gif'

function InsertName({setName}) {
    var inputFocus = useRef()
    var screen = useRef()
    
    useEffect(() => {
        inputFocus.current.focus()
    }, [])

    const klikOk = () => {
        setName(inputFocus.current.value)
        screen.current.classList.add('hidden')
    }
    

  return (
    <div ref={screen} className="flex justify-center items-center w-full h-screen bg-dark">
        <div className="bg-white w-full mx-6 p-5 rounded-xl flex justify-center items-center flex-col space-y-6">
            <img src={gif} className="w-40 h-40" alt='Gif' />
            <div className='text-center'>
                <label className='text-xl font-bold font-mplus text-dark'>Masukin Nama Kamu</label>
                <input ref={inputFocus} className='w-full mt-4 outline-none border-2 border-primary p-3 rounded-lg' type="text" />
            </div>
            <button onClick={() => klikOk()} className='px-5 py-3 bg-primary text-white rounded font-semibold'>OK</button>
        </div>
    </div>
  )
}

export default InsertName