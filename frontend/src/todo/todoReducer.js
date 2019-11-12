const INITIAL_STATE ={
    description:'ler livros',
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
   
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
             console.log('entrei aqui')
            return{...state,description: action.payload} 
        case 'TODO_SEARCH':
            return {...state, list:action.payload.data} 
        case 'TODO_ADDED':
            return {...state, description:'',list:action.payload.data}          
        default:
            return state;    
    }
}