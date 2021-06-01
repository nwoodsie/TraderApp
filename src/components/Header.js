import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";
import Media from "react-media";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <>
      <HeaderContainer>
        <HeaderSearch>
          <SearchIcon />
          <input placeholder="Search for Stock" />
        </HeaderSearch>
        <Media
          query="(min-width: 600px)"
          render={() => (
            <HeaderRight>
              <HeaderUser>
                <p>{user?.email}</p>
              </HeaderUser>
            </HeaderRight>
          )}
        />
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 60px;
  background-color: transparent;
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: var(--sub-color2);
  border: 1px var(--sub-color1) solid;
  margin-left: 100px;

  > input {
    background-color: transparent; /* Looks better, blends into background */
    border: none;
    text-align: center;
    min-width: 30vw; /* Minimum reactive width is 30% of screen */
    outline: 0; /* Gets rid of the input outline */
    color: var(--sub-color2);
  }

  > .MuiSvgIcon-root {
    color: var(--sub-color2);
    font-size: 24px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: var(--sub-color1);
  margin-right: 24px;
`;

const HeaderUser = styled.div`
  font-size: 14px;
  font-weight: 20;
  color: var(--sub-color2);
  font-family: "Impact", sans-serif;
  border-radius: 8px;
  background: var(--main-button);
  box-shadow: 1px 1px var(--main-shadow);
  padding: 11px;
  padding-top: 14px;
  padding-bottom: 14px;
  transition: 0.2s;

  > p {
    visibility: visible;
  }

  :hover {
    box-shadow: 0px 0px 0px 1px var(--sub-color2);
    cursor: pointer;
  }
`;

/* <form>
<input
  placeholder="Search for Stock"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<button
  hidden
  type="submit"
  onClick={setStockSymbol(search)}
></button>
</form> */
