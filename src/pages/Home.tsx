import Codec from "../components/Codec.tsx"
import { useState, useEffect } from "react";

type Dialogue = {
    option: string;
    response: string;
}

const dialogueOptions: Record<string, Dialogue> = {
    about: {
        option: "Who are you?",
        response: "My name is Sage Aguina-Kang, I’m a CS student at UC Berkeley finishing up my bachelor’s and an aspiring software engineer. I have a habit of making weird little projects that interest me ... this site included."
    },
    hobbies: {
        option: "Any hobbies?",
        response: "In my free time I like watching a variety of shows, reading manga, and of course playing video games as you can probably tell from the theme of this site."
    },
    fact: {
        option: "What's up with the cat?",
        response: "He’s a placeholder until I get the chance to implement the functionality to cycle through the images on the Codec. For now, you get to stare at the watermelon cat and my face."
    }
};

export default function Home() {
    const [response, setResponse] = useState<string>(" ");
    const [showOptions, setShowOptions] = useState<boolean>(true);
    const [isTyping, setIsTyping] = useState<boolean>(false);

    function setDialogue(key: string) {
        const dialogue = dialogueOptions[key]
        if (dialogue) {
            setResponse(dialogue.response);
            setShowOptions(false);
            setIsTyping(true);
        }
    }

    function useTypeWriter(text: string, speed = 20) {
        const [displayText, setDisplayText] = useState('');

        useEffect(() => {
            setDisplayText('');
            let i: number = 0;

            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayText(text.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                }
            }, speed);

            return () => {
                clearInterval(typingInterval);
            };
        }, [text, speed])

        return displayText
    }

    const typedResponse = useTypeWriter(response, 25);

    return (
        <div>
            <div className="flex flex-col justify-center items-center translate-y-10">
                <Codec />
                <div
                    className="text-[30px] text-wrap mt-5 w-[1000px] h-[120px]"
                >
                    {showOptions ? Object.keys(dialogueOptions).map((key) => (
                        <p
                            key={key}
                            onClick={(e) => { e.stopPropagation(); setDialogue(key); }}
                            className="text-white cursor-pointer hover:underline mt-3"
                        >
                            {">"} {dialogueOptions[key].option}
                        </p>
                    )) : (
                        <>
                            <p
                                className="text-white mt-3"
                            >
                                {typedResponse}
                            </p>

                            {!isTyping && (
                                <p
                                    className="text-white cursor-pointer hover:underline"
                                    onClick={() => {
                                        setShowOptions(true)
                                        setResponse("")
                                    }}
                                >
                                    [Click here to continue]
                                </p>
                            )
                            }
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}