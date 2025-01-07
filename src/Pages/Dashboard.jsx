import React from "react";
import { Card } from "../Components/Card";
import { TableDepense } from "../Components/TableDepense";
import { TableRevenu } from "../Components/TableRevenu";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const [depenses, setDepenses] = useState([]);
  const [revenus, setRevenus] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Récupérer les données des dépenses
    const fetchDepenses = async () => {
      try {
        const response = await axios.get("https://nestjs-application-de-gestion-de-budge.onrender.com/depense");
        setDepenses(response.data);
      } catch (error) {
        setError("Erreur lors de la récupération des dépenses");
        console.error("Erreur:", error);
      }
    };

    // Récupérer les données des revenus
    const fetchRevenus = async () => {
      try {
        const response = await axios.get("https://nestjs-application-de-gestion-de-budge.onrender.com/revenu");
        setRevenus(response.data);
      } catch (error) {
        setError("Erreur lors de la récupération des revenus");
        console.error("Erreur:", error);
      }
    };

    fetchDepenses();
    fetchRevenus();
  }, []);

  // Calculer les montants pour les cartes
  const totalDepenses = depenses.reduce(
    (acc, depense) => acc + depense.montant,
    0
  );
  const totalRevenus = revenus.reduce((acc, revenu) => acc + revenu.montant, 0);
  const epargne = totalRevenus - totalDepenses;

  const cardData = [
    { montant: totalRevenus, titre: "Budget" },
    { montant: totalDepenses, titre: "Dépenses" },
    { montant: epargne, titre: "Solde" },
  ];

  return (
    <div className="m-10 container w-4/5 mx-auto">
      {error && <p>{error}</p>}
      <h1 className="text-5xl  font-extrabold   flex flex-col text-center my-5 text-yellow-800">
        Sama Budget{" "}
        <span className="text-sm font-medium">Application de gestion</span>{" "}
      </h1>
      <div className="flex justify-between my-5">
        {cardData.map((data, index) => (
          <Card key={index} montant={data.montant} titre={data.titre} />
        ))}
      </div>
      <h2 className="text-yellow-800 text-3xl font-extrabold my-5">
        Liste des depenses
      </h2>
      <TableDepense />
      <h2 className="text-yellow-800 text-3xl font-extrabold my-5">
        Liste des revenues
      </h2>
      <TableRevenu />
    </div>
  );
};

export default Dashboard;
