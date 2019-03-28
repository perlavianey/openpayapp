import React from 'react'
import { Modal,Button,Form,Input,Icon } from 'antd';
import '../../../index.css'

const ClientsFormDisplay = ({visible,closeModal,onChange,saveClient})=>{ 
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }}
    return(
    <Modal visible={visible} onCancel={closeModal} title={<div className='titleModal'><Icon type="user-add" style={{ color: 'white' }}/>   Nuevo Cliente</div>}
          footer={[
            <Button onClick={closeModal} key="cancel">Cancelar</Button>,
            <Button onClick={saveClient} key="submit" type="primary">Guardar</Button>,
          ]}>
          <Form>
            <Form.Item {...formItemLayout} label={(<span>Nombre*</span>)}>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="name" type="text" onChange={onChange} placeholder="Juan"/>
            </Form.Item>
            <Form.Item {...formItemLayout} label={(<span>Apellido*</span>)}>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="lastname" type="text" onChange={onChange} placeholder="Pérez"/>
            </Form.Item>
            <Form.Item {...formItemLayout} label={(<span>E-mail*</span>)}>
              <Input prefix={<Icon type="mail"  style={{ color: 'rgba(0,0,0,.25)'}}/>}
              name="email" type="email" onChange={onChange} placeholder="example@email.com"/>
            </Form.Item>
            <Form.Item {...formItemLayout} label={(<span>Teléfono</span>)}>
              <Input prefix={<Icon type="phone"  style={{ color: 'rgba(0,0,0,.25)'}}/>}
              name="phone" type="text" onChange={onChange} placeholder="55 1234 5678"/>
            </Form.Item>
          </Form>
        </Modal>
    )
}

export default ClientsFormDisplay