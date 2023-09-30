import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Signup () {
    const [ user , setUser ] = useState({
        name:"John Doe",
        email: "johndoe@example.com",
        username: "johndoe99",
        password: "",
        cpassword: "",
    })

    const [ formErrors , setFormErrors ] = useState({})

    const handleChange = (event) => {
        let val = event.target.value
        let name = event.target.name
        let formErrors_ = {...formErrors}

        setUser({ ...user, [name] : val})

        switch (name){
            case "name":
                if (/^([a-z]{3,}\s?)+$/i.test(val)){
                    delete formErrors_["name"]
                } else {                   
                    formErrors_["name"] = "Please enter valid names space-separated"
                }
                break;
            case "email":
                if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(val)){
                    delete formErrors_["email"]
                } else {                   
                    formErrors_["email"] = "Please enter valid email"
                }
                break;
            case "username":
                if (/^[A-Za-z][A-Za-z0-9_]{7,29}$/g.test(val)){
                    delete formErrors_["username"]
                } else {                   
                    formErrors_["username"] = "Username longer than 8 char, cannot contain spaces or special characters except _"
                }
                break;
            case "password":
                if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/.test(val)){
                    delete formErrors_["password"]
                } else {                   
                    formErrors_["password"] = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                }
                break;
            case "cpassword":
                if (user.password === val){
                    delete formErrors_["cpassword"]
                } else {                   
                    formErrors_["cpassword"] = "Passwords do not match"
                }
                break;
            default:

                break;
        }
        setFormErrors(formErrors_)

    }

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    const showPassword = (event) => {
        let passwordField = event.target.closest('div.input-group').firstChild
        passwordField.type = passwordField.type === "text" ? "password":"text"
    }

    return <div className='container-fluid'><div className='row justify-content-lg-center'>
        <Form className='col-lg-6' 
        onChange={(event) => handleChange(event)}
        onSubmit={(event) => handleSubmit(event)}>

        <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" id="nameinput" value={user.name} />
            {formErrors['name']?<div className="form-text text-danger">{formErrors['name']}</div>:<></>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" id="emailinput" value={user.email} />
            {formErrors['email']?<div className="form-text text-danger">{formErrors['email']}</div>:<></>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" id="usernameinput" value={user.username} />
            {formErrors['username']?<div className="form-text text-danger">{formErrors['username']}</div>:<></>}
        </Form.Group>
        <Form.Label>Password</Form.Label>
        <InputGroup className="mb-3">
            <Form.Control type="password" name="password" id="passinput" value={user.password} placeholder="Enter New Password"/>
            <InputGroup.Text onClick={e=>showPassword(e)}><FontAwesomeIcon icon={faEye} /></InputGroup.Text>
            {formErrors['password']?<div className="form-text text-danger">{formErrors['password']}</div>:<></>}

        </InputGroup>
        <InputGroup className="mb-3">
            <Form.Control type="password" name="cpassword" id="cpassinput" placeholder="Confirm Password" />
            <InputGroup.Text onClick={e=>showPassword(e)}><FontAwesomeIcon icon={faEye} /></InputGroup.Text>
            {formErrors['cpassword']?<div className="w-100 form-text text-danger">{formErrors['cpassword']}</div>:<></>}

        </InputGroup>
        <div className="mb-3 d-flex justify-content-end">
            <Button onClick={()=>{setUser({});setFormErrors({})}} className="ms-3" variant="outline-secondary" type="reset">
                Reset
            </Button>
            <Button className="ms-3" variant="primary" type="submit">
                Submit
            </Button>
        </div>


    </Form></div></div>
}