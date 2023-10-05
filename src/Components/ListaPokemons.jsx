import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pokemon from "./Pokemon";
import { getAllById } from "../Helps/Api";
import Header from "./Header";
import Button from "./Button";
import Loading from "./Loading";
import { CounterContext } from "../ContextAPI/CounterProvider";


export default function ListaPokemons() {
  const { counter, setCounter } = useContext(CounterContext);
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setCheck(false);
      try {
        const result = await getAllById(counter);
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setCheck(true);
      }
    })();
  }, [counter]);

  const hedleClick = (e) => {
    const { id } = e.target;
    navigate(`/details/${id}`);
  };
  const hedleClickPagesAvançar = () => {
    setCounter((prev) => prev + 20);
  };
  const hedleClickPagesVoltar = () => {
    counter > 0 ? setCounter((prev) => prev - 20) : null;
  };

  return (
    <>
      <Header />
      {!check ? (
        <Loading />
      ) : (
        data.map((e) => (
          <Pokemon
            key={e.id}
            img={e.front_default}
            experience={e.base_experience}
            nome={e.name}
            id={e.id}
            hedleClick={hedleClick}
          />
        ))
      )}
      <div className="conteiner-button">
        <Button title={"Voltar"} hedleClickPages={hedleClickPagesVoltar} />
        <Button title={"Avançar"} hedleClickPages={hedleClickPagesAvançar} />
      </div>
    </>
  );
}
