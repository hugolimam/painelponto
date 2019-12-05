import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import { firestore } from "firebase/app";

import { Lista, Info } from "./style";

export default function Inicio() {
  const [pontos, setPonto] = useState<PontoItem[]>([]);

  useEffect(() => {
    return firestore()
      .collection("pontos")
      .orderBy("time", "desc")
      .onSnapshot(snap => {
        const items = snap.docs.map(doc => {
          const data = doc.data();
          return {
            ...(data as Ponto),
            time: data.time.toDate().toLocaleString(),
            key: doc.id
          };
        });
        setPonto(items);
      });
  }, []);

  return (
    <Container style={{ marginTop: 20 }}>
      <Info>
        <Row>
          <Col sm="4">Nome</Col>
          <Col sm="2">QG</Col>
          <Col sm="4">Dia/Hora</Col>
          <Col sm="2">Tipo</Col>
        </Row>
      </Info>
      {pontos.map(ponto => (
        <Lista key={ponto.key}>
          <Row>
            <Col sm="4">{ponto.person}</Col>
            <Col sm="2">{ponto.office}</Col>
            <Col sm="4">{ponto.time}</Col>
            <Col sm="2">{ponto.type}</Col>
          </Row>
        </Lista>
      ))}
    </Container>
  );
}

//   const pontos = [
//     {
//       nome: "Hugo Lima Moura",
//       qg: "Ipatinga",
//       data: "23/5/1994",
//       tipo: "Saida"
//     },
//     {
//       nome: "Carlos Roberto",
//       qg: "Ipatinga",
//       data: "23/5/1993",
//       tipo: "Entrada"
//     }
//   ];
