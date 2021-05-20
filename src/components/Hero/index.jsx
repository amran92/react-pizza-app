import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP
} from './HeroElements';
import HeroBtn from '@material-ui/core/Button';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 second</HeroP>
                    <HeroBtn 
                    size='large'
                    style={{
                        fontSize: 22
                    }}
                    variant='contained' 
                    color= 'secondary'>
                        Place Order
                    </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
