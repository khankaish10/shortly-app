import React, { useState } from 'react'
import {
    Navbar,
    NavbarContainer,
    Logo,
    NavMenu,
    NavLinks,
    Link,
    NavButton,
    Hamburger,
    Button

} from './NavbarStyles'
import logo from '../../images/logo.svg'


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar>
            <NavbarContainer>
                <Logo src={logo} />
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>

                <NavMenu isOpen={isOpen}>
                    <NavLinks>
                        <Link>Features</Link>
                        <Link>Pricing</Link>
                        <Link>Resources</Link>
                    </NavLinks>
                    <NavButton>
                        <Button h4>Login</Button>
                        <Button primary h4>Sign Up</Button>
                    </NavButton>
                </NavMenu>


            </NavbarContainer>
        </Navbar>
    )
}

export default NavBar
