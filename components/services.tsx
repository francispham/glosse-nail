import React from "react";

import { Card } from "@/components/ui/card";

const HANDS = [
  {
    title: "Regular Manicure",
    price: "$26",
  },
  {
    title: "Regular Polish Change",
    price: "$16",
  },
  {
    title: "Shellac/Gel Manicure",
    price: "$36",
  },
  {
    title: "Shellac/Gel Polish Change",
    price: "$26",
  },
  {
    title: "Deluxe (Paraffin or Seasonal Mask)",
    price: "$10",
  },
];

const TOES = [
  {
    title: "Regular Pedicure",
    price: "$38",
  },
  {
    title: "Regular Polish Change",
    price: "$21",
  },
  {
    title: "Shellac/Gel Pedicure",
    price: "$51",
  },
  {
    title: "Shellac/Gel Polish Change",
    price: "$31",
  },
  {
    title: "Deluxe (Paraffin or Seasonal Mask)",
    price: "$15",
  },
];

const COMBOS = [
  {
    title: "Regular Manicure & Pedicure",
    price: "$57",
  },
  {
    title: "Regular Manicure & Shellac Pedicure",
    price: "$71",
  },
  {
    title: "Shellac Manicure & Regular Pedicure",
    price: "$68",
  },
  {
    title: "Shellac Manicure & Pedicure",
    price: "$81",
  },
];

const EXTENSION = [
  {
    title: "Acrylic Set (short and medium)",
    price: "$61",
  },
  {
    title: "Acrylic Fill",
    price: "$51",
  },
  {
    title: "Hard Gel Set (short and Medium)",
    price: "$66",
  },
  {
    title: "Hard Gel Refill",
    price: "$56",
  },
  {
    title: "Biab Gel",
    price: "$56",
  },
  {
    title: "Gel-X Set",
    price: "$76",
  },
];

const ADD_ONS = [
  {
    title: "Nails Repair",
    price: "+$6",
  },
  {
    title: "Removal",
    price: "+$16",
  },
  {
    title: "Includes a Soak Off Removal + Nails Strengthening",
    price: "",
  },
  {
    title: "Ombre Design",
    price: "$15",
  },
  {
    title: "Nails Art",
    price: "+$5",
  },
  {
    title: "Cat eyes/Chrome",
    price: "+$10",
  },
  {
    title: "Extra long nails",
    price: "+$5",
  },
  {
    title: "French Tip",
    price: "+$10",
  },
];

const WAXING = [
  {
    title: "Full face",
    price: "$36",
  },
  {
    title: "Eyebrows",
    price: "$16",
  },
  {
    title: "Mustache",
    price: "$11",
  },
  {
    title: "Under Arm",
    price: "$16",
  },
  {
    title: "Full Arm",
    price: "$36",
  },
  {
    title: "Half Arm",
    price: "$26",
  },
  {
    title: "Full Leg",
    price: "$61",
  },
  {
    title: "Half Leg",
    price: "$36",
  },
  {
    title: "Bikini",
    price: "$26",
  },
];

const MORE_WAXING = [
  {
    title: "Brazilian",
    price: "$46",
  },
  {
    title: "Chest",
    price: "$26",
  },
  {
    title: "Tummy",
    price: "$21",
  },
  {
    title: "Back",
    price: "$46",
  },
];
const MORE_SERVICES = [
  {
    title: "10 Mins Hands/Foot Massage",
    price: "$16",
  },
  {
    title: "30 Mins Hands/Foot Massage",
    price: "$46",
  },
  {
    title: "1 Hour Hands/Foot Massage",
    price: "$71",
  },
  {
    title: "Eyebrow Tinting",
    price: "$21",
  },
];

const POLICIES = [
  "We offer free nail repair within 7 days of service (Same design & color).",
  "After 7 days, standard repair charges will apply.",
  "Group bookings or long appointments may require a deposit.",
  "Deposits are non-refundable but transferable with 48-hour notice.",
  "For your safety and ours, please inform us of any infection, injuries or health concerns before your service.",
  "For any inquiries, kindly contact the salon by phone or email for prompt assistance.",
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-gray-400">
            Quality nail services at competitive prices with 10 days guarantee
            on all services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hands Services */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold  mt-4">Hands</h3>
            <ul className="space-y-3 m-0 lg:space-y-5 lg:m-4">
              {HANDS.map((combo, index) => (
                <li key={index} className="flex justify-between">
                  <span>{combo.title}</span>
                  <span className="font-semibold">{combo.price}</span>
                </li>
              ))}

              <li className="text-xs text-gray-400 lg:text-sm">
                **Note: Additional $5 for Gel Removal
              </li>
            </ul>
          </Card>

          {/* Toes Services */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold  mt-4">Toes</h3>
            <ul className="space-y-3 m-0 lg:space-y-5 lg:m-4">
              {TOES.map((combo, index) => (
                <li key={index} className="flex justify-between">
                  <span>{combo.title}</span>
                  <span className="font-semibold">{combo.price}</span>
                </li>
              ))}

              <li className="text-xs text-gray-400 lg:text-sm">
                **Note: Additional $5 for Gel Removal
              </li>
            </ul>
          </Card>

          {/* Combo Services */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold  mt-4">Combo</h3>
            <ul className="space-y-3 m-0 lg:space-y-5 lg:m-4">
              {COMBOS.map((combo, index) => (
                <li key={index} className="flex justify-between">
                  <span>{combo.title}</span>
                  <span className="font-semibold">{combo.price}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Extension */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Extension</h3>
            <ul className="space-y-3 m-0 lg:space-y-5 lg:m-4">
              {EXTENSION.map((service, index) => (
                <li key={index} className="flex justify-between">
                  <span>{service.title}</span>
                  <span className="font-semibold">{service.price}</span>
                </li>
              ))}
              <li className="text-xs text-gray-400 lg:text-sm">
                **Note: Additional $10 for Removal
              </li>
            </ul>
          </Card>

          {/* Add-ons */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Add-ons</h3>
            <ul className="space-y-3 m-0 lg:m-4">
              {ADD_ONS.map((addOn, index) => (
                <li
                  key={index}
                  className={
                    index === 2
                      ? "text-xs text-gray-400 ml-0 lg:ml-4 lg:text-sm"
                      : "flex justify-between"
                  }
                >
                  <span>{addOn.title}</span>
                  <span className="font-semibold">{addOn.price}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Special Discounts */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Special Discounts</h3>
            <ul className="space-y-3 m-0 lg:m-4">
              <li className="font-medium">
                <strong>Kid Services (Kid under 10 years)</strong>
              </li>

              <li className="flex justify-between ml-4">
                <span>Regular Manicure</span>
                <span className="font-semibold">$11</span>
              </li>
              <li className="text-xs text-gray-400 ml-8 lg:text-sm">
                with Shellac +$5
              </li>

              <li className="flex justify-between ml-4">
                <span>Regular Pedicure</span>
                <span className="font-semibold">$21</span>
              </li>
              <li className="text-xs text-gray-400 ml-8 lg:text-sm">
                with Shellac +$5
              </li>

              <li className="font-medium mt-4 flex justify-between">
                <span>
                  <strong>Under 18 years</strong>
                </span>
                <span>10% off all services</span>
              </li>

              <li className="font-medium mt-4">
                <strong>Group Party</strong>
              </li>
              <li className="ml-4 text-sm">
                Booking for 5 or More Guests and enjoy FREE special drink and
                snack on us
              </li>

              <li className="font-medium mt-4">
                <strong>Exclusive Reward</strong>
              </li>
              <li className="flex justify-between ml-4">
                <span>5 Time Visiting</span>
                <span className="font-semibold">5% Off</span>
              </li>

              <li className="flex justify-between ml-4">
                <span>Second visiting</span>
                <span className="font-semibold">10% Off</span>
              </li>

              <li className="flex justify-between ml-4">
                <span>Birthday</span>
                <span className="font-semibold">15% Off</span>
              </li>
              <li className="flex justify-between ml-4">
                <span />
                <span className="text-xs text-gray-400 italic lg:text-sm">
                  plus Special Gift (show ID)
                </span>
              </li>
            </ul>
          </Card>

          {/* Waxing */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Waxing</h3>
            <ul className="space-y-3 m-0 lg:space-y-5 lg:m-4">
              {WAXING.map((service, index) => (
                <li key={index} className="flex justify-between">
                  <span>{service.title}</span>
                  <span className="font-semibold">{service.price}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* More Services */}
          <Card className="p-6 shadow-lg rounded-lg">
            <ul className="space-y-3 m-0 lg:space-y-5 lg:m-4">
              {MORE_WAXING.map((combo, index) => (
                <li key={index} className="flex justify-between">
                  <span>{combo.title}</span>
                  <span className="font-semibold">{combo.price}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-2xl font-bold  mt-4">More Services</h3>
            <ul className="space-y-3 m-0 lg:space-y-5 lg:m-4">
              {MORE_SERVICES.map((combo, index) => (
                <li key={index} className="flex justify-between">
                  <span>{combo.title}</span>
                  <span className="font-semibold">{combo.price}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-balance text-2xl font-semibold lg:text-3xl mb-4">
            Policies & Etiquette
          </h3>

          {POLICIES.map((policy, index) => (
            <p key={index} className="text-gray-400">
              {policy}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
