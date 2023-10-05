import "./App.css";
import ListaPokemons from "./Components/ListaPokemons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetails from "./Components/PokemonDetails";
import { CounterProvider } from "./ContextAPI/CounterProvider";

function App() {
  return (
    <>
      <CounterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListaPokemons />} />
            <Route path="/details/:id" element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </CounterProvider>
    </>
  );
}

export default App;
