import styled from 'styled-components';

export const VideoContainer = styled.div`
  display: flex;
  width: 85%;
  margin-left: calc(94px + 4.5em + 80px);

  @media screen and (max-width: 1580px) {
    width: 95%;
    margin-left: 0;
    margin: auto;
  }

  @media screen and (max-width: 957px) {
    width: 90%;
    flex-direction: column;
    margin-left: 0;
    margin: auto;
  }
`;

export const VideoWrapper = styled.div`
  max-width: 854px;
  max-height: 483px;

  @media screen and (max-width: 1580px) {
    min-width: 640.5px;
    min-height: 362.25px;
  }

  @media screen and (max-width: 957px) {
    width: 100%;
    max-height: none;
    min-width: 0;
  }
`;

export const VideoTitle = styled.h4`
  color: #e3e3e3;
  font-weight: 400;
  margin-bottom: 0;
`;

export const VideoChannel = styled.small`
  color: #fff;
`;

export const VideoDescription = styled.small`
  color: #e3e3e3;
`;

export const Divider = styled.br``;

export const Frame = styled.iframe`
  width: 100%;
  height: 480px;
  max-width: 854px;
  max-height: 480px;
  display: block;
  margin: 2em auto;
  border: none;

  @media screen and (max-width: 1580px) {
    max-width: 100%;
    max-height: 362.25px;
  }

  @media screen and (max-width: 957px) {
    max-width: none;
    min-width: 0;
    width: 100%;
  }
`;

// export const VideoTitle = styled.p`
//   color: #e3e3e3;
//   display: block;
//   margin: 0 0 4px 0;
//   max-height: 3.2rem;
//   overflow: hidden;
//   font-size: 0.9rem;
//   font-weight: 500;
//   line-height: 1.6rem;
// `;
