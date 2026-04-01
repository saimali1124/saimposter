// Game mode configurations - generic structure for future modes
export const gameModes = {
  specialRoles: {
    id: 'specialRoles',
    name: 'Special Roles',
    description: 'Play with Imposter and Bodyguard',
    minPlayers: 4,
    roles: {
      civilian: {
        name: 'Civilian',
        description: 'You know the secret word. Blend in and find the Imposter!',
        hasWord: true,
      },
      imposter: {
        name: 'Imposter',
        description: 'You don\'t know the word. Blend in and avoid suspicion!',
        hasWord: false,
      },
      bodyguard: {
        name: 'The Bodyguard',
        description: 'You know the word AND who the Imposter is. Help the Imposter win by casting suspicion on others!',
        hasWord: true,
      },
    },
    roleDistribution: (playerCount) => {
      // Calculate role distribution based on player count
      const roles = [];
      
      if (playerCount >= 4) {
        // Always have at least 1 imposter
        roles.push('imposter');
        
        // Add special roles for larger groups
        if (playerCount >= 6) {
          roles.push('bodyguard');
        }
        // Fill rest with civilians
        while (roles.length < playerCount) {
          roles.push('civilian');
        }
      }
      
      return roles;
    },
  },
  // Future game modes can be added here
};

// Word lists for the game
export const wordLists = {
  easy: [
    { word: 'Beach', imposters: ['Mountain', 'Forest', 'Desert'] },
    { word: 'Pizza', imposters: ['Burger', 'Taco', 'Sushi'] },
    { word: 'Doctor', imposters: ['Teacher', 'Lawyer', 'Engineer'] },
    { word: 'Summer', imposters: ['Winter', 'Spring', 'Fall'] },
    { word: 'Guitar', imposters: ['Piano', 'Drums', 'Violin'] },
    { word: 'Cat', imposters: ['Dog', 'Bird', 'Fish'] },
    { word: 'Car', imposters: ['Truck', 'Bus', 'Motorcycle'] },
    { word: 'School', imposters: ['Office', 'Hospital', 'Store'] },
    { word: 'Apple', imposters: ['Orange', 'Banana', 'Grape'] },
    { word: 'Book', imposters: ['Magazine', 'Newspaper', 'Comic'] },
    { word: 'Phone', imposters: ['Tablet', 'Computer', 'TV'] },
    { word: 'Coffee', imposters: ['Tea', 'Juice', 'Soda'] },
    { word: 'Movie', imposters: ['TV Show', 'Play', 'Concert'] },
    { word: 'Park', imposters: ['Garden', 'Playground', 'Field'] },
    { word: 'Hotel', imposters: ['Motel', 'Hostel', 'Resort'] },
    { word: 'Restaurant', imposters: ['Cafe', 'Diner', 'Bistro'] },
    { word: 'Ocean', imposters: ['Lake', 'River', 'Sea'] },
    { word: 'Tree', imposters: ['Bush', 'Flower', 'Grass'] },
    { word: 'Bird', imposters: ['Plane', 'Kite', 'Drone'] },
    { word: 'Chair', imposters: ['Sofa', 'Stool', 'Bench'] },
    { word: 'Window', imposters: ['Door', 'Wall', 'Roof'] },
    { word: 'Shoe', imposters: ['Boot', 'Sandal', 'Sneaker'] },
    { word: 'Table', imposters: ['Desk', 'Counter', 'Shelf'] },
    { word: 'Bed', imposters: ['Couch', 'Mattress', 'Pillow'] },
    { word: 'Water', imposters: ['Juice', 'Milk', 'Soda'] },
    { word: 'Sun', imposters: ['Moon', 'Star', 'Planet'] },
    { word: 'Rain', imposters: ['Snow', 'Hail', 'Storm'] },
    { word: 'Fire', imposters: ['Flame', 'Spark', 'Ember'] },
    { word: 'Ice', imposters: ['Snow', 'Frost', 'Hail'] },
    { word: 'Cloud', imposters: ['Sky', 'Fog', 'Mist'] },
    { word: 'Star', imposters: ['Planet', 'Moon', 'Sun'] },
    { word: 'Flower', imposters: ['Plant', 'Tree', 'Bush'] },
    { word: 'Mountain', imposters: ['Hill', 'Valley', 'Peak'] },
    { word: 'River', imposters: ['Stream', 'Creek', 'Brook'] },
    { word: 'House', imposters: ['Home', 'Building', 'Cottage'] },
    { word: 'Door', imposters: ['Gate', 'Entrance', 'Exit'] },
    { word: 'Key', imposters: ['Lock', 'Handle', 'Button'] },
    { word: 'Clock', imposters: ['Watch', 'Timer', 'Hourglass'] },
    { word: 'Lamp', imposters: ['Light', 'Bulb', 'Torch'] },
  ],
  medium: [
    { word: 'Library', imposters: ['Bookstore', 'Museum', 'Theater'] },
    { word: 'Chef', imposters: ['Waiter', 'Bartender', 'Manager'] },
    { word: 'Airplane', imposters: ['Train', 'Bus', 'Ship'] },
    { word: 'Hospital', imposters: ['Clinic', 'Pharmacy', 'Lab'] },
    { word: 'Concert', imposters: ['Festival', 'Party', 'Show'] },
    { word: 'University', imposters: ['College', 'Academy', 'Institute'] },
    { word: 'Detective', imposters: ['Police', 'Security', 'Guard'] },
    { word: 'Subway', imposters: ['Metro', 'Train', 'Tram'] },
    { word: 'Pharmacy', imposters: ['Drugstore', 'Clinic', 'Hospital'] },
    { word: 'Theater', imposters: ['Cinema', 'Opera', 'Stadium'] },
    { word: 'Museum', imposters: ['Gallery', 'Exhibition', 'Archive'] },
    { word: 'Stadium', imposters: ['Arena', 'Field', 'Court'] },
    { word: 'Airport', imposters: ['Station', 'Port', 'Terminal'] },
    { word: 'Bank', imposters: ['ATM', 'Credit Union', 'Vault'] },
    { word: 'Church', imposters: ['Temple', 'Mosque', 'Synagogue'] },
    { word: 'Market', imposters: ['Store', 'Shop', 'Bazaar'] },
    { word: 'Gym', imposters: ['Studio', 'Fitness Center', 'Club'] },
    { word: 'Beach', imposters: ['Shore', 'Coast', 'Seaside'] },
    { word: 'Restaurant', imposters: ['Cafe', 'Bistro', 'Diner'] },
    { word: 'School', imposters: ['Academy', 'Institute', 'College'] },
    { word: 'Office', imposters: ['Workspace', 'Studio', 'Desk'] },
    { word: 'Store', imposters: ['Shop', 'Market', 'Boutique'] },
    { word: 'Park', imposters: ['Garden', 'Square', 'Plaza'] },
    { word: 'Bridge', imposters: ['Tunnel', 'Overpass', 'Walkway'] },
    { word: 'Tower', imposters: ['Building', 'Skyscraper', 'Spire'] },
    { word: 'Fountain', imposters: ['Statue', 'Monument', 'Sculpture'] },
    { word: 'Cemetery', imposters: ['Graveyard', 'Memorial', 'Mausoleum'] },
    { word: 'Factory', imposters: ['Warehouse', 'Plant', 'Mill'] },
    { word: 'Prison', imposters: ['Jail', 'Cell', 'Dungeon'] },
    { word: 'Casino', imposters: ['Arcade', 'Club', 'Lounge'] },
    { word: 'Spa', imposters: ['Salon', 'Clinic', 'Resort'] },
    { word: 'Gallery', imposters: ['Museum', 'Exhibition', 'Showroom'] },
    { word: 'Courthouse', imposters: ['Court', 'Trial', 'Judgment'] },
    { word: 'Post Office', imposters: ['Mailbox', 'Delivery', 'Package'] },
    { word: 'Fire Station', imposters: ['Police Station', 'Garage', 'Depot'] },
    { word: 'Police Station', imposters: ['Jail', 'Precinct', 'Headquarters'] },
    { word: 'Train Station', imposters: ['Terminal', 'Platform', 'Depot'] },
    { word: 'Bus Station', imposters: ['Terminal', 'Stop', 'Depot'] },
    { word: 'Gas Station', imposters: ['Garage', 'Shop', 'Store'] },
  ],
  hard: [
    { word: 'Archaeologist', imposters: ['Historian', 'Geologist', 'Anthropologist'] },
    { word: 'Observatory', imposters: ['Planetarium', 'Laboratory', 'Museum'] },
    { word: 'Symphony', imposters: ['Orchestra', 'Quartet', 'Choir'] },
    { word: 'Bakery', imposters: ['Cafe', 'Restaurant', 'Deli'] },
    { word: 'Lighthouse', imposters: ['Tower', 'Beacon', 'Monument'] },
    { word: 'Neurologist', imposters: ['Psychiatrist', 'Cardiologist', 'Dermatologist'] },
    { word: 'Aquarium', imposters: ['Zoo', 'Museum', 'Exhibition'] },
    { word: 'Cathedral', imposters: ['Basilica', 'Monastery', 'Abbey'] },
    { word: 'Laboratory', imposters: ['Clinic', 'Research Center', 'Facility'] },
    { word: 'Amphitheater', imposters: ['Stadium', 'Arena', 'Coliseum'] },
    { word: 'Conservatory', imposters: ['Greenhouse', 'Orangery', 'Nursery'] },
    { word: 'Monastery', imposters: ['Convent', 'Abbey', 'Hermitage'] },
    { word: 'Mausoleum', imposters: ['Tomb', 'Crypt', 'Memorial'] },
    { word: 'Planetarium', imposters: ['Observatory', 'Dome', 'Theater'] },
    { word: 'Archive', imposters: ['Library', 'Repository', 'Collection'] },
    { word: 'Atrium', imposters: ['Lobby', 'Foyer', 'Hall'] },
    { word: 'Basilica', imposters: ['Cathedral', 'Church', 'Sanctuary'] },
    { word: 'Pantheon', imposters: ['Temple', 'Shrine', 'Monument'] },
    { word: 'Meteorologist', imposters: ['Climatologist', 'Geologist', 'Astronomer'] },
    { word: 'Botanist', imposters: ['Biologist', 'Ecologist', 'Horticulturist'] },
    { word: 'Linguist', imposters: ['Translator', 'Philologist', 'Etymologist'] },
    { word: 'Astrophysicist', imposters: ['Astronomer', 'Cosmologist', 'Physicist'] },
    { word: 'Cryptographer', imposters: ['Codebreaker', 'Analyst', 'Decryptor'] },
    { word: 'Paleontologist', imposters: ['Archaeologist', 'Geologist', 'Anthropologist'] },
    { word: 'Ornithologist', imposters: ['Zoologist', 'Biologist', 'Naturalist'] },
    { word: 'Epidemiologist', imposters: ['Pathologist', 'Immunologist', 'Virologist'] },
    { word: 'Cartographer', imposters: ['Surveyor', 'Geographer', 'Topographer'] },
    { word: 'Ethnographer', imposters: ['Anthropologist', 'Sociologist', 'Researcher'] },
    { word: 'Numismatist', imposters: ['Collector', 'Historian', 'Curator'] },
    { word: 'Herpetologist', imposters: ['Zoologist', 'Biologist', 'Naturalist'] },
    { word: 'Ichthyologist', imposters: ['Marine Biologist', 'Zoologist', 'Aquarist'] },
    { word: 'Entomologist', imposters: ['Zoologist', 'Biologist', 'Naturalist'] },
    { word: 'Mycologist', imposters: ['Botanist', 'Biologist', 'Researcher'] },
    { word: 'Mineralogist', imposters: ['Geologist', 'Crystallographer', 'Petrologist'] },
    { word: 'Seismologist', imposters: ['Geologist', 'Geophysicist', 'Volcanologist'] },
    { word: 'Glaciologist', imposters: ['Climatologist', 'Geologist', 'Hydrologist'] },
    { word: 'Speleologist', imposters: ['Geologist', 'Explorer', 'Researcher'] },
    { word: 'Volcanologist', imposters: ['Geologist', 'Seismologist', 'Geophysicist'] },
    { word: 'Hydrologist', imposters: ['Geologist', 'Oceanographer', 'Meteorologist'] },
    { word: 'Crystallographer', imposters: ['Mineralogist', 'Geologist', 'Physicist'] },
  ],
};

// Challenge modifiers — public roles shown to everyone after secret roles are assigned
export const challengeModifiers = [
  {
    id: 'timer',
    name: 'Timer',
    description: 'You can only speak for 15 seconds per turn.',
    emoji: '⏱️',
  },
  {
    id: 'poet',
    name: 'Poet',
    description: 'Every clue you give must rhyme with your previous one.',
    emoji: '📝',
  },
  {
    id: 'mime',
    name: 'Mime',
    description: 'You cannot speak. Use gestures and expressions only.',
    emoji: '🤫',
  },
  {
    id: 'angry',
    name: 'Angry Person',
    description: 'You must stay angry and aggressive during the entire game.',
    emoji: '😡',
  },
  {
    id: 'whisperer',
    name: 'Whisperer',
    description: 'You must speak in a whisper the entire game.',
    emoji: '🤐',
  },
  {
    id: 'ghostVote',
    name: 'Ghost Voter',
    description: 'Your vote is not counted when the group votes someone out. You still discuss and vote as normal.',
    emoji: '👻',
  },
  {
    id: 'gosaas',
    name: 'Gosaas Lover',
    description: 'Before every line you speak, you must say out loud: I love gosaas',
    emoji: '💚',
  },
];

// Each challenge is assigned at most once. If more players than challenges, extras get no challenge.
export const assignChallenges = (playerCount) => {
  const shuffled = [...challengeModifiers].sort(() => Math.random() - 0.5);
  return Array.from({ length: playerCount }, (_, i) => shuffled[i] || null);
};

// Get random word pair
export const getRandomWord = (difficulty = 'easy') => {
  const list = wordLists[difficulty] || wordLists.easy;
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

