import { NextResponse } from "next/server"
import { Client } from "@microsoft/microsoft-graph-client"
import { ClientSecretCredential } from "@azure/identity"

// Initialize the Microsoft Graph client
const credential = new ClientSecretCredential(
  process.env.TENANT_ID!,
  process.env.CLIENT_ID!,
  process.env.CLIENT_SECRET!
)

const client = Client.init({ authProvider: async (done) => {
  try {
    const token = await credential.getToken("https://graph.microsoft.com/.default")
    done(null, token.token)
  } catch (error) {
    done(error as Error, null)
  }
}})

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    const emailMessage = {
      message: {
        subject: `New Contact Form Submission: ${subject}`,
        body: {
          contentType: "HTML",
          content: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          `
        },
        toRecipients: [
          {
            emailAddress: {
              address: "karam_belmo@outlook.com"
            }
          }
        ]
      }
    }

    // Send email using Microsoft Graph API
    await client.api("/users/karam_belmo@outlook.com/sendMail").post(emailMessage)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
} 