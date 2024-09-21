import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const tokenResponse = await fetch('https://id.worldcoin.org/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${process.env.WORLD_ID_CLIENT_ID}:${process.env.WORLD_ID_CLIENT_SECRET}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/worldcoin`,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for token');
    }

    const tokenData = await tokenResponse.json();

    const userInfoResponse = await fetch('https://id.worldcoin.org/userinfo', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
      },
    });

    if (!userInfoResponse.ok) {
      throw new Error('Failed to fetch user info');
    }

    const userData = await userInfoResponse.json();
    
    const userDataParam = encodeURIComponent(JSON.stringify(userData));
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard?user=${userDataParam}`);

  } catch (error) {
    console.error('Error in World ID callback:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}