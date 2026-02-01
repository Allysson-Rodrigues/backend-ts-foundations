# Node.js Express Boilerplate 🚀

![CI Status](https://github.com/Allysson-Rodrigues/node-express-template/actions/workflows/main.yml/badge.svg)

A clean, standardized, and production-ready template for starting RESTful API projects using **Node.js** and **Express**. This repository serves as a scalable foundation for backend applications, integrated with modern CI/CD practices and **ES Modules**.

---

### 🛠️ Built With

- **Runtime:** [Node.js 24+](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Environment Management:** [Dotenv](https://www.npmjs.com/package/dotenv)
- **Containerization:** [Docker](https://www.docker.com/)
- **Automation:** [GitHub Actions](https://github.com/features/actions) (CI/CD)
- **Linting & Formatting:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- **Environment:** [WSL2 (Ubuntu)](https://learn.microsoft.com/en-us/windows/wsl/install)

---

### ✨ Features

- **Modular Architecture:** Organized into `routes` and `controllers` for clean separation of concerns.
- **Automated CI Pipeline:** Every push is automatically validated for linting errors and Docker build success.
- **Secure Configuration:** Environment-based settings using `.env` files (git-ignored for security).
- **Standardized Code Quality:** Integrated ESLint "Flat Config" for modern JavaScript modules.

---

🚀 Getting Started

To get a local copy up and running in your environment, follow these steps:

1. **Clone the repository**
   ```bash
   git clone [https://github.com/Allysson-Rodrigues/node-express-template.git](https://github.com/Allysson-Rodrigues/node-express-template.git)
   cd node-express-template
   Install Dependencies Using your professional aliases for faster workflow:
   ```

Bash
ni # Short for: npm install
Set Up Environment Variables Create a .env file in the root:

Snippet de código
PORT=3000
NODE_ENV=development
Start Development Server Run the application with hot-reload enabled (Nodemon):

Bash
dev # Short for: npm run dev

🐳 Docker Workflow

This template is fully containerized. You can build and run it using the following commands (standardized with your dotfiles):

Build the image: docker build -t node-express-template .

Run in detached mode: docker run -d -p 3000:3000 --name express-api node-express-template

Monitor your containers: dps (Displays running containers with formatted table)

📂 Project Structure

Plaintext
.
├── src/
│   ├── controllers/    # Business logic
│   ├── routes/         # Route definitions
│   └── app.js          # Express app configuration
├── .github/            # GitHub Actions CI/CD workflows
├── .env                # Local secrets (gitignored)
├── server.js           # Entry point (loads dotenv)
└── package.json        # Scripts and type: "module"

🤝 Contributing

Fork the Project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your changes using Conventional Commits (git commit -m 'feat: Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📝 License Distributed under the MIT License. See LICENSE for more information.

Developed with ❤️ by Allysson Rodrigues em São José dos Pinhais.

```bash
git clone [https://github.com/Allysson-Rodrigues/node-express-template.git](https://github.com/Allysson-Rodrigues/node-express-template.git)
```
