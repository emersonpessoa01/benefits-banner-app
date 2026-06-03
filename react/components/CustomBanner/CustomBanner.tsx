import React from "react";
import { useProduct } from "vtex.product-context";
import { schema } from "./schemas/schema";
import { defaultProps } from "./schemas/defaultProps";
import { useCssHandles } from "vtex.css-handles";

const CSS_HANDLES = ["customBannerContainer", "customBannerText"] as const;

type Props = {
  discount?: string;
  installments?: string;
};

function CustomBanner({ discount, installments }: Props) {
  const { handles } = useCssHandles(CSS_HANDLES);
  const productContext = useProduct();
  // const product = productContext?.product;

  // console.log("Produto no BenefitsBanner:", product);
  // console.log("Contexto do produto:", productContext);
  // const dateCurrent = new Date().toLocaleDateString("pt-BR", {
  //   day: "2-digit",
  //   month: "2-digit",
  //   year: "numeric"
  // });
  const listPrice =
    productContext?.selectedItem?.sellers[0].commertialOffer.ListPrice;
  const installmentsValue = listPrice ? listPrice / Number(installments) : 0;

  return (
    <div className={handles.customBannerContainer}>
      {/* <h1
        style={{
          color: "#00419e",
          margin: "0 0 10px 0",
          fontSize: "20px"
        }}
      >
        Hey, {name}
      </h1> */}
      {/* <p
        style={{
          color: "#333",
          margin: 0,
          fontSize: "14px",
          fontWeight: "bold"
        }}
      >
        Data: {dateCurrent} {dataCustom && `| Custom: ${dataCustom}`}
      </p> */}

      <span className={handles.customBannerText}>
        Em até {installments} de R${" "}
        {installmentsValue?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}{" "}
        sem juros você poderá pagar à vista R${" "}
        {listPrice?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}{" "}
        ou ganhar {discount}% de desconto no boleto.
      </span>
    </div>
  );
}

CustomBanner.schema = schema;
CustomBanner.defaultProps = defaultProps;

export default CustomBanner;
