import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";

const NavigationButton = () => {
  const router = useRouter();
  const [showCollection, setShowCollection] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="default"
        onClick={() => setShowCollection(!showCollection)}
      >
        Collection
      </Button>
      {showCollection && (
        <span className="absolute bottom-[-120px] text-right right-0 mt-2 z-10">
          <Button
            variant="default"
            className="inline-flex items-center justify-center bg-[#e7ecea] mb-1"
            onClick={() => router.push("/want")}
          >
            Want
          </Button>
          <Button
            variant="default"
            className="inline-flex items-center justify-center bg-[#e7ecea] mb-1"
            onClick={() => router.push("/portfolio")}
          >
            Portfolio
          </Button>
          <Button
            variant="default"
            className="inline-flex items-center justify-center bg-[#e7ecea] mb-1"
            onClick={() => router.push("/memo")}
          >
            Memo
          </Button>
        </span>
      )}
    </div>
  );
};

export default NavigationButton;
