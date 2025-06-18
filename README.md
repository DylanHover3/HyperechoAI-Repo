# HyperEcho AI Website

HyperEcho AI is an AI automation agency specializing in creating innovative AI solutions to help businesses thrive in the digital age. Our mission is to find under-optimized processes and transform them into efficient, AI-powered workflows that save time, reduce costs, enhance productivity, and unlock potential.

## About HyperEcho AI

We specialize in transforming business operations through cutting-edge AI automation solutions, including:

- **Lead Generation Automation** - AI-driven tools for prospect identification and nurturing
- **CRM Automation** - Intelligent customer relationship management systems
- **AI Chatbots & Virtual Assistants** - 24/7 customer support and engagement
- **Hiring Automation** - Streamlined recruitment with AI-powered screening
- **Email Automation** - Personalized marketing and communication workflows
- **Custom AI Agents** - Tailored solutions for specific business needs

## Technical Architecture

This website is built using Jekyll and customized from the Gerous theme. Below are the technical details for developers:

### Tech Stack

- **Static Site Generator**: Jekyll 4.3.2
- **CSS Framework**: Custom SCSS with BEM methodology
- **JavaScript**: Vanilla ES6+ (no jQuery dependency)
- **Hosting**: GitHub Pages compatible
- **Analytics**: Google Analytics ready
- **Performance**: Optimized for high Lighthouse scores

### Key Features

- **Modern Security**: Content Security Policy (CSP) implementation
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox
- **Dark/Light Mode**: User preference with system detection
- **Form Integration**: Custom webhook submission to Make.com
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Performance**: Lazy loading, optimized images, and minimal JS

### Development Commands

```bash
# Install dependencies
bundle install

# Run development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

### Architecture Overview

```
├── _data/settings.yml          # Site configuration and content
├── _includes/                  # Reusable components
│   ├── section-hero.html
│   ├── section-automation-services.html
│   ├── section-quote-form.html
│   └── head.html
├── _layouts/                   # Page templates
├── _sass/                      # SCSS organized by ITCSS methodology
│   ├── 0-settings/            # Variables and configuration
│   ├── 1-tools/               # Mixins and functions
│   ├── 2-base/                # Base styles
│   ├── 3-modules/             # Component styles
│   └── 4-layouts/             # Layout-specific styles
├── js/                        # JavaScript modules
│   ├── webhook-form-handler.js # Form submission logic
│   └── theme-handler.js       # Dark/light mode toggle
└── CLAUDE.md                  # Development guidelines for AI assistance
```

### Form Integration

The quote form uses a modern webhook approach instead of traditional form processors:

- **Client-side**: Vanilla JavaScript with fetch API
- **Data Format**: Clean JSON payload with validation
- **Endpoint**: Make.com webhook for automation workflows
- **Security**: CSP-compliant with proper error handling
- **UX**: Async submission with immediate feedback

### Content Management

Most content is managed through `_data/settings.yml` for easy updates:

- Service descriptions and features
- Testimonials and client feedback
- FAQ sections
- Contact information
- Social media links

### Security Implementation

- **CSP Headers**: Restrictive Content Security Policy
- **HTTPS Only**: Secure connections enforced
- **No Inline Scripts**: All JavaScript in external files
- **XSS Protection**: Content-Type and X-Frame-Options headers

### Performance Optimizations

- **Critical CSS**: Inlined critical path styles
- **Font Loading**: Preload and display swap strategies
- **Image Optimization**: Responsive images with proper sizing
- **JavaScript**: Minimal, async-loaded where possible
- **Caching**: Static asset optimization for CDN delivery

## Local Development

1. Ensure Ruby and Jekyll are installed
2. Clone the repository
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` for development server
5. Visit `http://localhost:4000` to view the site

## Deployment

The site is configured for GitHub Pages automatic deployment:

- Pushes to `main` branch trigger builds
- GitHub Actions workflow handles Jekyll compilation
- Static files are served from the `_site` directory

## Contact

For technical inquiries or business automation needs, visit our website or contact us directly through the quote form.

---

_Built with Jekyll • Powered by AI Automation • Optimized for Performance_
