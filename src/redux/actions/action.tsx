import {AntTypes} from './types';
import {GetAnts} from './interfaces';
import {Ants} from '../../utils/interfaces';

export function getAnts(data: Ants): GetAnts {
  return {
    type: AntTypes.GetAnts,
    data,
  };
}
