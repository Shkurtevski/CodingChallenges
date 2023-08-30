import { nanoid } from "nanoid";
import { Links } from "./DataTypes";

const links: Links[] = [
  { id: nanoid(), text: "Destinations", url: "https://www.google.com/" },
  { id: nanoid(), text: "Contact", url: "https://www.pexels.com/" },
  { id: nanoid(), text: "Stories", url: "https://stackoverflow.com/" },
];

export default links;
