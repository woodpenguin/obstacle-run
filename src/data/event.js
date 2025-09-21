// src/data/event.js
export const event = {
  name: 'Obstacle Run LA',
  city: 'Los Angeles, CA',
  dates: ['September 20, 2025', 'September 21, 2025'],
  venue: {
    name: 'Castaic Lake State Recreation Area',
    address: '32132 Castaic Lake Dr, Castaic, CA 91384',
    parking: { price: 20, note: 'cash' },
    openingHours: [
      '7:45 AM – Festival Opens',
      '8:30 AM – First wave',
      'Sat last wave 2:29 PM, Sun last wave 1:29 PM',
      '4:00 PM – Festival Closes',
    ],
  },
  waves: ['8:30', '9:00', '9:30', '10:00', '10:30', '11:00'],
  perks: [
    { title: 'Medal', icon: '/assets/medal.svg' },
    { title: 'Bib', icon: '/assets/bib.svg' },
    { title: 'Headband', icon: '/assets/headband.svg' },
    { title: 'Bag Drop', icon: '/assets/bag.svg' },
  ],
  registerUrl: '/register', // or external link
};
