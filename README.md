# Clean Theme

This is a multi-purpose theme, ideal for cosmetic, clothing, or fashion industries.

<img width="1275" alt="clean_theme_image_text_overlay" src="https://github.com/GetStoreConnect/clean-theme/assets/77841884/87bb29b7-f936-4db4-b8c7-f06be5255dc5">

## Configuration

- Upload it via the theme importer
- Preview your theme

Please follow these steps to ensure your theme templates are correctly uploaded and updated:

### 1. Verify Existing Templates

Go to your theme’s `resources` directory and check if the following templates are already present:

- `resources/dist/manifest.json`
- `resources/dist/scripts/featured-slider-JG578YU.js`
- `resources/dist/styles/tns-icon-TR56D3Z.css`

If these templates are missing, you’ll need to add them manually.

### 2. Manually Add the Missing Templates

- Navigate to the theme templates section
- Add the missing templates listed above to your `resources` directory

### 3. Unzip and Update Your Theme

- Unzip your theme package
- Locate each of the required templates within the unzipped files
- Update the content of each template to match the new files accordingly

## Directory Structure

We have developed this theme using the [Base Theme](https://github.com/GetStoreConnect/base-theme) as a boilerplate. The Clean theme doesn't contain all the base theme structure, we only include those customised, modified and new templates, snippets, variables or translations. Feel free to create a brand new theme using the base theme.

## New Templates

You can create new templates as long as they reside within the standard directory structure.

## Features

<img width="1146" alt="featured_categories_slider" src="https://github.com/GetStoreConnect/clean-theme/assets/77841884/90d001bb-c475-49bd-b3a2-90671c1b8566">

- New card carousels for featured categories, products, or filtered products
- New content template that renders one category only. This is ideal if you want to showcase products that are part of a given category you want to promote. It also helps to keep your org organized systematically.
- Jost font to provide a minimalistic style. You can change the font in a more efficient way to improve your SEO performance.
- Single product card to showcase a specific product
- Multi-purpose cards
- New featured articles design
- Compacted articles for better readability
- Sign-up to newsletter form template to adjust it to any third-party provider
- Sticky header
- Compiled and minified CSS and JS
- Uses StoreConnect CSS framework significantly reducing custom theme CSS
- Accordion tabs ideal for content blocks sections on the product page, but they can also be used in any content block and page content.
- Automated tab panel for features, specifications, downloads, warranty, and support tabs (it can be removed to use default accordions and sections)

### New Content Blocks

- accordion_tab
- container_skinny `80%` max width
- filtered_products
- single_card
- single_product_card

### Modified Content Blocks

- container
- featured_articles
- featured_categories
- single_card

## How to Add Content Blocks to Picklist

You can follow the instructions in this document to [add content blocks to the picklist](https://help.getstoreconnect.com/documentation/adding-templates-to-content-template-picklist.html).

### Recommended Help Articles

- StoreConnect [Theme Builder Reference](https://help.getstoreconnect.com/documentation/themes/theme-reference.html)
- StoreConnect [Liquid Reference](https://help.getstoreconnect.com/documentation/liquid/liquid-reference.html)
