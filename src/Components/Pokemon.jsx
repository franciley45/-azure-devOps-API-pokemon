import React from "react";
import "../App.css";

export default function Pokemon({ nome, experience, img, id, hedleClick }) {
  return (
    <button className="conteiner-pokemon" id={id} onClick={hedleClick}>
      <img className="box" alt="" src={img} id={id} />
      <h2 className="box">
        <strong id={id} >{nome}</strong>
      </h2>
      <h2 className="box" id={id}>{`EXP  = ${experience}`}</h2>
    </button>
  );
}
