import React, { useState, useEffect, useMemo } from 'react'
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signin, isLoggedInUser } from '../../actions';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
import Form, { GroupItem, SimpleItem } from 'devextreme-react/form';
import { Button } from 'devextreme-react/button';


/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const loginoptions = useMemo(() => {
    return {
      placeholder: "Enter you Email Here",
      onValueChanged: (e) => {
        setEmail(e.value);
      }
    }
  }, []);


  const passwordoption = useMemo(() => {
    return {
      placeholder: "Enter you Password Here",
      mode: "password",
      onValueChanged: (e) => {
        setPassword(e.value);
      }
    }
  }, []);



  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser())
    }
  }, []);


  // Once user click signin this action will be dispatch
  const userLogin = (e) => {

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
          {/* Form using Bootstrap  */}
          {/* <Form onSubmit={userLogin}>
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
            <Button outline onClick={props.handlePrevious} type="submit">
              Submit
            </Button>
          </Form> */}

          {/* 
          <Form
          >

            <Item dataField="Email" type="email" text="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Item dataField="Password" type="password" text="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button horizontalAlignment="center"
              buttonOptions={buttonOptions}
              onClick={props.handlePrevious}
              
            />
          </Form> */}


          {/* Form Usng Dev Extreme */}
          <Form >
            <GroupItem>
              <SimpleItem dataField="Email" editorType="dxTextBox" editorOptions={loginoptions} value={email} />
              <SimpleItem dataField="Password" editorType="dxTextBox" editorOptions={passwordoption} value={password} />
            </GroupItem>
            <GroupItem>
              <br />
              <Button
                id={"btn"}
                width={120}
                text="Submit"
                type="success"
                onClick={userLogin}
                useSubmitBehavior={true}

              />
            </GroupItem>
          </Form>

        </Modal.Body>
      </Modal.Dialog>
    </Layout>
  )

}

export default LoginPage