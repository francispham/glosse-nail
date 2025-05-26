import React from "react";
import { Card } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services & Pricing</h2>
          <p className="text-xl text-gray-600">
            Quality nail services at competitive prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Combo Services */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold  mt-4">Combo Services</h3>
            <ul className="space-y-3 m-4">
              <li className="flex justify-between">
                <span>R MP</span>
                <span className="font-semibold">$57</span>
              </li>
              <li className="text-sm text-gray-600 ml-4">Hand $22, Toe $33</li>

              <li className="flex justify-between">
                <span>Deluxe MP</span>
                <span className="font-semibold">$77</span>
              </li>
              <li className="text-sm text-gray-600 ml-4">Hand $30, Toe $45</li>

              <li className="flex justify-between">
                <span>RM GP</span>
                <span className="font-semibold">$72</span>
              </li>
              <li className="text-sm text-gray-600 ml-4">Hand $23, Toe $47</li>

              <li className="flex justify-between">
                <span>GM RP</span>
                <span className="font-semibold">$68</span>
              </li>
              <li className="text-sm text-gray-600 ml-4">Hand $32, Toe $34</li>

              <li className="flex justify-between">
                <span>G MP</span>
                <span className="font-semibold">$81</span>
              </li>
              <li className="text-sm text-gray-600 ml-4">Hand $32, Toe $47</li>

              <li className="flex justify-between">
                <span>Deluxe G MP</span>
                <span className="font-semibold">$101</span>
              </li>
              <li className="text-sm text-gray-600 ml-4">Hand $40, Toe $59</li>
            </ul>
          </Card>

          {/* Extension Services */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Extension Services</h3>
            <ul className="space-y-5 m-4">
              <li className="flex justify-between">
                <span>Acrylic Set (short and medium)</span>
                <span className="font-semibold">$61</span>
              </li>

              <li className="flex justify-between">
                <span>Acrylic OmBre Set</span>
                <span className="font-semibold">$71</span>
              </li>

              <li className="flex justify-between">
                <span>Acrylic Fill</span>
                <span className="font-semibold">$51</span>
              </li>

              <li className="flex justify-between">
                <span>Acrylic Ombre Fill</span>
                <span className="font-semibold">$61</span>
              </li>

              <li className="flex justify-between">
                <span>Hard Gel/BIAB Set (short and Medium)</span>
                <span className="font-semibold">$66</span>
              </li>

              <li className="flex justify-between">
                <span>Hard Gel/BIAB Fill</span>
                <span className="font-semibold">$56</span>
              </li>

              <li className="flex justify-between">
                <span>Overlay/Gel Builder</span>
                <span className="font-semibold">$46</span>
              </li>

              <li className="flex justify-between">
                <span>GelX Set</span>
                <span className="font-semibold">$76</span>
              </li>

              <li className="flex justify-between">
                <span>Color Change (short and Medium)</span>
                <span className="font-semibold">$36</span>
              </li>
            </ul>
          </Card>

          {/* Add-ons */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Add-ons</h3>
            <ul className="space-y-5 m-4">
              <li className="flex justify-between">
                <span>Shellac Take off</span>
                <span className="font-semibold">+$10</span>
              </li>

              <li className="flex justify-between">
                <span>Foreign Removal</span>
                <span className="font-semibold">+$15</span>
              </li>

              <li className="flex justify-between">
                <span>Soak off removal + strengthening gel</span>
                <span className="font-semibold">Included</span>
              </li>

              <li className="flex justify-between">
                <span>Ombre Design</span>
                <span className="font-semibold">$15</span>
              </li>

              <li className="flex justify-between">
                <span>Nails Art</span>
                <span className="font-semibold">+$5</span>
              </li>

              <li className="flex justify-between">
                <span>Cat eyes/Chrome</span>
                <span className="font-semibold">+$10</span>
              </li>

              <li className="flex justify-between">
                <span>Extra long nails</span>
                <span className="font-semibold">+$5</span>
              </li>

              <li className="flex justify-between">
                <span>French</span>
                <span className="font-semibold">+$10</span>
              </li>

              <li className="flex justify-between">
                <span>Paraffin</span>
                <span className="font-semibold">$10</span>
              </li>
            </ul>
          </Card>

          {/* Discounts & Basic Services */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">
              Special Discounts & Basic Services
            </h3>
            <ul className="space-y-3 m-4">
              <li className="font-medium mt-2">Kids & Basic Services</li>
              <li className="flex justify-between">
                <span>Kid under 10 years</span>
                <span className="font-semibold">Special pricing</span>
              </li>

              <li className="flex justify-between">
                <span>Manicure</span>
                <span className="font-semibold">$11</span>
              </li>
              <li className="text-sm text-gray-600 ml-4">with gel +$10</li>

              <li className="flex justify-between">
                <span>Pedicure</span>
                <span className="font-semibold">$21</span>
              </li>
              <li className="text-sm text-gray-600 ml-4">with gel +$10</li>

              <li className="font-medium mt-6">Discounts</li>
              <li className="flex justify-between">
                <span>Under 18 years</span>
                <span className="font-semibold">10%-15% off all services</span>
              </li>

              <li className="font-medium mt-4">
                Group Party (group of 5 people)
              </li>
              <li className="ml-4">- Free drinks and snacks</li>

              <li className="flex justify-between">
                <span>5 times</span>
                <span className="font-semibold">5% off</span>
              </li>

              <li className="flex justify-between">
                <span>Second coming</span>
                <span className="font-semibold">10% off</span>
              </li>

              <li className="flex justify-between">
                <span>Birthday</span>
                <span className="font-semibold">Special discount</span>
              </li>

              <li className="flex justify-between">
                <span>Grand opening</span>
                <span className="font-semibold">15% off (for 2 weeks)</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Prices may vary based on nail length, design complexity, and
            additional services.
          </p>
          <p className="text-gray-600 mt-2">
            Please call for more information or to book an appointment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
