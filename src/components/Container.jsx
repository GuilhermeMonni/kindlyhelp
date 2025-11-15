import { useState, useEffect } from "react"

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

    if(loading) return <div>Carregando...</div>

    console.log(services)

    // // for(let i; i <= services.lenght; i++){
    // //     (services) => {<div className="w-full h-full" key={services.id}>
    // //             <h3>{services.name}</h3>
    // //             <p>{services.service}</p>
    // //             <p>{services.addres}</p>
    // //             <p>{services.cell}</p>
    // //             <p>{services.email}</p>
    // //             <p>{services.hour}</p>
    // //     </div>
    // //     }
    // }


    return(
        <main className="bg-alternate w-full h-full">
            <div className="m-0 bg-alternate w-full h-full p-0 flex flex-wrap justify-center">{
                services.map((service) => (
                    <div className="m-14 bg-card w-1/5 min-h-1/4 p-10 rounded-xl text-center" key={service.id}>
                        <h3>{service.name}</h3>
                        <p>{service.service}</p>
                        <p>{service.addres}</p>
                        <p>{service.cell}</p>
                        <p>{service.email}</p>
                        <p>{service.hour}</p>
                </div>
                ))
                }
            </div>
        </main>
    )
}

export default Container