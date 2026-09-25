# Himalayan Designer’s — GitHub + Cloudflare Pages

This is the redesigned premium storefront. The header and footer use the updated client logo (white artwork on the dark site background). The mobile menu is unchanged. The top menu links to the laser cutting service page, collection, craft, process and contact pages. Product cards open `product.html` for the selected item. No npm install, build step, database or server is needed. The actual website files are in `docs/`.

## Publish with your GitHub repo and Cloudflare Pages

1. Extract this ZIP. Upload **the entire updated `docs` folder and this README** to the root of your existing GitHub repository on the `main` branch, replacing the older site files, and commit the changes. Keep `docs/index.html` at that exact path (not `docs/docs/index.html`).
2. Your existing Cloudflare Pages project is connected to that GitHub repository. A commit to `main` triggers a deployment automatically. Keep the production branch `main`, framework preset **None**, build command blank, and build output directory `docs`.
3. Once deployment succeeds, check your existing custom domain `https://himalayandesigners.in/`. You do not need to create another Pages project or add the domain again.

If you want to use GitHub Pages instead, select **Settings → Pages → Deploy from a branch → `main` / `docs`**. The same files work there too.

## Edit before launch

- `docs/app.js`: edit `PRODUCTS` for catalog names, descriptions and the extra product guidance. Each product link opens `docs/product.html?id=<product-id>`. The WhatsApp destination is `919634888987` in the `checkout` function. If the phone number changes, update every `wa.me/` link in the HTML pages and the number in `docs/app.js`.
- `docs/index.html`, `docs/collection.html`, `docs/craft.html`, `docs/process.html`, `docs/contact.html`, and `docs/product.html`: edit page copy, contact information and links.
- `docs/hd-favicon.ico` and `docs/assets/hd-apple-touch-icon.png`: browser-tab and phone home-screen icons made from the new logo symbol.
- `docs/assets/`: the updated logo, original client artwork (`client-logo-original.png`), and catalog visuals. The architectural images are conceptual examples; replace them with client project photography when available.
- No prices were invented: all items are custom quote. Customer adds items to cart, enters details, taps Place order, and WhatsApp opens with a prefilled message. Customer must tap **Send** in WhatsApp. Final price, payment and order confirmation are discussed with your team; there is no online payment gateway.
- Cart stays in the visitor’s own browser on that device. Product photos are visual examples and should be replaced with the client’s real project photos when available.

## Local preview

Open `docs/index.html` in a browser, or serve the `docs` folder through any static file server. No installation is required.

Location links: the address in every page footer and the Visit address on the Contact page open a Google Maps search for the workshop address in a new tab.

## Local search setup after deployment

The site now includes a Dehradun CNC laser cutting service page, distinct page titles/descriptions, canonical URLs on the static content pages, LocalBusiness JSON-LD on the home and contact pages, a sitemap and robots.txt. Cloudflare Pages serves `/contact.html` at `/contact`, so the canonical URLs and sitemap use extension-free addresses. The product detail page is client-rendered and has no static canonical because its query parameter selects the product.

After the new GitHub commit deploys, open https://himalayandesigners.in/sitemap.xml and https://himalayandesigners.in/cnc-laser-cutting-dehradun. In Google Search Console, verify the domain and submit `sitemap.xml` under Sitemaps; inspect/request indexing for the home page and the service page. Claim or update the Google Business Profile with the same business name, address, telephone, website, category, hours and real project photos. The ZIP cannot verify those account settings. Search ranking is determined by Google and is not guaranteed by these code changes.

## Favicon refresh

The HTML pages reference new `hd-favicon-*` URLs and `hd-favicon.ico` so old browser-cached icons are bypassed. Deploy the entire updated `docs` directory, including the new files. Existing `favicon.ico` remains the new client symbol for browsers that fetch the default path. Browser or search-engine caches can take time to update.

## Check the latest update

The footer now gives the complete logo a fixed responsive width. All HTML pages request `styles.css?v=8`, `app.js?v=7` and refreshed logo URLs; the product card is named **UPVC Windows** in `docs/app.js`. Upload and commit the entire `docs` folder to the connected GitHub repository. Confirm that Cloudflare Pages reports the latest commit as deployed, then reload the custom domain. If the old text still appears, check that the live page source contains `app.js?v=7`: if it does not, the updated HTML has not reached the live site yet.

## Project gallery

`docs/gallery.html` displays selected client photos from `docs/assets/gallery/`. The home page links to it. The gallery offers category filters and a keyboard-accessible full-size photo viewer. Push the updated `docs/` files to the existing GitHub repository on its production branch to trigger the Cloudflare Pages deployment. Keep the Cloudflare Pages build output directory set to `docs`.

The gallery has a uniform 4:5 image crop in the grid and home preview. Opening a photo shows its uncropped original. The gallery is designed for three columns on desktop and two columns on mobile.
