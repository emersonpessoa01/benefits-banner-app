import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { schema } from "./schemas/schema";
import { defaultProps } from "./schemas/defaultProps";

const CSS_HANDLES = [
  "container",
  "container--horizontal",
  "container--vertical",
  "item",
  "icon",
  "mainText",
  "subText"
] as const;

interface Props {
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

function BenefitsBanner(props: Props) {
  const { handles } = useCssHandles(CSS_HANDLES);

  // Define a classe baseada no layout escolhido no Site Editor
  const layoutClass =
    props.layout === "vertical"
      ? handles["container--vertical"]
      : handles["container--horizontal"];

  const items = [
    {
      icon: props.iconUrl1,
      main: props.mainText1,
      sub: props.subText1
    },
    {
      icon: props.iconUrl2,
      main: props.mainText2,
      sub: props.subText2
    },
    {
      icon: props.iconUrl3,
      main: props.mainText3,
      sub: props.subText3
    }
  ];

  return (
    <div className={`${handles.container} ${layoutClass}`}>
      {items.map((item, index) => (
        <div key={index} className={handles.item}>
          {item.icon && (
            <img src={item.icon} alt={item.main} className={handles.icon} />
          )}
          <div className={handles.mainText}>{item.main}</div>
          <div className={handles.subText}>{item.sub}</div>
        </div>
      ))}
    </div>
  );
}

BenefitsBanner.schema = schema;
BenefitsBanner.defaultProps = defaultProps;

export default BenefitsBanner;
