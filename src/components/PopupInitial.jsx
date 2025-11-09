import ReactModal from "react-modal"
import { useState } from "react"

function PopupInitial(){
    let [isOpen, setIsOpen] = useState(true)

    return (
        <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
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
            Neste aplicativo temos o objetivo de divulgar serviços sociais gratuitos. Caso note que algum serviços não esteja listado aqui, e se sinta à vontade, pode anunciar o serviço que deseja anunciar, envie as
            informações clicando em 'serviços &rarr; criar serviço', nossa equipe irá analisar para aprovar o serviço. Obrigado.
            </p>

            <button
            onClick={() => setIsOpen(false)}
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