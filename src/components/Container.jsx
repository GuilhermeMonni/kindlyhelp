import { useState, useEffect } from "react"
import PopupInitial from "./PopupInitial"
import { Hourglass } from "react-loader-spinner"

function Container(){
    const [services, setServices] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //serach services
        fetch('https://kindlyhelp-services.onrender.com/search')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])

    if(loading){
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

    return(
        <>
            <PopupInitial />
            <div className="m-0 bg-alternate w-full h-full p-0 flex flex-wrap justify-center">{
                services.map((service) => (
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