import { ChangeEvent } from "react";
import { UserIcon } from "../UserIcon";

export const Header = () => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <a href="./">Q & A</a>
      <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Search..."
      />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};
