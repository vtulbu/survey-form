import type { NextPage } from "next";
import { Background } from "../components/Background";
import { Survey } from "../components/Survey";

const Home: NextPage = () => {
  return (
    <div>
      <Background>
        <Survey />
      </Background>
    </div>
  );
};

export default Home;
