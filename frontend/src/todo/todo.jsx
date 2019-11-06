import React,{Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


const URL= 'http://localhost:3003/api/todos'

export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {description:'', list:[]}
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleAdd(){
        const description = this.state.description
        console.log(URL);
        console.log(description)
        axios.post(URL,{description})
        .then
        (resp => console.log('funcionou')).catch(error => {
            console.log(error);
        });
    }
    refresh(){
        axios.get(URL).then(
            resp=>this.setState({...this.state, description:'', list: resp.data})
        )
    }
    handleChange(e){
        this.setState({...this.state, description:e.target.value})
        console.log('change')
    }
    render(){
    return (
        <div>
        <PageHeader name='Tarefas' small='Cadastro'/>
        <TodoForm handleAdd={this.handleAdd} 
        description={this.state.description} handleChange={this.handleChange}/>
        <TodoList list={this.state.list}/>
        </div>
    )
    }
}