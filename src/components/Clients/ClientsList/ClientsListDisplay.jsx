import React from 'react'
import {Row,Col} from 'antd';

const ClientsListDisplay = ({customersList=[],handleToggle})=>{ 
    return(
        <div>
            <Row className='title'>
                <Col span={24}><span>Lista de clientes</span></Col>
            </Row>
            <Row className='buttonContainer'>
                <span onClick={handleToggle} className='addButton'>Agregar</span>
            </Row>
            <section className='clientsList'>
                <Row className='tableHeader'>
                    <Col span={2} className='number'>No.</Col>
                    <Col span={8}>Nombre</Col>
                    <Col span={8}>Correo electrónico</Col>
                    <Col span={3}>Estatus</Col>
                </Row>
                {customersList.map((client, key)=>{
                    return <Row key={key} className="registro">
                        <Col span={2} className='number'>{key+1}</Col>
                        <Col span={8}>{client.name} {client.last_name?client.last_name:null}</Col>
                        <Col span={8}>{client.email}</Col>
                        <Col span={3}>{client.status==='active'?'Activo':'Inactivo'}</Col>
                    </Row>
                })} 
            </section>

        </div>
    )
}

export default ClientsListDisplay