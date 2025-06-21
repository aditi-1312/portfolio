# Aditi Garg - Portfolio Website

A modern, responsive portfolio website built with React.js, featuring a beautiful girl animation and showcasing professional skills and projects.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Girl Animation**: Custom animated girl character on the home page
- **Interactive Components**: Hover effects, smooth transitions, and engaging UI elements
- **Project Showcase**: Filterable project gallery with detailed information
- **Skills Visualization**: Interactive skill bars and progress indicators
- **Contact Form**: Functional contact form with validation
- **Social Integration**: Links to social media profiles and professional networks

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **React Bootstrap** - UI component library
- **CSS3** - Custom styling and animations
- **Font Awesome** - Icons
- **React Router** - Navigation and routing

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Home.js           # Home page with girl animation
│   ├── About.js          # About section
│   ├── Projects.js       # Projects showcase
│   ├── Skills.js         # Skills and expertise
│   ├── Contact.js        # Contact form
│   ├── Footer.js         # Footer component
│   └── *.css             # Component-specific styles
├── App.js                # Main application component
├── App.css               # Global styles
├── index.js              # Application entry point
└── index.css             # Base styles
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Home.js** - Update name, title, and description
2. **About.js** - Update experience, education, and skills
3. **Projects.js** - Add your own projects
4. **Contact.js** - Update contact information and social links
5. **Footer.js** - Update social media links

### Styling
- Modify CSS variables in `src/App.css` to change the color scheme
- Update the girl animation in `src/components/Home.js`
- Customize animations and transitions in component CSS files

### Projects
Add your projects to the `projects` array in `src/components/Projects.js`:

```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Project description',
  image: 'project-image-url',
  technologies: ['React', 'Node.js', 'MongoDB'],
  category: 'web',
  github: 'github-url',
  live: 'live-url',
  featured: true
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aditi-portfolio.git
   cd aditi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Key Features Explained

### Girl Animation
The home page features a custom-drawn animated girl character created using HTML5 Canvas. The animation includes:
- Bouncing motion
- Floating particles
- Smooth color transitions
- Responsive sizing

### Project Filtering
Projects can be filtered by category (Web Development, Data Science, Mobile Apps) with smooth transitions and hover effects.

### Skills Visualization
Technical and soft skills are displayed with animated progress bars and color-coded icons.

### Contact Form
A fully functional contact form with:
- Form validation
- Loading states
- Success messages
- Responsive design

## 🔧 Customization Guide

### Changing Colors
Update the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  --dark-color: #2c3e50;
  --light-color: #ecf0f1;
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Add the route in `src/App.js`
3. Add navigation link in `src/components/Navbar.js`
4. Style with CSS

### Updating Content
- **Personal Info**: Update text content in component files
- **Images**: Replace placeholder images with your own
- **Links**: Update social media and project links
- **Skills**: Modify skill levels and add new skills

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with React.js and Bootstrap
- Icons from Font Awesome
- Animations created with CSS3 and Canvas API

---

**Made with ❤️ by Aditi Garg** 