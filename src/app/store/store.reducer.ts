import * as StoreAction from './store.actions';
import { Action } from '@ngrx/store';

const initialState = {
  count: 0
}

export function storeReducer(state = initialState, action: StoreAction.StoreActions) {

  switch (action.type) {
    case StoreAction.INCREMENT:
      return {
        count: state.count + 1
      }
    case StoreAction.DECREMENT:
      return {
        count: state.count - 1
      }
    case StoreAction.RESET:
      return {
        count: 0
      }
    default:
      return {
        count: 0
      }
  }
}
