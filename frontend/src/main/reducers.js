import {combineReducers} from 'redux'
import todoReducer from '../todo/todoReducer';
import AuthReducer from '../auth/authReducer'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'


const rootReducer = combineReducers({
    todo: todoReducer,
    auth: AuthReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer;