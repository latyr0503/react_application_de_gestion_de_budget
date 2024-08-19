import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TableRevenu = () => {
  const [donnees, setDonnees] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fonction pour récupérer les données
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/revenu");
        setDonnees(response.data);
      } catch (error) {
        setError("Erreur lors de la récupération des données");
        console.error("Erreur:", error);
      }
    };

    fetchData();
  }, []);

  // Fonction pour supprimer une dépense
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/revenu/${id}`);
      // Recharger les données après la suppression
      setDonnees(donnees.filter((donnee) => donnee.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      setError("Erreur lors de la suppression des données");
    }
  };
  return (
    <div className="">
      {error && <p>{error}</p>}
      <table className="border-collapse border w-full border-slate-200 my-10">
        <thead className="bg-yellow-800 text-white ">
          <tr>
            <th className="border border-slate-200 p-5 text-xl font-semibold">
              Titre
            </th>
            <th className="border border-slate-200 p-5 text-xl font-semibold">
              Montant
            </th>
            <th className="border border-slate-200 p-5 text-xl font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {donnees.map((row, index) => (
            <tr key={index}>
              <td className="border border-slate-200 p-3">{row.titre}</td>
              <td className="border border-slate-200 p-3">{row.montant}</td>
              <td className="border border-slate-200 text-center p-3">
                <button
                  className="inline-flex items-center px-4 py-2 bg-purple-800 transition ease-in-out delay-75 hover:bg-purple-900 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-100"
                  onClick={() => handleDelete(row.id)}
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/ajoutrevenu"}>
        <button className="rounded-lg relative w-64 h-10 cursor-pointer flex items-center border border-purple-800 bg-purple-800 group hover:bg-purple-800 active:bg-purple-800 active:border-purple-800">
          <span className=" text-white font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
            Ajouter un revenu
          </span>
          <span className="absolute right-0 h-full w-10 rounded-lg bg-purple-800 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
            <svg
              className="svg w-8 text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>
      </Link>
    </div>
  );
};
