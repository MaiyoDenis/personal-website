# Hero Section Optimization TODO

## Current Status: IN PROGRESS

## Tasks to Complete:

### 1. Update Hero Section with Actual Profile Picture
- [x] Replace SVG placeholder in HeroSection.jsx with actual profile-pic-hero.png.png
- [x] Update hero.css to style the actual image properly
- [x] Ensure image is responsive and maintains aspect ratio

### 2. Verify Animation Functionality
- [ ] Check typing animation works with phrases: "Software Engineer.", "Web Developer.", "Problem Solver."
- [ ] Verify scroll reveal animations activate on scroll (fade-bottom, fade-left with delays)
- [ ] Test floating animation on hero image
- [ ] Check rotating border animation
- [ ] Ensure particle background initializes properly

### 3. Optimization and Cleanup
- [ ] Remove unused SVG placeholder code
- [ ] Check if any unused CSS classes can be removed from hero.css
- [ ] Ensure all animations are smooth and performant

### 4. Testing
- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Verify all animations trigger correctly
- [ ] Check image loading and display
- [ ] Test particle interactions (hover, click)

## Files to Modify:
- `src/sections/HeroSection.jsx`
- `src/styles/components/hero.css`

## Dependencies:
- `src/hooks/useTypingAnimation.js` (typing animation)
- `src/hooks/useScrollReveal.js` (scroll reveal)
- `src/hooks/useParticles.js` (particle background)
- `src/styles/components/animations.css` (animation styles)

## Notes:
- Profile picture location: `src/assets/images/profile-pic-hero.png.png`
- Ensure proper image import path in HeroSection.jsx
- Test animations after changes to ensure they still work
