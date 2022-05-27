export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
}

export default function counterReducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + 1;
        case ACTIONS.DECREMENT:
            return state - 1;
        case ACTIONS.RESET:
            return 0;
        default:
            return state;
    }
}