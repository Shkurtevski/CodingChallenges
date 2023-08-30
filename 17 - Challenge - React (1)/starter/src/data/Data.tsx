import { nanoid } from "nanoid";
import { LocalData } from './DataTypes';

const data: LocalData[] = [
  {
    id: nanoid(),
    title: "Stories of Adventure",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum soluta quisquam sequi reiciendis accusamus vero odio quam architecto maxime harum laborum ipsum aspernatur facilis adipisci nam et tempora at qui aperiam, eum ut tempore provident! Nulla in facere nesciunt est, mollitia possimus recusandae consectetur, eum saepe dolorum fugiat quam amet assumenda quas et.!",
    image: "https://picsum.photos/id/223/400",
  },
  {
    id: nanoid(),
    title: "Popular Adventures",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum soluta quisquam sequi reiciendis accusamus vero odio quam architecto maxime harum laborum ipsum aspernatur facilis adipisci nam et tempora at qui aperiam, eum ut tempore provident! Nulla in facere nesciunt est, mollitia possimus recusandae consectetur, eum saepe dolorum fugiat quam amet assumenda quas. Quaerat cum soluta quisquam sequi reiciendis accusamus vero odio quam architecto maxime harum laborum ipsum aspernatur facilis adipisci nam et tempora at qui aperiam, eum ut tempore provident!",
    image: "https://picsum.photos/400",
  },
];

export default data;
