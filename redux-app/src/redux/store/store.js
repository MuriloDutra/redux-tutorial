import { createStore } from 'redux'
import todoApp from '../reducers/reducer'

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions/action'

const store = createStore(todoApp)

// Log the initial state
console.log(store.getState())


// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))


// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))


// Stop listening to state updates
unsubscribe()


/**
 * A store armazena todo o state da aplicação, a única maneira de mudar o state interior da Store é disparar uma ação
 * A store não é uma Classe, mas sim um objeto com alguns métodos dentro
 * 
 * MÉTODOS DA STORE
 * 
 * getState() retorna o state atual da aplicação
 * 
 * dispatch() dispara uma ação, tal ação do usuário possui dados que irão mudar o state da Store. O único jeito de mudar 
 * o state da Store é usando o método dispatch()
 */