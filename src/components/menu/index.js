import React , {Component} from 'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import Home from '../../pages/home';
import Cadastro from "../../pages/cadastro";

export default class Menu extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <Router>
                    <ul>
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="/cadastro"> Cadastro </Link>
                        </li>
                    </ul>
                    <Route exact path='/' component={Home} />
                    <Route path='/cadastro' component={Cadastro} />
                </Router>
            </div>
        )
    }
}