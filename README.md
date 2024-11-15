# Media Platform React App

Welcome to the Media Platform built with React! This app allows users to interact with various media files, including uploading images, liking/unliking items, and toggling between dark and light modes. This project is hosted at https://awadly-media.netlify.app/

## Functionality

### 1. Viewing Media

- The app loads a list of media items (images or videos) from an API.
- Each media item is displayed with its file (image/video) and the current like count.
- Users can scroll through the list to view available media items.

### 2. Liking and Unliking Media

- Each media item has a like button that allows users to like or unlike the media.
- When a user likes an item, the like count increases by one, and the button icon switches to a "thumb-down" indicating the item is liked.
- When a user unlikes the item, the like count decreases by one, and the button switches back to a "thumb-up" icon.

### 3. Uploading Media

- Users can upload media files from their local device by selecting an image or video using the image picker feature.
- The app then sends the file to a remote server, which processes the upload and returns a URL for the uploaded media.
- Once the file is uploaded, the app updates the media list by adding the newly uploaded item, allowing users to view it in the app.

### 4. Dark Mode/Light Mode Toggle

- The app allows users to switch between dark mode and light mode for a more personalized experience.
- A toggle button in the top right corner of the app enables users to change the theme at any time.

## Getting Started

This project was bootstrapped with Create React App. To get started, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- Node.js (version >= 14)
- npm (comes with Node.js)

### Installing Dependencies

1. Clone this repository:

   ```bash
   git clone https://github.com/Awadly/media-website
   ```

2. Navigate into the project folder:
   ```bash
   cd media-website
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the App

Once dependencies are installed, you can run the app in development mode by executing the following command:

```bash
npm start
```
