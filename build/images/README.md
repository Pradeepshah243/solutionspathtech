# Images Folder - Solutions Path Technology

This folder contains all the images used in the Solutions Path Technology website.

## Folder Structure

```
/public/images/
├── logo/          - Company logo files
├── team/          - Team member photos
├── founders/      - Founder portraits
├── services/      - Service-related images
├── portfolio/     - Portfolio/project screenshots
├── testimonials/  - Client testimonial photos
├── blog/          - Blog post images
├── awards/        - Award certificates and badges
└── general/       - Other general purpose images
```

## How to Use Images

### Method 1: Using ImageWithFallback Component (Recommended)
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback
  src="/images/logo/company-logo.png"
  alt="Solutions Path Technology Logo"
  className="w-32 h-32"
/>
```

### Method 2: Using Standard img Tag
```tsx
<img 
  src="/images/team/member-1.jpg" 
  alt="Team Member Name"
  className="w-full h-auto"
/>
```

## Image Guidelines

### Logo Files
- **Format**: PNG with transparent background
- **Sizes**: 
  - Logo: 512x512px (square)
  - Logo horizontal: 1200x400px
  - Favicon: 32x32px, 64x64px

### Team/Founder Photos
- **Format**: JPG or PNG
- **Size**: Minimum 800x800px (square ratio recommended)
- **Quality**: High resolution, professional headshots

### Portfolio/Service Images
- **Format**: JPG for photos, PNG for graphics
- **Size**: 1920x1080px (16:9 ratio recommended)
- **Quality**: Web-optimized (compressed but clear)

### General Best Practices
- Use descriptive filenames (e.g., `ram-neupane-ceo.jpg` instead of `IMG001.jpg`)
- Keep file sizes under 500KB when possible
- Use WebP format for better compression (optional)
- Always include alt text for accessibility

## Replacing Placeholder Images

To replace the current Unsplash placeholder images with your own:

1. Upload your image to the appropriate folder
2. Find the component using that image
3. Replace the image URL:

**Before:**
```tsx
src="https://images.unsplash.com/photo-..."
```

**After:**
```tsx
src="/images/founders/ram-neupane-ceo.jpg"
```

## Examples

### Company Logo
```tsx
// In Navigation.tsx
<img 
  src="/images/logo/company-logo.png" 
  alt="Solutions Path Technology" 
  className="w-12 h-12"
/>
```

### Founder Photo
```tsx
// In FounderMessage.tsx
<ImageWithFallback
  src="/images/founders/ram-neupane.jpg"
  alt="Ram Prasad Neupane - Co-Founder & CEO"
  className="w-full h-full object-cover"
/>
```

### Team Member
```tsx
// In Team.tsx
<ImageWithFallback
  src="/images/team/developer-1.jpg"
  alt="Team Member Name - Position"
  className="w-full h-80 object-cover"
/>
```

---

**Note**: All images in the `/public/images/` folder can be accessed directly in your components using the path `/images/folder-name/filename.ext`
