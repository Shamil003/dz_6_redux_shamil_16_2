import {createReducer} from "@reduxjs/toolkit/src/createReducer";
import {createAction} from "@reduxjs/toolkit/src/createAction";
const initialState = {
    count: 0,
}
export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')

export default createReducer(initialState, {
    [increment]: function (state) {
        state.count = state.count + 1
    },
    [decrement]: function (state) {
        state.count = state.count - 1
    },
})