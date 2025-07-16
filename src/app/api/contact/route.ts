import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json()

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await res.json()

    return NextResponse.json(data, { status: res.status })
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Something went wrong', details: error.message },
      { status: 500 }
    )
  }
}
