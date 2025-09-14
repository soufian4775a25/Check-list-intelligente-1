import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { CheckCircle, FileText, Settings, Rocket, BarChart3, Users, Target, Lightbulb, Download, Sparkles, Zap, Star, TrendingUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [completedFields, setCompletedFields] = useState(new Set())
  const [showConfetti, setShowConfetti] = useState(false)
  const [formData, setFormData] = useState({
    // Phase 1: Découverte et Stratégie
    projectName: '',
    mainObjective: '',
    smartGoals: [],
    longTermVision: '',
    targetAudience: '',
    userProblems: '',
    userStories: [],
    personas: '',
    competitors: '',
    competitorStrengths: '',
    competitorWeaknesses: '',
    uniqueValue: '',
    marketTrends: '',
    stakeholders: [],
    communicationPlan: '',
    
    // Phase 2: Conception et Fonctionnalités
    productType: '',
    mvpFeatures: [],
    futureFeatures: [],
    uxRequirements: '',
    wireframesNeeded: false,
    brandGuidelines: '',
    performanceRequirements: '',
    securityRequirements: '',
    compatibilityRequirements: '',
    integrations: [],
    maintenanceRequirements: '',
    localizationNeeds: '',
    
    // Phase 3: Planification et Exécution
    methodology: '',
    sprintFrequency: '',
    trackingTools: '',
    humanResources: [],
    budget: '',
    timeline: '',
    risks: [],
    mitigationStrategies: [],
    
    // Phase 4: Lancement et Post-Lancement
    launchStrategy: '',
    launchDate: '',
    betaTesting: false,
    supportChannels: [],
    maintenancePlan: '',
    successMetrics: [],
    iterationProcess: ''
  })

  const steps = [
    { 
      id: 0, 
      title: 'Découverte & Stratégie', 
      icon: Target, 
      description: 'Définir les objectifs et analyser le marché',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    { 
      id: 1, 
      title: 'Conception & Fonctionnalités', 
      icon: Lightbulb, 
      description: 'Spécifier les fonctionnalités et exigences',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    { 
      id: 2, 
      title: 'Planification & Exécution', 
      icon: Settings, 
      description: 'Organiser les ressources et la méthodologie',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    { 
      id: 3, 
      title: 'Lancement & Suivi', 
      icon: Rocket, 
      description: 'Préparer le lancement et le suivi post-lancement',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    { 
      id: 4, 
      title: 'Résultats', 
      icon: Star, 
      description: 'Générer le cahier des charges et le plan d\'action',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-amber-50'
    }
  ]

  const productTypes = [
    'Site Web Vitrine',
    'Site E-commerce',
    'Application Web (SaaS)',
    'Application Mobile (iOS/Android)',
    'Application Desktop',
    'API/Service Web',
    'Plateforme/Marketplace',
    'Système de Gestion (CRM/ERP)',
    'IA',
    'Workflow',
    'Agent IA',
    'Traitement des données',
    'Analyses des données',
    'Génération multimédia',
    'Maintenance',
    'Montage',
    'Formation technique',
    'Formation spécifique',
    'Conception',
    'Support',
    'Assistanat',
    'Autre'
  ]

  const methodologies = [
    'Agile/Scrum',
    'Kanban',
    'Waterfall',
    'Scrumban (Hybride)',
    'PRINCE2',
    'Lean',
    'Notion',
    'Gantt',
    'À définir avec l\'équipe'
  ]

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Marquer le champ comme complété s'il a une valeur
    if (value && value !== '') {
      setCompletedFields(prev => new Set([...prev, field]))
    } else {
      setCompletedFields(prev => {
        const newSet = new Set(prev)
        newSet.delete(field)
        return newSet
      })
    }
  }

  const addToArray = (field, value) => {
    if (value.trim()) {
      setFormData(prev => ({
        ...prev,
        [field]: [...prev[field], value.trim()]
      }))
      setCompletedFields(prev => new Set([...prev, field]))
    }
  }

  const removeFromArray = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
        setIsAnimating(false)
      }, 300)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep(currentStep - 1)
        setIsAnimating(false)
      }, 300)
    }
  }

  const goToStep = (stepIndex) => {
    if (stepIndex !== currentStep) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep(stepIndex)
        setIsAnimating(false)
      }, 300)
    }
  }

  const generateWordDoc = async () => {
    try {
      const response = await fetch("https://5000-iwsy2kwkz7or7a6qxufdg-c7788efd.manusvm.computer/api/generate-word", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "cahier_des_charges.docx"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 5000)
      } else {
        alert("Erreur lors de la génération du cahier des charges Word.")
      }
    } catch (error) {
      console.error("Erreur lors de la génération du document Word:", error)
      alert("Une erreur est survenue lors de la génération du document Word.")
    }
  }

  const generateExcelGantt = async () => {
    try {
      const response = await fetch("https://5000-iwsy2kwkz7or7a6qxufdg-c7788efd.manusvm.computer/api/generate-excel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "plan_action_gantt.xlsx"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 5000)
      } else {
        alert("Erreur lors de la génération du plan d'action Excel.")
      }
    } catch (error) {
      console.error("Erreur lors de la génération du diagramme de Gantt Excel:", error)
      alert("Une erreur est survenue lors de la génération du diagramme de Gantt Excel.")
    }
  }

  const generateSpecifications = () => {
    // Cette fonction générera le cahier des charges basé sur les données collectées
    console.log('Génération du cahier des charges...', formData)
    // Ici, nous pourrions appeler une API ou générer un document
  }

  const calculateProgress = () => {
    const totalFields = Object.keys(formData).length
    const filledFields = Object.values(formData).filter(value => {
      if (Array.isArray(value)) return value.length > 0
      if (typeof value === 'boolean') return true
      return value !== ''
    }).length
    return Math.round((filledFields / totalFields) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 p-4">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Checklist Intelligente
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-600 mb-6 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Solutions Digitales - Cahier des Charges Automatisé
          </motion.p>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Progress 
              value={calculateProgress()} 
              className="w-full max-w-md mx-auto h-3 bg-white/50 backdrop-blur-sm shadow-inner" 
            />
            <motion.div
              className="absolute -top-1 left-0 w-full flex justify-center"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                {calculateProgress()}% complété
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Steps Navigation */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex space-x-6 overflow-x-auto pb-2 px-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === index
              const isCompleted = currentStep > index
              
              return (
                <motion.div
                  key={step.id}
                  className={`flex flex-col items-center min-w-0 cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-110' : 'hover:scale-105'
                  }`}
                  onClick={() => goToStep(index)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-br ${step.color} text-white shadow-xl`
                        : isCompleted
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg'
                        : 'bg-white/80 backdrop-blur-sm text-gray-400 hover:bg-white'
                    }`}
                    animate={isActive ? { 
                      boxShadow: ["0 10px 25px rgba(0,0,0,0.1)", "0 20px 40px rgba(0,0,0,0.2)", "0 10px 25px rgba(0,0,0,0.1)"]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <CheckCircle className="w-8 h-8" />
                      </motion.div>
                    ) : (
                      <Icon className="w-8 h-8" />
                    )}
                  </motion.div>
                  <span className={`text-sm font-semibold text-center max-w-24 leading-tight ${
                    isActive ? 'text-gray-900' : isCompleted ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Card className={`shadow-2xl border-0 ${steps[currentStep].bgColor} backdrop-blur-sm`}>
              <CardHeader className="pb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <motion.div
                      className={`p-2 bg-gradient-to-br ${steps[currentStep].color} rounded-xl text-white shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {React.createElement(steps[currentStep].icon, { className: "w-6 h-6" })}
                    </motion.div>
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {steps[currentStep].title}
                    </span>
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 mt-2">
                    {steps[currentStep].description}
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Step Content will be rendered here based on currentStep */}
                  {currentStep === 0 && (
                    <DiscoveryStep 
                      formData={formData} 
                      updateFormData={updateFormData}
                      addToArray={addToArray}
                      removeFromArray={removeFromArray}
                    />
                  )}
                  {currentStep === 1 && (
                    <DesignStep 
                      formData={formData} 
                      updateFormData={updateFormData}
                      addToArray={addToArray}
                      removeFromArray={removeFromArray}
                      productTypes={productTypes}
                    />
                  )}
                  {currentStep === 2 && (
                    <PlanningStep 
                      formData={formData} 
                      updateFormData={updateFormData}
                      addToArray={addToArray}
                      removeFromArray={removeFromArray}
                      methodologies={methodologies}
                    />
                  )}
                  {currentStep === 3 && (
                    <LaunchStep 
                      formData={formData} 
                      updateFormData={updateFormData}
                      addToArray={addToArray}
                      removeFromArray={removeFromArray}
                    />
                  )}
                  {currentStep === 4 && (
                    <ResultsStep 
                      formData={formData}
                      generateSpecifications={generateSpecifications}
                      generateWordDoc={generateWordDoc}
                      generateExcelGantt={generateExcelGantt}
                    />
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Navigation Buttons */}
        <motion.div 
          className="flex justify-between mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={currentStep === 0}
              className="px-8 py-3 text-lg font-semibold bg-white/80 backdrop-blur-sm border-2 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              Précédent
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={nextStep} 
              disabled={currentStep === steps.length - 1}
              className={`px-8 py-3 text-lg font-semibold bg-gradient-to-r ${steps[currentStep].color} hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-300`}
            >
              {currentStep === steps.length - 1 ? 'Terminé' : 'Suivant'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Component for Discovery Step
function DiscoveryStep({ formData, updateFormData, addToArray, removeFromArray }) {
  const [newGoal, setNewGoal] = useState('')
  const [newStory, setNewStory] = useState('')
  const [newStakeholder, setNewStakeholder] = useState('')

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="projectName">Nom du projet *</Label>
            <Input
              id="projectName"
              value={formData.projectName}
              onChange={(e) => updateFormData('projectName', e.target.value)}
              placeholder="Ex: Plateforme e-learning"
            />
          </div>
          
          <div>
            <Label htmlFor="mainObjective">Objectif principal *</Label>
            <Textarea
              id="mainObjective"
              value={formData.mainObjective}
              onChange={(e) => updateFormData('mainObjective', e.target.value)}
              placeholder="Ex: Créer une plateforme pour faciliter l'apprentissage en ligne"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="longTermVision">Vision à long terme</Label>
            <Textarea
              id="longTermVision"
              value={formData.longTermVision}
              onChange={(e) => updateFormData('longTermVision', e.target.value)}
              placeholder="Ex: Devenir la référence en formation digitale en France"
              rows={3}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="targetAudience">Public cible *</Label>
            <Textarea
              id="targetAudience"
              value={formData.targetAudience}
              onChange={(e) => updateFormData('targetAudience', e.target.value)}
              placeholder="Ex: Professionnels de 25-45 ans cherchant à se former"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="userProblems">Problèmes utilisateurs à résoudre *</Label>
            <Textarea
              id="userProblems"
              value={formData.userProblems}
              onChange={(e) => updateFormData('userProblems', e.target.value)}
              placeholder="Ex: Manque de temps, formations trop chères, contenu pas adapté"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="uniqueValue">Proposition de valeur unique *</Label>
            <Textarea
              id="uniqueValue"
              value={formData.uniqueValue}
              onChange={(e) => updateFormData('uniqueValue', e.target.value)}
              placeholder="Ex: Formations courtes, pratiques et certifiantes"
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Dynamic Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Objectifs SMART</Label>
          <div className="flex gap-2 mb-2">
            <Input
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder="Ex: Atteindre 1000 utilisateurs en 6 mois"
            />
            <Button 
              onClick={() => {
                addToArray('smartGoals', newGoal)
                setNewGoal('')
              }}
              size="sm"
            >
              Ajouter
            </Button>
          </div>
          <div className="space-y-1">
            {formData.smartGoals.map((goal, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                <span className="text-sm">{goal}</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => removeFromArray('smartGoals', index)}
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label>Parties prenantes</Label>
          <div className="flex gap-2 mb-2">
            <Input
              value={newStakeholder}
              onChange={(e) => setNewStakeholder(e.target.value)}
              placeholder="Ex: Directeur Marketing - Validation du contenu"
            />
            <Button 
              onClick={() => {
                addToArray('stakeholders', newStakeholder)
                setNewStakeholder('')
              }}
              size="sm"
            >
              Ajouter
            </Button>
          </div>
          <div className="space-y-1">
            {formData.stakeholders.map((stakeholder, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                <span className="text-sm">{stakeholder}</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => removeFromArray('stakeholders', index)}
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Component for Design Step
function DesignStep({ formData, updateFormData, addToArray, removeFromArray, productTypes }) {
  const [newFeature, setNewFeature] = useState('')
  const [newFutureFeature, setNewFutureFeature] = useState('')
  const [newIntegration, setNewIntegration] = useState('')

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="productType">Type de produit digital *</Label>
            <Select value={formData.productType} onValueChange={(value) => updateFormData('productType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le type de produit" />
              </SelectTrigger>
              <SelectContent>
                {productTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="uxRequirements">Exigences UX/UI</Label>
            <Textarea
              id="uxRequirements"
              value={formData.uxRequirements}
              onChange={(e) => updateFormData('uxRequirements', e.target.value)}
              placeholder="Ex: Interface intuitive, accessible, responsive"
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="wireframesNeeded"
              checked={formData.wireframesNeeded}
              onCheckedChange={(checked) => updateFormData('wireframesNeeded', checked)}
            />
            <Label htmlFor="wireframesNeeded">Wireframes/Maquettes nécessaires</Label>
          </div>

          <div>
            <Label htmlFor="brandGuidelines">Charte graphique/Marque</Label>
            <Textarea
              id="brandGuidelines"
              value={formData.brandGuidelines}
              onChange={(e) => updateFormData('brandGuidelines', e.target.value)}
              placeholder="Ex: Couleurs corporate, logo existant, style moderne"
              rows={3}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="performanceRequirements">Exigences de performance</Label>
            <Textarea
              id="performanceRequirements"
              value={formData.performanceRequirements}
              onChange={(e) => updateFormData('performanceRequirements', e.target.value)}
              placeholder="Ex: Temps de chargement < 3s, support 1000 utilisateurs simultanés"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="securityRequirements">Exigences de sécurité</Label>
            <Textarea
              id="securityRequirements"
              value={formData.securityRequirements}
              onChange={(e) => updateFormData('securityRequirements', e.target.value)}
              placeholder="Ex: Authentification 2FA, chiffrement des données, RGPD"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="compatibilityRequirements">Compatibilité</Label>
            <Textarea
              id="compatibilityRequirements"
              value={formData.compatibilityRequirements}
              onChange={(e) => updateFormData('compatibilityRequirements', e.target.value)}
              placeholder="Ex: Chrome, Firefox, Safari, iOS, Android"
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Dynamic Feature Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Fonctionnalités MVP (essentielles) *</Label>
          <div className="flex gap-2 mb-2">
            <Input
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              placeholder="Ex: Inscription/Connexion utilisateur"
            />
            <Button 
              onClick={() => {
                addToArray('mvpFeatures', newFeature)
                setNewFeature('')
              }}
              size="sm"
            >
              Ajouter
            </Button>
          </div>
          <div className="space-y-1">
            {formData.mvpFeatures.map((feature, index) => (
              <div key={index} className="flex justify-between items-center bg-blue-50 p-2 rounded">
                <span className="text-sm">{feature}</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => removeFromArray('mvpFeatures', index)}
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label>Fonctionnalités futures</Label>
          <div className="flex gap-2 mb-2">
            <Input
              value={newFutureFeature}
              onChange={(e) => setNewFutureFeature(e.target.value)}
              placeholder="Ex: Système de recommandations IA"
            />
            <Button 
              onClick={() => {
                addToArray('futureFeatures', newFutureFeature)
                setNewFutureFeature('')
              }}
              size="sm"
            >
              Ajouter
            </Button>
          </div>
          <div className="space-y-1">
            {formData.futureFeatures.map((feature, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                <span className="text-sm">{feature}</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => removeFromArray('futureFeatures', index)}
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Label>Intégrations nécessaires</Label>
        <div className="flex gap-2 mb-2">
          <Input
            value={newIntegration}
            onChange={(e) => setNewIntegration(e.target.value)}
            placeholder="Ex: API de paiement Stripe, CRM Salesforce"
          />
          <Button 
            onClick={() => {
              addToArray('integrations', newIntegration)
              setNewIntegration('')
            }}
            size="sm"
          >
            Ajouter
          </Button>
        </div>
        <div className="space-y-1">
          {formData.integrations.map((integration, index) => (
            <div key={index} className="flex justify-between items-center bg-green-50 p-2 rounded">
              <span className="text-sm">{integration}</span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => removeFromArray('integrations', index)}
              >
                ×
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Component for Planning Step
function PlanningStep({ formData, updateFormData, addToArray, removeFromArray, methodologies }) {
  const [newResource, setNewResource] = useState('')
  const [newRisk, setNewRisk] = useState('')

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="methodology">Méthodologie de projet *</Label>
            <Select value={formData.methodology} onValueChange={(value) => updateFormData('methodology', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez une méthodologie" />
              </SelectTrigger>
              <SelectContent>
                {methodologies.map((method) => (
                  <SelectItem key={method} value={method}>{method}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="budget">Budget estimé</Label>
            <Input
              id="budget"
              value={formData.budget}
              onChange={(e) => updateFormData('budget', e.target.value)}
              placeholder="Ex: 50 000€ - 80 000€"
            />
          </div>

          <div>
            <Label htmlFor="timeline">Délai souhaité</Label>
            <Input
              id="timeline"
              value={formData.timeline}
              onChange={(e) => updateFormData('timeline', e.target.value)}
              placeholder="Ex: 6 mois, livraison en mars 2024"
            />
          </div>

          <div>
            <Label htmlFor="trackingTools">Outils de suivi préférés</Label>
            <Input
              id="trackingTools"
              value={formData.trackingTools}
              onChange={(e) => updateFormData('trackingTools', e.target.value)}
              placeholder="Ex: Jira, Trello, Asana, Monday"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label>Ressources humaines nécessaires</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newResource}
                onChange={(e) => setNewResource(e.target.value)}
                placeholder="Ex: 2 Développeurs Full-Stack, 1 Designer UX/UI"
              />
              <Button 
                onClick={() => {
                  addToArray('humanResources', newResource)
                  setNewResource('')
                }}
                size="sm"
              >
                Ajouter
              </Button>
            </div>
            <div className="space-y-1">
              {formData.humanResources.map((resource, index) => (
                <div key={index} className="flex justify-between items-center bg-purple-50 p-2 rounded">
                  <span className="text-sm">{resource}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => removeFromArray('humanResources', index)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Risques identifiés</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newRisk}
                onChange={(e) => setNewRisk(e.target.value)}
                placeholder="Ex: Retard dans les intégrations API tierces"
              />
              <Button 
                onClick={() => {
                  addToArray('risks', newRisk)
                  setNewRisk('')
                }}
                size="sm"
              >
                Ajouter
              </Button>
            </div>
            <div className="space-y-1">
              {formData.risks.map((risk, index) => (
                <div key={index} className="flex justify-between items-center bg-red-50 p-2 rounded">
                  <span className="text-sm">{risk}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => removeFromArray('risks', index)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Conditional fields based on methodology */}
      {formData.methodology === 'Agile/Scrum' && (
        <div>
          <Label htmlFor="sprintFrequency">Fréquence des sprints</Label>
          <Select value={formData.sprintFrequency} onValueChange={(value) => updateFormData('sprintFrequency', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez la durée des sprints" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1week">1 semaine</SelectItem>
              <SelectItem value="2weeks">2 semaines</SelectItem>
              <SelectItem value="3weeks">3 semaines</SelectItem>
              <SelectItem value="4weeks">4 semaines</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  )
}

// Component for Launch Step
function LaunchStep({ formData, updateFormData, addToArray, removeFromArray }) {
  const [newSupportChannel, setNewSupportChannel] = useState('')
  const [newMetric, setNewMetric] = useState('')

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="launchStrategy">Stratégie de lancement</Label>
            <Textarea
              id="launchStrategy"
              value={formData.launchStrategy}
              onChange={(e) => updateFormData('launchStrategy', e.target.value)}
              placeholder="Ex: Lancement progressif, campagne marketing, partenariats"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="launchDate">Date de lancement souhaitée</Label>
            <Input
              id="launchDate"
              type="date"
              value={formData.launchDate}
              onChange={(e) => updateFormData('launchDate', e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="betaTesting"
              checked={formData.betaTesting}
              onCheckedChange={(checked) => updateFormData('betaTesting', checked)}
            />
            <Label htmlFor="betaTesting">Phase de test bêta nécessaire</Label>
          </div>

          <div>
            <Label htmlFor="maintenancePlan">Plan de maintenance</Label>
            <Textarea
              id="maintenancePlan"
              value={formData.maintenancePlan}
              onChange={(e) => updateFormData('maintenancePlan', e.target.value)}
              placeholder="Ex: Mises à jour mensuelles, support 24/7, monitoring"
              rows={3}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label>Canaux de support</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newSupportChannel}
                onChange={(e) => setNewSupportChannel(e.target.value)}
                placeholder="Ex: Email, Chat en ligne, Téléphone"
              />
              <Button 
                onClick={() => {
                  addToArray('supportChannels', newSupportChannel)
                  setNewSupportChannel('')
                }}
                size="sm"
              >
                Ajouter
              </Button>
            </div>
            <div className="space-y-1">
              {formData.supportChannels.map((channel, index) => (
                <div key={index} className="flex justify-between items-center bg-blue-50 p-2 rounded">
                  <span className="text-sm">{channel}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => removeFromArray('supportChannels', index)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Métriques de succès (KPIs)</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newMetric}
                onChange={(e) => setNewMetric(e.target.value)}
                placeholder="Ex: 1000 utilisateurs actifs/mois, taux de conversion 5%"
              />
              <Button 
                onClick={() => {
                  addToArray('successMetrics', newMetric)
                  setNewMetric('')
                }}
                size="sm"
              >
                Ajouter
              </Button>
            </div>
            <div className="space-y-1">
              {formData.successMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center bg-green-50 p-2 rounded">
                  <span className="text-sm">{metric}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => removeFromArray('successMetrics', index)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="iterationProcess">Processus d'amélioration continue</Label>
            <Textarea
              id="iterationProcess"
              value={formData.iterationProcess}
              onChange={(e) => updateFormData('iterationProcess', e.target.value)}
              placeholder="Ex: Feedback utilisateur mensuel, A/B testing, roadmap trimestrielle"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Component for Results Step
function ResultsStep({ formData, generateSpecifications }) {
  const [activeTab, setActiveTab] = useState('specifications')

  const generateSpecificationDocument = () => {
    let doc = `# CAHIER DES CHARGES - ${formData.projectName}\n\n`
    
    doc += `## 1. PRÉSENTATION DU PROJET\n\n`
    doc += `**Nom du projet :** ${formData.projectName}\n`
    doc += `**Objectif principal :** ${formData.mainObjective}\n`
    doc += `**Type de produit :** ${formData.productType}\n`
    doc += `**Vision à long terme :** ${formData.longTermVision}\n\n`
    
    doc += `## 2. ANALYSE DU MARCHÉ ET UTILISATEURS\n\n`
    doc += `**Public cible :** ${formData.targetAudience}\n`
    doc += `**Problèmes à résoudre :** ${formData.userProblems}\n`
    doc += `**Proposition de valeur unique :** ${formData.uniqueValue}\n\n`
    
    if (formData.smartGoals.length > 0) {
      doc += `**Objectifs SMART :**\n`
      formData.smartGoals.forEach((goal, index) => {
        doc += `${index + 1}. ${goal}\n`
      })
      doc += `\n`
    }
    
    doc += `## 3. SPÉCIFICATIONS FONCTIONNELLES\n\n`
    if (formData.mvpFeatures.length > 0) {
      doc += `**Fonctionnalités MVP (essentielles) :**\n`
      formData.mvpFeatures.forEach((feature, index) => {
        doc += `${index + 1}. ${feature}\n`
      })
      doc += `\n`
    }
    
    if (formData.futureFeatures.length > 0) {
      doc += `**Fonctionnalités futures :**\n`
      formData.futureFeatures.forEach((feature, index) => {
        doc += `${index + 1}. ${feature}\n`
      })
      doc += `\n`
    }
    
    doc += `## 4. SPÉCIFICATIONS TECHNIQUES\n\n`
    doc += `**Exigences de performance :** ${formData.performanceRequirements}\n`
    doc += `**Exigences de sécurité :** ${formData.securityRequirements}\n`
    doc += `**Compatibilité :** ${formData.compatibilityRequirements}\n\n`
    
    if (formData.integrations.length > 0) {
      doc += `**Intégrations nécessaires :**\n`
      formData.integrations.forEach((integration, index) => {
        doc += `${index + 1}. ${integration}\n`
      })
      doc += `\n`
    }
    
    doc += `## 5. GESTION DE PROJET\n\n`
    doc += `**Méthodologie :** ${formData.methodology}\n`
    doc += `**Budget estimé :** ${formData.budget}\n`
    doc += `**Délai :** ${formData.timeline}\n`
    doc += `**Outils de suivi :** ${formData.trackingTools}\n\n`
    
    if (formData.humanResources.length > 0) {
      doc += `**Ressources humaines :**\n`
      formData.humanResources.forEach((resource, index) => {
        doc += `${index + 1}. ${resource}\n`
      })
      doc += `\n`
    }
    
    if (formData.risks.length > 0) {
      doc += `**Risques identifiés :**\n`
      formData.risks.forEach((risk, index) => {
        doc += `${index + 1}. ${risk}\n`
      })
      doc += `\n`
    }
    
    doc += `## 6. LANCEMENT ET SUIVI\n\n`
    doc += `**Stratégie de lancement :** ${formData.launchStrategy}\n`
    doc += `**Date de lancement :** ${formData.launchDate}\n`
    doc += `**Test bêta :** ${formData.betaTesting ? 'Oui' : 'Non'}\n`
    doc += `**Plan de maintenance :** ${formData.maintenancePlan}\n\n`
    
    if (formData.successMetrics.length > 0) {
      doc += `**Métriques de succès :**\n`
      formData.successMetrics.forEach((metric, index) => {
        doc += `${index + 1}. ${metric}\n`
      })
      doc += `\n`
    }
    
    return doc
  }

  const generateActionPlan = () => {
    let plan = `# PLAN D'ACTION - ${formData.projectName}\n\n`
    
    plan += `## PHASE 1: INITIALISATION DU PROJET\n\n`
    plan += `### Tâches:\n`
    plan += `- [ ] Validation finale du cahier des charges avec toutes les parties prenantes\n`
    plan += `- [ ] Constitution de l'équipe projet\n`
    plan += `- [ ] Mise en place des outils de gestion de projet (${formData.trackingTools})\n`
    plan += `- [ ] Planification détaillée des sprints/phases\n`
    plan += `- [ ] Définition des processus de communication\n\n`
    
    plan += `## PHASE 2: CONCEPTION ET DESIGN\n\n`
    plan += `### Tâches:\n`
    if (formData.wireframesNeeded) {
      plan += `- [ ] Création des wireframes et maquettes\n`
    }
    plan += `- [ ] Définition de l'architecture technique\n`
    plan += `- [ ] Conception de la base de données\n`
    plan += `- [ ] Validation des designs avec les parties prenantes\n`
    plan += `- [ ] Préparation de l'environnement de développement\n\n`
    
    plan += `## PHASE 3: DÉVELOPPEMENT MVP\n\n`
    plan += `### Fonctionnalités à développer:\n`
    formData.mvpFeatures.forEach((feature, index) => {
      plan += `- [ ] ${feature}\n`
    })
    plan += `\n### Tâches techniques:\n`
    plan += `- [ ] Configuration de l'infrastructure\n`
    plan += `- [ ] Développement des fonctionnalités core\n`
    plan += `- [ ] Tests unitaires et d'intégration\n`
    plan += `- [ ] Revues de code\n\n`
    
    if (formData.integrations.length > 0) {
      plan += `## PHASE 4: INTÉGRATIONS\n\n`
      plan += `### Intégrations à réaliser:\n`
      formData.integrations.forEach((integration, index) => {
        plan += `- [ ] ${integration}\n`
      })
      plan += `\n`
    }
    
    plan += `## PHASE 5: TESTS ET QUALITÉ\n\n`
    plan += `### Tâches:\n`
    plan += `- [ ] Tests fonctionnels complets\n`
    plan += `- [ ] Tests de performance\n`
    plan += `- [ ] Tests de sécurité\n`
    plan += `- [ ] Tests d'accessibilité\n`
    plan += `- [ ] Tests sur différents navigateurs/appareils\n`
    if (formData.betaTesting) {
      plan += `- [ ] Mise en place du programme bêta\n`
      plan += `- [ ] Collecte et analyse du feedback bêta\n`
    }
    plan += `\n`
    
    plan += `## PHASE 6: DÉPLOIEMENT ET LANCEMENT\n\n`
    plan += `### Tâches:\n`
    plan += `- [ ] Préparation de l'environnement de production\n`
    plan += `- [ ] Déploiement de l'application\n`
    plan += `- [ ] Configuration du monitoring\n`
    plan += `- [ ] Formation des équipes support\n`
    plan += `- [ ] Exécution de la stratégie de lancement\n`
    plan += `- [ ] Communication et marketing\n\n`
    
    plan += `## PHASE 7: SUIVI POST-LANCEMENT\n\n`
    plan += `### Tâches:\n`
    plan += `- [ ] Monitoring des performances\n`
    plan += `- [ ] Collecte du feedback utilisateur\n`
    plan += `- [ ] Analyse des métriques de succès\n`
    plan += `- [ ] Corrections de bugs critiques\n`
    plan += `- [ ] Planification des améliorations\n\n`
    
    if (formData.futureFeatures.length > 0) {
      plan += `## ROADMAP FUTURE\n\n`
      plan += `### Fonctionnalités à développer:\n`
      formData.futureFeatures.forEach((feature, index) => {
        plan += `- [ ] ${feature}\n`
      })
      plan += `\n`
    }
    
    return plan
  }

  const downloadDocument = (content, filename) => {
    const element = document.createElement('a')
    const file = new Blob([content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = filename
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-600 mb-2">
          🎉 Félicitations !
        </h3>
        <p className="text-gray-600">
          Votre checklist est complète. Vous pouvez maintenant générer votre cahier des charges et votre plan d'action.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="specifications">Cahier des Charges</TabsTrigger>
          <TabsTrigger value="actionplan">Plan d'Action</TabsTrigger>
        </TabsList>
        
        <TabsContent value="specifications" className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Aperçu du Cahier des Charges</h4>
            <pre className="text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">
              {generateSpecificationDocument()}
            </pre>
          </div>
          <Button 
            onClick={() => downloadDocument(generateSpecificationDocument(), `cahier-des-charges-${formData.projectName}.txt`)}
            className="w-full"
          >
            <FileText className="w-4 h-4 mr-2" />
            Télécharger le Cahier des Charges
          </Button>
        </TabsContent>
        
        <TabsContent value="actionplan" className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Aperçu du Plan d'Action</h4>
            <pre className="text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">
              {generateActionPlan()}
            </pre>
          </div>
          <Button 
            onClick={() => downloadDocument(generateActionPlan(), `plan-action-${formData.projectName}.txt`)}
            className="w-full"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Télécharger le Plan d'Action
          </Button>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Résumé du Projet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div><strong>Nom:</strong> {formData.projectName}</div>
              <div><strong>Type:</strong> {formData.productType}</div>
              <div><strong>Méthodologie:</strong> {formData.methodology}</div>
              <div><strong>Budget:</strong> {formData.budget}</div>
              <div><strong>Délai:</strong> {formData.timeline}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Statistiques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div><strong>Fonctionnalités MVP:</strong> {formData.mvpFeatures.length}</div>
              <div><strong>Fonctionnalités futures:</strong> {formData.futureFeatures.length}</div>
              <div><strong>Intégrations:</strong> {formData.integrations.length}</div>
              <div><strong>Parties prenantes:</strong> {formData.stakeholders.length}</div>
              <div><strong>Risques identifiés:</strong> {formData.risks.length}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App

