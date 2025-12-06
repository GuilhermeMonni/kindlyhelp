import { useState, useEffect } from "react"
import PopupInitial from "./PopupInitial"
import { Hourglass } from "react-loader-spinner"

function Container(){
    const [services, setServices] = useState(null)
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {//search services
        fetch('https://kindlyhelp-services.onrender.com/search')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])

    if(loading){ //animation loading
        return <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
            <Hourglass
                visible={true}
                height="50"
                width="50"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#222831', '#18b7be']}
            />
        </div>
    }

    const servicesFilter = services.filter((service) => { //filter services 
        const serviceFilter = service.service.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "") //clear string service
        const searchString = search.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "") //clear string search

        return serviceFilter.includes(searchString)
    }
    )

    return(
        <>
            <PopupInitial />
            <div className="min-w-43 w-1/3 mt-3 -mb-2 mx-auto relative">
                <img className="absolute -left-7 top-1/2 transform -translate-y-1/2 h-5 w-5" src="https://res.cloudinary.com/dzbdewkbp/image/upload/v1764890545/lupa_bzy1vx.png" alt="Imagem lupa" />
                <input className="border border-card w-full p-2 mx-auto block rounded-full focus:outline-none focus:border-deep" type="text" value={search} placeholder="Busque algum serviço, como: acolhimento, alimento, diversos..." onChange={(e) => setSearch(e.target.value)}/> 
            </div>
            
            <div className="m-0 bg-transparent w-full h-full p-0 flex flex-wrap justify-center">   
            {
                servicesFilter.map((service) => (
                        <div className="m-12 bg-card lg:min-w-1/4 lg:max-w-xs min-w-10/12 min-h-1/3 p-6 rounded-xl text-center shrink break-normal leading-relaxed shadow-sm shadow-detail" key={service.id}>
                            <img className="w-1/10 m-0" src={service.img} alt="Logo service" />
                            <h2 className="-mt-7 font-momo">{service.name}</h2>
                            <h3 className="font-rubik mb-2">{service.service}</h3>
                            <span className="w-full block border-b border-deep mb-2"></span>
                            <a href={
                                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(service.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-rubik text-deep hover:underline hover:text-secundary"
                            >{service.address}</a>
                            <p className="font-rubik m-1">Fone: {service.cell}</p>
                            <p className="font-rubik m-1">E-mail: {service.email}</p>
                            <p className="font-rubik">Aberto de {service.hour}</p>
                        </div>
                ))
            }
            </div>
        </>
    )
}

export default Container