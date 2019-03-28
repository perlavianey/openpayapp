import React from 'react'
import {Route,Switch} from 'react-router-dom'
import ClientsListContainer from './components/Clients/ClientsList/ClientsListContainer'


const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={ClientsListContainer}/>
        </Switch>
    )
}

export default Routes