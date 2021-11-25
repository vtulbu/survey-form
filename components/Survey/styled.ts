import styled from "@emotion/styled";

export const StyledSurvey = styled.div`
  //desktop version
  @media only screen and (min-width: 900px) {
    color: white;
    background-color: #3d91f3;
    box-shadow: 10px 10px 10px 0px #00000040;
    box-sizing: border-box;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0vw 7vw;

    form {
      display: flex;
      flex-direction: column;
      height: 85%;
    }

    section {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h2 {
      font-size: 2.1rem;
      font-weight: 400;
      margin-top: 5vw;
      margin-bottom: 0vw;
    }

    p {
      font-size: 1.2rem;
      line-height: 2vw;
    }

    footer {
      align-self: center;
      position: absolute;
      bottom: 7%;
      font-size: 1vw;
    }

    .container {
      display: flex;
      flex-direction: column;
      margin-bottom: auto;
      padding-top: 1vw;
    }

    .error-message {
      font-size: 1.1vw;
      color: #f44336;
      background-color: #e6ffff;
      border-radius: 6px;
      padding: 0.5vw 1vw;
      margin: 0;
      text-align: center;
    }
  }

  //tablet version
  @media only screen and (min-width: 600px) and (max-width: 900px) {
    color: white;
    background-color: #3d91f3;
    box-sizing: border-box;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0vw 12vw;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 90%;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h2 {
      font-size: 5vw;
      font-weight: 400;
      position: absolute;
      top: 12%;
      width: 70%;
    }

    p {
      font-size: 3vw;
      line-height: 5vw;
    }

    footer {
      align-self: center;
      position: absolute;
      bottom: 7%;
      font-size: 2vw;
    }

    .container {
      display: flex;
      flex-direction: column;
      margin-bottom: auto;
      padding-top: 2vw;
    }

    .error-message {
      font-size: 2vw;
      color: #f44336;
      background-color: #e6ffff;
      border-radius: 6px;
      padding: 0.5vw 1vw;
      margin: 0;
      text-align: center;
    }
  }

  // mobile version
  @media only screen and (max-width: 600px) {
    color: white;
    background-color: #3d91f3;
    box-sizing: border-box;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0vw 6vw;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 85%;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h2 {
      font-size: 5vw;
      font-weight: 400;
      position: absolute;
      top: 12%;
      width: 80%;
    }

    p {
      font-size: 4vw;
      line-height: 5vw;
    }

    footer {
      align-self: center;
      position: absolute;
      bottom: 7%;
      font-size: 3vw;
    }

    .container {
      display: flex;
      flex-direction: column;
      margin-bottom: auto;
      padding-top: 2vw;
    }

    .error-message {
      font-size: 3vw;
      color: #f44336;
      background-color: #e6ffff;
      border-radius: 6px;
      padding: 0.5vw 1vw;
      margin: 1vw 0vw 0vw 0vw;
      text-align: center;
    }
  } ;
`;
