import React, {useEffect, Suspense} from 'react'
import {Container, ButtonGroup, Button} from 'reactstrap'
import { Route, Switch, useHistory, Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import '../styles/index.scss'
import Header from './Header/Header'
import Routes from './Routes'
import {signin} from '../components/Auth/LoginAction'

import {envVariables} from "../utils/envVariables"

const hjk = envVariables();
const hjkRemote = envVariables("REMOTE");
// cross domain localstorage share
var createHost = require("cross-domain-storage/host");
var storageHost = createHost([
  {
    origin: hjk,
    allowedMethods: ["get", "set", "remove"],
  },
  {
    origin: hjkRemote,
    allowedMethods: ["get", "set", "remove"],
  },
]);

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {userInfo} = useSelector((state)=> state?.user)
    useEffect(() => {
        const profile = localStorage.getItem('profile');
        const localHis = history?.location;
        if(profile) {
            dispatch(signin(profile, history, true))
        } else {
            history.push('/login', {from: localHis || "/"});
        }

        // const previousUrl = document.referrer; ////to access different previous domain
        // const localHis = history?.location;
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