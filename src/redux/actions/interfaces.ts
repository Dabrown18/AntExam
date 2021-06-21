import {Action} from 'redux';
import {AntTypes} from './types';
import {Ants} from '../../utils/interfaces';

export type AntAction = GetAnts;

export interface GetAnts extends Action {
  type: AntTypes.GetAnts;
  data: Ants;
}
