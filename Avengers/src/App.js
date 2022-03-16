import Avengers from "./components/Avengers/Avengers";


function App() {

  const avengers = {
    spiderman: {
    nombreReal: "Peter Parker",
    nombre: "Spiderman"
    },
    ironMan: {
    nombreReal: "Tony Stark",
    nombre: "Iron Man"
    },
    capAmerica: {
    nombreReal: "Steve Rogers",
    nombre: "Capitán América"
    }
    }

  return (
    <>
      <Avengers 
        name= {avengers.spiderman.nombre}
        realName = {avengers.spiderman.nombreReal}
      />
      <Avengers 
        name= {avengers.ironMan.nombre}
        realName = {avengers.ironMan.nombreReal}
      />
      <Avengers 
        name= {avengers.capAmerica.nombre}
        realName = {avengers.capAmerica.nombreReal}
      />
    </>
  );
}

export default App;
