import React from 'react';
import { SliderContainer,
        SliderM,
        Item,
        SliderLeft,
        SliderRight } from './HeaderSliderElements';
import Carousel from 'react-elastic-carousel';
import CustomStyle from './custom.css';
import items from './Data';

const Slider = () => {
    function slideLeft(){
        document.getElementsByClassName('rec-arrow-left')[0].click();
    }
    function slideRight(){
        document.getElementsByClassName('rec-arrow-right')[0].click();
    }
    return (
        <>
            <SliderContainer>
                <SliderM>
                    <img onClick={slideLeft} className="slider-left-btn" src={require('../../images/slider-btn.png').default} />
                    <Carousel>
                        {items.map((i, k) => 
                            <Item key={k}>
                                <SliderLeft>
                                    <h1 className="sliderTitle">{i['title']}</h1>
                                    <p className="sliderDesc">{i['description'].substr(0, 150)}</p>
                                    <button className="sliderBtn">Read More Here >></button>
                                </SliderLeft>
                                <SliderRight>
                                    <img className="sliderImg" src={`${i.image}`} />    
                                </SliderRight>;
                            </Item>
                        )}
                    </Carousel>
                    <img onClick={slideRight} className="slider-right-btn" src={require('../../images/slider-btn.png').default} />
                </SliderM>
            </SliderContainer>
        </>
    )
}

export default Slider
