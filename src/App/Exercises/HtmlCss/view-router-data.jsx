import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { backgroundsRouterMetaData } from './Backgrounds/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';
import { CssAnimationsRouterMetaData } from './CssAnimations/router-data';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as MediaFilesMetaData } from './MediaFiles/router-data';

import { imageFilesRouterMetaData } from './ImageFiles/router-data';
import { MediaRouterMetaData } from './MediaFiles/router-data';
import { htmlCssRouterMetaData } from './SelectorsAndCascade/router-data';
import { standardTagsRouterMetaData } from './StandardTags/router-data';
import { textFundamentsRouterMetaData } from './TextFundaments/router-data';
import { blockRouterMetaData as BoxModelExercise } from './BoxModel/router-data';
import { HTMLTables } from './HTMLTables/HtmlTables';
import { htmlTablesRouterMetaData } from './HTMLTables/router-data';
import { tablesTennisRouterMetaData } from '../TablesTennis/router-data';
import { arrayRenderingRouterMetaData } from './ArrayRendering/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  htmlCssRouterMetaData,
  textFundamentsRouterMetaData,
  standardTagsRouterMetaData,
  CssAnimationsRouterMetaData,
  ColorsRouterMetaData,
  imageFilesRouterMetaData,
  backgroundsRouterMetaData,
  imageFilesRouterMetaData,
  MediaFilesMetaData,
  BoxModelExercise,
  htmlTablesRouterMetaData,
  tablesTennisRouterMetaData,
  arrayRenderingRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
