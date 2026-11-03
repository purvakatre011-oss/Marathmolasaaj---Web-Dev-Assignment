# MARATHMOLA SAAJ — Editable Website Boilerplate

This is a starter template, not a finished shop. Replace the placeholder copy and image paths with your own brand information.

## Folder structure
- `index.html` — homepage and featured products
- `collection.html` — reusable product card grid
- `gallery.html` — photo gallery and optional video
- `contact.html` — your business information and enquiry form
- `css/style.css` — shared design, responsive layouts and theme colours
- `js/script.js` — mobile navigation, dark/light mode, lightbox and demo form
- `images/products/` — save product photos here
- `images/gallery/` — save gallery photos here

## How to add your own jewellery photos
1. Copy a photo into `images/products/`, for example `thushi-necklace.jpg`.
2. In `index.html` or `collection.html`, change the image path, e.g.:
   `<img src="images/products/thushi-necklace.jpg" alt="Gold-tone Thushi necklace">`
3. Change the `alt` text to describe the actual photo.
4. Change the product name, description, category and price in the same card.
5. For gallery photos, put them in `images/gallery/` and update the matching image path in `gallery.html`.

Use JPG, PNG or WebP images. Keep file names simple (lowercase, no spaces), and use reasonably compressed images for faster loading.

## Add more products
Copy one complete `<article class="product-card"> ... </article>` block in `collection.html`, then edit its photo, alt text, title, category, description and price.

## Add more gallery images
Copy a `<button class="gallery-item" ...> ... </button>` block in `gallery.html`, change the image path and alt text, and update its caption. Keep the `.lightbox` block near the end of the page so the image can open large.

## Update your business information
Search for placeholders such as `YOUR TAGLINE`, `YOUR-EMAIL@example.com`, `YOUR PHONE NUMBER`, `@YOUR-INSTAGRAM-HANDLE`, and `YOUR CITY / BUSINESS ADDRESS` and replace them with your chosen information. Do not publish personal details unless you want them public.

## Important
- The form is only a front-end demo. It displays a confirmation message but does not email or save submissions. Connect a form service or backend to receive real enquiries.
- The map iframe starts blank. Replace it with the embed URL from your map provider, or remove the map section.
- The optional video path is a placeholder. Add your own MP4 in a `media/` folder or remove the video section.
- Images and fonts are local placeholders / external Google Fonts. The site layout and functionality are best checked in a browser, preferably using VS Code Live Server.
