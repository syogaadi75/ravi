import { useRef, useState } from 'react'
import gif from '../img/1.gif'
function FirstStep({name, setStep}) {
    const [engga, setengga] = useState(0)
    const buttonEngga = useRef()

    const klikEngga = () => {
        // engga == 0 ? buttonEngga.current.classList.add('puter') : ''
        // engga == 1 ? buttonEngga.current.classList.add('puter-lagi') : ''
        if(engga == 0) {
            buttonEngga.current.classList.add('puter')
            buttonEngga.current.classList.remove('balikin')
        } else if(engga == 1) {
            buttonEngga.current.classList.add('puter-lagi')
            buttonEngga.current.classList.remove('puter')
        } else if(engga == 2) {
            buttonEngga.current.classList.add('balikin')
            buttonEngga.current.classList.remove('puter-lagi')
        }
        engga == 2 ? setengga(0) : setengga(engga + 1)
    }

    return (
        <div className="bg-main flex flex-col items-center justify-center px-6">
            <div className="bg-dark/70 w-full p-5 rounded-xl flex justify-center items-center flex-col border-2 border-white text-white space-y-6">
                <img src={gif} className="w-40 h-40" alt='Gif' />
                <div className='text-center text-lg font-semibold'> {name} sayang gak sama Aku? <br /> 🤭 </div>
            </div>
            <div className='flex mt-4 space-x-6 items-center'>
                {engga == 0 && (<button onClick={() => setStep(2)} className='mt-4 px-5 py-3 bg-dark/70 border-2 border-white text-white rounded font-semibold'>Sayang</button>)}
                {engga == 1 && (<div className='mt-4 px-5 py-3 bg-dark/60 rounded text-white font-bold text-lg'>Eits 😝</div>)}
                {engga == 2 && (<div className='mt-4 px-5 py-3 bg-dark/60 rounded text-white font-bold text-lg'>Gabisa 😝</div>)}
                <button ref={buttonEngga} onClick={() => klikEngga()} className='mt-4 px-5 py-3 bg-dark/70 border-2 border-white text-white rounded font-semibold'>Engga</button>
            </div>
        </div>
    )
}

export default FirstStep