# float-rotfield-init

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/evan-schultzs-projects/v0-float-rotfield-init)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/WYnRpA1alZQ)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/evan-schultzs-projects/v0-float-rotfield-init](https://vercel.com/evan-schultzs-projects/v0-float-rotfield-init)**

```markdown project="Rotfield" file="README.md"
...
```

2. Install dependencies:

```shellscript
npm install
```


3. Run the development server:

```shellscript
npm run dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


### Building for Production

```shellscript
npm run build
npm start
```

## 📖 Usage

### Navigation

The home page provides access to all areas of your Rotfield system:

- **Shacks**: Browse and create semi-structured ideas
- **Boardwalks**: View and establish connections between ideas
- **Bulletin Boards**: Post questions, reflections, and prompts
- **Garden Plots**: Access more organized knowledge collections
- **Tool Crates**: Find methods and templates for knowledge work
- **Bone Piles**: Store and browse old notes, chat logs, and abandoned projects


### Adding Content

You can add content in several ways:

1. **As MDX files**: Create `.mdx` files in the appropriate directories
2. **As React components**: Create new pages or components
3. **As plain text**: Add to existing pages


### The "Querying the Rot" Ritual

Use the interactive "Querying the Rot" ritual to:

1. Listen to your "bone piles" (old notes, chat logs)
2. Notice emerging patterns
3. Create minimal "boardwalks" to connect ideas


## 📁 Project Structure

```plaintext
rotfield/
├── app/                  # Next.js app directory
│   ├── bone-piles/       # Bone piles section
│   ├── bulletin-boards/  # Bulletin boards section
│   ├── rituals/          # Rituals section
│   ├── shacks/           # Shacks section
│   ├── wastebook/        # Wastebook section
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── ui/               # UI components from shadcn/ui
│   └── ...               # Custom components
├── public/               # Static assets
├── .gitignore            # Git ignore file
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies
├── README.md             # Project documentation
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔮 Future Features

- **Search functionality**: Find content across your entire Rotfield
- **Tagging system**: Loosely connect related ideas
- **Visual graph**: See connections between different parts of your knowledge garden
- **Bone pile importer**: Easily import old notes, chat logs, etc.
- **Additional rituals**: For different aspects of knowledge management
- **Mobile app**: Access your Rotfield on the go
- **Collaboration features**: Share and collaborate on knowledge gardens
- **Export options**: Export your knowledge in various formats


## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


Please make sure to update tests as appropriate and follow the code style of the project.
