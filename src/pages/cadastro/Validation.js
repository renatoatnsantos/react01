import axios from 'axios';
import Form from './Form';

export default class Validation{
    constructor(name, description, date, price, amount , volume){
        this.name = name
        this.description = description
        this.date = date
        this.price = price
        this.amount = amount
        this.volume = volume
        this.form = new Form();

    }

    validFields(){
        let msg = ''
        let $ = document.querySelector.bind(document);
        if(!this.name){
            msg = 'Insira um nome no campo.'
            $('#alert').innerHTML = msg;
            return false;
        }
        if(!this.description){
            msg = 'Insira uma descrição.'
            $('#alert').innerHTML = msg;
            return false;
        }
        if(!this.date || this.date === "NaN/NaN/NaN"){
            msg = 'Insira uma data.'
            $('#alert').innerHTML = msg;
            return false;
        }
        if(!this.price || this.price < 0){
            msg = 'Insira um valor.'
            $('#alert').innerHTML = msg;
            return false;
        }
        if(!this.amount){
            msg = 'Insira uma quantidade.'
            $('#alert').innerHTML = msg;
            return false;
        }

        if (this.name && this.description && this.date && this.price && this.amount){
            let clear = setInterval(()=>{
                msg = ''
                $('#alert').innerHTML = msg;
                clearInterval(clear)
            }, 6000)

            msg = 'NOTA CADASTRADA COM SUCESSO.'
            $('#alert').innerHTML = msg;

            let data = {name : this.name , description : this.description , date_hour : this.date , price : this.price , amount : this.amount , volume : this.volume}
            this.insertData(data)
            console.log(data)
        }

    }

    insertData = (data) =>{
        axios.post('http://localhost:3001/insert' , data )
            .then(resp => resp)
            .catch(err => console.log(err))
    }
}