import { Link } from "react-router-dom";

import logo from "@assets/logo.png";

function Home() {
  return (
    <main>
      <div className="bg-gray-200 m-20 rounded-3xl drop-shadow-xl">
        <div className="flex m-10">
          <img src={logo} alt="logo" className="p-10" />
          <h1 className="text-7xl text-center flex-auto p-20">Art Street</h1>
        </div>
      </div>
      <div className="bg-gray-200 m-20 rounded-3xl drop-shadow-xl p-10">
        <div className=" text-4xl text-center">
          <p className="">
            Art Street est un site web pour les artistes de rue. Ils partagent
            leur art, leur talent et leur créativiter en ce lieux.
          </p>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            dolorum, consequuntur error ratione nemo molestias quasi libero
            consequatur sequi odit, in dignissimos atque eum. Obcaecati officia
            omnis magni perferendis voluptatem! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eligendi repellat pariatur, at
            explicabo repellendus eaque illum animi quod magnam, quibusdam
            nulla, sunt quo exercitationem officiis totam vel dolore dolorum
            praesentium.
          </p>
          <p className="p-5">
            <Link to="/welcome">
              <button type="button" className="underline">
                Entrée
              </button>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
