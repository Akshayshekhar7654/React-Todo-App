import React from 'react';
import './Todo.css';
import Form from './components/Form'
import List from './components/List'

class Todo extends React.Component{
    state = {
        data:[{todo:"cooking"}]
    };

    handleSubmit =(newVal) =>{
        this.setState({data: [...this.state.data, newVal]})
    }

    handleRemove = index =>{
        const{data} = this.state;
        this.state({
            data:data.filter((item, i) => {
                return i !== index
            })
        })
    }

    render() {
        const {data} = this.state;
        console.log(data);
        return(
            <div>
                <Form onSubmit={this.handleSubmit} />
                <h1>To do list</h1>
                <List todo={data} 
                onDelete = {this.handleRemove} />
            </div>
        )
    }
}

export default Todo;