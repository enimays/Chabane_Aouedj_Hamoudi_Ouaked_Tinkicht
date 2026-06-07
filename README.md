<div align="center">

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║    ░█████╗░██╗███╗░░██╗███████╗░█████╗░██████╗░░█████╗░     ║
║    ██╔══██╗██║████╗░██║██╔════╝██╔══██╗██╔══██╗██╔══██╗     ║
║    ██║░░╚═╝██║██╔██╗██║█████╗░░██║░░██║██████╔╝███████║     ║
║    ██║░░██╗██║██║╚████║██╔══╝░░██║░░██║██╔══██╗██╔══██║     ║
║    ╚█████╔╝██║██║░╚███║███████╗╚█████╔╝██║░░██║██║░░██║     ║
║    ░╚════╝░╚═╝╚═╝░░╚══╝╚══════╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝     ║
║                                                              ║
║          🎟️  Réservez. Regardez. Vivez le cinéma.  🎟️        ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

# 🎬 CineOra

### *Votre cinéma, à portée de clic.*

[![Site en ligne](https://img.shields.io/badge/🌐_Site_en_ligne-CineOra-b5651d?style=for-the-badge)](https://enimays.github.io/Chabane_Aouedj_Hamoudi_Ouaked_Tinkicht/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://validator.w3.org/nu/?doc=https://enimays.github.io/Chabane_Aouedj_Hamoudi_Ouaked_Tinkicht/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://github.com/enimays/Chabane_Aouedj_Hamoudi_Ouaked_Tinkicht)
[![W3C Validé](https://img.shields.io/badge/W3C-Validé-005A9C?style=for-the-badge&logo=w3c&logoColor=white)](https://validator.w3.org/nu/?doc=https://enimays.github.io/Chabane_Aouedj_Hamoudi_Ouaked_Tinkicht/)

<br/>

> Une plateforme web élégante de réservation de tickets de cinéma — parcourez les films, choisissez votre séance et réservez vos places en quelques clics.

<br/>

---

</div>

## 📖 Présentation du Projet

**CineOra** est une application web entièrement front-end de réservation de cinéma, réalisée dans le cadre du module *Développement d'Applications Web* à l'**Université Mouloud Mammeri de Tizi-Ouzou (UMMTO)**, Faculté de Génie Électrique et Informatique — Année universitaire **2025/2026**.

L'application permet aux utilisateurs de consulter les films à l'affiche, de filtrer par catégorie, de choisir une séance, de sélectionner le type et la quantité de tickets, et d'obtenir le montant total — le tout directement dans le navigateur.

<br/>

---

## ✨ Fonctionnalités

### 🎥 Films
- Affichage dynamique des films à l'affiche
- Consultation des informations détaillées de chaque film
- Filtrage par catégorie

### 👤 Authentification
- Inscription et connexion utilisateur
- Validation des formulaires avec gestion des erreurs
- Gestion de session via `localStorage`

### 🎫 Réservation
- Choix de la **date**, de l'**heure** et de la **salle**
- Type de ticket : `Normal` · `Étudiant` · `Enfant`
- Sélection de la quantité — le total se met à jour en temps réel

### 💳 Paiement
- Calcul automatique du montant en **Dinars Algériens (DA)**
- Récapitulatif de la réservation avant confirmation

### 📱 Design Responsive
- Optimisé pour **ordinateur**, **tablette** et **mobile**

<br/>

---

## 🗂️ Structure du Projet

```
CineOra/
│
├── index.html           # 🏠 Accueil — liste des films & intro
├── signup.html          # 📝 Page d'inscription
├── essa.html            # 🔐 Page de connexion
├── reservation.html     # 🎟️ Interface de réservation et paiement
│
├── content/             # Contenu des pages & templates
├── image/               # Affiches de films & ressources visuelles
├── javascript/          # Logique applicative & manipulation du DOM
└── style/               # Feuilles de style CSS
```

<br/>

---

## 🚀 Démarrage

### Option 1 — En local

```bash
# Cloner le dépôt
git clone https://github.com/enimays/Chabane_Aouedj_Hamoudi_Ouaked_Tinkicht.git

# Ouvrir l'application
cd Chabane_Aouedj_Hamoudi_Ouaked_Tinkicht
open index.html   # macOS
# ou double-cliquer sur index.html sous Windows/Linux
```

> Aucun outil de build, aucune dépendance — fonctionne directement dans le navigateur.

### Option 2 — Site en ligne

👉 [https://enimays.github.io/Chabane_Aouedj_Hamoudi_Ouaked_Tinkicht/](https://enimays.github.io/Chabane_Aouedj_Hamoudi_Ouaked_Tinkicht/)

<br/>

---

## 🎯 Guide d'Utilisation

| Étape | Action |
|-------|--------|
| 1️⃣ | Ouvrir l'application — une vidéo d'intro et un écran d'accueil s'affichent |
| 2️⃣ | Parcourir le catalogue de films et filtrer par catégorie |
| 3️⃣ | Cliquer sur **"Buy"** pour le film souhaité |
| 4️⃣ | Sélectionner une **date**, une **heure** et une **salle** → Continuer |
| 5️⃣ | Choisir le **type de ticket** et la **quantité** |
| 6️⃣ | Vérifier le montant total en **DA** et confirmer le paiement 🎉 |

<br/>

---

## 🛠️ Technologies Utilisées

| Technologie | Rôle |
|-------------|------|
| **HTML5** | Structure et sémantique des pages |
| **CSS3** | Mise en forme, animations et design responsive |
| **JavaScript Vanilla** | Manipulation du DOM, logique et interactivité |
| **API localStorage** | Persistance des données et gestion de session côté client |

> Aucun framework, aucune bibliothèque externe — les fondamentaux du web, à l'état pur.

<br/>

---

## 👥 Membres du Groupe

| Nom | Prénom | Groupe |
|-----|--------|--------|
| Aouedj | Titem | 2 |
| Chabane | Yasmine | 2 |
| Hamoudi | Lynda | 5 |
| Ouaked | Romaissa | 5 |
| Tinkicht | Ryma | 5 |

<br/>

---

## 📚 Objectifs Pédagogiques

À travers ce projet, nous avons mis en pratique :

- La création d'interfaces web interactives en HTML/CSS/JS
- La manipulation du DOM et le rendu dynamique de contenu
- La validation des formulaires côté client
- Les principes du design responsive
- L'utilisation de `localStorage` pour la gestion d'état et de session
- L'organisation d'un projet web multi-pages

<br/>

---

<div align="center">

```
        .======================.
        | .-----------------. ||
        | |  NOW  SCREENING | ||
        | |   C I N E O R A | ||
        | '-----------------' ||
        |_____________________|/
       /|  _   _   _   _   _  |
      / | |_| |_| |_| |_| |_| |
     /  |_____________________|
    /       | | | | | | |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  🍿                               🍿
```

Réalisé avec ❤️ par l'équipe CineOra · UMMTO 2025/2026

*Département d'Informatique — Faculté de Génie Électrique et Informatique*

</div>
