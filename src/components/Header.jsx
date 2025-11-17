import Swal from "sweetalert2"
import PopupInitial from "./PopupInitial"

function Header(){
    /*popups
    function sendInfos(){//send data services

    }*/
    function about(){//about pag
        Swal.fire({
            text: "Neste aplicativo temos o objetivo de divulgar serviços sociais gratuitos. Caso note que algum serviço não esteja listado aqui, sinta-se à vontade para anunciar o projeto social que deseja, envie as informações clicando em 'Enviar serviço', nossa equipe irá analisar para analisar as informações enviadas. Obrigado.",
            icon: "info",
            customClass:{
                popup: '!bg-deep !border-detail !font-noto !max-w-1/2 !min-w-90 !mx-auto !rounded-xl !shadow-xl !border !p-3 !flex !flex-col !text-alternate !items-center !justify-center',
                text: '!text-sm !leading-relaxed !mb-5 !text-justify',
                confirmButton: '!bg-secundary hover:!bg-primary hover:!text-deep !font-rubik !border-none',
                icon: '!mt-0 !w-10 !h-12 !text-xs'
            }
        })
    }
    function network(){ //networks
        Swal.fire({
            html: `
            <div class="text-left">
                <h2 class="text-2xl font-momo text-center text-alternate mb-4">Redes sociais</h2>
                <ul class="space-y-3">
                <li>
                    <a href="https://www.instagram.com/monni.05/#" target="_blank" rel="noopener noreferrer" class="font-rubik text-alternate hover:underline hover:text-secundary flex items-center gap-2">
                        <img src="../public/images/instagram.png" alt="Logo instagram">Instagram
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GuilhermeMonni" target="_blank" rel="noopener noreferrer" class="font-rubik text-alternate hover:underline hover:text-secundary flex items-center gap-2">
                        <img src="../public/images/github.png" alt="Logo github">GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/guilherme-monni-a542a9244/" target="_blank" rel="noopener noreferrer" class="font-rubik text-alternate hover:underline hover:text-secundary flex items-center gap-2">
                        <img src="../public/images/linkedin.png" alt="Logo linkedin">Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://culturaeduca.cc/" target="_blank" rel="noopener noreferrer" class="font-rubik text-alternate hover:underline hover:text-secundary flex items-center gap-2">
                        <img src="../public/images/links.png" alt="Logo links">Cultura Educa
                    </a>
                </li>
                <li>
                    <a href="https://www.rs.gov.br/busca-integrada?palavraschave=servi%C3%A7os+sociais&scopes=rs&q=servi%C3%A7os+sociais" target="_blank" rel="noopener noreferrer" class="font-rubik text-alternate hover:underline hover:text-secundary flex items-center gap-2">
                        <img src="../public/images/links.png" alt="Logo links">Portal de serviços sociais
                    </a>
                </li>
                </ul>
            </div>
            `,
            showConfirmButton: true,
            confirmButtonText: 'Fechar',
            buttonsStyling: false,
            customClass: {
            popup: '!bg-deep !border-none !font-noto !max-w-1/2 !min-w-90 !mx-auto !rounded-xl !shadow-xl !border !p-6 !flex !flex-col !text-alternate',
            confirmButton: '!bg-secundary hover:!bg-primary hover:!text-deep !font-rubik !font-bold !border-none !py-3 !px-2 !rounded-xl !mt-6 !transition-all'
            }
        });
    }

    return(
        <>
            <div className="bg-deep h-40 flex items-center justify-center flex-col p-3">
                <img src="/images/logo-app.png" alt="Imagem logo app." className="rounded-full max-h-24 max-w-32" />
                <nav>
                    <ul className="inline-flex mt-5 gap-2 text-gray-100 *:cursor-pointer *:hover:text-primary *:duration-150 *:font-rubik">
                        <li>Enviar serviço</li>
                        <li><a href="https://github.com/GuilhermeMonni/kindlyhelp" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li onClick={about}>Sobre</li>
                        <li onClick={network}>Redes</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header