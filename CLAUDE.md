# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based portfolio website for HyperEcho AI, an AI automation agency. The site uses the "Gerous" Jekyll theme customized for showcasing AI automation services, testimonials, and blog content.

## Common Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Run the site locally
bundle exec jekyll serve
# OR
jekyll serve

# Build the site
bundle exec jekyll build
```

### Bundler Configuration
The project has a `.bundle/config` that excludes the `wdm` gem (Windows Directory Monitor) to avoid compilation issues in the CI environment.

## Architecture & Structure

### Jekyll Collections
The site uses three main collections defined in `_config.yml`:
- **Pages** (`_pages/`): Static pages like About, Contact, Tags
- **Posts** (`_posts/`): Blog articles about AI automation
- **Projects** (`_projects/`): Portfolio projects (currently disabled in settings)

### Key Configuration Files
- `_data/settings.yml`: Main site configuration including services, testimonials, FAQ content, and all customizable text
- `_config.yml`: Jekyll build settings, collections, and URL structure
- `Gemfile`: Ruby dependencies

### Template Structure
- **Layouts** (`_layouts/`): Page templates (default, page, post, project)
- **Includes** (`_includes/`): Reusable components for sections like hero, services, testimonials, FAQ
- **Sass** (`_sass/`): Organized in BEM-style structure:
  - `0-settings/`: Variables, colors, mixins
  - `1-tools/`: Utilities, grid, normalize
  - `2-base/`: Base styles
  - `3-modules/`: Component styles
  - `4-layouts/`: Layout-specific styles

### Content Management
Most content is controlled through `_data/settings.yml` rather than hardcoded in templates:
- Site metadata and branding
- Navigation menus
- Service offerings and descriptions
- Testimonials and client feedback
- FAQ section
- Social media links

### JavaScript Components
- `theme-handler.js`: Dark/light mode toggle
- `cal-embed.js`: Calendar booking integration
- `google-analytics.js`: Analytics tracking
- `common.js` & `scripts.js`: General site functionality

## Deployment

The site auto-deploys to GitHub Pages via GitHub Actions (`.github/workflows/jekyll.yml`) on pushes to the main branch. The workflow:
1. Sets up Ruby 3.1 environment
2. Installs dependencies with specific bundle configurations
3. Builds the Jekyll site
4. Deploys to GitHub Pages

## Development Notes

- The site is configured for GitHub Pages hosting
- Dark/light mode functionality is built-in
- No jQuery dependency - uses vanilla JavaScript
- Responsive design with mobile optimization
- Integration points for Formspree (contact forms), MailChimp (newsletter), Disqus (comments), and Google Analytics