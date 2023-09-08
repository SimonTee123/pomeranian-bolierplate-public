import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterMetaData } from './ReactOnClick/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { jsNumbersRouterMetaData } from './JsNumbers/router-data';
import { mathRouterMetaData } from './Math/router-data';
import { jsNumbersTrainingRouterMetaData } from './JsNumbersTraining/router-data';
import { BooleanRouterMetaData } from './Boolean/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  MaterialUIBasicElementsMetaData,
  jsNumbersRouterMetaData,
  mathRouterMetaData,
  jsNumbersTrainingRouterMetaData,
  BooleanRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
