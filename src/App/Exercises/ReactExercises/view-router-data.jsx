import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { OnCLickRouterMetaData } from './OnClick/router-data';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  OnCLickRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
