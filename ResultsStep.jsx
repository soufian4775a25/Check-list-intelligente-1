import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Download, FileText, LayoutDashboard } from 'lucide-react'
import { motion } from 'framer-motion'

const ResultsStep = ({ formData, generateSpecifications }) => {
  const generateWordDoc = async () => {
    try {
      // Pour l'instant, nous allons simuler la génération et le téléchargement.
      // Dans une application réelle, cela impliquerait un appel API à un backend
      // qui exécuterait le script Python et renverrait le fichier.
      alert("Génération du cahier des charges Word en cours... (Fonctionnalité à implémenter côté backend)")
      // Simuler le téléchargement d'un fichier
      const dummyContent = `Cahier des Charges pour ${formData.projectName}\n\n` +
                           `Nom du projet: ${formData.projectName}\n` +
                           `Objectif principal: ${formData.mainObjective}\n` +
                           `Type de produit: ${formData.productType}\n\n` +
                           `Signatures:\n\n` +
                           `_________________________\nSignature Client\n\n` +
                           `_________________________\nSignature Entreprise\n`
      
      const blob = new Blob([dummyContent], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'cahier_des_charges.txt' // Temporairement en .txt pour la démo
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

    } catch (error) {
      console.error("Erreur lors de la génération du document Word:", error)
      alert("Une erreur est survenue lors de la génération du document Word.")
    }
  }

  const generateExcelGantt = async () => {
    try {
      // Simuler la génération et le téléchargement d'un fichier Excel
      alert("Génération du plan d'action Excel avec Gantt en cours... (Fonctionnalité à implémenter côté backend)")
      const dummyContent = `Plan d'Action pour ${formData.projectName}\n\n` +
                           `Phase 1: Initialisation\n` +
                           `- Tâche 1\n` +
                           `- Tâche 2\n` +
                           `Phase 2: Conception\n` +
                           `- Tâche 3\n`
      
      const blob = new Blob([dummyContent], { type: 'text/csv' }) // Temporairement en .csv
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'plan_action.csv'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

    } catch (error) {
      console.error("Erreur lors de la génération du diagramme de Gantt Excel:", error)
      alert("Une erreur est survenue lors de la génération du diagramme de Gantt Excel.")
    }
  }

  const renderSpecificationContent = () => {
    const spec = generateSpecifications() // Cette fonction est passée via props depuis App.jsx
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4"># CAHIER DES CHARGES - {formData.projectName}</h2>
        <pre className="whitespace-pre-wrap font-sans text-sm bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-inner overflow-auto max-h-[500px]">
          {spec}
        </pre>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6"
        >
          <Button 
            onClick={generateWordDoc} 
            className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" /> Télécharger le Cahier des Charges (Word)
          </Button>
        </motion.div>
      </motion.div>
    )
  }

  const renderActionPlanContent = () => {
    const actionPlan = `
# PLAN D'ACTION - ${formData.projectName}

## PHASE 1: INITIALISATION DU PROJET

### Tâches:
- [ ] Validation finale du cahier des charges avec toutes les parties prenantes
- [ ] Constitution de l'équipe projet
- [ ] Mise en place des outils de gestion de projet (Jira, Trello, Asana)
- [ ] Planification détaillée des sprints/phases
- [ ] Définition des processus de communication

## PHASE 2: CONCEPTION ET DESIGN

### Tâches:
- [ ] Définition de l'architecture technique
- [ ] Conception de la base de données
- [ ] Validation des designs avec les parties prenantes
- [ ] Création des wireframes et maquettes UX/UI

## PHASE 3: DÉVELOPPEMENT MVP

### Tâches:
- [ ] Développement des fonctionnalités essentielles (MVP)
- [ ] Intégration des APIs et services tiers
- [ ] Implémentation des mesures de sécurité

## PHASE 4: TESTS ET QUALITÉ

### Tâches:
- [ ] Tests unitaires et d'intégration
- [ ] Tests fonctionnels et d'acceptation utilisateur (UAT)
- [ ] Correction des bugs et optimisation des performances

## PHASE 5: DÉPLOIEMENT ET LANCEMENT

### Tâches:
- [ ] Préparation de l'environnement de production
- [ ] Déploiement de l'application
- [ ] Campagne de communication et marketing
- [ ] Formation des utilisateurs

## PHASE 6: SUIVI POST-LANCEMENT

### Tâches:
- [ ] Monitoring des performances et de l'utilisation
- [ ] Collecte de feedback utilisateur
- [ ] Mises à jour et maintenance continue

## ROADMAP FUTURE

### Tâches:
- [ ] Implémentation des fonctionnalités futures
- [ ] Optimisation basée sur les données et le feedback
- [ ] Expansion des marchés cibles
    `
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4"># PLAN D'ACTION - {formData.projectName}</h2>
        <pre className="whitespace-pre-wrap font-sans text-sm bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-inner overflow-auto max-h-[500px]">
          {actionPlan}
        </pre>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6"
        >
          <Button 
            onClick={generateExcelGantt} 
            className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" /> Télécharger le Plan d'Action (Excel avec Gantt)
          </Button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl shadow-inner border border-yellow-200"
      >
        <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
        <h3 className="text-3xl font-bold text-gray-800 mb-2">Félicitations !</h3>
        <p className="text-lg text-gray-600">
          Votre checklist est complétée. Vous pouvez maintenant générer votre cahier des charges et votre plan d'action.
        </p>
      </motion.div>

      <Tabs defaultValue="specifications" className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-xl shadow-md">
            <TabsTrigger 
              value="specifications" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 py-2 text-base font-semibold"
            >
              <FileText className="mr-2 h-4 w-4" /> Cahier des Charges
            </TabsTrigger>
            <TabsTrigger 
              value="action-plan" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 py-2 text-base font-semibold"
            >
              <LayoutDashboard className="mr-2 h-4 w-4" /> Plan d'Action
            </TabsTrigger>
          </TabsList>
        </motion.div>

        <TabsContent value="specifications" className="mt-6">
          {renderSpecificationContent()}
        </TabsContent>
        <TabsContent value="action-plan" className="mt-6">
          {renderActionPlanContent()}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ResultsStep

