# Auth.js Sign-In Template

This project provides a foundational setup for integrating [`auth.js`](https://authjs.dev/) into your application to enable authentication functionalities and streamline your project development. Auth.js supports various authentication methods with numerous mainstream providers, simplifying the integration process when multiple methods are required.

The demo showcases:

- The basic sign-in/sign-out flow
- Accessing session data
- Customizing the default theme for the sign-in page

## 🚀 Getting Started

1. Install dependencies

```bash
bun install
```

2. Prepare environment variables

```bash
cp .env.local.example .env.local
```

- `AUTH_SECRET` (**required**) - `openssl rand -base64 33` or any other secured way
- `AUTH_GOOGLE_*` (**optional**) - go to [Google OAuth 2.0 official document](https://developers.google.com/identity/protocols/oauth2) and learn how to apply a credentials to leverage google oauth 2.0.
  - For more details, please check out the Auth.js [guide](https://authjs.dev/guides/configuring-github)

3. Start dev server

```bash
bun dev
```

4. Open [the local server](http://localhost:3000) and click Signin. After signin with google, you will be redirected to /dashboard and see your email

## 📝 License

MIT
