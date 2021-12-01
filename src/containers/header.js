import React, { useEffect, useRef } from "react";
import { Header } from "../components";
import { useLocation } from "react-router-dom";
import * as ROUTES from "../constant/route";
import logo from "../logo.svg";
export function HeaderContainer({ children }) {
  const { pathname } = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    if (pathname === "/signin") ref.current.style.display = "none";
  }, [pathname]);

  return (
    <Header>
      <Header.Frame otherPages>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <div ref={ref}>
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
        </div>
      </Header.Frame>
      {children}
    </Header>
  );
}
