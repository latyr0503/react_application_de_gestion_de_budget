import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const AjoutRevenu = () => {
  const [titre, setTitre] = useState("");
  const [montant, setMontant] = useState("");
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3000/revenu", { titre, montant });
      setTitre("");
      setMontant("");
      alert("Revenu ajoutée avec succès !");
      setRedirect(true);
    } catch (error) {
      setError("Erreur lors de l'ajout du Revenu");
      console.error("Erreur:", error);
    }
  };

  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1 className="text-5xl font-extrabold flex flex-col text-center my-5 text-yellow-800">
        Sama Budget
        <span className="text-sm font-medium ">Application de gestion</span>
      </h1>

      <div className="relative my-20 flex w-2/5 mx-auto flex-col rounded-xl bg-white bg-clip-border shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-purple-800 bg-clip-border text-white">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            AJOUTER REVENU
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
          <div className="relative h-12 w-full min-w-[200px]">
            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              placeholder=""
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent p-5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Titre
            </label>
          </div>
          <div className="relative h-12 my-5 w-full min-w-[200px]">
            <input
              type="number"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              placeholder=""
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent p-5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Montant
            </label>
          </div>
          <div className="p-6 pt-0">
            <button
              type="submit"
              className="block w-full select-none rounded-lg bg-purple-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:shadow-lg hover:shadow-purple-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              VALIDER
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};
