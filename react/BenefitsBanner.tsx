import React from "react";
import { useProduct } from "vtex.product-context";

type Props = {
  name: string;
  dataCustom?: string;
};

function BenefitsBanner({ name, dataCustom }: Props) {
  const productContext = useProduct();
  const product = productContext?.product;

  if (!product) {
    // console.log("Produto não encontrado no contexto do produto.");
    return null;
  }
  console.log("Produto no BenefitsBanner:", product);

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "8px",
        border: "2px dashed #00419e",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          color: "#00419e",
          margin: "0 0 10px 0",
          fontSize: "20px"
        }}
      >
        Hey, {name}
      </h1>
      <p
        style={{
          color: "#333",
          margin: 0,
          fontSize: "14px",
          fontWeight: "bold"
        }}
      >
        Data: {dataCustom}
      </p>
      <p
        style={{
          color: "#333",
          margin: 0,
          fontSize: "14px",
          fontWeight: "bold"
        }}
      >
        Você está visualizando o produto: {product.productName}
      </p>

      <p style={{ color: "#555", margin: 0, fontSize: "12px" }}>
        Marca: {product.brand} - Categoria:
        {product.categories.join(" > ")}
      </p>
    </div>
  );
}

export default BenefitsBanner;
