# NDLSK B2B Leads

Most B2B websites do not fail because the offer is bad. They fail because the offer is hard to understand.

A visitor lands on the page and has to figure out too much at once: what the product does, who it is for, what they actually get, why it is better than doing the work manually, how the pricing works, and whether the service feels trustworthy enough to try.

**NDLSK B2B Leads** is based on a real client project and presented here as a public portfolio case. It turns a lead-research and prospecting service into a complete product-style marketing website: clear positioning, a guided homepage, pricing, custom-list messaging, testimonials, FAQs, contact flow, and a full-service path for higher-touch clients.

This was not just a static website build. The work was about shaping the offer into a structured marketing system: clear pages, reusable sections, practical conversion paths, supporting proof, SEO/social metadata, and a front-end architecture that could be maintained, extended, and deployed as a production-ready static site.

## Live demo

[View the project](https://serhii-nadolskyi.github.io/ndlsk-b2b-leads/)

## The problem

Finding useful B2B prospects takes time. Teams often have to deal with generic databases, unclear fit, outdated company information, missing decision-makers, duplicate records, messy spreadsheets, and too much manual work before they can even start a real campaign.

The website turns that frustration into a clear offer:

- recurring lead reports for teams that want a steady pipeline;
- custom lead lists for more specific ideal-customer profiles;
- a full-service option for businesses that want the process handled more closely;
- pricing, proof, and FAQs that reduce uncertainty before the visitor makes contact.

The goal was to make the service feel understandable, structured, and ready to use — not like a vague “we can help you grow” agency page.

## What the site includes

The project is built as a multi-page B2B website, where each page supports a different part of the buying journey.

### Home

The homepage introduces the core value proposition, explains how the service works, shows company logos, includes testimonials, lists the main data points, and pushes visitors toward pricing or custom lists.

It is structured as a sales flow, not as a random set of blocks: problem, promise, proof, explanation, value, and next step.

### Pricing

The pricing page compares monthly and yearly options, shows plan differences, explains what is included, makes missing features clear, and introduces the higher-ticket full-service option.

The goal is not only to display prices, but to help the visitor understand which plan fits their situation.

### Custom Leads

The custom leads page focuses on tailored prospect research. It explains the ICP-based process, the kinds of filters a client can use, the data they receive, and the expected delivery flow.

This page exists because not every customer fits into a subscription-style offer. Some need a more specific list for a specific campaign.

### Full Service Agency

The full-service page presents a more managed version of the offer: onboarding, account support, campaign setup, reporting, and flat monthly pricing.

It gives the project a wider business model: not only a productized subscription, but also a higher-touch service path.

### FAQs

The FAQ page handles important objections and practical questions around data, decision-makers, subscriptions, databases, discounts, cancellation, and how the service is supposed to work.

For a B2B site, this matters because many visitors are not ready to contact someone until their basic doubts have already been answered.

## What this project demonstrates

This project shows both product thinking and front-end implementation.

On the product and content side, it demonstrates:

- turning a practical business pain into a clear website narrative;
- organizing a B2B offer into multiple conversion paths;
- structuring pages around visitor intent;
- using pricing, testimonials, FAQs, and CTAs to reduce friction;
- presenting a service/product hybrid without making the site feel scattered;
- thinking about the full customer journey instead of only the visual layer.

On the technical side, it demonstrates:

- modular static-site development with Gulp;
- reusable HTML includes for repeated sections and components;
- page-level SCSS entry files;
- shared variables, global styles, layout styles, and block styles;
- production output in `dist`;
- page-specific SEO, canonical, Open Graph, and Twitter metadata;
- responsive navigation;
- static hosting through GitHub Pages.

## Architecture

The source is organized around reusable building blocks rather than one-off pages.

```text
src/
  html/              # Page templates
  includes/          # Shared layout, footer, blocks, and components
  scss/              # Variables, global styles, layout, page styles, block styles
  assets/            # Images, icons, logos, media, favicon

dist/                # Generated production site
```

Page templates use `@@include` to pass content into shared components. This keeps the pages readable while making repeated sections reusable across the site: hero sections, pricing cards, review blocks, FAQ accordions, text/image sections, company-logo sections, and CTA blocks.

SCSS follows the same idea. Each page has its own entry file and imports the shared styles and block styles it needs. This keeps the styling modular and makes the relationship between a page and its sections easier to follow.

## Build system

The project uses a Gulp pipeline to turn the source files into a static production site.

The build process:

- compiles SCSS into CSS;
- creates minified CSS files;
- builds HTML pages from file includes;
- copies static assets into `dist`;
- serves the project locally from `dist`;
- watches source files during development and reloads changes.

## Getting started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

The generated site is written to `dist/`.

## Tech stack

- HTML
- SCSS / Sass
- Gulp 5
- gulp-file-include
- gulp-clean-css
- gulp-connect
- gulp-livereload
- BrowserSync
- GitHub Pages / static hosting

Built by [Serhii Nadolskyi](https://ndlsk.com/).
