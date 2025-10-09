# 🐛 Debugging Guide for Birthday Website

## 🚀 Quick Start Debugging

### Method 1: VS Code Debugger (Recommended)
1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Open VS Code and go to the Debug panel** (Ctrl+Shift+D / Cmd+Shift+D)

3. **Select "Launch Chrome" configuration** and click the play button

4. **Set breakpoints** by clicking on the line numbers in your code

5. **The debugger will automatically:**
   - Open Chrome with debugging enabled
   - Connect to your React app
   - Stop at breakpoints and `debugger;` statements

### Method 2: Browser DevTools
1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Open Chrome and go to:** `http://localhost:5173`

3. **Open DevTools** (F12 or Ctrl+Shift+I / Cmd+Option+I)

4. **Go to Sources tab** and set breakpoints

5. **Look for your source files** under `webpack://` or `vite://`

## 🎯 Key Debug Points Added

### App Component (`src/App.tsx`)
- **App Mount:** `debugger;` when component initializes
- **Music Button Click:** `debugger;` when birthday music button is clicked
- **Console logs:** Track AOS initialization and state changes

### ScrollTriggered Component (`src/components/testAnimation.tsx`)
- **Component Mount:** `debugger;` when music section loads
- **Music Play Attempt:** `debugger;` when trying to play audio
- **Confetti Start:** `debugger;` when infinite confetti begins
- **Manual Play:** `debugger;` when user clicks play button
- **Console logs:** Track audio state, confetti, and errors

### Hero Component (`src/components/Hero.tsx`)
- **Heart Click:** `debugger;` when "Send Love" button is clicked
- **Console logs:** Track confetti triggers

## 🔍 What to Look For

### Console Messages
- `🎂 App component mounted!` - App initialization
- `🎵 Music button clicked!` - User interaction
- `🎪 ScrollTriggered component mounted!` - Music section loads
- `🎵 Attempting to play music...` - Audio playback attempt
- `🎉 Starting infinite confetti!` - Confetti animation starts
- `💕 Heart button clicked!` - Heart button interaction

### Common Issues to Debug
1. **Music not playing:** Check audio ref, autoplay policies, file paths
2. **Confetti not working:** Check canvas-confetti import and function calls
3. **Animations not smooth:** Check Framer Motion variants and transitions
4. **State not updating:** Check useState hooks and setter functions

## 🛠️ Debugging Commands

```bash
# Start with debugging enabled
npm run dev:debug

# Build with source maps for production debugging
npm run build:debug

# Type check (fix TypeScript errors)
npm run type-check

# Lint code
npm run lint
```

## 📱 Browser Compatibility
- **Chrome:** Full debugging support
- **Firefox:** Good debugging support
- **Safari:** Limited debugging support
- **Edge:** Good debugging support

## 🎨 VS Code Extensions (Recommended)
- **ES7+ React/Redux/React-Native snippets**
- **TypeScript Importer**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **GitLens**

## 🚨 Troubleshooting

### Debugger Not Stopping
1. Make sure source maps are enabled
2. Check if the file path in DevTools matches your source
3. Try refreshing the page
4. Clear browser cache

### VS Code Debugger Not Connecting
1. Make sure Chrome is closed before starting
2. Check if port 5173 is available
3. Try the "Attach to Chrome" configuration instead

### TypeScript Errors
1. Run `npm run type-check` to see all errors
2. Fix type annotations and interfaces
3. Use `any` type temporarily if needed

## 🎂 Happy Debugging!

Your birthday website now has comprehensive debugging capabilities. Use the debugger statements and console logs to trace the execution flow and identify any issues with the music, confetti, or animations!
