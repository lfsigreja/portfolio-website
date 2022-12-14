import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import { FaVuejs } from 'react-icons/fa'
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents'
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <br />
        <SectionTitle> Technologies </SectionTitle>
        <SectionText>
            I've worked with a range technologies in the web development world.
            Focused on design and front-end.
        </SectionText>
        <List>
            <ListItem>
                <div>
                    <DiReact size="3rem" />
                    <FaVuejs size="3rem" />
                </div>
                <ListContainer>
                    <ListTitle> Front-end </ListTitle>
                    <ListParagraph>
                        Experience with <p>Vue, Angular and React</p>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle> Back-end </ListTitle>
                    <ListParagraph>
                        Experience with <p>Node and Express</p>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiZend size="3rem" />
                <ListContainer>
                    <ListTitle> UI/UX </ListTitle>
                    <ListParagraph>
                        Experience with <p> tools like Figma</p>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
)

export default Technologies
