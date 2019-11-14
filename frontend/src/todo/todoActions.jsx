import axios from 'axios'
const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})



export const search = (description)=>{
    const search = description ? `&description__regex=/${description}/` : ''
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
    console.log('entrei aqui')
    return {
        type:'TODO_SEARCH',
        payload: request
    }
}


export const clean = ()=>{
    
    return {
        type:'TODO_CLEAR',
        payload:''
    }
}

export const add = (description)=>{
  return dispach => {
    axios.post(URL,{description:description})
    .then(resp =>dispach({type:'TODO_ADDED',payload:resp.data }))
    .then(resp=>dispach(search()))
    
  }
}

export const remove = (todo)=>{
    return dispach => {
        axios.delete(`${URL}/${todo._id}`)
       .then(resp=>dispach(search()))
      
    }
  }

export const markAsDone = (todo)=> {
    return dispach => {
        axios.put(`${URL}/${todo._id}`,{...todo,done:true})
            .then(resp=>dispach({type:'TODO_MARKED_AS_DONE',payload: resp.data}))
            .then(resp=>dispach(search()))
    }
    
}

export const markAsPending = (todo)=> {
    return dispach => {
        axios.put(`${URL}/${todo._id}`,{...todo,done:false})
            .then(resp=>dispach({type:'TODO_MARKED_AS_DONE',payload: resp.data}))
            .then(resp=>dispach(search()))
    }
    
}