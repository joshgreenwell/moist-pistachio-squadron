import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { css } from 'emotion'

const links = css`
  color: #ffffff;
  text-decoration: none;

  &:visited {
    color: #ffffff;
    text-decoration: none;
  }
`

const title = css`
  flex-grow: 1;
`

const Header = () => {
  const about = () => {
    console.log('About')
  }

  const contact = () => {
    console.log('Contact')
  }

  const members = () => {
    console.log('Members')
  }

  const admin = () => {
    console.log('Admin')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={title}>
          <Link to='/' className={links}>
            Moist Pistachio Squadron
          </Link>
        </Typography>
        <Button
          onClick={members}
        >
          <Link to='/members' className={links}>
            Members
          </Link>
        </Button>
        <Button
          onClick={about}
        >
          <Link to='/about' className={links}>
            About
          </Link>
        </Button>
        <Button
          onClick={contact}
        >
          <Link to='/contact' className={links}>
            Contact
          </Link>
        </Button>
        <Button
          onClick={admin}
        >
          <Link to='/admin' className={links}>
            Admin
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header