const url = 'https://kindlyhelp-services.onrender.com' //url backend

export default async function ping(req, res) {
    if(req.method !== 'GET'){
        return res.status(405).json({ error: 'Method not allowed!' })
    }

    try{
        const startTime = Date.now()

        //ping back
        const response = await fetch (url, {
            method: 'GET',
            headers:{
                'User-Agent': 'KindlyHelp-KeepAlive/1.0',
                'Accept': 'application/json'
            },
            signal: AbortSignal.timeout(25000)
        })

        const responseTime = Date.now() - startTime
        const timestamp = new Date().toISOString()

        return res.status(200).json({ 
            success: true,
            backend: url,
            status: response.status,
            responseTime: `${responseTime}ms`,
            timestamp: timestamp,
            message: 'Back alive.'
        })
    }catch(error){
        const timestamp = new Date().toISOString()

        return res.status(500).json({ 
            success: false,
            backend: url,
            error: error.message,
            timestamp: timestamp,
            message: 'Failure to alive backend.'
        })
    }
}