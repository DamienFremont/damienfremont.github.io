---
layout: dev/post
tags: design, method, object, quicktip
thumbnail: "/upload/20150113-screenshot015.jpg"
description: "Voici un tutoriel expliquant comment simplifier un modèle objet devenu trop complexe ou lourd à gérer..."
---


![ScreenShot016](/upload/20150113-screenshot015.jpg)

Voici un tutoriel expliquant comment simplifier un modèle objet devenu trop complexe ou lourd à gérer. Une méthode basique est appliquée, autour d’un objet classique : la **personne** et ses informations.

Méthode
=======

1.  Utiliser un modèle brut
    1.  Remettre à plat le modèle
    2.  Réaliser un exemple de données
2.  Gérer les relations uniques (1-1)
    1.  Identifier
    2.  Rapatrier ces données dans l’objet principale
3.  Gérer les relations multiples (1-N)
    1.  Identifier
    2.  Sortir ces données
4.  Utiliser des abstractions
5.  Gérer les excès de modélisation
    1.  Supprimer les abstractions inutiles
    2.  Limiter le nombre de niveaux de relation

Exemple : la personne
=====================

![ScreenShot003](/upload/20150113-screenshot003.png?w=147&h=150)

1\. Modèle de base
==================

Remettre à plat le modèle, sans abstractions, avec 1 seul niveau de relation.

[![ScreenShot001](/upload/20150113-screenshot001.jpg?w=314&h=333)](/upload/20150113-screenshot001.jpg)

Réaliser un exemple de données pour comprendre les relations dans le modèle.

[![ScreenShot002](/upload/20150113-screenshot002.jpg?w=324&h=275)](/upload/20150113-screenshot002.jpg)

2\. Gérer les relations uniques (1-1)
=====================================

Nom, prénom et date de naissance : identifiant unique d’une personne physique.

[![ScreenShot004](/upload/20150113-screenshot004.jpg?w=378&h=262)](/upload/20150113-screenshot004.jpg)

Rapatrier ces données dans l’objet principal

[![ScreenShot005](/upload/20150113-screenshot005.jpg?w=248&h=218)](/upload/20150113-screenshot005.jpg)

3\. Gérer les relations multiples (1-N)
=======================================

Sortir ces données de l’objet principal. Pour Facebook et Twitter : techniquement, il est possible d’avoir plusieurs comptes.

[![ScreenShot006](/upload/20150113-screenshot006.jpg?w=387&h=302)](/upload/20150113-screenshot006.jpg)

4\. Utiliser des abstractions
=============================

Chercher à faire des regroupements, Rester généraliste.

[![ScreenShot012](/upload/20150113-screenshot012.jpg?w=380&h=310)](/upload/20150113-screenshot012.jpg)

5\. Gérer les excès de modélisation
===================================

Supprimer les abstractions inutiles (les erreurs permettent d’avancer).

[![ScreenShot009](/upload/20150113-screenshot009.jpg?w=376&h=115)](/upload/20150113-screenshot009.jpg)

Exemple :

*   « Web » n’apporte pas de valeur
*   Seul les sites principaux nous intéressent (retour à une relation 1-1)
*   Facebook et Twitter ne seront pas utilisés comme contacts

[![ScreenShot010](/upload/20150113-screenshot010.jpg?w=235&h=238)](/upload/20150113-screenshot010.jpg)

Limiter le nombre de niveaux de relation.

[![ScreenShot011](/upload/20150113-screenshot011.jpg?w=375&h=224)](/upload/20150113-screenshot011.jpg)

Exemple : les sous-types « pro » et « perso » n’ont pas de particularité -> ils migrent vers un niveau plus haut

[![ScreenShot014](/upload/20150113-screenshot014.jpg?w=379&h=132)](/upload/20150113-screenshot014.jpg)

Exemple de modèle finalisé
==========================

[![ScreenShot015](/upload/20150113-screenshot015.jpg?w=660&h=258)](/upload/20150113-screenshot015.jpg)



