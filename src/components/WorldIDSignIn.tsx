import React, { useState } from 'react';
import { useRouter } from 'next/router';

const WorldIDSignIn: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    
    const clientId = process.env.NEXT_PUBLIC_WORLD_ID_CLIENT_ID;
    const redirectUri = `${window.location.origin}/api/auth/callback/worldcoin`;
    
    const params = new URLSearchParams({
      client_id: clientId || '',
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'openid email profile',
    });

    const authUrl = `https://id.worldcoin.org/authorize?${params.toString()}`;
    
    window.location.href = authUrl;
  };

  return (
    <button
      onClick={handleSignIn}
      disabled={isLoading}
      className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {isLoading ? 'Signing in...' : 'Sign in with World ID'}
    </button>
  );
};

export default WorldIDSignIn;