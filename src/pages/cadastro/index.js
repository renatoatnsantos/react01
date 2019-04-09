import React , {Component} from 'react'
import Form from './Form';
import Validation from './Validation';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

export default class Cadastro extends Component{
    constructor(){
        super()
        this.state = {
            data : [],
        }
        this.form = new Form();
    }

    componentDidMount(){
        this.getApi()
    }

    getApi = () => {
        axios.get('http://localhost:3001/notes')
            .then(resp => this.setState({data : resp.data.data}))
            .catch(err => console.log(err))
            .finally(()=> <Redirect to='/cadastro' />)
    }

    formObject = (event) =>{
        event.preventDefault();
        let data = {name : this.name.value , description : this.description.value , date_hour : this.form.formatDate(this.date.value) , price : this.price.value , amount : this.amount.value , volume : this.form.priceXamount(this.price.value , this.amount.value )}
        const valid = new Validation(data.name, data.description, data.date_hour , data.price , data.amount , data.volume)
        valid.validFields()

    }

    render(){
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-md-12 text-center alert-success' id='alert-info'></div>
                    <div className="col-md-12 mb-3">
                        <div className='col-md-12 badge-success'>
                            <p id='alert' className='text-center'></p>
                        </div>
                        <div className="card">
                            <div className="card-header text-center">
                                <h3 className='text-secondary'>Cadastro de notas </h3>
                            </div>
                            <div className="card-body">
                                <form className='row' onSubmit={this.formObject}>
                                    <div className='form-group col' >
                                        <input id='name' className='form-control'  placeholder='Nome' type='text' ref={input => this.name = input}/>
                                    </div>
                                    <div className='form-group col' >
                                        <input id='description' className='form-control'  placeholder='Descrição' type='text' ref={input => this.description = input}/>
                                    </div>
                                    <div className='form-group col' >
                                        <input id='date' className='form-control' type='date' ref={input => this.date = input}/>
                                    </div>
                                    <div className='form-group col'>
                                        <input id='price' type='text' className='form-control' placeholder='Valor' onKeyUp={this.form.formatInput} ref={input => this.price = input}/>
                                    </div>
                                    <div className='form-group col'>
                                        <input id='amount' type='text' className='form-control' placeholder='Quantidade' ref={input => this.amount = input}/>
                                    </div>
                                    <div className='form-group col'>
                                        <button className='btn btn-primary'>Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3 className='text-secondary'>Lista de notas</h3>
                            </div>
                            <div className="card-body">
                                <table className='table table-bordered'>
                                    <thead>
                                    <tr className='text-center'>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Data / Hora</th>
                                        <th>Valor</th>
                                        <th>Quantidade</th>
                                        <th>Volume</th>
                                        <th>Atualizar / Deletar</th>
                                    </tr>
                                    </thead>
                                    <tbody id='table' className='text-center'>
                                    {this.state.data.map((item , i) =>
                                        <tr key={i}>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.date_hour}</td>
                                            <td>{item.price}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.volume}</td>
                                            <td>
                                                <div className="row">
                                                    <div className="col px-0">
                                                        <button className='btn btn-primary'>Atualizar</button>
                                                    </div>
                                                    <div className="col px-0">
                                                        <button className='btn btn-danger'>Deletar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                    <tfoot>
                                    <tr className='text-center'>
                                        <td colSpan='5' className='badge-secondary'><strong>TOTAL</strong></td>
                                        <td id='total' className='font-weight-bold'>{this.form.total(this.state.data)}</td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


}