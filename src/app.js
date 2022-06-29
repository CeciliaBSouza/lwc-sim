
import { LightningElement, track } from "lwc";

export default class ComSim extends LightningElement {
  
  @track numero1;
  @track regiao;
  resultado;
  consumo;
  custoEo;
  economia;


  value='NE';

    get options() {
        return [
            { label: 'CO', value: 'CO' },
            { label: 'NE', value: 'NE' },
            { label: 'N', value: 'N' },
            { label: 'S', value: 'S' },
            { label: 'SE', value: 'SE' }
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
    mudouN1 (event){
      this.numero1=Number(event.target.value);
    }
    
    Calcular (){
     
        if(this.value=='CO'){
          this.consumo=this.numero1/0.70;
          this.custoEo=this.consumo*0.2;
          this.economia=this.numero1-this.custoEo;
          this.economiap=(this.economia*100)/this.numero1;
          this.economiaano=this.economia*365;
          this.resultado='Sua economia foi de '+this.economiap.toFixed(2)+'%. Durante 1 ano, você economizará: R$ '+this.economiaano.toFixed(2)+'.';
        } else if(this.value=='NE'){
          this.consumo=this.numero1/0.7;
          this.custoEo=this.consumo*0.2;
          this.economia=this.numero1-this.custoEo;
          this.economiap=(this.economia*100)/this.numero1;
          this.economiaano=this.economia*365;
          this.resultado='Sua economia foi de '+this.economiap.toFixed(2)+'%. Durante 1 ano, você economizará: R$ '+this.economiaano.toFixed(2)+'.';
        }else if(this.value=='N'){
          this.consumo=this.numero1/0.7;
          this.custoEo=this.consumo*0.2;
          this.economia=this.numero1-this.custoEo;
          this.economiap=(this.economia*100)/this.numero1;
          this.economiaano=this.economia*365;
          this.resultado='Sua economia foi de '+this.economiap.toFixed(2)+'%. Durante 1 ano, você economizará: R$ '+this.economiaano.toFixed(2)+'.';
        }else if(this.value=='S'){
          this.consumo=this.numero1/0.67;
          this.custoEo=this.consumo*0.2;
          this.economia=this.numero1-this.custoEo;
          this.economiap=(this.economia*100)/this.numero1;
          this.economiaano=this.economia*365;
          this.resultado='Sua economia foi de '+this.economiap.toFixed(2)+'%. Durante 1 ano, você economizará: R$ '+this.economiaano.toFixed(2)+'.';
        }else if(this.value=='SE'){
          this.consumo=this.numero1/0.67;
          this.custoEo=this.consumo*0.2;
          this.economia=this.numero1-this.custoEo;
          this.economiap=(this.economia*100)/this.numero1;
          this.economiaano=this.economia*365;
          this.resultado='Sua economia foi de '+this.economiap.toFixed(2)+'%. Durante 1 ano, você economizará: R$ '+this.economiaano.toFixed(2)+'.';
        }



      
    }


}


