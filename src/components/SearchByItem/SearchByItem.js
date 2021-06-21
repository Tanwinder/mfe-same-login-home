import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Input } from 'reactstrap';
import './searchbyitem.scss'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {callList} from './SearchByItemAction'
import SearchContainer from './SearchContainer'

const SearchByItem = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {userInfo} = useSelector(state => state.user);
    const items = useSelector(state => state?.SearchByItem?.items);
    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        }
    })
    // const [inputVal, setinputVal] = useState('');
    
    useEffect(() => {
        dispatch(callList(''));
    }, [])
    const onChangeInput = (event) => {
        console.log("inputttt", event.key, event.target.value)
        if (event.key === "Enter") {
            dispatch(callList(event.target.value));
        } 
        // else {
        //     setinputVal(event.target.value);
        // }
      }
    return(
        <div className="searchbyitem">
            <Jumbotron fluid>
                <Container fluid>
                    <Input 
                    placeholder="search by city name" 
                    type="text" 
                    onKeyUp={onChangeInput} />
                    <SearchContainer items={items || []}/>
                </Container>
            </Jumbotron>
           
        </div>
    )
}

export default SearchByItem;