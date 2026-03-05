import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, location, product, quantity, timeline, details } = body;

    // Validate required fields
    if (!name || !phone || !product) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email configuration
    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "piyushkumars083@gmail.com";

    // Create email content
    const emailContent = `
New Contact Form Submission from Piyush GRC Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Location: ${location || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Product Interest: ${product}
Quantity: ${quantity || "Not specified"}
Timeline: ${timeline || "Not specified"}

Project Description:
${details || "No additional details provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `.trim();

    // Send email using Resend (if configured)
    if (process.env.RESEND_API_KEY) {
      const { Resend } = require("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: process.env.SENDER_EMAIL || "onboarding@resend.dev",
        to: RECIPIENT_EMAIL,
        subject: `New Quote Request: ${product} - ${name}`,
        text: emailContent,
      });

      return NextResponse.json({
        success: true,
        message: "Email sent successfully",
      });
    }

    // Fallback: Log to console if email service not configured
    console.log("📧 NEW FORM SUBMISSION:");
    console.log(emailContent);

    return NextResponse.json({
      success: true,
      message: "Form received (email service not configured)",
    });

  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
