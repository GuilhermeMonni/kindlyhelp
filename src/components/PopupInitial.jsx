import ReactModal from "react-modal"
import { useEffect, useState } from "react"

function PopupInitial(){
    let [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        //verify if user has seen popup
        const verifyPopup = sessionStorage.getItem('popup')

        if(!verifyPopup){
            setIsOpen(true)
        }
    }, [])

    return (
        <ReactModal
        isOpen={isOpen}
        onRequestClose={() => {
            sessionStorage.setItem('popup', true)
            setIsOpen(false)
        }}
        style={{
            overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            },
            content: {
            inset: "unset",
            border: "none",
            background: "transparent",
            },
        }}
        >
        <div
            className="bg-deep border-detail font-noto max-w-md mx-auto rounded-xl shadow-xl border p-6 text-detail flex flex-col"
        >
            <h3
            className="text-xl font-bold mb-3 font-rubik text-secundary text-center"
            >
            Boas vindas ao KindlyHelp!
            </h3>

            <p className="text-sm leading-relaxed mb-5 text-justify indent-2 text-alternate">
            Neste website temos o objetivo de divulgar serviços sociais gratuitos. Caso note que algum serviço não esteja listado aqui, sinta-se à vontade para anunciar o projeto social que deseja, envie as
            informações clicando em 'Enviar serviço', nossa equipe irá analisar as informações enviadas. Obrigado.
            </p>

            <button
            onClick={() =>{ 
                    setIsOpen(false)
                    sessionStorage.setItem('popup', true)
                }
            }
            className="align-center px-5 py-2 rounded-md font-semibold text-white hover:opacity-90 transition"
            style={{
                backgroundColor: "var(--color-secundary)",
                fontFamily: "var(--font-rubik)",
            }}
            >
            Entendi
            </button>
        </div>
        </ReactModal>
    )
}

export default PopupInitial