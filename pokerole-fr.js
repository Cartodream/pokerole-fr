const TRANSLATIONS = {
  // Header
  'Rank': 'Rang',
  'Ability': 'Talent',
  'Item': 'Objet',
  // Onglets
  'Attributes': 'Attributs',
  'Inventory': 'Inventaire',
  'Moves': 'Attaques',
  'Effects': 'Effets',
  'Biography': 'Biographie',
  // Attributs tab
  'Training Points': 'Points d\'entraînement',
  'Retrain': 'Réentraîner',
  'Quick References': 'Références rapides',
  'Nature': 'Nature',
  // Effects tab
  'Status Conditions': 'États',
  'Custom Effects': 'Effets personnalisés',
  // Items tab
  'Quantity': 'Quantité',
  // Moves tab
  'Type/Category': 'Type/Catégorie',
  'Accuracy Pool': 'Dés de précision',
  'Damage Pool': 'Dés de dégâts',
  'Target': 'Cible',
  'Used Actions:': 'Actions utilisées :',
  'Increase': 'Augmenter',
  'Reset': 'Réinitialiser',
};

function translateSheet(html) {
  // Traduit les éléments texte simples (labels, boutons, headers)
  html.querySelectorAll('a.item[data-tab], h3, h4, label, button, .item-name div').forEach(el => {
    const text = el.childNodes;
    text.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const trimmed = node.textContent.trim();
        if (TRANSLATIONS[trimmed]) {
          node.textContent = node.textContent.replace(trimmed, TRANSLATIONS[trimmed]);
        }
      }
    });
  });

  // Traduit les placeholders
  html.querySelectorAll('input[placeholder]').forEach(el => {
    if (TRANSLATIONS[el.placeholder]) {
      el.placeholder = TRANSLATIONS[el.placeholder];
    }
  });
}

Hooks.once('setup', () => {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'pokerole-fr',
      lang: 'fr',
      dir: 'packs'
    });
  }
});

Hooks.on('renderActorSheet', (sheet, html) => {
  translateSheet(html instanceof HTMLElement ? html : html[0]);
});
