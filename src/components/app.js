import React, {useEffect, Suspense} from 'react'
import {Container, ButtonGroup, Button} from 'reactstrap'
import { Route, Switch, useHistory, Link } from 'react-router-dom'
import '../styles/index.scss'
import Header from './Header/Header'
import Routes from './Routes'

const App = () => {
    const history = useHistory();
    useEffect(() => {
        const profile = sessionStorage.getItem('profile');
        // const previousUrl = document.referrer; ////to access different previous domain
        const localHis = history?.location;
        // if(!profile) {
        //     history.push('/login', {from: localHis || "/"});
        //     // history.push('/login', { from: previousUrl });  //to access different previous domain
        // } else {
        //     history.push(localHis);
        // }   
    },[]);
    return(
        <div className="home">
            <Header/>
            <Container>
                <Routes />
            </Container>
        </div>
    )
}

export default App;