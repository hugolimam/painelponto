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

type DocumentSnapshot = import("firebase").firestore.DocumentSnapshot;
type QuerySnapshot = import("firebase").firestore.QuerySnapshot;
