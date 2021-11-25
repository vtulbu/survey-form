import styled from "@emotion/styled";

export const StyledBackground = styled.div`
  //desktop version
  @media only screen and (min-width: 900px) {
    background-color: #555596;
    position: absolute;
    padding: 0vw 2vw 2vw 2vw;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    box-sizing: border-box;

    h1 {
      font-weight: 500;
      color: white;
      font-size: 2.5vw;
      text-align: center;
      margin: 1vw;
    }
  }
  //tablet version
  @media only screen and (min-width: 600px) and (max-width: 900px) {
    background-color: #555596;
    position: absolute;
    padding: 0vw 4vw 4vw 4vw;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    box-sizing: border-box;

    h1 {
      font-weight: 400;
      color: white;
      font-size: 4vw;
      text-align: center;
      margin: 3vw;
    }
  }
  // mobile version
  @media only screen and (max-width: 600px) {
    background-color: #555596;
    position: absolute;
    padding: 0vw 6vw 6vw 6vw;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    box-sizing: border-box;

    h1 {
      font-weight: 400;
      color: white;
      font-size: 5vw;
      text-align: center;
      margin: 7vw 3vw 3vw 3vw;
    }
  }
`;
