import type { NextPage } from "next";
import { CardView } from "../components/CardView";

const Home: NextPage = () => {
  return (
    <div className="bg-fuchsia-400 h-screen">
      <CardView />
    </div>
  );
};

export default Home;
