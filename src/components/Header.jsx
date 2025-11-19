import Swal from "sweetalert2"

function Header(){
    //popups
    async function sendInfos(){//send data services
        await Swal.fire({ //form popup
            title: "Ajuda social",
            html: `
                <form id="serviceForm" class="text-left space-y-5 p-4">
                    <div class="relative">
                        <input name="name" type="text" 
                        id="name" 
                        class="peer w-full px-4 py-4 bg-detail text-alternate rounded-lg border border-secundary focus:border-primary outline-none transition-all"
                        placeholder=" "
                        />
                        <label 
                        for="name" 
                        class="absolute left-4 top-1/2 -translate-y-1/2 text-base text-secundary pointer-events-none transition-all duration-200 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary"
                        >
                        Nome da unidade
                        </label>
                    </div>
                    <div class="relative">
                        <input name="services" type="text" id="services" 
                        class="peer w-full px-4 py-4 bg-detail text-alternate rounded-lg border border-secundary focus:border-primary outline-none transition-all"
                        placeholder=" "
                        />
                        <label 
                        for="services" 
                        class="absolute left-4 top-1/2 -translate-y-1/2 text-base text-secundary pointer-events-none transition-all duration-200 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary"
                        >
                        Serviços prestados
                        </label>
                    </div>
                    <div class="relative">
                        <input name="address" type="text" 
                        id="address" 
                        class="peer w-full px-4 py-4 bg-detail text-alternate rounded-lg border border-secundary focus:border-primary outline-none transition-all"
                        placeholder=" "
                        />
                        <label 
                        for="address" 
                        class="absolute left-4 top-1/2 -translate-y-1/2 text-base text-secundary pointer-events-none transition-all duration-200 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary"
                        >
                        Endereço
                        </label>
                    </div>
                    <div class="relative">
                        <input name="cell" type="tel" 
                        id="cell" 
                        class="peer w-full px-4 py-4 bg-detail text-alternate rounded-lg border border-secundary focus:border-primary outline-none transition-all"
                        placeholder=" "
                        />
                        <label 
                        for="cell" 
                        class="absolute left-4 top-1/2 -translate-y-1/2 text-base text-secundary pointer-events-none transition-all duration-200 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary"
                        >
                        Telefone para contato
                        </label>
                    </div>
                    <div class="relative">
                        <input name="email" type="email" 
                        id="email" 
                        class="peer w-full px-4 py-4 bg-detail text-alternate rounded-lg border border-secundary focus:border-primary outline-none transition-all"
                        placeholder=" "
                        />
                        <label 
                        for="email" 
                        class="absolute left-4 top-1/2 -translate-y-1/2 text-base text-secundary pointer-events-none transition-all duration-200 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary"
                        >
                        E-mail para contato
                        </label>
                    </div>
                </form>
            `,
            focusConfirm: false,
            confirmButtonText: "Enviar",
            customClass: {
                popup: '!bg-deep !border-none !font-noto !max-w-1/2 !min-w-90 !mx-auto !rounded-xl !shadow-xl !border !p-6 !flex !flex-col !text-alternate',
                text: '!text-2xl !font-momo w-1/4 !text-center !text-alternate !mb-4'
            },
            didOpen:() => {
                const form = document.getElementById('serviceForm')
                if(form){
                    form.addEventListener('keydown', (e) => {
                        if(e.key === 'Enter'){
                            e.preventDefault()
                            Swal.clickConfirm()
                        }
                    })
                }
            },
            preConfirm: async () => {
                const name = document.getElementById('name').value
                const services = document.getElementById('services').value
                const address = document.getElementById('address').value
                const cell = document.getElementById('cell').value
                const email = document.getElementById('email').value

                if(name == '' || services == '' || address == '' || cell == '' || email == ''){
                    Swal.fire({
                        text: 'Deixou algum campo em branco, deseja enviar mesmo assim?',
                        confirmButtonText: 'Enviar',
                        preConfirm: async () => {
                            return await sendData(name, services, address, cell, email)
                        }
                    })
                    return 
                }

                return await sendData(name, services, address, cell, email)
            }
        })

        async function sendData(name, services, address, cell, email){
            const url = 'https://kindlyhelp-services.onrender.com/send'

            try{
                fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name, services, address, cell, email
                    })
                })
                .then(async(res) => {
                    const data = res.json()
                    return data
                })
            }catch(error){
                console.error(error)
            }
        }
    }
    function about(){//about popup
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
    function network(){ //networks popup
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
                        <li onClick={sendInfos}>Enviar serviço</li>
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