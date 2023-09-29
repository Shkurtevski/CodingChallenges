import { nanoid } from "nanoid";
import { Links } from "./DataTypes";

const links: Links[] = [
  { id: nanoid(), text: "home", url: "#" },
  { id: nanoid(), text: "bikes", url: "#" },
  { id: nanoid(), text: "gear", url: "#" },
  { id: nanoid(), text: "parts", url: "#" },
  { id: nanoid(), text: "tires", url: "#" },
  { id: nanoid(), text: "service-info", url: "#" },
  { id: nanoid(), text: "catalogues", url: "#" },
  { id: nanoid(), text: "contact", url: "#" },
];

export default links;
