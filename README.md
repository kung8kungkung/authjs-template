# Next.js + Auth.js Authentication Template

This [`next.js`](https://nextjs.org/) project provides a foundational setup for integrating [`auth.js`](https://authjs.dev/) into your application to enable authentication functionalities and streamline your project development. Auth.js supports various authentication methods with numerous mainstream providers, simplifying the integration process when multiple methods are required.

The demo showcases:

- The basic sign-in/sign-out flow
- Restricted user access [ref](https://authjs.dev/guides/restricting-user-access)
- Accessing session data
- Customizing the default theme for the sign-in page

## Getting Started

1. Install dependencies

```bash
bun install
```

2. Set Up Environment Variables

```bash
cp .env.local.example .env.local
```

- `BASE_URL` (**optional**) - Used for sign-in success redirection. Adjust this based on your domain setup. It is not mandatory for integrating auth.js.

- `AUTH_SECRET` (**required**) - Generate a secure key using openssl rand -base64 33 or any other secure method.

- `AUTH_GOOGLE_*` (**optional**) - Refer to the [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) documentation to obtain credentials for Google OAuth 2.0.
  For detailed instructions, check the Auth.js [guide](https://authjs.dev/getting-started/providers/google).

3. Start the Development Server

```bash
bun dev
```

4. Open [the local server](http://localhost:3000) and click Sign In. After signing in with Google, you will be redirected to /dashboard and see your email.

## License

MIT
