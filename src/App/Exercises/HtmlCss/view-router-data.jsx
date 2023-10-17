import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { backgroundsRouterMetaData } from './Backgrounds/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';
import { CssAnimationsRouterMetaData } from './CssAnimations/router-data';
import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { imageFilesRouterMetaData } from './ImageFiles/router-data';
import { MediaFilesRouterMetaData } from './MediaFiles/router-data';
import { htmlCssRouterMetaData } from './SelectorsAndCascade/router-data';
import { standardTagsRouterMetaData } from './StandardTags/router-data';
import { textFundamentsRouterMetaData } from './TextFundaments/router-data';
import { boxModelRouterMetaData } from './BoxModel/router-data';
import { htmlTablesRouterMetaData } from './HTMLTables/router-data';
import { tablesTennisRouterMetaData } from './TablesTennis/router-data';
import { arrayRenderingRouterMetaData } from './ArrayRendering/router-data';
import { arrayRenderToTableRouterMetaData } from './ArrayRenderToTable/router-data';
import { floatAndPositioningRouterMetaData } from './FloatsAndPositioning/router-data';
import { floatAndPositioningExercisesRouterMetaData } from './FloatsAndPositioningExercises/router-data';
import { cookiesBannerRouterMetaData } from '../../Components/CookiesBanner/router-data';
import { rwdRouterMetaData } from './RWD/router-data';
import { BoxModel2RouterMetaData } from './BoxModel2/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  textFundamentsRouterMetaData,
  standardTagsRouterMetaData,
  CssAnimationsRouterMetaData,
  ColorsRouterMetaData,
  imageFilesRouterMetaData,
  backgroundsRouterMetaData,
  imageFilesRouterMetaData,
  MediaFilesRouterMetaData,
  htmlTablesRouterMetaData,
  tablesTennisRouterMetaData,
  arrayRenderingRouterMetaData,
  arrayRenderToTableRouterMetaData,
  floatAndPositioningRouterMetaData,
  floatAndPositioningExercisesRouterMetaData,
  cookiesBannerRouterMetaData,
  rwdRouterMetaData,
  htmlCssRouterMetaData,
  boxModelRouterMetaData,
  BoxModel2RouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
