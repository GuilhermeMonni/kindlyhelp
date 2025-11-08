function Header(){

    return(
        <>
            <div className="bg-deep h-40 flex items-center justify-center flex-col p-3">
                <img src="/images/logo-app.png" alt="Imagem logo app." className="rounded-full max-h-24 max-w-32" />
                <nav>
                    <ul className="inline-flex mt-5 gap-2 text-gray-100 *:cursor-pointer *:hover:text-primary *:duration-150 *:font-rubik">
                        <li>Início</li>
                        <li>Serviços</li>
                        <li>Redes</li>
                        <li>Sobre</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header