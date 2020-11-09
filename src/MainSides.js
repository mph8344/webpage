import React from 'react';
import './MainSides.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import logo from './menu.svg';

function handleToggle(sides) {
    
    const extended = findDOMNode(sides.isExtended.current);
    const unextended = findDOMNode(sides.notExtended.current);
    
    //console.log(unextendedText);
    if (sides.state.rightExtend) {
        //This means that the button side (right side) is extended
        const leftText = unextended.children[0];
        const buttonText = extended.children[1];

        // Hide the button side text
        $(buttonText).animate({opacity: 0}, 1000, 'swing');

        // Shrink the button side
        $(extended).animate({width: "10%"}, 1000, 'swing')

        // Make the left text visible
        $(leftText).animate({opacity: '100%'}, 1000, 'linear');

        // Extend the left side
        $(unextended).animate({width: '88%',}, 1000, 'swing')
        
    } else {
        
        //This means that the main (left) side is extended
        const extendedText = extended.children[0];
        const buttonText = unextended.children[1];

        // Hide the left side text
        $(extendedText).animate({opacity: 0}, 1000, 'swing');

        // Shrink the left side
        $(extended).animate({width: '10%'}, 1000, 'swing')
        
        // Show the button side text
        $(buttonText).animate({opacity: '100%'}, 1000, 'swing');
        
        // Extend the button side
        $(unextended).animate({width: '88%'}, 1000, 'swing')
        

    }

    const temp = extended;
    sides.isExtended.current = unextended;
    sides.notExtended.current = temp;
    sides.state.rightExtend = !sides.state.rightExtend;


};

class MainSides extends React.Component {

    constructor() {
        super();
        this.notExtended = React.createRef();
        this.isExtended = React.createRef();
        this.state = {
            rightExtend: false
        }
    }
    


    createRightSide() {

        return(
    
            <div id="rightside" ref={this.notExtended}>
                    <Button 
                        
                        variant="light"
                        style = {{margin: "auto"}}
                        onClick = {() => handleToggle(this)}>
                            <Image src={logo} height="32px"/>
                    </Button>

                    <div className="interior right">
                        Test
                    </div>
            </div>
    
        )
    
    }

    createLeftSide() {

        return (
            <div id="leftside" ref={this.isExtended}> 
                    <div className="interior">

                        <p>testestestset</p>
                        
                    </div>
            </div>
        )
    
    }

    render() {

        return(
            <React.Fragment>
                
                {this.createLeftSide()}
                {this.createRightSide()}
                
            </React.Fragment>
        )


    }

}

export default MainSides;
