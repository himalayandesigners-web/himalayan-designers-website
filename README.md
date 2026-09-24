# Himalayan Designer’s — GitHub + Cloudflare Pages

This is the redesigned premium storefront. The refined header uses the supplied HD mark, a cleaner wordmark, and a mobile menu. The top menu opens four separate pages: `collection.html`, `craft.html`, `process.html`, and `contact.html`. Product cards open `product.html` for the selected item. No npm install, build step, database or server is needed. The actual website files are in `docs/`.

## Publish with your GitHub repo and Cloudflare Pages

1. Extract this ZIP. Upload **the `docs` folder and this README** to the root of a new GitHub repository on the `main` branch.
2. In Cloudflare: **Workers & Pages → Create application → Pages → Connect to Git**. Select that GitHub repository.
3. Set production branch to `main`, framework preset to **None**, leave **Build command** blank (or use `exit 0` if the UI requires a command), and set **Build output directory** to `docs`. Then deploy.
4. In your Pages project, open **Custom domains → Set up a custom domain** and enter the domain or subdomain you already own. Follow the DNS instructions shown for your domain. Do not point the domain to the old preview URL.

If you want to use GitHub Pages instead, select **Settings → Pages → Deploy from a branch → `main` / `docs`**. The same files work there too.

## Edit before launch

- `docs/app.js`: edit `PRODUCTS` for catalog names, descriptions and the extra product guidance. Each product link opens `docs/product.html?id=<product-id>`. The WhatsApp destination is `919634888987` in the `checkout` function. Update the same number in WhatsApp links in `docs/index.html` and `docs/product.html` if needed.
- `docs/index.html`, `docs/collection.html`, `docs/craft.html`, `docs/process.html`, `docs/contact.html`, and `docs/product.html`: edit page copy, contact information and links.
- `docs/favicon.ico` and `docs/assets/apple-touch-icon.png`: browser-tab and phone home-screen icons made from the supplied HD mark.
- `docs/assets/`: original card-derived HD mark and catalog visuals. The architectural images are conceptual examples; replace them with client project photography when available.
- No prices were invented: all items are custom quote. Customer adds items to cart, enters details, taps Place order, and WhatsApp opens with a prefilled message. Customer must tap **Send** in WhatsApp. Final price, payment and order confirmation are discussed with your team; there is no online payment gateway.
- Cart stays in the visitor’s own browser on that device. Product photos are visual examples and should be replaced with the client’s real project photos when available.

## Local preview

Open `docs/index.html` in a browser, or serve the `docs` folder through any static file server. No installation is required.
