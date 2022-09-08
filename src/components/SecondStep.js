import { useEffect, useRef, useState } from 'react'
import gif from '../img/2.gif'
function SecondStep({name, setStep}) {
    const [engga, setengga] = useState(0)
    const buttonEngga = useRef()
    const dialogRef = useRef()
    const [dialog, setDialog] = useState(false)
    

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
            setDialog(true)
            setTimeout(() => {
                dialogRef.current.classList.add('loading-dialog')
            }, 10);
            setTimeout(() => {
                buttonEngga.current.classList.remove('puter')
                buttonEngga.current.classList.remove('puter-lagi')
                buttonEngga.current.classList.remove('balikin')
                setDialog(false)
            }, 3000);

        }
        engga == 2 ? setengga(0) : setengga(engga + 1)
    }

    return (
        <>
            {dialog && (
                <div className='absolute flex justify-center items-center w-full bg-dark/90 h-screen'>
                    <div ref={dialogRef} className='bg-white p-5 rounded-xl relative'>
                        Harus Mau!!! 😝
                    </div>
                </div>
            )}
            <div className="bg-main flex flex-col items-center justify-center px-6">
                <div className="bg-dark/70 w-full p-5 rounded-xl flex justify-center items-center flex-col border-2 border-white text-white space-y-6">
                    <img src={gif} className="w-40 h-40" alt='Gif' />
                    <div className='text-center text-lg font-semibold'> Kalau sayang, berarti {name} <br /> mau dong jadi pacar Aku? <br /> 🥰 </div>
                </div>
                <div className='flex mt-4 space-x-6 items-center'>
                    {engga == 0 && (<button onClick={() => setStep(3)} className='mt-4 px-5 py-3 bg-dark/70 border-2 border-white text-white rounded font-semibold'>Mau</button>)}
                    {engga == 1 && (<div className='mt-4 px-5 py-3 bg-dark/60 rounded text-white font-bold text-lg'>Yakin?</div>)}
                    {engga == 2 && (<div className='mt-4 px-5 py-3 bg-dark/60 rounded text-white font-bold text-lg'>Eits 😝</div>)}
                    <button ref={buttonEngga} onClick={() => klikEngga()} className='mt-4 px-5 py-3 bg-dark/70 border-2 border-white text-white rounded font-semibold'>Engga</button>
                </div>
            </div>
        </>
    )
}

export default SecondStep