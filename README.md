# San Juan Social Club Landing Page

A modern, responsive landing page for San Juan Social Club built with HTML5, CSS3, and vanilla JavaScript. Designed to be deployed on GitHub Pages with a mobile-first approach.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 320px, 768px, 1024px, and 1440px+
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: Mobile navigation, smooth scrolling, form validation, and notifications
- **Performance Optimized**: Lazy loading, debounced scroll events, and optimized animations
- **Accessibility**: Proper focus states, semantic HTML, and keyboard navigation support
- **Cross-browser Compatible**: Works on all modern browsers and devices

## 🎨 Design System

- **Typography**: Inter font family (as specified in Figma design tokens)
- **Color Palette**: Professional blue theme with accent colors
- **Spacing**: Consistent spacing system using CSS custom properties
- **Components**: Reusable button styles, cards, and form elements

## 📱 Sections

1. **Hero Section**: Welcome message with call-to-action buttons
2. **About Section**: Club description with feature highlights
3. **Events Section**: Showcase of upcoming events and activities
4. **Membership Section**: Benefits and application form
5. **Contact Section**: Contact information and social media links
6. **Footer**: Additional links and copyright information

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern features including Grid, Flexbox, and Custom Properties
- **Vanilla JavaScript**: ES6+ features, Intersection Observer, and performance optimizations
- **GitHub Pages**: Static hosting and deployment

## 📁 Project Structure

```
sanjuansocial/
├── index.html              # Main HTML file
├── css/
│   └── main.css           # Main stylesheet with responsive design
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   └── images/            # Image assets directory
├── .github/
│   └── workflows/         # GitHub Actions deployment
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Git installed on your machine
- GitHub account for deployment

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sanjuansocial.git
   cd sanjuansocial
   ```

2. **Open in your browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

3. **Customize the content**
   - Edit `index.html` to update text content
   - Modify `css/main.css` to change colors and styling
   - Update `js/main.js` for functionality changes

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save the settings

3. **Automatic Deployment**
   - The GitHub Actions workflow will automatically deploy on every push to main
   - Your site will be available at: `https://yourusername.github.io/sanjuansocial`

### Custom Domain (Optional)

1. **Add your domain** to the `cname` field in `.github/workflows/deploy.yml`
2. **Configure DNS** to point to your GitHub Pages site
3. **Verify** the domain in GitHub repository settings

## 🎯 Customization

### Colors
Update the CSS custom properties in `css/main.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #64748b;    /* Secondary text */
    --accent-color: #f59e0b;      /* Accent/highlight color */
    /* ... more colors */
}
```

### Content
- **Hero Section**: Update title, subtitle, and button text in `index.html`
- **Events**: Modify event cards with your actual events
- **Contact Info**: Update email, phone, and social media links
- **Images**: Replace placeholder divs with actual images in `assets/images/`

### Styling
- **Typography**: Change font sizes and weights in CSS variables
- **Layout**: Adjust spacing and grid layouts
- **Animations**: Modify transition timings and effects

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Features

- **Lazy Loading**: Images load only when needed
- **Debounced Events**: Optimized scroll and resize handlers
- **CSS Animations**: Hardware-accelerated transitions
- **Minimal JavaScript**: Lightweight and efficient code

## 🚀 Future Enhancements

- [ ] Add real images and branding
- [ ] Integrate with a CMS for content management
- [ ] Add analytics tracking
- [ ] Implement contact form backend
- [ ] Add blog/news section
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Progressive Web App features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact:
- Email: info@sanjuansocialclub.com
- Phone: +1 (787) 555-0123

---

**Built with ❤️ for San Juan Social Club**
