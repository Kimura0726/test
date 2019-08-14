import { createAction } from 'redux-actions';
import { SUBMIT } from '../constants/ActionTypes';

export const submit = createAction(
    SUBMIT,
    msg => ({ message: msg}),
);
