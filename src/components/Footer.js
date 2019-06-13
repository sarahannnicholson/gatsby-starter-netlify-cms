import React from 'react'
import { useTheme } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = ()=> {
  const theme = useTheme()
  return (
    <footer>
      <a href="https://www.facebook.com/Sarah.Ann.Nicholson">
        <FontAwesomeIcon color={theme.palette.secondary.main} icon={faFacebook} size='2x'/>
      </a>
      <a href="https://www.instagram.com/sarahannnicholson/">
        <FontAwesomeIcon color={theme.palette.secondary.main} icon={faInstagram} size='2x'/>
      </a>
      <a href="https://github.com/sarahannnicholson">
      <FontAwesomeIcon color={theme.palette.secondary.main} icon={faGithub} size='2x'/>
      </a>
      <a href="https://www.linkedin.com/in/sarah-nicholson-30498a60/">
        <FontAwesomeIcon color={theme.palette.secondary.main} icon={faLinkedinIn} size='2x'/>
      </a>
    </footer>
  )
}

export default Footer
