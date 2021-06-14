import React, {useState, useEffect, Fragment} from 'react'
import { Button, Form, FormGroup, Label, 
    Input, Card, CardBody, Row, Col, CardTitle} from 'reactstrap';
import {useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'

import {signin, signup} from './LoginAction'
import './login.scss'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const user = useSelector(state => state.user);
    const [form, setForm] = useState(initialState);
    const [isSignUp, setisSignUp] = useState(false);
    const onSubmitCall = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(form, history));
        } else {
            dispatch(signin(form, history));
        }
    } 
    const changeSignUp = () => {
        setisSignUp((isSignUp) => {
            return !isSignUp;
        });
    }
    const handleChange = (e) => {
        return setForm({ ...form, [e.target.name]: e.target.value })
    };
    return(
        <div className="login">
            <Row>
                <Col lg="12">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">{isSignUp ? "Sign Up" : "Login"}</CardTitle>
                        <Form onSubmit={onSubmitCall}>
                            {
                                isSignUp ?
                                <Fragment>
                                    <FormGroup row>
                                    <Label for="firstname">First Name</Label>
                                    <Input onChange={handleChange} value={form.firstName} type="text" name="firstName" id="firstName" placeholder="First name" />
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="lastname">Last Name</Label>
                                        <Input onChange={handleChange} value={form.lastName} type="text" name="lastName" id="lastName"  placeholder="Last Name"/>
                                    </FormGroup>
                                </Fragment>
                                :
                                ""
                            }
                            <FormGroup row>
                                <Label for="exampleEmail">Email</Label>
                                <Input onChange={handleChange} type="email" value={form.email} name="email" id="exampleEmail" placeholder="enter an email" />
                            </FormGroup>
                            <FormGroup row>
                                <Label for="examplePassword">Password</Label>
                                <Input onChange={handleChange} value={form.password} type="password" name="password" id="examplePassword" placeholder="password please" />
                            </FormGroup>
                            {
                                isSignUp ?
                                <FormGroup row>
                                    <Label for="confirmpassword">Confirm Password</Label>
                                    <Input onChange={handleChange} value={form.confirmPassword} type="password" name="confirmPassword" id="confirmpassword" placeholder="confirm password please" />
                                </FormGroup>
                                :
                                ""
                            }
                            <div className="submit_button">
                                <Button type="submit">Submit</Button>
                                {
                                    !isSignUp ?
                                    <p onClick={changeSignUp}> you don't have account |  Sign Up</p>
                                    :
                                    <p onClick={changeSignUp}> do you have account | Login</p>
                                }
                            </div>
                        </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}


export default Login;
