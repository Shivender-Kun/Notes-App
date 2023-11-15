import { NavLink } from "react-router-dom";
import { INavigationOption } from "../../types";

const processLink = (string: string) => {
  let url = string.toLowerCase();
  if (string.includes(" ")) url = url.split(" ").join("-");
  return url;
};

const NavigationOption = ({ name, image, url, base }: INavigationOption) => {
  return (
    <NavLink
      to={`/${base ? base + "/" : ""}${url || processLink(name)}`}
      className={({ isActive }) => {
        return `${
          isActive ? "bg-blue-700 text-slate-50" : "bg-blue-500"
        } w-1/2 p-2 text-center rounded-lg font-medium text-xl min-w-fit`;
      }}
    >
      {image ? <img src={image} alt={name} /> : null}
      <span>{name}</span>
    </NavLink>
  );
};

export default NavigationOption;
