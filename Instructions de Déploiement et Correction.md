# Instructions de Déploiement et Correction

## Structure du Projet

```
checklist-intelligente/
├── src/                    # Code source React
├── dist/                   # Build de production
├── backend/               # Serveur Flask
│   ├── app.py            # Application Flask principale
│   └── generate_excel_gantt.py  # Génération Excel
├── package.json          # Dépendances Node.js
└── vite.config.js       # Configuration Vite
```

## Étapes de Correction des Téléchargements

### 1. Déploiement du Backend Flask

```bash
# Dans le répertoire backend/
pip install Flask Flask-Cors python-docx openpyxl pandas
python app.py
```

### 2. Configuration des URLs

Le frontend est configuré pour utiliser :
- Word : `https://5000-iwsy2kwkz7or7a6qxufdg-c7788efd.manusvm.computer/api/generate-word`
- Excel : `https://5000-iwsy2kwkz7or7a6qxufdg-c7788efd.manusvm.computer/api/generate-excel`

### 3. Test des Endpoints

```bash
# Test de l'endpoint Word
curl -X POST https://5000-iwsy2kwkz7or7a6qxufdg-c7788efd.manusvm.computer/api/generate-word \
  -H "Content-Type: application/json" \
  -d '{"projectName":"Test","mainObjective":"Test"}'

# Test de l'endpoint Excel  
curl -X POST https://5000-iwsy2kwkz7or7a6qxufdg-c7788efd.manusvm.computer/api/generate-excel \
  -H "Content-Type: application/json" \
  -d '{"projectName":"Test"}'
```

### 4. Déploiement Complet

```bash
# Build du frontend
cd checklist-intelligente/
npm run build

# Déploiement du frontend
# (Utiliser la commande de déploiement appropriée)

# Démarrage du backend
cd backend/
python app.py
```

## Fichiers Importants

### Backend Flask (`backend/app.py`)
- Endpoints pour génération Word et Excel
- Configuration CORS
- Gestion des erreurs

### Frontend React (`src/App.jsx`)
- Fonctions de téléchargement
- Configuration des URLs backend
- Nouveaux types de produits et méthodologies

### Scripts de Génération
- `generate_word_doc.py` : Génération documents Word
- `generate_excel_gantt.py` : Génération Excel avec Gantt

## Vérifications à Effectuer

1. **Backend accessible** : Vérifier que le serveur Flask répond
2. **CORS configuré** : S'assurer que les requêtes cross-origin sont autorisées
3. **Données complètes** : Vérifier que tous les champs requis sont remplis
4. **Format des données** : S'assurer que le format JSON est correct

## Dépendances Requises

### Backend Python
```
Flask==2.3.3
Flask-Cors==4.0.0
python-docx==0.8.11
openpyxl==3.1.2
pandas==2.0.3
```

### Frontend Node.js
```
react==18.2.0
vite==4.4.5
tailwindcss==3.3.0
```

## Logs et Débogage

### Côté Backend
- Ajouter des logs dans `app.py` pour tracer les requêtes
- Vérifier les erreurs dans la console Flask

### Côté Frontend
- Utiliser la console du navigateur pour voir les erreurs
- Ajouter des logs dans les fonctions de téléchargement

## Solution Alternative

Si le déploiement backend pose problème, implémenter une génération côté client :
- Utiliser des bibliothèques JavaScript pour générer Word/Excel
- Exemple : `docx` pour Word, `exceljs` pour Excel

