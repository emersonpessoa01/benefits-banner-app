import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { schema } from "./schemas/schema";
import { defaultProps } from "./schemas/defaultProps";

const CSS_HANDLES = [
  "bannerContainer",
  "benefitsList",
  "benefitsList--horizontal",
  "benefitsList--vertical",
  "benefitItem",
  "benefitItemContainer",
  "benefitIcon",
  "benefitTextContainer",
  "benefitMainText",
  "benefitSubText"
];

interface BenefitsBannerProps {
  layout: "horizontal" | "vertical";
  iconUrl1: string;
  mainText1: string;
  subText1: string;

  iconUrl2: string;
  mainText2: string;
  subText2: string;

  iconUrl3: string;
  mainText3: string;
  subText3: string;
}

const BenefitsBanner = ({
  layout,
  iconUrl1,
  mainText1,
  subText1,
  iconUrl2,
  mainText2,
  subText2,
  iconUrl3,
  mainText3,
  subText3
}: BenefitsBannerProps) => {
  const { handles } = useCssHandles(CSS_HANDLES);

  const layoutClass =
    layout === "vertical"
      ? handles["benefitsList--vertical"]
      : handles["benefitsList--horizontal"];

  return (
    <section className={handles.bannerContainer}>
      <div className={`${handles.benefitsList} ${layoutClass}`}>
        {/* Item 1 */}
        <div className={handles.benefitItem}>
          <div className={handles.benefitItemContainer}>
            {iconUrl1 && (
              <img
                src={iconUrl1}
                alt={mainText1}
                className={handles.benefitIcon}
              />
            )}
            <div className={handles.benefitTextContainer}>
              {mainText1 && (
                <span className={handles.benefitMainText}>{mainText1}</span>
              )}
              {subText1 && (
                <span className={handles.benefitSubText}>{subText1}</span>
              )}
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className={handles.benefitItem}>
          <div className={handles.benefitItemContainer}>
            {iconUrl2 && (
              <img
                src={iconUrl2}
                alt={mainText2}
                className={handles.benefitIcon}
              />
            )}
            {mainText2 && (
              <span className={handles.benefitMainText}>{mainText2}</span>
            )}
            {subText2 && (
              <span className={handles.benefitSubText}>{subText2}</span>
            )}
          </div>
        </div>

        {/* Item 3 */}
        <div className={handles.benefitItem}>
          <div className={handles.benefitItemContainer}>
            {iconUrl3 && (
              <img
                src={iconUrl3}
                alt={mainText3}
                className={handles.benefitIcon}
              />
            )}
            {mainText3 && (
              <span className={handles.benefitMainText}>{mainText3}</span>
            )}
            {subText3 && (
              <span className={handles.benefitSubText}>{subText3}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

BenefitsBanner.schema = schema;
BenefitsBanner.defaultProps = defaultProps;

export default BenefitsBanner;
