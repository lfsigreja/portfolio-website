import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
    return (
        <FooterWrapper id="contact">
            <LinkList>
                <LinkColumn>
                    <LinkTitle> Call </LinkTitle>
                    <LinkItem href="tel: +55 (15) 99705-8984">
                        +55 (15) 99705-8984
                    </LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle> Email </LinkTitle>
                    <LinkItem href="mailto:contato@luisigreja.dev">
                        contato@luisigreja.dev
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Building awesome apps</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/lfsigreja">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/luisigreja">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    )
}

export default Footer
