# Node.js Express Boilerplate 🚀

![CI Status](https://github.com/Allysson-Rodrigues/node-express-template/actions/workflows/main.yml/badge.svg)

A clean, standardized, and production-ready template for starting RESTful API projects using **Node.js** and **Express**. This repository serves as a scalable foundation for backend applications, integrated with modern CI/CD practices.

---

### 🛠️ Built With

- **Runtime:** [Node.js 24+](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Containerization:** [Docker](https://www.docker.com/)
- **Automation:** [GitHub Actions](https://github.com/features/actions) (CI/CD)
- **Linting & Formatting:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- **Environment:** [WSL2 (Ubuntu)](https://learn.microsoft.com/en-us/windows/wsl/install)

---

### ✨ Features

- **Automated CI Pipeline:** Every push is automatically validated for linting errors and Docker build success.
- **Container Ready:** Includes a pre-configured Dockerfile for consistent deployment across environments.
- **Standardized Code Quality:** Pre-configured ESLint and Prettier rules to ensure clean and maintainable code.
- **Structured Routing:** Organized folder structure designed for better maintainability and scalability.

---

🚀 Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository
   Bash
   git clone https://github.com/Allysson-Rodrigues/node-express-template.git
   cd node-express-template
2. Install Dependencies
   Using your professional aliases for faster workflow:

Bash
ni # Short for: npm install 3. Start Development Server
Run the application with hot-reload enabled (Nodemon):

Bash
dev # Short for: npm run dev

🐳 Docker Workflow

This template is fully containerized. You can build and run it using the following commands (standardized with your dotfiles):

Build the image:

Bash
docker build -t node-express-template .
Run in detached mode:

Bash
docker run -d -p 3000:3000 --name express-api node-express-template
Monitor your containers:

Bash
dps # Displays running containers with formatted table

📂 Project Structure

Plaintext
.
├── .devcontainer/ # VS Code Dev Container settings
├── .github/ # GitHub Actions CI/CD workflows
├── node_modules/ # Project dependencies (git ignored)
├── server.js # Application entry point
├── package.json # Scripts and dependencies
└── COMMANDS.md # Quick reference for dev commands

🤝 Contributing

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your changes using Conventional Commits (git commit -m 'feat: Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
Distributed under the MIT License. See LICENSE for more information.

Developed with ❤️ by Allysson Rodrigues

```bash
git clone [https://github.com/Allysson-Rodrigues/node-express-template.git](https://github.com/Allysson-Rodrigues/node-express-template.git)
```
