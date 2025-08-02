import React from "react";

import { Card } from "@/components/ui/card";

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

const EXTENSION_SERVICES = [
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
    price: "+$5",
  },
  {
    title: "Removal",
    price: "+$15",
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

const WAXING_SERVICES = [
  {
    title: "Full face",
    price: "$36",
  },
  {
    title: "Eyebrows",
    price: "$15",
  },
  {
    title: "Mustache",
    price: "$10",
  },
  {
    title: "Under Arm",
    price: "$15",
  },
  {
    title: "Full Arm",
    price: "$36",
  },
  {
    title: "Half Arm",
    price: "$26",
  },
];

const MORE_WAXING_SERVICES = [
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
          {/* Combo Services */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold  mt-4">Combo Services</h3>
            <ul className="space-y-3 m-0 lg:space-y-5 lg:m-4">
              {COMBOS.map((combo, index) => (
                <li key={index} className="flex justify-between">
                  <span>{combo.title}</span>
                  <span className="font-semibold">{combo.price}</span>
                </li>
              ))}

              <li className="text-sm text-gray-400">
                **Note: Additional $5 for Gel Removal
              </li>
            </ul>
          </Card>

          {/* Extension Services */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Extension Services</h3>
            <ul className="space-y-3 m-0">
              {EXTENSION_SERVICES.map((service, index) => (
                <li key={index} className="flex justify-between">
                  <span>{service.title}</span>
                  <span className="font-semibold">{service.price}</span>
                </li>
              ))}
              <li className="text-sm text-gray-400">
                **Note: Additional $10 for Removal
              </li>
            </ul>
          </Card>

          {/* Add-ons */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Add-ons</h3>
            <ul className="space-y-3 m-0">
              {ADD_ONS.map((addOn, index) => (
                <li
                  key={index}
                  className={
                    index === 2
                      ? "text-sm text-gray-400 ml-0 lg:ml-4"
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
            <ul className="space-y-3 m-4">
              <li className="font-medium">
                <strong>Kid Services (Kid under 10 years)</strong>
              </li>

              <li className="flex justify-between ml-4">
                <span>Regular Manicure</span>
                <span className="font-semibold">$11</span>
              </li>
              <li className="text-sm text-gray-400 ml-8">with Shellac +$5</li>

              <li className="flex justify-between ml-4">
                <span>Regular Pedicure</span>
                <span className="font-semibold">$21</span>
              </li>
              <li className="text-sm text-gray-400 ml-8">with Shellac +$5</li>

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
                <span className="font-semibold">
                  plus Special Gift (show ID)
                </span>
              </li>
            </ul>
          </Card>

          {/* Waxing */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Waxing Services</h3>
            <ul className="space-y-3 m-0">
              {WAXING_SERVICES.map((service, index) => (
                <li key={index} className="flex justify-between">
                  <span>{service.title}</span>
                  <span className="font-semibold">{service.price}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* More Waxing */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">More Waxing Services</h3>
            <ul className="space-y-3 m-0">
              {MORE_WAXING_SERVICES.map((service, index) => (
                <li key={index} className="flex justify-between">
                  <span>{service.title}</span>
                  <span className="font-semibold">{service.price}</span>
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
