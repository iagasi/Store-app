import axios from "axios"



const $host=axios.create({
    baseURL:"http://localhost:5000/"
})

const $authHost=axios.create({
    baseURL:"http://localhost:5000/"
})

$authHost.interceptors.response.use((response)=>{ return response},
(error)=>{throw new Error(error) }
)
   

const authInterceptor=(config)=>{
    
    config.headers.authorization=`${localStorage.getItem("Shop")}`
    // config.headers.connection="multipart/form-data"
   


    return config
}

$authHost.interceptors.request.use(authInterceptor)


export {
    $host,
    $authHost
}