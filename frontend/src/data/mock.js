// Mock data for CITYINTEL LINERS TRANSPORT & GENERAL DEALERS

export const companyInfo = {
  name: "CITYINTEL LINERS",
  tagline: "Transport & General Dealers",
  description: "Your trusted partner in reliable transport solutions and general merchandise. We deliver excellence across every mile.",
  phone: "+260 XXX XXX XXX",
  email: "info@cityintelliners.com",
  whatsapp: "+260 XXX XXX XXX",
  address: "123 Transport Avenue, Lusaka, Zambia",
  workingHours: "Mon - Sat: 6:00 AM - 8:00 PM"
};

export const services = [
  {
    id: 1,
    title: "Passenger Transport",
    description: "Safe, comfortable, and punctual passenger services across major routes. Modern fleet with air conditioning and professional drivers.",
    icon: "Bus"
  },
  {
    id: 2,
    title: "Cargo & Freight",
    description: "Reliable cargo transportation for businesses and individuals. We handle your goods with utmost care and deliver on time.",
    icon: "Truck"
  },
  {
    id: 3,
    title: "Logistics Solutions",
    description: "End-to-end logistics management including warehousing, distribution, and supply chain optimization.",
    icon: "Package"
  },
  {
    id: 4,
    title: "Vehicle Hire",
    description: "Flexible vehicle rental options for personal and corporate needs. From sedans to coaches, we have you covered.",
    icon: "Car"
  },
  {
    id: 5,
    title: "General Merchandise",
    description: "Quality general goods and supplies at competitive prices. Your one-stop shop for essential commodities.",
    icon: "ShoppingBag"
  },
  {
    id: 6,
    title: "Express Delivery",
    description: "Fast and secure parcel delivery services. Same-day and next-day options available for urgent shipments.",
    icon: "Zap"
  }
];

export const fleet = [
  {
    id: 1,
    name: "Executive Coach",
    capacity: "50 Passengers",
    features: ["Air Conditioning", "Reclining Seats", "Entertainment System", "WiFi"]
  },
  {
    id: 2,
    name: "Mini Bus",
    capacity: "22 Passengers",
    features: ["Air Conditioning", "Comfortable Seating", "Luggage Space"]
  },
  {
    id: 3,
    name: "Cargo Truck",
    capacity: "10 Tonnes",
    features: ["Covered Cargo Area", "GPS Tracking", "Secure Loading"]
  },
  {
    id: 4,
    name: "Delivery Van",
    capacity: "2 Tonnes",
    features: ["Fast Delivery", "City Access", "Real-time Tracking"]
  }
];

export const routes = [
  { from: "Lusaka", to: "Ndola", duration: "4 hours" },
  { from: "Lusaka", to: "Livingstone", duration: "6 hours" },
  { from: "Lusaka", to: "Kitwe", duration: "4.5 hours" },
  { from: "Lusaka", to: "Chipata", duration: "5 hours" },
  { from: "Ndola", to: "Kitwe", duration: "1 hour" },
  { from: "Lusaka", to: "Solwezi", duration: "7 hours" }
];

export const testimonials = [
  {
    id: 1,
    name: "Michael Banda",
    role: "Business Owner",
    content: "CITYINTEL LINERS has been our logistics partner for over 3 years. Their reliability and professionalism are unmatched. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Grace Mwanza",
    role: "Regular Passenger",
    content: "I travel with CITYINTEL every month. The buses are always clean, drivers are courteous, and they're always on time. Best transport service!",
    rating: 5
  },
  {
    id: 3,
    name: "David Tembo",
    role: "Retail Store Manager",
    content: "Their cargo services have transformed our supply chain. Deliveries are always on schedule and goods arrive in perfect condition.",
    rating: 5
  }
];

export const stats = [
  { label: "Years of Service", value: "15+" },
  { label: "Happy Customers", value: "50K+" },
  { label: "Routes Covered", value: "100+" },
  { label: "Fleet Vehicles", value: "45+" }
];
