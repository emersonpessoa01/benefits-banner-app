import { defaultProps } from "./defaultProps";

export const schema = {
  title: "Banner de Benefícios Natura",
  description: "Configuração dos 3 selos promocionais da Home Page",
  type: "object",
  properties: {
    layout: {
      title: "Orientação do Layout",
      type: "string",
      default: defaultProps.layout,
      enum: ["horizontal", "vertical"],
      enumNames: ["Horizontal (Desktop)", "Vertical (Mobile)"],
      widget: {
        "ui:widget": "radio"
      }
    },
    // Campos do selo 1
    iconUrl1: {
      title: "Ícone do Selo 1",
      type: "string",
      default: defaultProps.iconUrl1,
      widget: {
        "ui:widget": "image-uploader" // Abre o gerenciador de upload da VTEX
      }
    },
    mainText1: {
      title: "Texto Principal do Selo 1",
      type: "string",
      default: defaultProps.mainText1
    },
    subText1: {
      title: "Texto Suporte do Selo 1",
      type: "string",
      default: defaultProps.subText1
    },
    // Campos do selo 2
    iconUrl2: {
      title: "Ícone do Selo 2",
      type: "string",
      default: defaultProps.iconUrl2,
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    mainText2: {
      title: "Texto Principal do Selo 2",
      type: "string",
      default: defaultProps.mainText2
    },
    subText2: {
      title: "Texto Suporte do Selo 2",
      type: "string",
      default: defaultProps.subText2
    },

    // Campos do selo 3
    iconUrl3: {
      title: "Ícone do Selo 3",
      type: "string",
      default: defaultProps.iconUrl3,
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    mainText3: {
      title: "Texto Principal do Selo 3",
      type: "string",
      default: defaultProps.mainText3
    },
    subText3: {
      title: "Texto Suporte do Selo 3",
      type: "string",
      default: defaultProps.subText3
    }
  }
};
