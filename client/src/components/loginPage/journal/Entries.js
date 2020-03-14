//Learn more or give us feedback
import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';

const EntryHeader = () => {
    return <h3>Title</h3>
}

const EntryBody = props => {
    const lines = props.entryData.map((line, index) => {
        return (
            <Container key={index} className='shadow p-3 mb-5'>
                <Row>
                    <Col>
            <div key={index}>
                <h2>{line.title}</h2>
                <p>{line.body}</p>
                <button onClick={() => props.removeEntry(index)}>Delete</button>
            </div>
            </Col>
            </Row>
            </Container>
        )
    })

    return (
        <div>
            {lines}  
        </div>
    )
}

const Entries = (props) => {
    
        const { entryData, removeEntry } = props;

        return (
            <div>
                <h2>My Entries</h2>
               
                <EntryHeader />
                <EntryBody entryData={entryData} removeEntry={removeEntry}/>
            </div>

        )
    
}

export default Entries