// import * as Action from '../store/actions/actionConstants'

const initialState = {
    registrants: [],
    loading: false,
    error: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SAGA_BENEFICIARY_LOAD': return {
            ...state, loading: true
        };
        case 'SAGA_BENEFICIARY_SUCCESS':
            return {
                ...state,
                registrants: action.payload,
                loading: false
            };
        case 'SAGA_BENEFICIARY_FAILURE': return {
            ...state,
            error: action.payload,
            loading: false
        }
        default: return state
    }
}

export default reducer