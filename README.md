# 📝 Notes App

> Aplikasi catatan modern yang simple dan powerful untuk mengelola semua ide dan thoughts Anda.

## ✨ Features

- **📱 Responsive Design** - Bekerja sempurna di desktop, tablet, dan mobile
- **⚡ Real-time Sync** - Otomatis menyimpan perubahan tanpa perlu klik save
- **🎨 Rich Text Editor** - Format teks dengan bold, italic, dan berbagai styling
- **🔍 Search & Filter** - Cari catatan dengan mudah menggunakan keyword
- **📂 Category Organization** - Kelompokkan catatan berdasarkan kategori
- **🌙 Dark Mode** - Mode gelap untuk kenyamanan mata
- **📤 Export/Import** - Backup dan restore catatan dalam format JSON
- **🔒 Local Storage** - Data tersimpan aman di browser Anda

## 🚀 Demo

[**🔗 Live Demo**](https://your-demo-link.com)

## 📸 Screenshots

![Notes App Screenshot](./screenshots/main-view.png)
*Main interface with notes list and editor*

![Dark Mode](./screenshots/dark-mode.png)
*Dark mode view*

## 🛠️ Tech Stack

- **Frontend**: React 18 / Next.js
- **Styling**: Tailwind CSS / CSS Modules
- **State Management**: Redux Toolkit / Zustand
- **Database**: LocalStorage / Firebase
- **Icons**: Lucide React / Heroicons
- **Bundler**: Vite / Webpack

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js (v16 atau lebih tinggi)
- npm atau yarn

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/Codenames-Ren/notes-app.git
   cd notes-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
notes-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Editor/         # Rich text editor
│   │   ├── NotesList/      # Notes list component
│   │   └── Sidebar/        # Navigation sidebar
│   ├── hooks/              # Custom React hooks
│   ├── store/              # State management
│   ├── utils/              # Helper functions
│   └── styles/             # Global styles
├── public/                 # Static assets
├── screenshots/            # App screenshots
└── README.md
```

## 🎯 Usage

### Creating a New Note
1. Click tombol "New Note" atau tekan `Ctrl+N`
2. Ketik judul dan konten catatan
3. Pilih kategori (opsional)
4. Catatan otomatis tersimpan

### Organizing Notes
- **Categories**: Buat kategori baru atau pilih dari yang sudah ada
- **Search**: Gunakan search bar untuk mencari catatan
- **Filter**: Filter berdasarkan kategori atau tanggal

### Keyboard Shortcuts
- `Ctrl+N` - New note
- `Ctrl+S` - Save note
- `Ctrl+F` - Search
- `Ctrl+D` - Delete note
- `Ctrl+/` - Toggle dark mode

## 🔧 Configuration

Anda bisa mengkustomisasi aplikasi melalui file `config.js`:

```javascript
export const config = {
  autoSave: true,
  autoSaveInterval: 2000, // ms
  maxNotes: 1000,
  enableCategories: true,
  theme: 'light' // 'light' | 'dark' | 'auto'
}
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📦 Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

Kontribusi sangat welcome! Silakan ikuti langkah berikut:

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

### Development Guidelines

- Follow ESLint rules
- Write tests for new features
- Update documentation jika diperlukan
- Pastikan semua tests pass

## 📋 TODO

- [ ] Cloud sync dengan Google Drive
- [ ] Collaborative editing
- [ ] Voice notes
- [ ] Markdown export
- [ ] Mobile app dengan React Native
- [ ] Encryption untuk notes sensitif

## 🐛 Bug Reports

Jika menemukan bug, silakan [buat issue](https://github.com/Codenames-Ren/notes-app/issues) dengan detail:
- Langkah untuk reproduce
- Expected vs actual behavior
- Screenshots (jika ada)
- Environment info (browser, OS)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Amazing UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful icons
- Inspiration dari [Notion](https://notion.so/) dan [Obsidian](https://obsidian.md/)

## 📞 Contact

**Your Name** - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/Codenames-Ren/notes-app](https://github.com/Codenames-Ren/notes-app)

---

<div align="center">
  <strong>⭐ Jangan lupa kasih star jika project ini membantu! ⭐</strong>
</div>
