import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 375px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const startCenterFlex = `
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const CardContainer = `
  margin-inline: auto;
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-block: 15px;
  padding: 15px 10px;
  width: 90%;
  border: none;
  overflow-wrap: anywhere;
`;
export const AvatarContainer = styled.a`
  ${startCenterFlex};
  margin-block: 15px;
  text-decoration: none;

  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: none;
    margin-inline-end: 5px;
  }

  h6 {
    text-transform: capitalize;
    font-size: 20px;
    margin: 0;
    color: #040404;
  }
`;
