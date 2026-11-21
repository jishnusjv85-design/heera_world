# Heera World Foundation website

React + Vite website with a more focused, editorial presentation of the foundation and its Motherhood Home (Ammaveedu) initiative.

## Development
Requires Node.js 20 or later.

```sh
npm install
npm run build
npm run dev
```

## Pages
Home, About, Management, Gallery, Ammaveedu, Contact, and Donations. Site content is maintained in `src/data/site.js`; real images are in `public/media/`.

## Contact form setup (required)
The form submits to `/api/contact`, a Vercel serverless function that sends messages through Resend. Configure these **server-side environment variables** in Vercel:

- `RESEND_API_KEY`: your Resend API key
- `CONTACT_FROM_EMAIL`: sender address on a domain verified in Resend
- `CONTACT_TO_EMAIL`: the foundation's verified receiving address

Until configured, the form shows a clear error rather than claiming to have delivered a message. **Do not commit credentials.** The form requires server-side rate limiting / abuse monitoring for high-traffic production use. Confirm email deliverability and test a real enquiry after deployment.

## Donation details
The website displays the bank information already in the repository; no payment gateway is integrated. Confirm the account and tax documentation directly with the foundation before publishing.

## Editorial verification
The previous content contained broad statewide impact and numerical claims that were not supported by documentation in the repository. The new Home and About pages do not present those claims as verified. Review the remaining original source data, registration information, photo consent/rights, social links, and Malayalam news captions before production use.

## Deployment
Vercel: import the GitHub repository, use the Vite preset, set the three environment variables above, and deploy. `vercel.json` preserves SPA navigation while routing `/api/*` to serverless functions.

## QA checklist
- Build with `npm run build`
- Check each page at mobile and desktop widths
- Test keyboard navigation, gallery controls, and Escape key
- Test successful and failed contact submissions on Vercel
- Verify donation and contact details with the foundation
- Run accessibility, SEO, and performance audits on the deployed preview
