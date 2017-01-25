import { createStore } from 'redux'
import reducer from './reducer.jsx'

//作成したreducerであるcounter関数を引数に指定してstoreを作成
const store = createStore(reducer);

export default store;
