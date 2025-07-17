/**
 * Authentication configuration using NextAuth.js
 * This file sets up Google OAuth authentication for the application
 */

// Import the NextAuth library
import NextAuth from "next-auth"
// Import Google OAuth provider
import Google from "next-auth/providers/google"

// Configure and export NextAuth handlers and auth function
export const { handlers, auth } = NextAuth({
    providers: [
        // Set up Google authentication provider
        Google({
            // Use environment variables for secure credential storage
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
})