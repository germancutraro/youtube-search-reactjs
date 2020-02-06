import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #232323;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 2em;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    margin-left: 5%;
  }
`;
