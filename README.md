# NoteHub — Notes Management Application

A modern note-taking application built with Next.js, React, TypeScript, and Zustand. The project demonstrates state management, dynamic routing, server-side data fetching, and integration with a REST API.

## 🔗 Links

- **Live Demo:** [08-zustand-beta-six.vercel.app](https://08-zustand-beta-six.vercel.app/)
- **GitHub Repository:** [08-zustand](https://github.com/Andrii-Mitko/08-zustand)

## ✨ Features

- Create and delete notes.
- View detailed information about individual notes.
- Organize notes using categories: Todo, Work, Personal, Meeting, and Shopping.
- Filter notes by category.
- Search and paginate notes.
- Preserve note drafts using Zustand Persist.
- Display note previews in modal windows.
- Dynamic routing with Next.js App Router.
- Server-side data prefetching and client-side hydration.
- API integration with Axios.
- Responsive user interface.

## 🛠️ Tech Stack

**Frontend:**

- Next.js 16
- React 19
- TypeScript
- CSS Modules

**State Management & Data Fetching:**

- Zustand 5
- TanStack React Query 5
- Zustand Persist

**API & Utilities:**

- Axios
- React Paginate
- use-debounce
- clsx

**Forms & Validation:**

- Formik
- Yup

**Development Tools:**

- ESLint
- Prettier
- Vercel

## 🏗️ Architecture

The application follows a modular architecture based on Next.js App Router.

- **app/** — application routes, layouts, loading and error boundaries.
- **components/** — reusable UI components.
- **lib/** — API client and Zustand stores.
- **types/** — TypeScript interfaces and types.
- **public/** — static assets.

The project uses Parallel Routes and Intercepting Routes to implement modal-based note previews.

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Andrii-Mitko/08-zustand.git
cd 08-zustand
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root and configure the API token:

```env
NEXT_PUBLIC_NOTEHUB_TOKEN=your_api_token
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

Run ESLint:

```bash
npm run lint
```

## 👨‍💻 Author

**Andrii Mitko**

Full-Stack Developer

- [GitHub](https://github.com/Andrii-Mitko)
- [LinkedIn](https://www.linkedin.com/in/andrii-mitko/)
- [Portfolio](https://andrii-mitko-brand.vercel.app/)
