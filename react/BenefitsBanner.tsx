// @ts-nocheck
import { useCssHandles } from "vtex.css-handles";

const HANDLES = [
  "benefitsContainer",
  "benefitsList",
  "benefitsItem",
  "benefitsIcon",
  "benefitsTextContainer",
  "benefitsMainText",
  "benefitSubText"
] as const;

function BenefitsBanner() {
  const {
    benefitsContainer,
    benefitsList,
    benefitsItem,
    benefitsIcon,
    benefitsTextContainer,
    benefitsMainText,
    benefitSubText
  } = useCssHandles(HANDLES);

  return (
    <div className={benefitsContainer}>
      <div className={benefitsList}>
        {/* Selo 1 */}
        <div className={benefitsItem}>
          <div className={benefitsContainer}>
            <span className={benefitsMainText}>
              Frete Grátis
            </span>
            <span className={benefitSubText}>
              Em compras acima de R$150
            </span>
          </div>
        </div>
        {/* Selo 2 */}
        <div className={benefitsItem}>
          <div className={benefitsContainer}>
            <span className={benefitsMainText}>
              Até 6x Sem Juros
            </span>
            <span className={benefitSubText}>
              Ou desconto no PIX
            </span>
          </div>
        </div>

        {/* Selo 3 */}
        <div className={benefitsItem}>
          <div className={benefitsContainer}>
            <span className={benefitsMainText}>
              Entrega Rápida
            </span>
            <span className={benefitSubText}>
              Receba em tempo recorde
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsBanner;
