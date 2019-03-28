import React from 'react'
import {Route,Switch} from 'react-router-dom'
import ClientsListContainer from './components/Clients/ClientsList/ClientsListContainer'
// import ClientsFormContainer from './components/Clients/ClientsForm/ClientsFormContainer'


const Routes = () => {
    return(
        <Switch>
            <Route path="/clientsList" component={ClientsListContainer}/>
            {/* <Route path="/newClient" component={ClientsFormContainer}/> */}
        </Switch>
    )
}

export default Routes