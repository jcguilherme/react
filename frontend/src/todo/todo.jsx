import React,{Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import Menu from '../template/menu'
import TodoForm from './todoForm'
import TodoList from './todoList'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'


/*
class Todo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                  <h1>teste</h1>      
        )
    }
}
Todo = reduxForm()(Todo)
const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)
export default connect(null, mapDispatchToProps)(Todo)
*/
export default props =>(
<div>
        <PageHeader name='Tarefas' small='Cadastro'/>
        <Menu />
        <TodoForm />
        <TodoList />
        </div>
)
