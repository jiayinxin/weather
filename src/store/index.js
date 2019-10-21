import {createStore} from 'react'

function counter(state = {
    location: {
        city: 'London'
    }
}, action) {
    switch (action.type) {
        case 'changeLocation':
            Object.assign(state.location, action.location)
            return state
        default :
            return state
    }
}

let store = createStore(counter)

export default store