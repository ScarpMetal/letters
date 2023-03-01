import LetterChain from "components/LetterChain";
import "./App.scss";

const testLetters: Letter[] = [
  {
    id: "ID-1",
    replyTo: "ID-0",
    rows: ["Katelynn", "Larry", "Michale", "Rosalind", "Leatha"],
    loves: ["Lowe"],
    sentAt: 100000000,
  },
  {
    id: "ID-2",
    replyTo: "ID-1",
    rows: ["Ruthie", "Karlee", "Roselyn", "Henri", "Linda"],
    loves: ["Medhurst"],
    sentAt: 100000000,
  },
  {
    id: "ID-3",
    replyTo: "ID-2",
    rows: ["Luna", "Gerard", "Humberto", "Eli", "Sim"],
    loves: ["Rau"],
    sentAt: 100000000,
  },
  {
    id: "ID-4",
    replyTo: "ID-3",
    rows: ["Anahi", "Vincenzo", "Donny", "Gerald", "Jason"],
    loves: ["Sporer"],
    sentAt: 100000000,
  },
  {
    id: "ID-5",
    replyTo: "ID-4",
    rows: ["Pauline", "Randy", "June", "Jayce", "Kenyon"],
    loves: ["Mitchell"],
    sentAt: 100000000,
  },
  {
    id: "ID-6",
    replyTo: "ID-5",
    rows: ["Gladys", "Tianna", "Rocky", "Antonetta", "Eudora"],
    loves: ["Stiedemann"],
    sentAt: 100000000,
  },
  {
    id: "ID-7",
    replyTo: "ID-6",
    rows: ["Ashlee", "Lydia", "Aiyana", "Freeman", "Riley"],
    loves: ["Little"],
    sentAt: 100000000,
  },
  {
    id: "ID-8",
    replyTo: "ID-7",
    rows: ["Verner", "Orland", "Brooklyn", "Sarah", "Sarah"],
    loves: ["Stamm"],
    sentAt: 100000000,
  },
  {
    id: "ID-9",
    replyTo: "ID-8",
    rows: ["Wilford", "Jared", "Pinkie", "Presley", "Jairo"],
    loves: ["Kassulke"],
    sentAt: 100000000,
  },
  {
    id: "ID-10",
    replyTo: "ID-9",
    rows: ["Josue", "Osborne", "Mariela", "Billy", "Mina"],
    loves: ["Mueller"],
    sentAt: 100000000,
  },
  {
    id: "ID-11",
    replyTo: "ID-10",
    rows: ["Lucie", "Kristina", "Bud", "Kaitlyn", "Tyrel"],
    loves: ["Oberbrunner"],
    sentAt: 100000000,
  },
  {
    id: "ID-12",
    replyTo: "ID-11",
    rows: ["Nina", "Jovany", "Benjamin", "Harry", "Jared"],
    loves: ["Hoppe"],
    sentAt: 100000000,
  },
  {
    id: "ID-13",
    replyTo: "ID-12",
    rows: ["Dillan", "Chyna", "Ona", "Myles", "Jackson"],
    loves: ["Kertzmann"],
    sentAt: 100000000,
  },
  {
    id: "ID-14",
    replyTo: "ID-13",
    rows: ["Curt", "Keon", "Brianne", "Aiden", "Enrique"],
    loves: ["Gulgowski"],
    sentAt: 100000000,
  },
];

function App() {
  return <LetterChain letters={testLetters} />;
}

export default App;
