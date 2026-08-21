# Sumiaya Aiman Portfolio

A production-ready, responsive portfolio built for client acquisition and Upwork positioning. It presents verified experience, projects, education, certifications, MERN stack capability, and update-ready marketplace metrics.

## Included

- Premium light and dark themes with saved visitor preference
- Responsive desktop, tablet, and mobile layouts
- Client-focused hero, about, services, project, skills, experience, education, certification, Upwork profile, and contact sections
- Downloadable resume and optimized project/credential images
- Email-based project inquiry form with no third-party data collection
- SEO metadata, canonical URL, Open Graph/X card, and Person structured data
- Accessible labels, keyboard-friendly controls, and reduced-motion support

## Local setup

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local URL shown in the terminal.

### Windows quick start

Open the extracted portfolio folder in VS Code, then run these commands in the integrated terminal:

```powershell
npm install
npm run dev
```

The development script is cross-platform and works in Command Prompt, PowerShell, macOS, and Linux. Vite will print the local address, normally `http://localhost:5173`.

Production check:

```bash
npm run build
```

## Deploy

### Vercel

1. Import the repository into Vercel.
2. Keep the detected framework as Next.js.
3. Deploy. `vercel.json` runs the standard `npm run build` command.

### Netlify

1. Import the repository into Netlify.
2. Netlify reads `netlify.toml` and runs the standard Next.js build.
3. Deploy after confirming the generated site URL.

### Command-line deployment

```bash
npm install -g vercel@latest
vercel login
vercel --prod
```

This exported package uses standard Next.js commands and does not require Sites, Vite, Wrangler, or an `.openai` configuration file.

## Update content

Most portfolio content lives in one file: `app/content.ts`.

- Profile and social links: edit `profile`.
- Upwork profile: update the URL in `profile.upwork` when needed.
- Services: edit the `services` array.
- Projects and repository links: edit `projects`.
- Skills: edit `skillGroups`.
- Experience, education, and certificates: edit their matching arrays.

## Replace assets

- Portrait: `public/images/sumiaya-aiman.jpg`
- Resume: `public/Sumiaya_Aiman_Resume.pdf`
- Projects: `public/images/projects/`
- Certificates: `public/images/certificates/`
- Social preview: `public/og.png`

When replacing an image, keep the existing filename to avoid code changes. Use compressed WebP images for project and credential previews.

## Contact form behavior

The form prepares a structured email and opens the visitor's email application. To use a hosted form provider later, replace `handleContact` in `app/page.tsx` with the provider's submission call and keep the current fields and validation.
