import penLogo from "../images/penLogo.png";
import phoneLogo from "../images/phoneLogo.png";
import tabletLogo from "../images/tabletLogo.png";

export default function getServicesItems() {
  return [
    {
      id: "Box1",
      BoxTitle: "Web Development",
      BoxIcon: tabletLogo,
      BoxContent: ""
    },
    { id: "Box2", BoxTitle: "UI", BoxIcon: phoneLogo, BoxContent: "" },
    { id: "Box3", BoxTitle: "Web Design", BoxIcon: penLogo, BoxContent: "" }
  ];
}
