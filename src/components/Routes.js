import React, {useEffect, Suspense} from 'react'
import {Container, ButtonGroup, Button} from 'reactstrap'
import { Route, Switch, useHistory, Link } from 'react-router-dom'
import Login from './Login/Login'

// const SearchByItem = React.lazy(() => import('showroom/showroom').then(module => { 
//     // return {default: module.Showroom };
// }).catch((error) => {
//     console.log(error)
// }));
import ErrorBoundary from './ErrorBoundries'
import HomeSearchByItem from '../components/SearchByItem/SearchByItem'
const SearchByItem = React.lazy(() => import('showroom/showroom'));
const Orders = React.lazy(() => import('orders/orders'));

const App = () => {
    const history = useHistory();
    return(
        <ErrorBoundary>
        <Suspense fallback={<h1><Button onClick={() => history.push('/searchbyitem')}>Home</Button></h1>}>
            <Switch>
                <Route path="/" exact>
                    <div> Home </div>
                    <HomeSearchByItem />
                </Route>
                <Route path="/showroom" >
                    <SearchByItem />
                </Route>
                <Route path="/orders" >
                    <Orders />
                </Route>
                <Route path="/login" >
                    <Login/>
                </Route>
                <Route path="/logout" >
                    <Login/>
                </Route>
            </Switch>
        </Suspense>
        </ErrorBoundary>
    )
}

export default App;