import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import priroda from '../Pictures/priroda.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={priroda}
                    />
                    <Carousel.Caption style={{color:'#cecece'}}>
                        <h3>Scroll down to see more</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>           
        )
    }
}
