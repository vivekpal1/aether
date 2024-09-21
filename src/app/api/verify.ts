import { NextResponse } from 'next/server';
import { verifyCloudProof, IVerifyResponse } from '@worldcoin/idkit';

export async function POST(request: Request) {
  try {
    const proof = await request.json();
    const app_id = process.env.WORLD_ID_APP_ID;
    const action = process.env.WORLD_ID_ACTION;

    if (!app_id || !action) {
      throw new Error('WORLD_ID_APP_ID or WORLD_ID_ACTION not set');
    }

    const verifyRes = await verifyCloudProof(proof, app_id, action) as IVerifyResponse;

    if (verifyRes.success) {
      return NextResponse.json({ success: true, message: 'Verification successful' });
    } else {
      return NextResponse.json({ success: false, message: 'Verification failed', error: verifyRes }, { status: 400 });
    }
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}