# Hexagon UI — handoff for your developer

This file is duplicated on the marketing site at `/handoff` during early development. Ship this inside the Gumroad ZIP so buyers know how to pass the purchase to engineering.

## After purchase

1. Download the ZIP from Gumroad (receipt email or library).
2. Unzip and send the folder to whoever owns the frontend integration.
3. Read `README.md` in the kit for stack versions, folder layout, and copy instructions.

## Integration sketch

- Ensure your app already uses **React** and **Tailwind CSS** (or add them per your boilerplate).
- Copy section components into your codebase; resolve import paths to match your alias (`@/` etc.).
- Merge CSS variables in `globals.css` (or your token file) with your existing theme—avoid duplicate `:root` resets where possible.
- Replace marketing copy, links, analytics, and legal text with your production content.

## Showing the UI to stakeholders

If design or leadership wants to see each section before integration, share the public **Blocks** hub on the Hexagon UI marketing site (`/blocks` on the deployed domain — one scrollable page with section anchors). Each dashed frame matches one file under `blocks/` in the ZIP.

## Support

Direct buyers to the contact channel listed on your Gumroad product page.
