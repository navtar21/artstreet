import erreur404 from "@assets/erreur404.png";

function Page404() {
  return (
    <main>
      <h1 className="text-7xl text-center">
        Les erreurs sont la preuve que l'on a essayé.
      </h1>
      <img
        src={erreur404}
        alt="ERROR"
        className="p-10 drop-shadow-2xl h-1/2 w-1/2 object-center"
      />
    </main>
  );
}

export default Page404;
