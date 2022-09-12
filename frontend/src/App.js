import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import "bootstrap/dist/css/bootstrap.css";
import UrlForm from './components/UrlForm.js'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

function App() {
    const [urlList, setUrlList] = useState([])

    const endpoint = process.env.REACT_APP_ENV === "DEV" 
        ? "http://localhost:5000/"
        : "https://goldfish-app-w4ei8.ondigitalocean.app/"

    useEffect(() => {
        axios.get(endpoint)
            .then((res) => {
                setUrlList(res.data)
            })
            .catch((err) => console.log(err))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDelete = (id) => {
        axios.delete(endpoint + "delete/" + id)
            .then((res) => {
                console.log(urlList.filter((url) => url._id !== id))
                setUrlList(urlList.filter((url) => url._id !== id))
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="App">
            <Container className='mt-3'>
                <Row>
                    <UrlForm setUrlList={setUrlList} />
                </Row>
                <Row>
                    <Table striped bordered hover className='mt-5'>
                        <thead>
                            <tr>
                                <th>Original URL</th>
                                <th>Shortened URL</th>
                                <th style={{ width: "10%" }}>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {urlList.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{val.originalUrl}</td>
                                        <td>
                                            <a href={endpoint + val.shortenedUrl}>{endpoint + val.shortenedUrl}</a>
                                        </td>
                                        <td>
                                            <Button onClick={() => handleDelete(val._id)} size="sm" variant="danger">Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    );
}

export default App;
