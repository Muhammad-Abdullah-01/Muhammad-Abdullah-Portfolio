# 🚀 Muhammad Abdullah | Professional Developer Portfolio

A premium, highly responsive, futuristic developer portfolio website built using **React 18**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. It features smooth scrolling, ambient neon glow animations, responsive sidebar navigation, a dynamic project showcase, and a fully functional contact form.

---

## 🎨 Design & Interactions

* **Glassmorphism Theme**: Semi-transparent card panels with subtle glowing borders (`backdrop-filter: blur()`).
* **Ambient Glows**: Pulse-glow radial gradients in the background to create depth.
* **Responsive Sidebar Nav**: Float-anchored vertically on desktop; slides to a compact bottom navigation bar on mobile.
* **Typing Animation**: Auto-looping creative role presentation in the Hero section.
* **Confetti Success Toast**: Fires a custom confetti explosion when the contact form submits successfully.

---

## 📂 Project Structure

```text
d:/Portfolio Website/
├── public/
│   ├── cv.pdf                # Your downloadable CV (Replace this)
│   └── vite.svg              # Tab icon
├── src/
│   ├── assets/               # Local static images
│   ├── components/           # UI Components
│   │   ├── Navbar.jsx        # Left sidebar nav / mobile bottom nav
│   │   ├── Hero.jsx          # Header with typing animations
│   │   ├── About.jsx         # Biography and quick stats
│   │   ├── Skills.jsx        # Tech skill progress bars + orbit orbit graphic
│   │   ├── Languages.jsx     # Language proficiency bars
│   │   ├── Portfolio.jsx     # Grid of project cards (ProductPulse, ScholarAssistant, etc.)
│   │   ├── Education.jsx     # Degrees & Certifications timeline
│   │   └── Contact.jsx       # Contact form + EmailJS
│   ├── data/                 # Separated data inputs for easy updating
│   │   ├── projects.js       # Projects listing
│   │   └── skills.js         # Skills, education, and language details
│   ├── styles/
│   │   └── globals.css       # Custom animations, glassmorphism tokens, and Tailwind v4 core
│   ├── App.jsx               # Root coordinator containing Scrollspy listener
│   └── main.jsx              # React entry mount
├── index.html                # Main template with Google Fonts & SEO meta tags
├── vite.config.js            # Vite configurations + Tailwind CSS v4 compiler plugin
├── package.json              # Dependencies
└── README.md                 # Project guide
```

---

## 🛠️ How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ⚙️ Customization Guide

### 🧑‍💼 Replacing Your Profile Picture
1. Put your image in `src/assets/` or find a high-quality online URL.
2. In `src/components/Hero.jsx` (line ~55), update the `img src` to point to your new image.

### 📄 Uploading Your CV / Resume
1. Name your PDF resume `cv.pdf`.
2. Save it directly inside the `public/` directory (replacing the placeholder `public/cv.pdf`).

### 📧 Connecting Your Contact Form (EmailJS)
By default, the contact form simulates a successful submission with a confetti alert. To receive actual emails in your inbox:
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Create an **Email Service** and an **Email Template**.
3. Open `src/components/Contact.jsx` and enter your credentials around line ~13:
   ```javascript
   const EMAILJS_SERVICE_ID = "your_service_id";
   const EMAILJS_TEMPLATE_ID = "your_template_id";
   const EMAILJS_PUBLIC_KEY = "your_public_key";
   ```
4. Save the file. The contact form will automatically switch to sending live emails!

### 🔗 Updating Projects & Skills
* Add, edit, or remove skills, education items, or certificate badges inside [src/data/skills.js](file:///d:/Portfolio%20Website/src/data/skills.js).
* Add new projects, descriptions, or change project image URLs inside [src/data/projects.js](file:///d:/Portfolio%20Website/src/data/projects.js).
