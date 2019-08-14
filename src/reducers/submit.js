import { handleActions } from 'redux-actions';

const initialState = {
    message: '',
};

const submit = handleActions({
    SUBMIT: (state, actions) => ({
        ...state,
        message: actions.payload.message,
    }), 
}, initialState);

export default submit;