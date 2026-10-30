import { Car, SiteSettings } from '@/types';

export const SITE_SETTINGS: SiteSettings = {
  businessName: 'Brozcars',
  businessCategory: 'Self Drive Car Rentals',
  phone: '+91 7086100215',
  email: 'Brozcarassam@gmail.com',
  location: 'Khanapara, Guwahati, Assam',
  addressFull: 'Khanapara (Near GS Road / Beltola Bypass), Guwahati, Assam 781022',
  whatsappNumber: '917086100215',
  openingHours: '7:00 AM – 11:00 PM (All 7 Days)',
  announcementText: '⭐ Khanapara, Guwahati’s Premier Self-Drive Fleet | Sanitized Cars | Direct WhatsApp Confirmation',
  heroHeading: 'YOUR JOURNEY. YOUR RULES.',
  heroSubtitle: 'Experience the freedom of self-drive car rentals with Brozcars in Guwahati.',
  aboutHeading: 'Discover Freedom with Brozcars',
};

export const INITIAL_CARS: Car[] = [
  {
    id: 'tata-altroz',
    name: 'Tata Altroz',
    category: 'Hatchback',
    transmission: 'Manual',
    fuelType: 'Petrol / Diesel',
    seatingCapacity: 5,
    pricePerDay: 2000,
    image: '/images/cars/tata-altroz.jpg',
    gallery: [
      '/images/cars/tata-altroz.jpg',
      '/images/cars/tata-altroz.jpg'
    ],
    isAvailable: true,
    status: 'available',
    depositAmount: 3000,
    engine: '1.2L Revotron / 1.5L Revotorq',
    mileage: '19.05 - 23.64 km/l',
    luggageCapacity: '345 Litres (2 Large + 1 Small Bags)',
    tagline: 'India’s Safest 5-Star Premium Hatchback',
    features: [
      '5-Star Global NCAP Safety Rating',
      '7-inch Harman Touchscreen Infotainment',
      'Cruise Control & Steering Mounted Controls',
      'Dual Front Airbags & ABS with EBD',
      'Rear AC Vents & Fast USB Charging Ports',
      'Flat Bottom Sporty Leatherette Steering'
    ],
    description: 'The Tata Altroz sets the gold standard for premium hatchbacks with its unmatched 5-star crash safety, agile road manners, and spacious ergonomic cabin. Engineered for stability on the curvy roads of Meghalaya and smooth city drives in Guwahati.'
  },
  {
    id: 'maruti-baleno',
    name: 'Maruti Baleno',
    category: 'Hatchback',
    transmission: 'Manual / Automatic',
    fuelType: 'Petrol',
    seatingCapacity: 5,
    pricePerDay: 2000,
    image: '/images/cars/maruti-baleno.jpg',
    gallery: [
      '/images/cars/maruti-baleno.jpg',
      '/images/cars/maruti-baleno.jpg'
    ],
    isAvailable: true,
    status: 'available',
    depositAmount: 3000,
    engine: '1.2L DualJet Dual VVT Petrol',
    mileage: '22.35 - 22.94 km/l',
    luggageCapacity: '318 Litres (2 Medium Bags)',
    tagline: 'Supreme Fuel Efficiency & Modern Comfort',
    features: [
      '22+ km/l Outstanding Fuel Efficiency',
      'SmartPlay Pro+ Touchscreen with Apple CarPlay & Android Auto',
      'Rear Parking Camera with Guidelines & Sensors',
      'Spacious Rear Cabin with Supreme Legroom',
      'Automatic Climate Control',
      'Keyless Push Button Start/Stop'
    ],
    description: 'A true favourite across Assam for effortless cruising and superior fuel efficiency. The Baleno combines premium liquid flow styling with an ultra-spacious cabin that comfortably accommodates 5 adults on extended tours.'
  },
  {
    id: 'hyundai-i20-sunroof',
    name: 'Hyundai i20 Sunroof',
    category: 'Hatchback',
    transmission: 'Manual / Automatic',
    fuelType: 'Petrol',
    seatingCapacity: 5,
    pricePerDay: 2200,
    image: '/images/cars/hyundai-i20.jpg',
    gallery: [
      '/images/cars/hyundai-i20.jpg',
      '/images/cars/hyundai-i20.jpg'
    ],
    isAvailable: true,
    status: 'available',
    depositAmount: 3000,
    engine: '1.2L Kappa / 1.0L Turbo GDi',
    mileage: '19.6 - 20.2 km/l',
    luggageCapacity: '311 Litres (2 Medium Bags)',
    tagline: 'Sporty Performance with Electric Sunroof',
    features: [
      'Electric One-Touch Power Sunroof',
      '10.25-inch HD Touchscreen with Navigation',
      'Bose Premium 7-Speaker Sound System',
      'Wireless Smartphone Fast Charger',
      'Air Purifier with AQI Display',
      'Cooled Glove Box & Rear AC Vents'
    ],
    description: 'Experience next-level luxury and youthfulness with the Hyundai i20 featuring an electric sunroof, crystal-clear Bose audio, and refined response. The premier choice for an unforgettable Shillong or Cherrapunji weekend trip.'
  },
  {
    id: 'mahindra-thar-4x4',
    name: 'Mahindra Thar 4×4',
    category: 'SUV & 4x4',
    transmission: 'Manual / Automatic',
    fuelType: 'Diesel',
    seatingCapacity: 4,
    pricePerDay: 4500,
    image: '/images/cars/mahindra-thar.jpg',
    gallery: [
      '/images/cars/mahindra-thar.jpg',
      '/images/cars/mahindra-thar.jpg'
    ],
    isAvailable: true,
    status: 'available',
    depositAmount: 5000,
    engine: '2.2L mHawk 130 CRDe Diesel',
    mileage: '15.2 km/l',
    luggageCapacity: 'Compact Rear Cargo (2 Travel Duffle Bags)',
    tagline: 'The Undisputed King of Northeast Off-Roading',
    features: [
      'Shift-On-Fly 4x4 with Mechanical Locking Differential',
      'High 226 mm Ground Clearance & 650 mm Water Wading Depth',
      'Tough Factory-Fitted Hard Top with Roll Cage',
      'Drizzle-Resistant 7-inch Infotainment with Off-Road Telematics',
      'All-Terrain Rugged R18 Alloy Wheels',
      'ESP with Rollover Mitigation & Hill Descent Control'
    ],
    description: 'The undisputed legend of Northeast adventure. Whether conquering misty hill curves, rocky paths in Meghalaya, or scenic remote landscapes towards Arunachal, the Thar 4x4 provides supreme dominance, confidence, and unmatched road presence.'
  },
  {
    id: 'toyota-innova-crysta',
    name: 'Toyota Innova Crysta',
    category: '7-Seater MPV',
    transmission: 'Manual / Automatic',
    fuelType: 'Diesel',
    seatingCapacity: 7,
    pricePerDay: 3800,
    image: '/images/cars/toyota-innova-crysta.jpg',
    gallery: [
      '/images/cars/toyota-innova-crysta.jpg',
      '/images/cars/toyota-innova-crysta.jpg'
    ],
    isAvailable: true,
    status: 'available',
    depositAmount: 5000,
    engine: '2.4L GD 4-Cylinder Turbo Diesel',
    mileage: '14.8 - 15.6 km/l',
    luggageCapacity: '300L with 3rd row up (Expands to 750L+ Folded)',
    tagline: 'Unmatched 7-Seater Luxury & Highway Reliability',
    features: [
      '7-Seater Luxurious Captain Chairs Configuration',
      'Legendary 2.4L GD Turbo Diesel Power & Reliability',
      'Triple-Zone Roof-Mounted AC with Individual Blower Controls',
      'Exceptional Highway Stability & Noise Insulation',
      'Abundant Luggage Space for Long Family Expeditions',
      '7 Airbags, Vehicle Stability Control (VSC) & Hill Start Assist'
    ],
    description: 'The undisputed benchmark in long-distance touring comfort. Ideal for large families and tourist groups exploring Kaziranga National Park, Tawang, or Dawki, offering first-class lounge comfort and bulletproof Toyota reliability.'
  },
  {
    id: 'maruti-swift',
    name: 'Maruti Swift',
    category: 'Hatchback',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seatingCapacity: 5,
    pricePerDay: 1800,
    image: '/images/cars/maruti-swift.jpg',
    gallery: [
      '/images/cars/maruti-swift.jpg',
      '/images/cars/maruti-swift.jpg'
    ],
    isAvailable: true,
    status: 'available',
    depositAmount: 3000,
    engine: '1.2L K-Series DualJet Petrol',
    mileage: '24.8 km/l',
    luggageCapacity: '268 Litres (1 Large + 1 Small Bag)',
    tagline: 'Agile, Economical & Fun to Drive',
    features: [
      'Peppy & Highly Responsive 1.2L Engine',
      'Exceptional 24+ km/l Real-World Fuel Economy',
      'Compact Dimensions for Easy City Parking & Traffic Weaving',
      'Bluetooth Audio System with Steering Mounted Controls',
      'Powerful Air Conditioning & All Power Windows',
      'Light & Responsive Electric Power Steering'
    ],
    description: 'India’s most celebrated hatchback. Nimble, economical, and ultra-reliable. Ideal for budget-conscious travellers, daily city commutes, and quick scenic road trips around Guwahati, Kamakhya temple, and Deepor Beel.'
  },
  {
    id: 'honda-city',
    name: 'Honda City',
    category: 'Sedan',
    transmission: 'Manual / Automatic',
    fuelType: 'Petrol',
    seatingCapacity: 5,
    pricePerDay: 2800,
    image: '/images/cars/honda-city.jpg',
    gallery: [
      '/images/cars/honda-city.jpg',
      '/images/cars/honda-city.jpg'
    ],
    isAvailable: true,
    status: 'available',
    depositAmount: 4000,
    engine: '1.5L i-VTEC DOHC with VTC',
    mileage: '17.8 - 18.4 km/l',
    luggageCapacity: '506 Litres (3 Large Suitcases)',
    tagline: 'The Definitive Executive Sedan Experience',
    features: [
      '1.5L i-VTEC DOHC High-Revving 121 PS Petrol Engine',
      'Executive Leather Seats & Soft-Touch Dashboard Trim',
      'Electric One-Touch Sunroof with Pinch Guard',
      'Colossal 506 Litres Cargo Boot Space',
      'LaneWatch Blind Spot Camera & Rear Multi-Angle View',
      'Cruise Control & Automatic Projector Headlamps'
    ],
    description: 'The definitive executive sedan. The Honda City delivers velvet-smooth ride quality, supreme rear passenger comfort, and prestigious styling. Best suited for corporate delegates, VIP guests, wedding visits, and premium highway travel.'
  },
  {
    id: 'hyundai-venue',
    name: 'Hyundai Venue',
    category: 'SUV & 4x4',
    transmission: 'Manual / Automatic',
    fuelType: 'Petrol / Diesel',
    seatingCapacity: 5,
    pricePerDay: 2500,
    image: '/images/cars/hyundai-venue.jpg',
    gallery: [
      '/images/cars/hyundai-venue.jpg',
      '/images/cars/hyundai-venue.jpg'
    ],
    isAvailable: true,
    status: 'available',
    depositAmount: 4000,
    engine: '1.2L Kappa / 1.5L U2 CRDi Diesel',
    mileage: '17.5 - 22.7 km/l',
    luggageCapacity: '350 Litres (2 Large Suitcases)',
    tagline: 'Bold Compact SUV with High Ground Clearance',
    features: [
      'High Seating Position & Commanding Road View',
      'High Ground Clearance (195 mm) for Uneven Northeast Roads',
      '8-inch Touchscreen with Apple CarPlay & Android Auto',
      'Automatic Temperature Control with Clean Air Purifier',
      'Rear View Camera with Dynamic Parking Guidelines',
      'Electronic Stability Control (ESC) & Hill Assist Control'
    ],
    description: 'A stylish, punchy compact SUV engineered for modern explorers. The Hyundai Venue glides effortlessly over city potholes and steep Assam highway ascents with equal poise, commanding visibility, and cutting-edge tech.'
  },
  {
    id: 'mahindra-scorpio',
    name: 'Mahindra Scorpio',
    category: 'SUV & 4x4',
    transmission: 'Manual',
    fuelType: 'Diesel',
    seatingCapacity: 7,
    pricePerDay: 3500,
    image: '/images/cars/mahindra-scorpio.jpg',
    gallery: [
      '/images/cars/mahindra-scorpio.jpg',
      '/images/cars/mahindra-scorpio.jpg'
    ],
    isAvailable: true,
    status: 'available',
    depositAmount: 5000,
    engine: '2.2L mHawk Turbo Diesel',
    mileage: '15.0 km/l',
    luggageCapacity: '460 Litres (Flexible 7-Seater Configuration)',
    tagline: 'Muscular 7-Seater Built for Rough & Hilly Terrains',
    features: [
      'Muscular 2.2L mHawk Turbo Diesel Engine with 130 bhp',
      'Rugged Ladder-on-Frame Chassis for Tough Terrains',
      'Comfortable 7-Passenger Seating Configuration',
      'High Seating with Panoramic All-Around Visibility',
      'Powerful Front & Rear Dual Air-Conditioning',
      'Heavy-Duty Suspension tuned for Hilly Roads'
    ],
    description: 'An iconic powerhouse built for Assam’s varied geography. With 7 seats, high ground clearance, and brute torque, the Scorpio tackles Meghalaya slopes, riverbanks, and long journeys with effortless muscle.'
  }
];

export const PICKUP_LOCATIONS = [
  'Khanapara Main Office (Near Flyover / Beltola Junction)',
  'Guwahati Airport (Lokpriya Gopinath Bordoloi Airport)',
  'Guwahati Railway Station (Paltan Bazaar)',
  'Kamakhya Railway Station',
  'Beltola / Six Mile / Dispur Delivery',
  'Custom Address in Guwahati (Doorstep Delivery)'
];

export const WHY_CHOOSE_US = [
  {
    title: 'Wide Range of Cars',
    description: 'Select exclusively from our fleet of 9 verified models—from fuel-efficient hatchbacks and luxury sedans to rugged 4x4 Thar and 7-seater Innova Crysta.',
    icon: 'Car'
  },
  {
    title: 'Flexible Rental Options',
    description: 'Hourly, daily, and multi-week self-drive packages with transparent pricing, zero surge charges, and crystal clear rental terms.',
    icon: 'CalendarCheck'
  },
  {
    title: 'Easy Booking Process',
    description: 'Select your car, choose your dates, and receive prompt confirmation directly on WhatsApp with zero paperwork hassle.',
    icon: 'Zap'
  },
  {
    title: 'Convenient Pickup Location',
    description: 'Located in Khanapara—the direct transit hub connecting Guwahati with Shillong and the rest of Northeast India.',
    icon: 'MapPin'
  },
  {
    title: 'Customer Support',
    description: 'Dedicated 24/7 on-call roadside assistance and travel support throughout your road trip across Assam and Meghalaya.',
    icon: 'Headphones'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Select Your Car',
    description: 'Browse our strict fleet of 9 verified cars and choose the exact model matching your trip requirements.'
  },
  {
    step: '02',
    title: 'Choose Pickup & Return Dates',
    description: 'Set your dates, pickup time, and select your preferred pickup location in Khanapara or Guwahati.'
  },
  {
    step: '03',
    title: 'Submit Your Booking Request',
    description: 'Fill in your name and phone number to generate an instant, itemized WhatsApp booking enquiry.'
  },
  {
    step: '04',
    title: 'Receive Booking Confirmation',
    description: 'Our Brozcars team verifies vehicle availability and confirms your reservation directly on WhatsApp.'
  }
];
