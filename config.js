// Configuration sécurisée pour Fairy Lashes


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
    email: 'fairylashes97@gmail.com', 
    phone: '', 
    address: "Morne à l'eau, Guadeloupe" 
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

