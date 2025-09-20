import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
     <div>
      <h1 className="text-xl font-extralight"> <Card /> Landing Page</h1>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        {/* Small */}
        <Button title="Small Rounded" styles="rounded-sm text-sm" />
        
        {/* Medium */}
        <Button title="Medium Rounded" styles="rounded-md text-base" />
        
        {/* Large */}
        <Button title="Large Rounded" styles="rounded-full text-lg" />
      </div>
    </div>
  );
};

export default Landing;
