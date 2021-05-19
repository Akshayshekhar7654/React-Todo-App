import React from 'react';

class Form extends React.Component{
    inputValue = {
        todo: ''
    }
    state = this.inputValue;

    handleInput = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
        };

        handleOnSubmit = (e) =>{
            e.preventDefault()
            this.props.onSubmit(this.state);
        }

    render(){
        const {todo} = this.state;
        return(
            <form onSubmit={this.handleOnSubmit} className='form__todo'>
                    <input type="text"  name="todo"
                    value={this.state.todo} 
                    onChange={this.handleInput} required />
                    <button type="submit" >Create</button>
                </form>
        );
    };
}

export default Form;