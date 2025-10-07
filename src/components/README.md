# Components Structure

This directory contains all the individual React components for the romantic birthday website.

## Component Files

### 1. Hero.jsx
- **Purpose**: Main hero section with animated title, quotes, and floating hearts
- **Features**: 
  - Real-time clock display
  - Rotating romantic quotes
  - Interactive "Send Love" button
  - Floating hearts animation
  - Framer Motion animations

### 2. LoveMessage.jsx
- **Purpose**: Personal love message section
- **Features**:
  - Animated text paragraphs
  - Signature with hover effects
  - AOS scroll animations
  - Interactive hover effects

### 3. Memories.jsx
- **Purpose**: Memory cards showcasing special moments
- **Features**:
  - 4 memory cards with icons
  - 3D flip animations
  - Staggered reveal animations
  - Interactive hover effects

### 4. PhotoGallery.jsx
- **Purpose**: Image carousel with favorite photos
- **Features**:
  - Swiper.js integration
  - Auto-play functionality
  - Custom navigation buttons
  - Image overlay captions
  - Fade transition effects

### 5. Countdown.jsx
- **Purpose**: Time display section
- **Features**:
  - Animated time units
  - 3D hover effects
  - Spring-based animations
  - Interactive elements

### 6. Footer.jsx
- **Purpose**: Website footer
- **Features**:
  - Animated text
  - Hover effects
  - Current year display

## Usage

All components are exported from `index.js` and can be imported like this:

```javascript
import { Hero, LoveMessage, Memories, PhotoGallery, Countdown, Footer } from './components'
```

## Customization

### Adding Your Own Images
Edit `PhotoGallery.jsx` and replace the `favoriteImages` array with your actual image URLs:

```javascript
const favoriteImages = [
  {
    id: 1,
    src: "path/to/your/image1.jpg",
    alt: "Description",
    caption: "Your romantic message"
  },
  // Add more images...
]
```

### Modifying Content
- **Quotes**: Edit the `romanticQuotes` array in `Hero.jsx`
- **Memories**: Edit the `memories` array in `Memories.jsx`
- **Love Message**: Edit the text content in `LoveMessage.jsx`

## Dependencies

- React
- Framer Motion (animations)
- AOS (scroll animations)
- Swiper.js (image carousel)
