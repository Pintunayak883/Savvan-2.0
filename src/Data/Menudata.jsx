import { RiHome2Fill, RiPlayListFill, RiAlbumFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Menudata = [
  {
    id: 1,
    name: "Home",
    icon: <RiHome2Fill />,
    path: "/",
  },
  {
    id: 2,
    name: "Search",
    icon: <FaSearch />,
    path: "/search",
  },
  {
    id: 3,
    name: "Songs",
    icon: <RiPlayListFill />,
    path: "/songs",
  },
  {
    id: 4,
    name: "Albume",
    icon: <RiAlbumFill />,
    path: "/albume",
  },
];

export default Menudata;
