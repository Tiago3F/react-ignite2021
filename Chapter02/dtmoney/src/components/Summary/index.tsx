import { Container } from "./styles";

import incomingImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import React, { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomingImg} alt="Entradas" />
        </header>
        <strong>R$1.000</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-R$500</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  );
}
