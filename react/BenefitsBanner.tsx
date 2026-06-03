import React from "react";
import { useCssHandles } from "vtex.css-handles";

const CSS_HANDLES = [
  "bannerContainer",
  "benefitsList",
  "benefitItem",
  "benefitTextContainer",
  "benefitMainText",
  "benefitSubText"
];

function BenefitsBanner() {
  // Retornando a desestruturação correta exigida pelo tipo CssHandlesBag
  const { handles } = useCssHandles(CSS_HANDLES);

  return (
    <div className={handles.bannerContainer}>
      <ul className={handles.benefitsList}>
        <li className={handles.benefitItem}>
          <div className={handles.benefitTextContainer}>
            <span className={handles.benefitMainText}>Frete Grátis</span>
            <span className={handles.benefitSubText}>Em compras acima de R$ 150</span>
          </div>
        </li>

        <li className={handles.benefitItem}>
          <div className={handles.benefitTextContainer}>
            <span className={handles.benefitMainText}>Até 6x Sem Juros</span>
            <span className={handles.benefitSubText}>Ou desconto no PIX</span>
          </div>
        </li>

        <li className={handles.benefitItem}>
          <div className={handles.benefitTextContainer}>
            <span className={handles.benefitMainText}>Entrega Rápida</span>
            <span className={handles.benefitSubText}>Receba em tempo recorde</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BenefitsBanner;
