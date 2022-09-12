import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.css";

const UrlForm = (props) => {
    const [url, setUrl] = useState("")

    const endpoint = process.env.REACT_APP_ENV === "DEV" 
        ? "http://localhost:5000/"
        : "https://goldfish-app-w4ei8.ondigitalocean.app/"

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(endpoint + 'shorten-url', {originalUrl: url})
            .then((res) => {
                props.setUrlList(res.data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Container>
                <Form.Group className="mb-3" controlId="urlFormId">
                    <Form.Label>Shorten URL:</Form.Label>
                    <Form.Control type="text" placeholder="Enter URL" onChange={(e) => { setUrl(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Container>
        </Form>
    )
}

export default UrlForm