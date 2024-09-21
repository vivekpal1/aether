import React from 'react';
import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit';

interface WorldIDVerificationProps {
  onSuccess: () => void;
  onError: () => void;
}

const WorldIDVerification: React.FC<WorldIDVerificationProps> = ({ onSuccess, onError }) => {
  const handleVerify = async (proof: ISuccessResult) => {
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proof),
      });

      if (!response.ok) {
        throw new Error("Verification failed");
      }

      const data = await response.json();
      console.log("Verification result:", data);
      onSuccess();
    } catch (error) {
      console.error("Verification error:", error);
      onError();
      throw error; // IDKit will display this error to the user
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold">Verify your identity</h2>
      <p className="text-gray-600">Please verify your identity using World ID to continue with the checkout process.</p>
      <IDKitWidget
        app_id={process.env.NEXT_PUBLIC_WORLD_ID_APP_ID || ''}
        action={process.env.NEXT_PUBLIC_WORLD_ID_ACTION || ''}
        onSuccess={onSuccess}
        handleVerify={handleVerify}
        verification_level={VerificationLevel.Orb}
      >
        {({ open }) => (
          <button 
            onClick={open}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Verify with World ID
          </button>
        )}
      </IDKitWidget>
    </div>
  );
};

export default WorldIDVerification;