import { nanoid } from "nanoid";
import { Filters } from "./DataTypes";

const filters: Filters[] = [
  { text: "Show All", id: nanoid(), category: "all" },
  { text: "Male", id: nanoid(), category: "male" },
  { text: "Female", id: nanoid(), category: "female" },
  { text: "LE GRAND BIKES", id: nanoid(), category: "brand" },
  { text: "KROSS", id: nanoid(), category: "brand" },
  { text: "EXPLORER", id: nanoid(), category: "brand" },
  { text: "VISITOR", id: nanoid(), category: "brand" },
  { text: "PONY", id: nanoid(), category: "brand" },
  { text: "FORCE", id: nanoid(), category: "brand" },
  { text: "E-BIKES", id: nanoid(), category: "brand" },
  { text: "IDEAL", id: nanoid(), category: "brand" },
];

export default filters;
