import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
     <div>
      <h1 className="text-xl font-extralight"> <Card /> Landing Page</h1>

      <div className="flex flex-wrap gap-4 mt-6">
        <Button title="Small Button" styles="rounded-sm text-sm px-4 py-2" />
        <Button title="Medium Button" styles="rounded-md text-base px-4 py-2" />
         <Button title="Large Button" styles="rounded-lg text-lg px-6 py-3" />
        <Button title="Large Button" styles="rounded-full text-lg px-6 py-3" />
      </div>
    </div>
  );
};

export default Landing;
