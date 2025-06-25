import React from "react";
import { Card } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Our Services & Pricing
          </h2>
          <p className="mt-4 text-gray-600">
            Quality nail services at competitive prices with 10 days guarantee
            on all services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Combo Services */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold  mt-4">Combo Services</h3>
            <ul className="space-y-5 m-4">
              <li className="flex justify-between">
                <span>Regular Manicure & Pedicure</span>
                <span className="font-semibold">$57</span>
              </li>

              <li className="flex justify-between">
                <span>Regular Manicure & Shellac/Gel Pedicure</span>
                <span className="font-semibold">$71</span>
              </li>

              <li className="flex justify-between">
                <span>Shellac/Gel Manicure & Regular Pedicure</span>
                <span className="font-semibold">$68</span>
              </li>

              <li className="flex justify-between">
                <span>Shellac/Gel Manicure & Pedicure</span>
                <span className="font-semibold">$81</span>
              </li>
              <li className="text-sm text-gray-600">
                **Note: Additional $5 for gel removal
              </li>
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
                <span>Acrylic Fill</span>
                <span className="font-semibold">$51</span>
              </li>

              <li className="flex justify-between">
                <span>Hard Gel Set (short and Medium)</span>
                <span className="font-semibold">$66</span>
              </li>

              <li className="flex justify-between">
                <span>Hard Gel Refill</span>
                <span className="font-semibold">$56</span>
              </li>

              <li className="flex justify-between">
                <span>Biab Gel</span>
                <span className="font-semibold">$56</span>
              </li>

              <li className="flex justify-between">
                <span>GelX Set</span>
                <span className="font-semibold">$76</span>
              </li>
            </ul>
          </Card>

          {/* Add-ons */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Add-ons</h3>
            <ul className="space-y-5 m-4">
              <li className="flex justify-between">
                <span>Fixing Nails</span>
                <span className="font-semibold">+$5</span>
              </li>

              <li className="flex justify-between">
                <span>Removal</span>
                <span className="font-semibold">+$15</span>
              </li>

              <li className="text-sm text-gray-600 ml-4">
                <span>Includes a soak off removal + Nails Strengthening</span>
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
                <span>French Tip</span>
                <span className="font-semibold">+$10</span>
              </li>
            </ul>
          </Card>

          {/* Special Discounts */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Special Discounts</h3>
            <ul className="space-y-3 m-4">
              <li className="font-medium">Kid Services (Kid under 10 years)</li>

              <li className="flex justify-between ml-4">
                <span>Regular Manicure</span>
                <span className="font-semibold">$11</span>
              </li>
              <li className="text-sm text-gray-600 ml-8">
                with Shellac/Gel +$10
              </li>

              <li className="flex justify-between ml-4">
                <span>Regular Pedicure</span>
                <span className="font-semibold">$21</span>
              </li>
              <li className="text-sm text-gray-600 ml-8">
                with Shellac/Gel +$10
              </li>

              <li className="font-medium mt-4 flex justify-between">
                <span>Under 18 years</span>
                <span>10%-15% off all services</span>
              </li>

              <li className="font-medium mt-4">Group Party</li>
              <li className="ml-4">
                Booking for 5 or more guests and enjoy FREE special drink and
                snack on us
              </li>

              <li className="font-medium mt-4">Exclusive Reward</li>
              <li className="flex justify-between ml-4">
                <span>5 time visiting</span>
                <span className="font-semibold">5% off</span>
              </li>

              <li className="flex justify-between ml-4">
                <span>Second visiting</span>
                <span className="font-semibold">10% off</span>
              </li>

              <li className="flex justify-between ml-4">
                <span>Birthday</span>
                <span className="font-semibold">
                  15% plus Special Gift (show ID)
                </span>
              </li>
            </ul>
          </Card>

          {/* Waxing */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">Waxing Services</h3>
            <ul className="space-y-5 m-4">
              <li className="flex justify-between">
                <span>Full face</span>
                <span className="font-semibold">$36</span>
              </li>

              <li className="flex justify-between">
                <span>Eyebrows</span>
                <span className="font-semibold">$15</span>
              </li>

              <li className="flex justify-between">
                <span>Mustache</span>
                <span className="font-semibold">$10</span>
              </li>

              <li className="flex justify-between">
                <span>Forehead</span>
                <span className="font-semibold">$15</span>
              </li>

              <li className="flex justify-between">
                <span>Sideburns</span>
                <span className="font-semibold">$11</span>
              </li>

              <li className="flex justify-between">
                <span>Chin</span>
                <span className="font-semibold">$10</span>
              </li>

              <li className="flex justify-between">
                <span>Under Arm</span>
                <span className="font-semibold">$15</span>
              </li>

              <li className="flex justify-between">
                <span>Full Arm</span>
                <span className="font-semibold">$36</span>
              </li>

              <li className="flex justify-between">
                <span>Half Arm</span>
                <span className="font-semibold">$26</span>
              </li>
            </ul>
          </Card>

          {/* Waxing */}
          <Card className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mt-4">More Waxing Services</h3>
            <ul className="space-y-5 m-4">
              <li className="flex justify-between">
                <span>Full Leg</span>
                <span className="font-semibold">$61</span>
              </li>

              <li className="flex justify-between">
                <span>Half Leg</span>
                <span className="font-semibold">$36</span>
              </li>

              <li className="flex justify-between">
                <span>Bikini</span>
                <span className="font-semibold">$26</span>
              </li>

              <li className="flex justify-between">
                <span>Brazilian</span>
                <span className="font-semibold">$46</span>
              </li>

              <li className="flex justify-between">
                <span>Chest</span>
                <span className="font-semibold">$26</span>
              </li>

              <li className="flex justify-between">
                <span>Tummy</span>
                <span className="font-semibold">$21</span>
              </li>

              <li className="flex justify-between">
                <span>Back</span>
                <span className="font-semibold">$46</span>
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
