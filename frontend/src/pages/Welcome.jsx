import Nav from "@components/Nav";
import bansky from "@assets/bansky1.png";
import LaKariere from "@assets/Lakariere.png";
import Redon from "@assets/Redon.png";
import Homerpixel from "@assets/Homerpixel.png";

function Welcome() {
  return (
    <main>
      <Nav />
      <h1 className="text-5xl underline text-center">ACCEUIL</h1>

      <div className="text-4xl text-center bg-gray-200 m-48 rounded-3xl drop-shadow-xl flex">
        <img
          src={bansky}
          alt="bansky"
          className="p-10 drop-shadow-xl h-1/2 w-1/2"
        />
        <div className="flex flex-col">
          <p className="m-10">Artiste: Bansky</p>
          <p className="m-20">Lieux: Londres</p>
          <p className="m-10">Nom de l'oeuvre: There is always hope</p>
        </div>
      </div>

      <div className="text-4xl text-center bg-gray-200 m-48 rounded-3xl drop-shadow-xl flex">
        <img
          src={Redon}
          alt="Redon"
          className="p-10 drop-shadow-xl object-scale-down h-1/2 w-1/2"
        />
        <div className="flex flex-col">
          <p className="m-10">Artiste: Jef</p>
          <p className="m-20">Lieu: Redon, Bretagne</p>
          <p className="m-10">Nom de l'oeuvre: Prend ma main</p>
        </div>
      </div>
      <div className="text-4xl text-center bg-gray-200 m-48 rounded-3xl drop-shadow-xl flex">
        <img
          src={LaKariere}
          alt="Lakariere"
          className="p-10 drop-shadow-xl h-1/2 w-1/2"
        />
        <div className="flex flex-col">
          <p className="m-10">Artiste: Inconnue</p>
          <p className="m-20">Lieux: LaKariere, Bourgogne</p>
          <p className="m-10">Nom de l'oeuvre: Rock Street</p>
        </div>
      </div>
      <div className="text-4xl text-center bg-gray-200 m-48 rounded-3xl drop-shadow-xl flex">
        <img
          src={Homerpixel}
          alt="bansky"
          className="p-10 drop-shadow-xl h-1/2 w-1/2"
        />
        <div className="flex flex-col ">
          <p className="m-10">Artiste: Johan Karlgren</p>
          <p className="m-20">Lieux: Suede</p>
          <p className="m-10">Nom de l'oeuvre: Homer Pixel</p>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
