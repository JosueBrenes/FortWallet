# 🤝 Contributing to FortWallet Kit

Thank you for your interest in contributing to FortWallet Kit! We welcome contributions from the community and are excited to collaborate with you.

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or higher
- npm, yarn, or pnpm
- Git

### Local Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/fort-wallet-kit.git
   cd fort-wallet-kit
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173` to see the test page

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow existing code formatting and style
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Commit Convention

We use conventional commits for our commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(modal): add new animation effects
fix(button): resolve hover state issue
docs(readme): update installation instructions
```

## 🎨 UI/UX Contributions

### Design Principles

FortWallet Kit follows these design principles:
- **Modern & Clean**: Simple, elegant interfaces
- **Accessible**: WCAG 2.1 AA compliance
- **Responsive**: Works beautifully on all devices
- **Consistent**: Unified design language
- **Performant**: Smooth animations and interactions

### CSS Guidelines

- Use CSS custom properties for theming
- Prefer `rem` units for spacing and sizing
- Use semantic class names
- Follow BEM naming convention when applicable
- Ensure dark/light theme compatibility

## 🔧 Technical Contributions

### Adding New Wallet Support

1. Create a new module in `src/modules/`
2. Implement the `KitActions` interface
3. Add wallet detection logic
4. Include appropriate icons and branding
5. Update documentation

### Testing

- Test your changes across different browsers
- Verify mobile responsiveness
- Test both light and dark themes
- Ensure accessibility standards are met

## 📚 Documentation

- Update README.md for new features
- Add JSDoc comments for public APIs
- Update CHANGELOG.md following our format
- Include code examples when relevant

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the problem
3. **Expected behavior** vs actual behavior
4. **Environment details**:
   - Browser and version
   - Operating system
   - Package version
5. **Screenshots** or screen recordings if applicable

## 💡 Feature Requests

For feature requests, please:

1. **Check existing issues** to avoid duplicates
2. **Describe the problem** you're trying to solve
3. **Propose a solution** with implementation details
4. **Consider backwards compatibility**
5. **Provide use cases** and examples

## 🎯 Pull Request Process

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our guidelines

3. **Test thoroughly**:
   ```bash
   npm run build
   npm run test # if tests exist
   ```

4. **Update documentation** as needed

5. **Commit your changes** using conventional commits

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a pull request** with:
   - Clear title and description
   - Link to related issues
   - Screenshots for UI changes
   - Test results

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested on mobile
- [ ] Tested dark/light themes

## Screenshots
(Include if applicable)

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or properly documented)
```

## 🌟 Recognition

Contributors will be:
- Listed in our README.md
- Mentioned in release notes
- Given credit in documentation

## 📞 Getting Help

- **Discord**: Join our community server
- **GitHub Issues**: For bugs and feature requests
- **Email**: team@fortwallet.io for private matters

## 📄 License

By contributing to FortWallet Kit, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to FortWallet Kit! Together, we're building the future of Stellar wallet integration. 🚀