import { useRef } from "react";
import { useWindupString } from "windups";

function Hello({name, setStep}) {
    const screen = useRef()
    
    const StringyWindup = () => {
        const [text] = useWindupString(`Hai, ${name}! ... Jawab pertanyaan ini dengan jujur ya ><      `, {
            pace: (char) => 100,
            onFinished: () => {
                setStep(1)
                screen.current.classList.add('hidden')
            }
        });
        return <div className="text-center">{text}</div>;
    };
  return (
    <div ref={screen} className="flex bg-dark justify-center items-center h-screen text-white px-6 text-lg">
        {StringyWindup()}
    </div>
  )
}

export default Hello