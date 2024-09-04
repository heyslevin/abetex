import { carouselType } from "./modules/carouselType";
import { heroType } from "./modules/heroType";
import { paragraphSectionType } from "./modules/paragraphSectionType";
import { textWithImageType } from "./modules/textWithImageType";
import { textWithIllustrationType } from "./modules/textWithIllustrationType";
import { pageBuilderType } from "./pageBuilderType";
import { pageType } from "./pageType";
import { metricsType } from "./modules/metricsType";
import { tabsType } from "./modules/tabsType";
import { accordionType } from "./modules/accordionType";
import { footerType } from "./footerType";
import { globalSettingsType } from "./globalSettingsType";
import { formType } from "./modules/formType";
import { headerType } from "./headerType";
import { linkType } from "./objects/linkType";
import { navigationItemType } from "./objects/navItemType";
import { projectLink } from "./objects/projectLink";
import { project } from "./project";
import { gallery } from "./objects/gallery";
import { galleryImage } from "./objects/galleryImage";

export const schemaTypes = [
  pageType,
  pageBuilderType,
  footerType,
  globalSettingsType,
  heroType,
  textWithImageType,
  textWithIllustrationType,
  carouselType,
  paragraphSectionType,
  metricsType,
  tabsType,
  accordionType,
  linkType,
  navigationItemType,
  formType,
  headerType,
  project,
  projectLink,
  gallery,
  galleryImage,
];
