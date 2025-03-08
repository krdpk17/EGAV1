# AI Progress YouTube Explorer Chrome Extension

A Chrome extension that helps you discover and explore YouTube videos about artificial intelligence progress and technology. The extension provides easy access to both recent and popular AI-related content.

## Features

- Browse recent AI progress videos
- Discover all-time popular AI content
- Clean, modern interface
- Video thumbnails and details
- Direct links to YouTube videos
- Secure API key storage
- Responsive design

## Files Structure

```
├── manifest.json     # Extension configuration
├── popup.html       # Main popup interface
├── popup.js        # YouTube API integration and functionality
├── styles.css      # Modern CSS styling
├── icon16.png      # Extension icon (16x16)
├── icon48.png      # Extension icon (48x48)
└── icon128.png     # Extension icon (128x128)
```

## Prerequisites

Before using the extension, you'll need:
1. Google Chrome browser
2. YouTube Data API key (v3)

## Getting a YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3 for your project
4. Go to Credentials
5. Create an API key
6. Copy the API key for use in the extension

## Installation

1. Download or clone this repository
2. Open Google Chrome
3. Navigate to `chrome://extensions/`
4. Enable "Developer mode" using the toggle switch in the top right corner
5. Click "Load unpacked"
6. Select the directory containing these extension files

## First-Time Setup

1. Click the extension icon in your Chrome toolbar
2. Enter your YouTube API key in the provided input field
3. Click "Save API Key"
4. The extension will automatically start fetching videos

## Usage

1. Click the extension icon in your Chrome toolbar
2. Choose between two tabs:
   - "Recent Videos": Shows latest AI progress videos
   - "All-Time Popular": Shows most viewed AI content
3. Browse through the video cards
4. Click any video to open it in a new tab on YouTube
5. Videos display:
   - Thumbnail
   - Title
   - Channel name
   - Publication date

## Technical Details

- Built using Manifest V3
- Uses YouTube Data API v3
- Implements chrome.storage for API key management
- Pure JavaScript implementation
- Modern CSS with flexbox layout
- Responsive design principles

## Development

To modify the extension:
1. Make changes to the desired files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Your changes will be immediately reflected

## Security Notes

- The YouTube API key is stored securely using chrome.storage.local
- API requests are made directly to YouTube's API
- All connections use HTTPS
- No user data is collected or stored

## Permissions

The extension requires:
- storage: For saving your YouTube API key
- host permissions: For accessing YouTube's API

## Version

Current version: 1.0

## Contributing

Feel free to fork this repository and submit pull requests for any improvements. 