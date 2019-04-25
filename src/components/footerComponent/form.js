import React, {Component, Fragment} from 'react';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      mensaje: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target= event.target;
    const name= target.name;

    this.setState({
        [name]: target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    alert("Se envió su mensaje!");
  }

    render(){
      return(
        <form onSubmit={this.handleSubmit}>
        <div className="input-1">
        <label>
        <p>Nombre:</p>
        <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
        </label>
        </div>
        <label>
        <p>Email:</p>
        <input type="text" value={this.state.value} name="email" onChange={this.handleChange} />
        </label>
        <label>
        <p>Mensaje:</p>
        <input  className="last" type="text" value={this.state.value} name="mensaje" onChange={this.handleChange} />
        </label>
        <input  className="Submitbutton" type="submit" value="Submit" />
        </form>
      );
    }
}

export default Form;
