import React,{Component} from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {changeDescription, search,add, clean} from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.keyHandler = this.keyHandler.bind(this)
    }
    componentDidMount(){
        //alert(1)
        this.props.search()
    }
    keyHandler(e){
       
        if(e.key ==='Enter'){
            e.shiftKey? search() : add(description)
        }else if(e.key === 'Escape'){
            this.props.handleClear();
        }
    }
    render(){
        const {add, search,description, clean} = this.props
        return (<div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            
                <input type="text" id='description' className='form-control'
                placeholder='Adicione uma tarefa'
                value={this.props.description}
                onKeyUp={this.keyHandler}
                onChange={this.props.changeDescription}/>
        </Grid>    
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
            onClick={()=>{add(description)}}/>
            <IconButton style='info' icon='search'
            onClick={()=>search(description)}/>
            <IconButton style='default' icon='close'
            onClick={()=>clean()}/>
        </Grid>
        </div>)
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToprops = dispatch => bindActionCreators({changeDescription,search,add,clean},dispatch)
export default connect(mapStateToProps,mapDispatchToprops)(TodoForm)