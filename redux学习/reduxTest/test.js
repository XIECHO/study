let td = {
    todos: [{
        text: 'Eat food',
        completed: true
    }, {
        text: 'Exercise',
        completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
}

let addTodo = function () {
    return {
        type: 'ADD_TODO',
        text: 'Go to swimming pool'
    }
}

let toggle = function () {
    return {
        type: 'TOGGLE_TODO',
        index: 1
    }
}

let visibility = function () {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL'
    }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter;
    } else {
        return state;
    }
}

// function todos(state = [], action) {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return state.concat([{
//                 text: action.text, completed: false
//             }])
//         case 'TOGGLE_TODO':
//             return state.map((todo, index) =>
//                 action.index === index ?
//                     { text: todo.text, completed: !todo.completed } : todo
//             )
//         default:
//             return state
//     }
// }

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    text: action.text,
                    completed: false
                }
            ]
        case 'COMPLETE_TODO':
            return state.map((todo, index) => {
                return Object.assign({}, todo, {
                    completed: true
                })
            })
        default:
            return state
    }
}

// function todoApp(state = {}, action) {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     }
// }

// import { combineReducers, createStore } from 'redux'

// let reducer = combineReducers({
//     visibilityFilter, todos
// })

// let store = createStore(reducer)

let t = {
    visibilityFilter, todos
}

console.log(typeof t.visibilityFilter)