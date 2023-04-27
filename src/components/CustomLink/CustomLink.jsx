import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, style,...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? style["active"] : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;
