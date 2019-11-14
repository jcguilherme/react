const INITIAL_STATE ={
    description:'',
    list:[
        {
            _id:1,
            description: 'Pagar a fatura do cartão',
            done: true

        },
        {
            _id:2,
            description: 'Reunião com a equipe',
            done: false

        },
        {
            _id:3,
            description: 'Consulta médica',
            done: false

        }
    ]
}


export default (state = INITIAL_STATE, action) =>{
    console.log(action.type)
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return{...state,description: action.payload} 
        case 'TODO_SEARCH':
            return {...state, list:action.payload.data} 
        case 'TODO_ADDED':
            return {...state, description:'',list:action.payload.data}  
        case 'TODO_CLEAR':
            console.log('limpoar') 
            return {...state, description:''}           
        default:
            return state;    
    }
}