import styled from 'styled-components';

export const SearchWrapper = styled.div`
  margin-left: 4.5em;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0.5em;
  }
`;
export const Search = styled.input`
  width: 600px;
  height: 31px;
  color: #cdcdcd;
  background-color: #000;
  border: 1px solid #303030;
  outline: none;
  padding: 10px;
  line-height: 24px;
  border-radius: 3px;
  font-size: 16px;

  @media screen and (max-width: 500px) {
    width: 94%;
  }
`;
