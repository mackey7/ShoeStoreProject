import { createStore, Store, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { IUserState } from '../Reducers/userReducer'
import rootReducer from '../Reducers/rootReducer'

export interface AplicationState {
    users: IUserState;

}

const store: Store<AplicationState> = createStore(rootReducer, applyMiddleware(thunk));

export default store 