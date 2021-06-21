import React, {useEffect, Suspense} from 'react'
import {Container, ButtonGroup, Button} from 'reactstrap'
import {useSelector} from 'react-redux'
import { Route, Switch, useHistory, Link } from 'react-router-dom'
import Login from './Auth/Login'

// const SearchByItem = React.lazy(() => import('showroom/showroom').then(module => { 
//     // return {default: module.Showroom };
// }).catch((error) => {
//     console.log(error)
// }));
import ErrorBoundary from './ErrorBoundries'
import HomeSearchByItem from '../components/SearchByItem/SearchByItem'
import SessionTimeout from './Auth/sessionTimeOut/sessionTimeOut'
const SearchByItem = React.lazy(() => import('showroom/showroom'));
const Orders = React.lazy(() => import('orders/orders'));

const App = () => {
    const history = useHistory();
    // const {userInfo} = useSelector(state => state.user);
    // useEffect(() => {
    //     if(!userInfo) {
    //         history.push('/login')
    //     }
    // })
    return(
        <ErrorBoundary>
        <Suspense fallback={<h1><Button onClick={() => history.push('/searchbyitem')}>Home</Button></h1>}>
            <Switch>
                <Route path="/" exact>
                    <div> Home </div>
                    <div>
                        <a href={process.env.NODE_ENV === 'production' ? 'https://cross-domain-showroom.netlify.app/' : "http://localhost:9000/"}>cross-domai-showroom</a></div>
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
        <SessionTimeout/>
        </ErrorBoundary>
    )
}

export default App;