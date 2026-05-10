# 📚 Sara's Portfolio - Complete Setup Guide

Welcome to Sara's professional portfolio! This comprehensive guide will help you understand the structure, customize it, and deploy it.

## 🎯 What's Included

Your portfolio includes **14 professional components** with complete sections:

### Components Overview
```
📦 components/
├── 🎨 header.tsx           - Navigation & theme toggle
├── 🎭 hero.tsx            - Hero section with orbiting animations
├── 👤 about.tsx           - About me section
├── 🎓 education.tsx       - Education & certifications
├── 💻 skills.tsx          - Technical skills & proficiency
├── 💼 experience.tsx      - Work experience timeline
├── 🛠️ services.tsx         - Services offered
├── 🚀 projects.tsx        - Featured projects showcase
├── 🏆 achievements.tsx    - Achievements & milestones
├── ⭐ testimonials.tsx    - Professional testimonials
├── 📞 contact.tsx         - Contact form & info
├── 💰 pricing.tsx         - Pricing plans
├── 🔗 footer.tsx          - Footer with links
└── 🎨 providers.tsx       - Theme provider setup
```

## 🚀 Getting Started

### Step 1: Install Dependencies
```bash
pnpm install
# or npm install / yarn install / bun install
```

### Step 2: Run Development Server
```bash
pnpm dev
```

Your portfolio will be running at `http://localhost:3000`

### Step 3: View Pricing Page
Navigate to `http://localhost:3000/pricing` to see the pricing page

## 🎨 Customization Guide

### 1️⃣ Update Personal Information

**Hero Section** (`/components/hero.tsx`)
```tsx
<h1 className="text-5xl md:text-6xl font-bold text-foreground">
  Hi, I'm <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Sara</span>
</h1>
```
Change "Sara" to your name.

**About Section** (`/components/about.tsx`)
```tsx
<p className="text-lg text-muted-foreground leading-relaxed">
  I am Sara, driven by a passion for programming...
</p>
```
Replace with your own bio.

**Education** (`/components/education.tsx`)
Update the `education` and `certifications` arrays with your information.

**Experience** (`/components/experience.tsx`)
Update the `experiences` array with your work history.

**Skills** (`/components/skills.tsx`)
Update the `skillCategories` array with your skills.

**Projects** (`/components/projects.tsx`)
Update the `projects` array with your portfolio projects.

**Services** (`/components/services.tsx`)
Update the `services` array with your offerings.

**Testimonials** (`/components/testimonials.tsx`)
Update the `testimonials` array with real feedback.

**Contact** (`/components/contact.tsx`)
Update contact information:
```tsx
const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Your City, Country' },
  { icon: Phone, label: 'Phone', value: '+20 1XXXXXXXXX' },
  { icon: Mail, label: 'Email', value: 'your@email.com' }
]

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/yourprofile', label: 'GitHub' },
  { icon: Mail, href: 'mailto:your@email.com', label: 'Email' }
]
```

### 2️⃣ Change Colors & Theme

The entire color scheme is controlled by CSS variables in `/app/globals.css`:

**Light Mode** (`:root`)
```css
:root {
  --primary: #8b5cf6;        /* Main purple */
  --secondary: #a855f7;      /* Violet accent */
  --accent: #c084fc;         /* Light violet */
  --background: #f8f6fc;     /* Light background */
  --foreground: #1a0d2e;     /* Dark text */
  /* ... other colors ... */
}
```

**Dark Mode** (`.dark`)
```css
.dark {
  --primary: #a855f7;
  --secondary: #c084fc;
  --background: #0f0a1a;
  --foreground: #f3f0f7;
  /* ... other colors ... */
}
```

Change these hex values to customize the entire color scheme instantly.

### 3️⃣ Update Images

Replace images in `/public/` directory:

**Profile Image** - Used in hero section
Location: `/public/sara.png` (already provided as blob)
Update in `hero.tsx`:
```tsx
<Image
  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sara-rK87L4oHmkz5MjtzL78i5t5fWPEq06.png"
  alt="Sara Khalifa"
  fill
  className="object-cover"
/>
```

**Project Images**
- `/public/project-news-app.jpg`
- `/public/project-todo-app.jpg`
- `/public/project-ecommerce.jpg`

**Service Images**
- `/public/service-frontend-dev.jpg`
- `/public/service-fullstack.jpg`

**Logo**
- `/public/sara-logo.jpg`

### 4️⃣ Update Header & Footer

**Header Navigation** (`/components/header.tsx`)
The navigation links are dynamically generated from translations. No changes needed unless adding new sections.

**Footer** (`/components/footer.tsx`)
Update the footer links and copyright year as needed.

### 5️⃣ Modify Pricing Plans

**Pricing Plans** (`/components/pricing.tsx`)
```tsx
const plans = [
  {
    name: 'Your Plan Name',
    price: '$XXX',
    period: '/project',
    description: 'Your description',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    popular: false
  },
  // ... more plans
]
```

### 6️⃣ Add Your CV

Create a `/public/your-cv.pdf` file and update the download link in `header.tsx`:
```tsx
<a
  href="/your-cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="...your-styles..."
>
  {t.downloadCV}
</a>
```

## 🎬 Animation Features

The portfolio includes several animations:

### 1. **Orbiting Icons** (Hero Section)
Three tech icons orbit around the profile image:
```tsx
const orbitingIcons = [
  { icon: Code2, delay: 0 },
  { icon: Database, delay: 1.5 },
  { icon: Zap, delay: 3 }
]
```

### 2. **Floating Animation**
Background elements float smoothly. Controlled by CSS class `float`.

### 3. **Glow Pulse**
Profile image pulses with a glow effect. Controlled by CSS class `glow-pulse`.

### 4. **Hover Effects**
Cards scale and glow on hover with shadows.

All animations are defined in `/app/globals.css`:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes orbit {
  0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
  50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.8); }
}
```

## 🌐 Language Support

The portfolio supports English and Arabic with RTL support.

Language toggle is in the header. Add more languages by updating the `translations` object in `header.tsx`:

```tsx
const translations = {
  en: {
    home: 'Home',
    about: 'About',
    // ... more translations
  },
  ar: {
    home: 'الرئيسية',
    about: 'عني',
    // ... more translations
  }
}
```

## 🌓 Dark Mode

Automatically handled by `next-themes`. No additional setup needed. The theme toggle is in the header.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: Base styles
- Tablet: `md:` prefix (768px)
- Desktop: `lg:` prefix (1024px)

All components use Tailwind's responsive utilities.

## 📤 Deployment

### Deploy to Vercel (Recommended)

**Option 1: Using CLI**
```bash
npm i -g vercel
vercel
```

**Option 2: GitHub Integration**
1. Push code to GitHub
2. Connect repo to Vercel dashboard
3. Deploy automatically on each push

### Deploy to Other Platforms

**Netlify**
```bash
npm run build
# Connect to Netlify and deploy the dist folder
```

**Traditional Server**
```bash
npm run build
npm start
```

## 🔐 Environment Variables

No environment variables required for basic functionality.

For contact form email integration, you may want to add:
```env
# Optional - if integrating email service
NEXT_PUBLIC_EMAIL_SERVICE=your_service
```

## 📊 Performance Tips

1. **Image Optimization** - Images are already optimized with Next.js Image component
2. **Code Splitting** - Components are automatically code-split by Next.js
3. **CSS** - Tailwind CSS is purged, only used styles are included
4. **Lazy Loading** - Content loads as you scroll

## 🐛 Troubleshooting

### Dark mode not working?
Add `suppressHydrationWarning` to the html tag in `layout.tsx` (already done).

### Images not showing?
Ensure image paths are correct and images exist in `/public/` directory.

### Animations not smooth?
Check if your browser supports CSS animations. Most modern browsers do.

### Theme colors not changing?
Clear cache and rebuild:
```bash
rm -rf .next
npm run dev
```

## 📚 File Structure Explained

```
project/
├── app/
│   ├── page.tsx           # Main portfolio page
│   ├── pricing/page.tsx   # Pricing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   └── [all components]   # Reusable components
├── public/
│   ├── sara.png          # Profile image
│   ├── sara-logo.jpg     # Logo
│   ├── project-*.jpg     # Project images
│   └── service-*.jpg     # Service images
├── package.json
└── tsconfig.json
```

## ✅ Checklist Before Launch

- [ ] Update all personal information
- [ ] Replace all placeholder images
- [ ] Update social media links
- [ ] Set correct email address
- [ ] Test dark/light mode toggle
- [ ] Test language switching (EN/AR)
- [ ] Test contact form
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Update CV file
- [ ] Proofread all text content
- [ ] Set up custom domain (optional)
- [ ] Add analytics (optional)

## 🎉 You're All Set!

Your professional portfolio is ready to showcase your work!

### Quick Commands
```bash
pnpm dev      # Start development
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run linter
```

---

**Questions?** Refer to the main README_PORTFOLIO.md or review component source code.

**Ready to impress?** Launch your portfolio and share it with the world! 🚀
