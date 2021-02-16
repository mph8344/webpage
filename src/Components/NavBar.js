import React from 'react';
import './NavBar.scss'
import ResponsiveDrawer from './ResponsiveDrawer';

/**
 * <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
 */
class NavBar extends React.Component {

    render() {

        return(
            <div id="navbar">
                
                <ResponsiveDrawer/>
	        </div>
        )

    }

}



export default NavBar;
