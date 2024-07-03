import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Email from '@/emails/index';

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export async function POST(request) {
    const { name, email, company, budget, message } = await request.json()
    await resend.emails.send({
        from: email,
        to: 'ahmedabro97@gmail.com',
        subject: 'A new project from portfolio',
        react: <Email name={name} email={email} company={company} budget={budget} message={message} />,
      });

    return NextResponse.json({
        status: "Ok"
    }) 
}
