
export default class Form {


    formatDate = (date) =>{
        let data = new Date(...date
            .split('-')
        )
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    }


    formatInput = () =>{
        let i = document.querySelector('#price')
        var v = i.value.replace(/\D/g,'');
        v = (v/100).toFixed(2) + '';
        v = v.replace(".", ",");
        v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
        i.value = v;
        return v;
    }

    priceXamount = (price , amount) =>{
        let v = price;
        v = v.replace('.' , '')
        v = v.replace(',' , '.')
        v = parseFloat(v)
        amount = parseFloat(amount)
        v = (v * amount)
        v = JSON.stringify(v)
        v = parseFloat(v).toFixed(2) + '';
        v = v.replace(".", ",");
        v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
        return v;
    }

    formatPrice = (price) =>{
        var v = price;
        v = JSON.stringify(v)
        v = v.replace(/\D/g,'');
        v = parseFloat(v).toFixed(2) + '';
        v = v.replace(".", ",");
        v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
        return v;
    }

    total = (total) =>{
          let volume  = total.reduce((accumulator , value)=>{
               let v  = value.volume
               v = v.replace('.', '')
               v = v.replace(',', '.')
               v = parseFloat(v)
               value = accumulator + v;
               return value;
            } , 0)

        return this.formatPrice(volume)
    }

}


