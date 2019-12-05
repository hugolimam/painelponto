interface Ponto {
  office: string;
  person: string;
  time: string;
  type: number;
}

type FirestoreItem = {
  key: string;
};

type PontoItem = Ponto & FirestoreItem;
