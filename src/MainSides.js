import React from 'react';
import './MainSides.css';
import {Button} from 'reactstrap';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import 'jquery-ui/ui/core';
import "jquery-ui/ui/effects/effect-slide"





function handleToggle(sides) {
    
    const extended = findDOMNode(sides.isExtended.current);
    const unextended = findDOMNode(sides.notExtended.current);
    if (!sides.state.rightExtend) {
        
        
        $(extended).animate({
            width: 0,
            direction: 'left',
            easing: 'swing'
        })
        

        
        $(unextended).animate({
            width: '100%',
            direction: 'right',
            easing: 'swing'
        })
        
    } else {

    
        $(extended).animate({
            width: "10%",
            direction: 'left',
            easing: 'swing'
        })
        
        $(unextended).animate({
            width: '90%',
            direction: 'right',
            easing: 'swing'
        })




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
                    variant ="primary"
                    id="test"
                    style = {{margin: "auto"}}
                    
                    onClick = {() => handleToggle(this)}> Extend </Button>
            </div>
    
        )
    
    }

    createLeftSide() {

        return (
            <div id="leftside" ref={this.isExtended}> 
                    <div className="interior">
                        testestestset
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
