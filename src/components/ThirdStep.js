import { useRef, useState } from 'react'
import gif from '../img/3.gif'
function ThirdStep({name, setStep}) {
    const [engga, setengga] = useState(0)
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    const now = new Date()

    return (
        <div className="bg-main flex flex-col items-center justify-center px-6">
            <div className="bg-dark/70 w-full p-5 rounded-xl flex justify-center items-center flex-col border-2 border-white text-white space-y-6">
                <img src={gif} className="w-40 h-40" alt='Gif' />
                <div className='text-center text-lg font-semibold'> 
                    <p className='mb-6'>Yeay! Akhirnya kita jadian <br /> 😆💖 <br /></p>
                    <p>Tanggal jadian kita adalah <br /></p>
                    <p className='text-primary'>{ now.getDate() +' '+bulan[now.getMonth()]+' '+now.getFullYear() }</p>
                </div>
            </div>
        </div>
    )
}

export default ThirdStep