import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signup } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../actions/auth.actions';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  const registerUser = (e) => {

    e.preventDefault();

    const user = {
      firstName, lastName, email, password
    }

    dispatch(signup(user))
  }


  if (auth.authenticated) {
    dispatch(logout(auth.uid))
    return <Redirect to={`/login`} />
  }


  return (
    <Layout>
      <div>

        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>SignUp </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={registerUser}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name" />

                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name" />
                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" />

                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button style={{ background: "#6D33FF" }} type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>

      </div>
    </Layout >
  )

}

export default RegisterPage