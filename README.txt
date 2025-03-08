# Simple Chrome Extension

A basic Chrome extension that demonstrates core extension functionality with a clean, modern interface.

## Features

- Interactive popup interface
- Click counter functionality
- Modern, responsive design
- Lightweight and simple to understand

## Files Structure

```
├── manifest.json     # Extension configuration file
├── popup.html       # Main popup interface
├── popup.js        # JavaScript functionality
├── styles.css      # CSS styling
├── icon16.png      # Extension icon (16x16)
├── icon48.png      # Extension icon (48x48)
└── icon128.png     # Extension icon (128x128)
```

## Installation

1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle switch in the top right corner
4. Click "Load unpacked"
5. Select the directory containing these extension files

## Usage

1. After installation, you'll see the extension icon in your Chrome toolbar
2. Click the extension icon to open the popup
3. Click the "Click Me!" button to increment the counter
4. The message will update to show how many times you've clicked

## Technical Details

- Built using Manifest V3
- Uses vanilla JavaScript for functionality
- Implements modern CSS for styling
- No external dependencies required

## Development

To modify the extension:
1. Make changes to the desired files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Your changes will be immediately reflected

## Permissions

This extension requires no special permissions to function.

## Version

Current version: 1.0 