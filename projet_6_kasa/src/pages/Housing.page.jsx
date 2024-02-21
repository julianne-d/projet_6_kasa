import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header.component';
import DropDownCard from '../components/DropDownCard.component';
import data from '../housing.json';

export default function Housing() {
    // Création du state pour stocker les données de l'annonce (tableau vide par défaut)
    const [housingData, setHousingData] = useState({})

    // Récupération de l'id de l'annonce depuis l'URL (voir fichier App.js pour le paramètre de l'URL ( /housing/:id ))
    const { id } = useParams()

    // Récupération de la fonction navigate pour pouvoir rediriger l'utilisateur sur une autre page
    const navigate = useNavigate()

    // Utilisation de useEffect pour récupérer les données de l'annonce
    useEffect(() => {
        // Si l'id n'est pas renseigné ou est vide, on redirige l'utilisateur sur la page 404
        if (!id || id.length <= 0) {
            navigate('/404', { replace: true });
        }

        // Fonction asynchrone qui permet de récupérer les données de l'annonce depuis les données statiques
        // (dans un useEffect, c'est la seule façon de faire une fonction asynchrone)
        const findHouseData = async () => {
            // Récupération de l'annonce depuis les données statiques
            const houseData = await data.find((house) => house.id === id);

            // Si aucune annonce n'est trouvée, on redirige l'utilisateur sur la page 404
            if (!houseData || houseData.length <= 0) {
                navigate('/404', { replace: true });
            }

            // Si l'annonce est trouvée grâce à l'id renseigné dans l'URL, on stocke les données dans le state
            setHousingData(houseData);
        }

        // Appel de la fonction de récupération des données de l'annonce
        findHouseData()

        // Aucune dépendance pour useEffect, donc le hook ne sera exécuté qu'une seule fois

        // eslint-disable-next-line
    }, [])

    if (Object.keys(housingData).length <= 0) return null;

    return (
        <>
            <Helmet>
                <title>A propos</title>
            </Helmet>

            <Header />
            <div>
                <p>{housingData.title}</p>
                <DropDownCard text='Description' />
                <DropDownCard text='Équipement' />
            </div>
        </>
    )
}