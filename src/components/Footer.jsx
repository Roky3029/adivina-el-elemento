/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'

import FooterStyled from '../elements/Footer/FooterStyled'
import LogoImg from '../elements/Footer/LogoImg'
import SocialIconContainer from '../elements/Footer/SocialIconContainer'
import Copyright from '../elements/Footer/Copyright'
import Version from '../elements/Footer/Version'

const Footer = ({ noTop }) => {
  return (
    <FooterStyled noTop={noTop}>
      <LogoImg src="/img/logo.png" alt="Logo" />
      <SocialIconContainer className='social-icons-container'>
        <a href="https://www.instagram.com/kirkydev_30/" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} className='social-icon-svg' />
        </a>
        <a href="https://github.com/Roky3029" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} className='social-icon-svg' />
        </a>
        <a href="https://discord.gg/qkPun79h2y" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faDiscord} className='social-icon-svg' />
        </a>
      </SocialIconContainer>
      <Copyright>Roky &copy; 2022. Todos los derechos reservados</Copyright>
      <Version>Version 2.0.1</Version>
    </FooterStyled>
  )
}

export default Footer
