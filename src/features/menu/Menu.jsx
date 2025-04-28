import { useLoaderData, useNavigate } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { getUsername } from "../user/userSlice";
import { useEffect } from "react";

function Menu() {
  const menu = useLoaderData();
  const navigate = useNavigate();
  const username = useSelector(getUsername);

  useEffect(() => {
    if (!username) navigate("/");
  }, [username]);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
