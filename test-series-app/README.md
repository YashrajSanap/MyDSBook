# 🚀 TestSeries Pro - Advanced Competitive Exam Platform

A cutting-edge test series platform built with modern technologies for competitive exam preparation. Features AI-powered analytics, adaptive testing, and a futuristic design inspired by platforms like Cursor.

![TestSeries Pro](https://via.placeholder.com/1200x600/0a0a0f/00f5ff?text=TestSeries+Pro)

## ✨ Features

### 🎯 Core Features
- **AI-Powered Analytics** - Advanced algorithms analyze performance and provide personalized insights
- **Adaptive Testing** - Dynamic difficulty adjustment based on student performance
- **Real-time Progress Tracking** - Comprehensive analytics and performance metrics
- **Multiple Question Types** - MCQ, Descriptive, Coding, True/False, Fill-in-blanks, Matching
- **Competitive Rankings** - Leaderboards and peer comparison
- **Flexible Scheduling** - Live tests, practice modes, and scheduled assessments

### 🔐 Authentication & User Management
- **Multi-role Support** - Student, Admin, Super Admin, Test Creator, Reviewer
- **OAuth Integration** - Google, GitHub authentication
- **Phone Verification** - SMS-based verification system
- **Advanced User Profiles** - Detailed student information and preferences

### 📊 Advanced Analytics
- **Performance Insights** - Subject-wise analysis, weak areas identification
- **Time Management** - Speed analysis and optimization suggestions
- **Comparative Analysis** - Percentile rankings and peer comparison
- **Progress Tracking** - Historical performance trends

### 💬 Community Features
- **Discussion Forums** - Question-specific discussions
- **Study Materials** - PDF, videos, articles, flashcards
- **Peer Learning** - Collaborative learning environment
- **Achievement System** - Gamification with badges and points

### 👑 Admin Features
- **Easy Test Creation** - Drag-and-drop test builder
- **Question Bank Management** - Comprehensive question repository
- **User Analytics Dashboard** - Detailed insights into student performance
- **Bulk Operations** - Efficient user and content management
- **Advanced Reporting** - Export capabilities and detailed reports

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Full-stack development
- **Prisma ORM** - Type-safe database operations
- **PostgreSQL** - Primary database
- **NextAuth.js** - Authentication system

### Tools & Libraries
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Recharts** - Data visualization
- **Class Variance Authority** - Component variants

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/testseries-pro.git
   cd testseries-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables in `.env`

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run migrations (when ready)
   npx prisma migrate dev
   
   # Seed the database (optional)
   npx prisma db seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
test-series-app/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # Authentication routes
│   │   ├── admin/          # Admin dashboard
│   │   ├── api/            # API routes
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable components
│   │   ├── ui/             # Base UI components
│   │   ├── layout/         # Layout components
│   │   └── features/       # Feature-specific components
│   ├── lib/                # Utilities and configurations
│   └── types/              # TypeScript type definitions
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
└── public/                 # Static assets
```

## 🎨 Design System

The application features a futuristic design with:

### Color Palette
- **Neon Blue** (#00f5ff) - Primary accent
- **Neon Purple** (#8b5cf6) - Secondary accent  
- **Neon Pink** (#f472b6) - Tertiary accent
- **Neon Green** (#00ff9f) - Success states
- **Cyber Dark** (#0a0a0f) - Background
- **Cyber Light** (#1a1a2e) - Surface

### Typography
- **Inter** - Primary font family
- **JetBrains Mono** - Monospace font

### Components
- **Cyber Cards** - Glassmorphism effect with neon borders
- **Gradient Buttons** - Multi-color gradient backgrounds
- **Animated Elements** - Smooth transitions and hover effects
- **Glow Effects** - CSS-based glow animations

## 🗃 Database Schema

The application uses a comprehensive schema supporting:

- **User Management** - Roles, authentication, profiles
- **Test System** - Tests, questions, attempts, results
- **Analytics** - Performance tracking, rankings
- **Community** - Discussions, comments, study materials
- **Gamification** - Achievements, rankings, points

## 🔧 Configuration

### Environment Variables

Create a `.env` file with:

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"

# OAuth (optional)
GOOGLE_CLIENT_ID="..."
GITHUB_CLIENT_ID="..."
```

### Prisma Configuration

```bash
# Generate client
npx prisma generate

# Reset database
npx prisma migrate reset

# Deploy migrations
npx prisma migrate deploy

# View database
npx prisma studio
```

## 📊 Features Roadmap

### Phase 1: Foundation ✅
- [x] Project setup and configuration
- [x] Modern UI components
- [x] Database schema design
- [x] Authentication system
- [x] Basic homepage

### Phase 2: Core Features (In Progress)
- [ ] Test creation and management
- [ ] Question bank system
- [ ] Test taking interface
- [ ] Results and analytics
- [ ] User dashboard

### Phase 3: Advanced Features
- [ ] AI-powered recommendations
- [ ] Live test sessions
- [ ] Discussion forums
- [ ] Study materials
- [ ] Mobile responsiveness

### Phase 4: Enterprise Features
- [ ] Advanced analytics
- [ ] Bulk operations
- [ ] API documentation
- [ ] Performance optimization
- [ ] Mobile app

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Email: support@testseries.com
- Documentation: [docs.testseries.com](https://docs.testseries.com)

## 🙏 Acknowledgments

- Inspired by modern platforms like Cursor
- Built with amazing open-source technologies
- Thanks to the Next.js and React communities

---

**Made with ❤️ for the future of competitive exam preparation**
