import { nanoid } from "nanoid";
import { Links } from "./DataTypes";

const eventInfoLinks: Links[] = [
  { id: nanoid(), text: "Enter Now", url: "#" },
  { id: nanoid(), text: "Event Info", url: "#" },
  { id: nanoid(), text: "Course Maps", url: "#" },
  { id: nanoid(), text: "Race Pack", url: "#" },
  { id: nanoid(), text: "Results", url: "#" },
  { id: nanoid(), text: "FAQs", url: "#" },
  { id: nanoid(), text: "Am I Registered?", url: "#" },
];

const registrationLinks: Links[] = [
  { id: nanoid(), text: "Volunteers", url: "#" },
  { id: nanoid(), text: "Gallery", url: "#" },
  { id: nanoid(), text: "Press", url: "#" },
  { id: nanoid(), text: "Results", url: "#" },
  { id: nanoid(), text: "Privacy Policy", url: "#" },
  { id: nanoid(), text: "Service Plus", url: "#" },
  { id: nanoid(), text: "Contacts", url: "#" },
];

const scheduleLinks: Links[] = [
  { id: nanoid(), text: "Gallery", url: "#" },
  { id: nanoid(), text: "About", url: "#" },
  { id: nanoid(), text: "Videos", url: "#" },
  { id: nanoid(), text: "Results", url: "#" },
  { id: nanoid(), text: "FAQs", url: "#" },
  { id: nanoid(), text: "Results", url: "#" },
  { id: nanoid(), text: "Volunteers", url: "#" },
];

const footerLinks: { title: string; links: Links[] }[] = [
  { title: "Event Info", links: eventInfoLinks },
  { title: "Registration", links: registrationLinks },
  { title: "Schedule", links: scheduleLinks },
];

export default footerLinks;
