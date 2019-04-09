import React , {Component} from 'react';
import './header.css';

export default class Header extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div className='react-header'>
                <h3 className='text-center'>React</h3>
            </div>
        )
    }
}