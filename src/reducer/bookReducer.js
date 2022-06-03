export const ACTIONS = {
    ADD_BOOK: 'increment',
    REMOVE_BOOK: 'decrement',
}

export default function bookReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_BOOK:
            return [...state, action.payload];
        case ACTIONS.REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload);
        default:
            return state;
    }
}