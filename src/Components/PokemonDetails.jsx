import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Helps/Api";
import Loading from "./Loading";

export default function PokemonDetails() {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const result = await getById(id);
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setCheck(true)
      }
    })();
  });

  return (
    <>
    { !check ? <Loading /> :
    <div className="details">
      <div className="conteiner-pokemon-details">
        <img
          className="conteiner-pokemon-details-box"
          alt=""
          src={data.front_default}
        />
        <h2 className="conteiner-pokemon-details-box">{data.name}</h2>
        <h2 className="conteiner-pokemon-details-box">{`EXP  = ${data.base_experience}`}</h2>
        <p className="conteiner-pokemon-details-box">{`id  = ${data.id}`}</p>
      </div>
    </div>
    }
    </>
  );
}
