import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, onClick }) {
  return (
    <SidebarOptionContainer>
      <Icon onClick={onClick} />
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--sub-color1);
  padding: 3px;
  transition: 0.2s;

  > .MuiSvgIcon-root {
    font-size: 25px;
  }

  :hover {
    color: var(--sub-color2);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;
