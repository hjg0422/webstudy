import React from 'react';
import ImgBlock from './imgblock'
import ContentBlock from './contentblock'
export default class Home extends  React.Component{

    render(){
        return <div>
            <ImgBlock/>
            <ContentBlock/>
        </div>
    }
}