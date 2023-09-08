import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterMetaData } from './ReactOnClick/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { EmptyValuesAndCommentsRouterMetaData } from '../Js/EmptyValuesAndComments/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  MaterialUIBasicElementsMetaData,
  EmptyValuesAndCommentsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
