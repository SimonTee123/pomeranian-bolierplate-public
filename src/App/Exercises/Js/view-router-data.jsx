import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleanRouterMetaData } from './Boolean/router-data';
import { jsNumbersRouterMetaData } from './JsNumbers/router-data';
import { mathRouterMetaData } from './MathExercise/router-data';
import { JsStringTrainingRouterMetaData } from './JsStringTraining/router-data';
import { JsStringConversionRouterMetaData } from './JsStringConversion/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanRouterMetaData,
  jsNumbersRouterMetaData,
  mathRouterMetaData,
  JsStringTrainingRouterMetaData,
  JsStringConversionRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
