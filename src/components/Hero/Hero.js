import React from 'react'

import {
    Section,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hello there! <p>I'm Luis</p>
            </SectionTitle>
            <SectionText>
                I'm a Software Engineer focused in front-end, my purpose is to
                build awesome apps. Feel free to contact if you like what you
                see.
            </SectionText>
            <Button onClick={() => (window.location = '#contact')}>
                Contact me
            </Button>
        </LeftSection>
    </Section>
)

export default Hero
