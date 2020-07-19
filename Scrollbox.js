import React, { Component } from 'react';

class Scrollbox extends Component {
    srcollToBottom = () => {
        const {scrollHeight, clientHeight}=this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    srcollToTop = () => {
        this.box.scrollTop = 0;
    }

    render() {
       
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relative'
        };

        const innerStyle = {
            height : '650px',
            width : '100%',
            background : 'linear-gradient(white,black)'
        }
        return (
            <div
                style={style}
                ref = {(ref)=>{this.box=ref}}
            >
                <div style={innerStyle}></div>
            </div>
        );
    }
}

export default Scrollbox;