# Sara's Professional Portfolio 🎨

A stunning, fully-responsive portfolio website for Sara Khalifa - Full-Stack Web Developer. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS with beautiful animations and bilingual support (Arabic & English).

## ✨ Features

### 🎭 Design & UX
- **Beautiful Purple/Violet Color Scheme** - Modern gradient design throughout
- **Animated Orbiting Icons** - Icons rotate around the profile image
- **Smooth Animations** - Floating elements, transitions, and scroll effects
- **Dark Mode Support** - Full theme switching capability
- **Fully Responsive** - Mobile-first design that works on all devices
- **Bilingual Support** - English and Arabic language switching
- **Modern Logo** - Professional SK branding

### 📱 Complete Sections
1. **Home/Hero** - Engaging introduction with animated profile
2. **About** - Professional summary and USP
3. **Education** - Academic background and certifications
4. **Skills** - Technical expertise with proficiency levels
5. **Experience** - Professional training and internships
6. **Services** - Full-Stack, Frontend, and API services
7. **Projects** - 4 featured projects with descriptions
8. **Achievements** - Milestones and statistics
9. **Testimonials** - 6 professional testimonials
10. **Pricing** - Service pricing tiers
11. **Contact** - Contact form and information

## 🚀 Quick Start

### Installation
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
pnpm start
```

### Access the Portfolio
- Main Portfolio: `http://localhost:3000`
- Pricing Page: `http://localhost:3000/pricing`

## 📁 Project Structure

```
/app
  ├── page.tsx                 # Main portfolio page
  ├── pricing/page.tsx        # Pricing page
  ├── layout.tsx              # Root layout with providers
  └── globals.css             # Global styles with theme variables

/components
  ├── header.tsx              # Navigation header with theme toggle
  ├── hero.tsx                # Hero section with orbiting icons
  ├── about.tsx               # About me section
  ├── education.tsx           # Education & certifications
  ├── skills.tsx              # Technical skills
  ├── experience.tsx          # Work experience
  ├── services.tsx            # Services offered
  ├── projects.tsx            # Featured projects
  ├── achievements.tsx        # Achievements & stats
  ├── testimonials.tsx        # Client testimonials
  ├── contact.tsx             # Contact form
  ├── pricing.tsx             # Pricing plans
  ├── footer.tsx              # Footer with links
  └── providers.tsx           # Theme provider setup
```

## 🎨 Theme & Colors

The portfolio uses a sophisticated purple and violet color scheme:

```css
/* Light Mode */
Primary: #8b5cf6 (Purple)
Secondary: #a855f7 (Violet)
Accent: #c084fc (Light Violet)
Background: #f8f6fc (Off-white)
Foreground: #1a0d2e (Dark Purple)

/* Dark Mode */
Primary: #a855f7 (Violet)
Secondary: #c084fc (Light Violet)
Background: #0f0a1a (Deep Purple)
Foreground: #f3f0f7 (Light Text)
```

## ⚙️ Key Technologies

- **Framework**: Next.js 16
- **React**: React 19 with hooks
- **Styling**: Tailwind CSS 4.2
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **Animations**: CSS animations + Tailwind

## 🎬 Animations

### Implemented Animations
1. **Floating Animation** - Profile section floats smoothly
2. **Orbiting Icons** - 3 icons orbit around profile image
3. **Glow Pulse** - Profile image has pulsing glow effect
4. **Shimmer Effect** - Background shimmer animations
5. **Hover Effects** - Cards and buttons scale and glow on hover
6. **Slide Animations** - Sections slide in on load
7. **Smooth Transitions** - All interactions use smooth CSS transitions

## 🌐 Bilingual Support

The portfolio automatically switches between:
- **English** - Default language
- **Arabic** - RTL support included

Toggle language using the globe icon in the header.

## 🌓 Dark Mode

Click the sun/moon icon in the header to toggle between light and dark modes. The preference is saved in local storage.

## 📝 Content Sections

### Hero Section
- Animated greeting and headline
- CTA buttons for projects and contact
- Quick stats (5+ Projects, 120+ Hours, 10+ Skills)
- Orbiting tech icons animation

### Skills Section
- Frontend: HTML5, CSS3, JavaScript, TypeScript, React.js, Bootstrap, Tailwind
- Backend: Node.js, Express.js, RESTful APIs, MongoDB
- Tools: Git, GitHub, VS Code, Figma to Code

### Projects Featured
1. News Web Application
2. To-Do List Application
3. E-Commerce Store
4. Salary Calculator Application

### Testimonials
6 professional testimonials with ratings and contact info

### Services
- Frontend Development
- Full-Stack Applications
- API Integration

### Pricing Plans
- Starter: $499/project
- Professional: $1,299/project (Most Popular)
- Enterprise: Custom quote

## 📧 Contact Integration

The contact form includes:
- Name, Email, Subject, Message fields
- Form validation
- Success feedback
- Direct email link (sarakhalifa2024@gmail.com)
- Phone: +20 112 827 3856
- LinkedIn & GitHub integration

## 🔗 Social Links

- **Email**: sarakhalifa2024@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/sara6khalifa
- **GitHub**: Your GitHub profile

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: Optimized touch interactions
- **Tablet**: Medium breakpoints
- **Desktop**: Full feature display

## 🎯 SEO Optimized

- Semantic HTML structure
- Proper meta tags
- Open Graph support
- Mobile viewport optimization

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Using Vercel CLI
vercel

# Or through GitHub
# Push to GitHub and connect to Vercel dashboard
```

### Environment Setup
No environment variables required for basic functionality.

## 📦 Dependencies

Main dependencies included:
- `next@16.2.4` - React framework
- `react@19` - UI library
- `tailwindcss@4.2.0` - Styling
- `lucide-react@0.564.0` - Icons
- `next-themes@0.4.6` - Theme management
- And more UI components via Radix UI

## 🎓 What You Get

✅ Complete, production-ready portfolio
✅ Beautiful, animated UI
✅ Fully responsive design
✅ Bilingual support (EN/AR)
✅ Dark/Light mode
✅ Contact form
✅ Project showcase
✅ Pricing page
✅ Professional testimonials
✅ Easy to customize

## 🔧 Customization

### Update Personal Information
Edit the following files:
- `/components/hero.tsx` - Hero content
- `/components/about.tsx` - About section
- `/components/skills.tsx` - Add your skills
- `/components/education.tsx` - Education details
- `/components/experience.tsx` - Work experience
- `/components/projects.tsx` - Your projects
- `/components/services.tsx` - Your services

### Change Colors
Edit `/app/globals.css` and update the CSS variables in `:root` and `.dark` sections.

### Update Images
Replace images in `/public/` directory and update component imports.

## 📄 License

This portfolio template is free to use and customize for personal use.

## 🎉 Ready to Launch!

Your portfolio is now ready! Simply run `pnpm dev` and start showcasing your work to the world.

---

**Built with ❤️ for Sara Khalifa**
Professional Full-Stack Web Developer Portfolio
