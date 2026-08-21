import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { getAccounts } from '../services/api';

function Login() {

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgError, setMsgError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async () => {
        setMsgError('');
        try {
            let foundUsers = [];
            try {
                const response = await axios.get(`http://localhost:9000/accounts?email=${email}&password=${password}`);
                foundUsers = response.data;
            } catch (err) {
                const accounts = await getAccounts();
                foundUsers = accounts.filter(a => a.email === email && String(a.password) === String(password));
            }

            // Nếu sai thông tin đăng nhập
            if (!foundUsers || foundUsers.length === 0) {
                setMsgError("this account not exist");
            } else {
                const exitUser = foundUsers[0];

                // Kiểm tra status Inactive
                if (exitUser.status && exitUser.status.toLowerCase() === "inactive") {
                    setMsgError("bạn đang bị khóa");
                    return;
                }

                // Lưu dữ liệu bằng localStorage
                localStorage.setItem('account',
                    JSON.stringify(
                        {
                            uId: exitUser.id,
                            role: exitUser.role,
                            email: exitUser.email,
                            status: exitUser.status
                        }
                    )
                );
                const role = exitUser.role;
                if (role === "student" || role === "lecturer") {
                    navigate('/subjects');
                } else {
                    navigate('/subjects');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='text-center'>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Form style={{ border: "2px", borderColor: "black" }}>
                        <h3>Sing in</h3>
                        {msgError && (<div className="alert alert-danger">{msgError}</div>)}
                        <Form.Group>
                            <Form.Control type="text" placeholder='email of student or lecture'
                                onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-3">
                            <Form.Control type="password"
                                onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" style={{ width: "100%" }}>
                            <Button className="btn btn-primary" style={{ backgroundColor: "blue" }}
                                onClick={() => handleSignIn()}>Login
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </div>
    )
}

export default Login
