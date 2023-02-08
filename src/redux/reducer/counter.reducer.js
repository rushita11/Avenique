import * as ActionType from './ActionType';

const initialSate = {
    count: 0,
}
export const counterReducer = (state = initialSate, action) => {
    switch (action.type) {
        case ActionType.INCREAMENT_COUNTER:
            return {
                count: state.count + 1
            }
        case ActionType.DECREAMENT_COUNTER:
            return {
                count: state.count - 1
            }
            default:
            return state
   }
}