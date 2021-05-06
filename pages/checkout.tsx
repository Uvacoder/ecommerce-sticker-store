import { useState } from "react";

import { Button } from "../components/Button";
import { CheckoutSection } from "../components/Checkout";
import { PageHeader } from "../components/Header";
import Input from "../components/Input";

function Checkout({}) {
  const [section, setSection] = useState(0);

  const handleActivateSection = (sectionIndex: number) => {
    setSection(sectionIndex);
  };

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        rightTitle="Checkout"
        rightDescription="Complete your order with cridentials"
        leftTitle="85₺"
        leftDescription="TOTAL AMOUNT"
      />
      <CheckoutSection
        onPress={handleActivateSection}
        step="1"
        title="Account"
        isOpen={section == 1}
        content={
          <div className="w-full flex flex-col xs:flex-row gap-2 w-full sm:w-2/3 items-start xs:items-end">
            <Input title="E-mail" />
            <Button text="Continue" />
          </div>
        }
      />
      <CheckoutSection
        onPress={handleActivateSection}
        step="2"
        title="Shipping"
        isOpen={section == 2}
        content={
          <>
            <div className="w-full flex flex-col xs:flex-row gap-2 w-full items-start xs:items-end mb-4">
              <Input title="First Name" />
              <Input title="Last Name" />
            </div>
            <div className="w-full flex flex-col xs:flex-row gap-2 w-full items-start xs:items-end mb-4">
              <Input title="Address" />
            </div>
            <div className="w-full flex flex-col xs:flex-row gap-2 w-full items-start xs:items-end mb-4">
              <Input title="City" />
              <Input title="Country" />
            </div>
            <div className="w-full flex flex-col xs:flex-row gap-2 w-full items-start xs:items-end mb-4">
              <Input title="State" />
              <Input title="Postal Code" />
            </div>
          </>
        }
      />
      <CheckoutSection
        onPress={handleActivateSection}
        step="3"
        title="Payment"
        isOpen={section == 3}
      />
    </div>
  );
}

export default Checkout;