import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterMetaData } from './ReactOnClick/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  MaterialUIBasicElementsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
