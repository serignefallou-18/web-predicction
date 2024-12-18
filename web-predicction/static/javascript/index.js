document.addEventListener("DOMContentLoaded", () => {
  const symptomsList = [
    { name: "back_pain", description: "Douleur au bas du dos" },
    { name: "constipation", description: "Difficulté à évacuer les selles" },
    {
      name: "abdominal_pain",
      description: "Douleur dans la région abdominale",
    },
    { name: "diarrhoea", description: "Selles liquides fréquentes" },
    { name: "mild_fever", description: "Fièvre légère" },
    { name: "yellow_urine", description: "Urine de couleur jaune foncé" },
    { name: "yellowing_of_eyes", description: "Jaunissement des yeux" },
    {
      name: "acute_liver_failure",
      description: "Insuffisance hépatique aiguë",
    },
    {
      name: "fluid_overload",
      description: "Accumulation excessive de liquide",
    },
    { name: "swelling_of_stomach", description: "Gonflement de l'abdomen" },
    {
      name: "swelled_lymph_nodes",
      description: "Ganglions lymphatiques enflés",
    },
    { name: "malaise", description: "Sensation de malaise général" },
    {
      name: "blurred_and_distorted_vision",
      description: "Vision floue et déformée",
    },
    { name: "phlegm", description: "Présence de mucus épais dans la gorge" },
    { name: "throat_irritation", description: "Irritation de la gorge" },
    { name: "redness_of_eyes", description: "Rougeur des yeux" },
    { name: "sinus_pressure", description: "Pression dans les sinus" },
    { name: "runny_nose", description: "Nez qui coule" },
    { name: "congestion", description: "Nez bouché" },
    { name: "chest_pain", description: "Douleur dans la poitrine" },
    { name: "weakness_in_limbs", description: "Faiblesse dans les membres" },
    { name: "fast_heart_rate", description: "Battements de cœur rapides" },
    {
      name: "pain_during_bowel_movements",
      description: "Douleur lors des selles",
    },
    {
      name: "pain_in_anal_region",
      description: "Douleur dans la région anale",
    },
    { name: "bloody_stool", description: "Présence de sang dans les selles" },
    { name: "irritation_in_anus", description: "Irritation de l'anus" },
    { name: "neck_pain", description: "Douleur au cou" },
    { name: "dizziness", description: "Vertiges" },
    { name: "cramps", description: "Crampes" },
    { name: "bruising", description: "Ecchymoses" },
    { name: "obesity", description: "Excès de poids corporel" },
    { name: "swollen_legs", description: "Jambes enflées" },
    { name: "swollen_blood_vessels", description: "Vaisseaux sanguins enflés" },
    { name: "puffy_face_and_eyes", description: "Visage et yeux gonflés" },
    { name: "enlarged_thyroid", description: "Thyroïde élargie" },
    { name: "brittle_nails", description: "Ongles fragiles" },
    { name: "swollen_extremeties", description: "Extrémités enflées" },
    { name: "excessive_hunger", description: "Faim excessive" },
    { name: "extra_marital_contacts", description: "Contacts extra-conjugaux" },
    {
      name: "drying_and_tingling_lips",
      description: "Sécheresse et picotement des lèvres",
    },
    { name: "slurred_speech", description: "Parole hésitante" },
    { name: "knee_pain", description: "Douleur au genou" },
    {
      name: "hip_joint_pain",
      description: "Douleur à l'articulation de la hanche",
    },
    { name: "muscle_weakness", description: "Faiblesse musculaire" },
    { name: "stiff_neck", description: "Raideur de la nuque" },
    { name: "swelling_joints", description: "Articulations enflées" },
    { name: "movement_stiffness", description: "Raideur des mouvements" },
    { name: "spinning_movements", description: "Sensation de rotation" },
    { name: "loss_of_balance", description: "Perte d'équilibre" },
    { name: "unsteadiness", description: "Instabilité" },
    {
      name: "weakness_of_one_body_side",
      description: "Faiblesse d'un côté du corps",
    },
    { name: "loss_of_smell", description: "Perte de l'odorat" },
    { name: "bladder_discomfort", description: "Inconfort de la vessie" },
    {
      name: "foul_smell_of_urine",
      description: "Odeur désagréable de l'urine",
    },
    {
      name: "continuous_feel_of_urine",
      description: "Sensation continue d'uriner",
    },
    { name: "passage_of_gases", description: "Émission de gaz" },
    { name: "internal_itching", description: "Démangeaison interne" },
    { name: "toxic_look_(typhos)", description: "Aspect toxique (typhos)" },
    { name: "depression", description: "Dépression" },
    { name: "irritability", description: "Irritabilité" },
    { name: "muscle_pain", description: "Douleur musculaire" },
    { name: "altered_sensorium", description: "Altération de la conscience" },
    { name: "red_spots_over_body", description: "Taches rouges sur le corps" },
    { name: "belly_pain", description: "Douleur au ventre" },
    { name: "abnormal_menstruation", description: "Menstruations anormales" },
    { name: "dischromic_patches", description: "Taches de peau décolorées" },
    { name: "watering_from_eyes", description: "Larmoiement" },
    { name: "increased_appetite", description: "Appétit accru" },
    { name: "polyuria", description: "Mictions fréquentes" },
    { name: "family_history", description: "Antécédents familiaux" },
    { name: "mucoid_sputum", description: "Expectorations mucoïdes" },
    { name: "rusty_sputum", description: "Expectorations rouillées" },
    { name: "lack_of_concentration", description: "Manque de concentration" },
    { name: "visual_disturbances", description: "Troubles visuels" },
    {
      name: "receiving_blood_transfusion",
      description: "Réception de transfusions sanguines",
    },
    {
      name: "receiving_unsterile_injections",
      description: "Réception d'injections non stériles",
    },
    { name: "coma", description: "Coma" },
    { name: "stomach_bleeding", description: "Saignement gastrique" },
  ];
  createSymptomCards(symptomsList);

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardId = card.getAttribute("data-id"); // Identifier la carte cliquée

      // Vérifier si la carte est déjà sélectionnée
      if (selectedCards.includes(cardId)) {
        // Si elle est sélectionnée, on la désélectionne
        selectedCards = selectedCards.filter((id) => id !== cardId);
        card.classList.remove("selected"); // Supprime le style "sélectionné"
      } else {
        // Si elle n'est pas sélectionnée et qu'il reste de la place
        if (selectedCards.length < MAX_SELECTION) {
          selectedCards.push(cardId);
          card.classList.add("selected"); // Ajoute le style "sélectionné"
        } else {
          // Message ou action lorsque la limite est atteinte
          alert(`Vous ne pouvez sélectionner que ${MAX_SELECTION} symptômes.`);
        }
      }

      // Afficher les cartes sélectionnées (optionnel, pour debug)
      console.log("Cartes sélectionnées:", selectedCards);
    });
  });

  let selectedCards = [];
  const MAX_SELECTION = 3;
  window.submitSymptoms = function () {
    if (selectedCards.length < 3) {
      alert("Veuillez sélectionner au moins trois symptôme.");
      return;
      }
      
      const predictionButton = document.querySelector(".prediction-button");
      const loader = document.querySelector("#loader");
      

      predictionButton.addEventListener("click", async () => {
    if (selectedCards.length > 0) {
      // Afficher le loader avant l'appel de l'API
      loader.style.display = "block";
      predictionButton.disabled = true; // Désactiver le bouton

      // Simuler l'attente de la réponse de l'API
      //const response = await fetchPrediction(selectedCards);
      
      // Cacher le loader et réactiver le bouton une fois la réponse reçue
      loader.style.display = "none";
      predictionButton.disabled = false;

      // Afficher les résultats de la prédiction
      showPrediction(response);
    }
  });


    const payload = { symptoms: selectedCards };
    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "predictionResult"
        ).innerText = `Maladie prédite : ${data.prediction}`;

        const modal = document.getElementById("predictionModal");
        modal.style.display = "block";
      })
      .catch((error) => {
        console.error("Erreur :", error);
        alert("Une erreur s'est produite lors de la prédiction.");
      });
  };

  // Fermer le modal
  document.querySelector(".close").addEventListener("click", function () {
    const modal = document.getElementById("predictionModal");
    modal.style.display = "none";
  });

  // Fermer le modal si l'utilisateur clique à l'extérieur du modal
  window.onclick = function (event) {
    const modal = document.getElementById("predictionModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

function createSymptomCards(symptomsList) {
    const cardContainer = document.getElementById("symptomCards");
    if (!cardContainer) {
      console.error("Le conteneur des cartes (symptomCards) est introuvable.");
      return;
    }
  symptomsList.forEach((symptom) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = symptom.name;

    const symptomName = document.createElement("h3");
    symptomName.innerText = symptom.name.replace(/_/g, " ").toUpperCase();

    const symptomDescription = document.createElement("p");
    symptomDescription.innerText = symptom.description;

    // Ajouter les éléments dans la carte
    card.appendChild(symptomName);
    card.appendChild(symptomDescription);

    // Ajouter la carte dans le conteneur
    cardContainer.appendChild(card);

    // Activer la sélection avec un "click"
      //card.addEventListener("click", () => toggleSelect(card, symptom.name));
      
      
  });
}


