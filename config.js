// Configuration sécurisée pour Fairy Lashes
// ⚠️ NE JAMAIS exposer de tokens d'API dans ce fichier côté client

const CONFIG = {
  // URL de votre calendrier Calendly (sécurisé)
  CALENDLY_URL: 'https://calendly.com/haliarobed/fairy-lashes',
  
  // Configuration du widget Calendly
  CALENDLY_WIDGET: {
    minWidth: '320px',
    height: '630px',
    width: '80%',
    frameHeight: '530'
  },
  
  // Informations de contact
  CONTACT: {
    email: 'contact@fairy-lashes.fr', // À remplacer par votre vrai email
    phone: '+33 1 23 45 67 89', // À remplacer par votre vrai téléphone
    address: 'Votre adresse ici' // À remplacer par votre vraie adresse
  },
  
  // Réseaux sociaux
  SOCIAL: {
    instagram: 'https://www.instagram.com/fairy_lashes._/'
  }
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

