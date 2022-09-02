import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles'

import { navLinks } from '../../constants/navLinks'

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px',
          }}
        >
          <DiCssdeck size="3rem" />
          <Span> Portfolio </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      {navLinks.map((item) => (
        <li>
          <Link href={item.href}>
            <NavLink> {item.name} </NavLink>
          </Link>
        </li>
      ))}
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/lfsigreja">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/luisigreja">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
