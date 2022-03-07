BEGIN;

DROP TABLE IF EXISTS "utilisateur", "meuble";

CREATE TABLE IF NOT EXISTS "utilisateur"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "mail" TEXT NOT NULL,
    "password" TEXT NOT NULL, 
    "pseudo" TEXT NOT NULL, 
    "statut" TEXT NOT NULL DEFAULT 'acheteur'
    -- on donnera le statut d'admin à la propriétaire à la création, tous les autres seront juste acheteurs 
);
CREATE TABLE IF NOT EXISTS "meuble"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "photo" TEXT NOT NULL DEFAULT 'public\placeholder.jpeg',
    "type" TEXT NOT NULL,
    "couleur" TEXT NOT NULL,
    "matiere" TEXT NOT NULL,
    "largeur" INT,
    "longueur" INT,
    "hauteur" INT,
    "prix" INT NOT NULL,
    "statut" TEXT NOT NULL DEFAULT 'disponible'
);

COMMIT;