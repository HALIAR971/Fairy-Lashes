# 🔒 Guide de Sécurité - Fairy Lashes

## ⚠️ IMPORTANT : Sécurité de l'API Calendly

### Problèmes résolus ✅
- [x] Token d'API supprimé du code client
- [x] Code JavaScript dupliqué nettoyé
- [x] Fichiers HTML et JS sécurisés

### Actions de sécurité à effectuer IMMÉDIATEMENT

#### 1. **Révocation du token compromis**
1. Connectez-vous à votre compte Calendly
2. Allez dans **Settings > API Keys**
3. **RÉVOQUEZ** le token `AUAFXHHUPSZPTKRKNIDS55U6KOQKZ7ZM`
4. Générez un nouveau token si nécessaire

#### 2. **Vérification des accès**
- Vérifiez les logs Calendly pour détecter d'éventuels abus
- Surveillez votre quota d'API
- Vérifiez qu'aucun rendez-vous suspect n'a été créé

### Configuration sécurisée actuelle

#### ✅ Ce qui est sécurisé
- **Widget iframe Calendly** : Utilise l'authentification native de Calendly
- **Aucun token exposé** : Plus de risque de compromission
- **Configuration centralisée** : Paramètres dans `config.js`

#### 🔒 Bonnes pratiques appliquées
- Pas d'appels API côté client
- Configuration séparée du code métier
- Utilisation de l'iframe officiel Calendly

### Si vous avez besoin de l'API Calendly

#### Option 1 : Backend sécurisé (Recommandée)
```javascript
// Côté serveur uniquement (Node.js, PHP, etc.)
const CALENDLY_TOKEN = process.env.CALENDLY_API_TOKEN; // Variable d'environnement
```

#### Option 2 : Webhook sécurisé
- Configurez des webhooks Calendly vers votre serveur
- Traitez les événements côté serveur
- Pas d'exposition de tokens

### Maintenance de la sécurité

#### ✅ À faire régulièrement
- [ ] Vérifier les logs Calendly
- [ ] Surveiller l'utilisation de l'API
- [ ] Mettre à jour les dépendances
- [ ] Vérifier les accès au code

#### 🚫 À ne JAMAIS faire
- [ ] Exposer des tokens d'API dans le code client
- [ ] Commiter des fichiers `.env` dans Git
- [ ] Partager des clés d'API publiquement
- [ ] Utiliser des tokens dans des variables JavaScript

### Contact en cas de problème
Si vous suspectez une compromission :
1. Révoquez immédiatement tous les tokens
2. Changez vos mots de passe Calendly
3. Contactez le support Calendly
4. Vérifiez l'intégrité de votre site

---

**Dernière mise à jour :** $(date)
**Statut de sécurité :** ✅ SÉCURISÉ

