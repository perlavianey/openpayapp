import axios from 'axios'

const url = 'https://sandbox-api.openpay.mx/v1/mbs4mtjtmqhuk7wh58ei'
const authKey = 'c2tfMTMwNzZhZmNiMGQ1NDgxM2JmM2Y1MWEyYzljNzk2M2Y6'
const username = 'sk_13076afcb0d54813bf3f51a2c9c7963f'

//Traer la lista de clientes
export const getList = (listId) => {
    return axios.get(url + '/customers', {
        headers: {'Authorization': 'Basic ' + authKey }})
    .then(clients=>{return clients})
    .catch(error=>{return error})
}

//Crea un nuevo cliente
export const createClient = (client)=>{
    const request={
        auth:{ user:username, username:username, pass:''},
        name:client.name,
        last_name:client.lastname,
        email:client.email,
        phone_number:client.phone,
        json:true,
        method:'POST',
        timeout:9000,
        url:"https://sandbox-api.openpay.mx/v1/mbs4mtjtmqhuk7wh58ei/customers"
    }

    return axios.post(url+`/customers`,request,{
        headers: {'Authorization': 'Basic ' + authKey},})
    .then(result=>{ return result })
    .catch(error=>{ return error })
}