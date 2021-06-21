import {AntTypes} from '../actions/types';
import {AntState} from '../../utils/interfaces';
import {AntAction} from '../actions/interfaces';

const initialState: AntState = {
  data: [],
};

const {GetAnts} = AntTypes;

export default function antReducer(
  state: AntState = initialState,
  action: AntAction,
): AntState {
  switch (action.type) {
    case GetAnts:
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
}
