import React from 'react';
import CustomStyle from './custom.css';
import { GridItem, ServicesMainContainer, ServicesWrapper } from './ServicesElements';
import { servicesObjOne, servicesObjTwo, servicesObjThree, servicesObjFour } from './Data';

const Services = () => {
    return (
        <>
            <ServicesMainContainer>
                <ServicesWrapper>
                    <GridItem id={servicesObjOne['id']}>
                        <img className="servicesImg" src={servicesObjOne['img']} />
                        <h1 className="servicesTitle">{servicesObjOne['title']}</h1>
                        <p className="servicesDesc">{servicesObjOne['description']}</p>
                    </GridItem>
                    <GridItem id={servicesObjTwo['id']}>
                        <img className="servicesImg" src={servicesObjTwo['img']} />
                        <h1 className="servicesTitle">{servicesObjTwo['title']}</h1>
                        <p className="servicesDesc">{servicesObjTwo['description']}</p>
                    </GridItem>
                    <GridItem id={servicesObjThree['id']}>
                        <img className="servicesImg" src={servicesObjThree['img']} />
                        <h1 className="servicesTitle">{servicesObjThree['title']}</h1>
                        <p className="servicesDesc">{servicesObjThree['description']}</p>
                    </GridItem>
                    <GridItem id={servicesObjFour['id']}>
                        <img className="servicesImg" src={servicesObjFour['img']} />
                        <h1 className="servicesTitle">{servicesObjFour['title']}</h1>
                        <p className="servicesDesc">{servicesObjFour['description']}</p>
                    </GridItem>
                </ServicesWrapper>
            </ServicesMainContainer>
        </>
    )
}

export default Services
