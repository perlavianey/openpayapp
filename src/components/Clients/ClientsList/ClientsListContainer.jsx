import React, {Component} from 'react'
import {getList,createClient} from '../../../services/clientsService'
import { message } from 'antd'
import ClientsListDisplay from './ClientsListDisplay'
import ClientsFormDisplay from '../ClientsForm/ClientsFormDisplay'
import toastr from 'toastr';

message.config({top: "400px", duration: 2, maxCount: 3,});

class ClientsListContainer extends Component{

    state = {
        customersList:[],
        showForm:false,
        form:{}
    }

    //Al cargar el componente, se lee la lista de clientes
    componentDidMount =()=> this.getList() 

    //Va actualizando el estado cuando se van introduciendo los datos para el nuevo cliente
    onChange = (e) => this.setState({form:{...this.state.form,[e.target.name]:e.target.value}})
    
    //Guardar nuevo cliente
    onSave = () => {
        //Validar que el usuario haya introducido nombre y correo, que son los campos requeridos en el API
        if(!this.state.form.name ||!this.state.form.lastname||this.state.formemail) return toastr.error("Favor de completar los campos obligatorios");
        
        //Validar que el correo sea válido
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(this.state.form.email).toLowerCase())) return toastr.error("Correo no válido, favor de corregir");
        
        //Si los datos son correctos, guardar:
        let newClient = this.state.form
        createClient(newClient)
        .then(customers=>{ 
            toastr.success("Cliente creado!");
            this.getList(); //Actualizar lista de clientes
            this.handleToggle(); //Cerrar modal
        })
        .catch(error=>{return toastr.error(error)});
    }

    //Leer lista de clientes
    getList=()=>{
        getList()
        .then(customers=>{
            let customersArray = customers.data
            this.setState({customersList:customersArray})
        })
        .catch(error=>{return toastr.error(error)});
    }

    //Switch del modal (Abrir/Cerrar)
    handleToggle = () => this.setState({isModalOpen: !this.state.isModalOpen});
    
    render(){
        const {customersList,isModalOpen} = this.state
        return(
            <div>
              <ClientsListDisplay
                handleToggle={this.handleToggle}
                customersList={customersList}
              />
              {isModalOpen?<ClientsFormDisplay visible={isModalOpen} closeModal={this.handleToggle} onChange={this.onChange} saveClient={this.onSave}/>:null}
            </div>
        )
    }
}

export default ClientsListContainer