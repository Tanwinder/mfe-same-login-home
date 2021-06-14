import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Input } from 'reactstrap';
import './searchbyitem.scss'
import {useDispatch, useSelector} from 'react-redux'
import {callList} from './SearchByItemAction'
import SearchContainer from './SearchContainer'

const SearchByItem = () => {
    const dispatch = useDispatch();
    // const [inputVal, setinputVal] = useState('');
    const items = useSelector(state => state?.SearchByItem?.items);
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