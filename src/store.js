import { createStore } from 'redux'
import reducer from './reducer/reducer.js'

//作成したreducerからstoreを作成
const store = createStore(reducer);

export default store;
