import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';


import axios from 'axios';

const SignInPage = (props) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});



  let history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (!!errors[e.target.name])
      setErrors({
        ...errors,
        [e.target.name]: null,
      });
  };
  const login = () => {
    axios.post('https://localhost:44398/Api/login/Login',formData)
      .then((response) => {
        if (response.status === 200) {
          
          
         
          history.push('/home');
        }
      })
      .catch((error) => {
        history.push('/');
      });
  };

  const findFormErrors = () => {
    const { email, password } = formData;
    const newErrors = {};
 
    const expression = /\S+@\S+/;
    var inValidEmail =
      !email || email === '' || !expression.test(String(email).toLowerCase());
    if (inValidEmail) {
      newErrors.email = 'Please add valid email';
    }


    if (!password || password === '') {
      newErrors.password = 'Please add valid password';
    }

    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    login();
  };

  return (
    <div>
      <Form className="form-align" onSubmit={onSubmit} noValidate>
        
        
          <div className="loginpage-box">
            <div className="login-title">Login Page</div>
            <Form.Group>
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="email"
                placeholder="email@example.com"
                aria-label="email@example.com"
                name="email"
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                Please add correct email id
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ marginBottom: 'auto' }}>Password</Form.Label>

              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                isInvalid={!!errors.password}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
              <div>
                <br/>
              </div>
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        
      </Form>
    </div>
  );
};
export default SignInPage;
