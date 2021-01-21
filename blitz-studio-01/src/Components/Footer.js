import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Container style={{color:'#cecece'}}>
                    <Container style={{display:'flex', justifyContent:'center', padding:'40px', fontSize:'25px'}}>
                        <p>Keep scrolling, there is still more to come.</p>
                    </Container>
                </Container>
                
            </div>
        )
    }
}