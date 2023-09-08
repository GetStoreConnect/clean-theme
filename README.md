# Clean Theme

This is a multi-purpose theme, ideal for cosmetic, clothing, or fashion industries.

<img width="1275" alt="clean_theme_image_text_overlay" src="https://github.com/GetStoreConnect/clean-theme/assets/77841884/87bb29b7-f936-4db4-b8c7-f06be5255dc5">


## Directory Structure

This theme has a specific folder structure. Some folders may be empty, but they need to remain part of the theme structure as they are not overridden or used for new templates.

Also, it has been developed using the [Base Theme](https://github.com/GetStoreConnect/base-theme) as a boilerplate. The Clean theme doesn't contain all the base theme structure, we only include those customised, modified and new templates, snippets, variables or translations. Feel free to create a brand new theme using the base theme.

## Theme Installer

The theme installer is in your Salesforce org, where you must upload this theme as a zip file. Before uploading, remove the .git directory and README.md file from this repo. The theme installer displays errors if it does not find the standard directory structure.

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

## Configuration

- Ensure that your root directory does not contain any `.git` hidden folders or files
- Compress it to a zip file
- Upload it via the theme importer
- Now, go to the theme template list and remove the `.liquid` on each template
- Rename
  - snippets/products/card/simple_card > snippets/products/simple_card
  - snippets/products/card/card > snippets/products/card
- Preview your theme

### Recommended Help Articles

- StoreConnect [Theme Builder Reference](https://help.getstoreconnect.com/documentation/themes/theme-reference.html)
- StoreConnect [Liquid Reference](https://help.getstoreconnect.com/documentation/liquid/liquid-reference.html)
