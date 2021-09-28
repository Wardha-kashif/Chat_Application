import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signin, isLoggedInUser } from '../../actions';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser())
    }
  }, []);

  const userLogin = (e) => {
    e.preventDefault();

    if (email == "") {
      alert("Email is required");
      return;
    }
    if (password == "") {
      alert("Password is required");
      return;
    }

    dispatch(signin({ email, password }));





  }


  if (auth.authenticated) {
    return <Redirect to={`/`} />
  }




  return (
    <Layout>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN FORM</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={userLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password

              </Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button style={{ background: "#6D33FF" }} outline onClick={props.handlePrevious} type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Layout>
  )

}

export default LoginPage