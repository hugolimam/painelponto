import React from "react";
import { Container } from "reactstrap";
import PontoList from "./PontoList";

type Props = {
  filter: string;
};
export default function Inicio({ filter }: Props) {
  return (
    <Container>
      <PontoList filter={filter} />
    </Container>
  );
}
