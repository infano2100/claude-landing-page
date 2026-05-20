# Claude AI Landing Page

Landing page showcasing Claude AI capabilities — built as a full-cycle learning project covering local setup, CI/CD pipeline, and live deployment on GitHub Pages.

**Live site:** https://infano2100.github.io/claude-landing-page/  
**GitHub:** https://github.com/infano2100/claude-landing-page

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [CI/CD Pipeline](#cicd-pipeline)
- [Branch Strategy](#branch-strategy)
- [Deployment](#deployment)

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| [Vite](https://vitejs.dev/) | 8.x | Build tool & dev server |
| [React](https://react.dev/) | 19.x | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | 6.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first styling |
| [Vitest](https://vitest.dev/) | 4.x | Unit test runner |
| [Testing Library](https://testing-library.com/) | 16.x | React component testing |
| [ESLint](https://eslint.org/) | 10.x | Linter (flat config) |
| [Prettier](https://prettier.io/) | 3.x | Code formatter |

---

## Prerequisites

ก่อนเริ่มต้นต้องติดตั้งสิ่งเหล่านี้บนเครื่องก่อนครับ

### 1. Node.js 20 LTS

Project นี้ต้องการ Node.js เวอร์ชัน 20 ขึ้นไป แนะนำให้ใช้ **nvm** เพื่อจัดการ version ครับ

```bash
# ติดตั้ง nvm (ถ้ายังไม่มี)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# ติดตั้ง Node 20 LTS
nvm install 20

# ตรวจสอบ version
node --version   # v20.x.x
npm --version    # 10.x.x
```

### 2. Git

```bash
# macOS
brew install git

# ตรวจสอบ
git --version    # git version 2.x.x
```

### 3. GitHub CLI (สำหรับ PR และ deploy)

```bash
# macOS
brew install gh

# login
gh auth login
```

---

## Project Structure

```
claude-landing-page/
│
├── .github/
│   └── workflows/
│       ├── ci.yml            # CI: lint → test → build (trigger: PR)
│       └── deploy.yml        # CD: build → deploy dev/sit/uat/prd (trigger: push/manual)
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Fixed top navigation bar
│   │   ├── Hero.tsx          # Hero section with gradient background
│   │   ├── Features.tsx      # 6-card feature grid
│   │   ├── HowItWorks.tsx    # 3-step vertical timeline
│   │   ├── CTA.tsx           # Call-to-action section
│   │   ├── Footer.tsx        # Footer with tech links
│   │   ├── Hero.test.tsx     # Unit tests for Hero
│   │   ├── Features.test.tsx # Unit tests for Features
│   │   └── CTA.test.tsx      # Unit tests for CTA
│   │
│   ├── test/
│   │   └── setup.ts          # Global test setup (jest-dom matchers)
│   │
│   ├── App.tsx               # Root component — assembles all sections
│   ├── main.tsx              # React DOM entry point
│   └── index.css             # Tailwind import + global resets
│
├── agents.md                 # AI agent context (สำหรับ Claude Code)
├── .nvmrc                    # Pins Node version to 20
├── .prettierrc               # Prettier config
├── eslint.config.js          # ESLint flat config
├── vite.config.ts            # Vite + Tailwind plugin + base path
├── vitest.config.ts          # Vitest + jsdom environment
├── tsconfig.json             # TypeScript root config
├── tsconfig.app.json         # TypeScript app config
└── tsconfig.node.json        # TypeScript node config (vite.config)
```

---

## Getting Started

### Step 1 — Clone repository

```bash
git clone https://github.com/infano2100/claude-landing-page.git
cd claude-landing-page
```

### Step 2 — ใช้ Node version ที่ถูกต้อง

```bash
# nvm จะอ่าน .nvmrc และ switch ไป Node 20 อัตโนมัติ
nvm use
```

### Step 3 — Install dependencies

```bash
npm install
```

> **หมายเหตุ:** ใช้ `npm install` สำหรับ local development  
> ใน CI/CD ใช้ `npm ci` เพื่อให้ตรงกับ `package-lock.json` ทุกครั้ง

### Step 4 — Start dev server

```bash
npm run dev
```

เปิด browser ที่ `http://localhost:5173` จะเห็น landing page ทันทีครับ

---

## Configuration

### Vite — `vite.config.ts`

```ts
export default defineConfig({
  base: '/claude-landing-page/',   // ⚠️ จำเป็นสำหรับ GitHub Pages
  plugins: [
    react(),
    tailwindcss(),                 // Tailwind v4 ใช้ Vite plugin แทน PostCSS
  ],
})
```

> **สำคัญ:** `base` ต้องตรงกับชื่อ GitHub repository เสมอ ถ้าเปลี่ยนชื่อ repo ต้องอัปเดตตรงนี้ด้วย มิฉะนั้น CSS/JS จะ 404

### Tailwind CSS — `src/index.css`

Tailwind v4 ไม่ต้องมี `tailwind.config.ts` แล้ว ใช้แค่ import เดียว:

```css
@import "tailwindcss";
```

### TypeScript — `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "strict": true,
    "jsx": "react-jsx"
  }
}
```

> `"strict": true` เปิดไว้ทุก flag — `noImplicitAny`, `strictNullChecks` ฯลฯ  
> TypeScript error = build พัง ดังนั้นต้อง fix ก่อน commit เสมอ

### ESLint — `eslint.config.js`

ใช้ **flat config** format (ESLint 10+):

```js
export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,  // hooks rules
      reactRefresh.configs.vite,            // HMR safety
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
])
```

> `eslint-plugin-react` ไม่ได้ติดตั้งเพราะยังไม่รองรับ `eslint@10`  
> React rules ที่จำเป็นมีอยู่ใน `react-hooks` และ `react-refresh` แล้ว

### Prettier — `.prettierrc`

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

### Vitest — `vitest.config.ts`

```ts
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',      // simulate browser DOM
    globals: true,             // ใช้ describe/it/expect โดยไม่ต้อง import
    setupFiles: ['./src/test/setup.ts'],
  },
})
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `http://localhost:5173` |
| `npm run build` | TypeScript check + Vite production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint check ทุกไฟล์ `.ts` และ `.tsx` |
| `npm run lint:fix` | ESLint auto-fix |
| `npm run format` | Prettier format ทุกไฟล์ใน `src/` |
| `npm run test` | Vitest one-shot run |
| `npm run test:watch` | Vitest watch mode (re-run on file change) |
| `npm run test:coverage` | Vitest + coverage report → `coverage/` |

---

## Testing

Project ใช้ **Vitest** + **Testing Library** สำหรับ unit tests

### โครงสร้าง test file

```
src/components/Hero.tsx         ← component
src/components/Hero.test.tsx    ← test file อยู่ข้างๆ component
```

### ตัวอย่าง test

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
```

### รัน test

```bash
# รันครั้งเดียว
npm test

# watch mode (แนะนำตอน develop)
npm run test:watch

# ดู coverage
npm run test:coverage
# เปิด coverage/index.html ใน browser เพื่อดู line-by-line
```

### Test ที่มีอยู่ (8 tests)

| File | Tests |
|---|---|
| `Hero.test.tsx` | heading, CTA link, secondary link |
| `Features.test.tsx` | section heading, 6 cards, Coding Assistant card |
| `CTA.test.tsx` | CTA heading, button link |

---

## CI/CD Pipeline

### ci.yml — Pull Request pipeline

ทำงานทุกครั้งที่เปิด PR เข้า `main` หรือ `develop`

```
┌─────────────┐     ┌──────────────┐     ┌───────────┐
│  ESLint     │────▶│  Unit Tests  │────▶│   Build   │
│  Check      │     │  + Coverage  │     │           │
└─────────────┘     └──────────────┘     └───────────┘
```

- แต่ละ step ต้องผ่านก่อนถึง step ถัดไปจะรัน
- Coverage report ถูก upload เป็น artifact ไว้ดาวน์โหลดได้

### deploy.yml — Deploy pipeline

**Auto trigger:** push to `develop` → deploy DEV  
**Manual trigger:** Actions → Deploy → Run workflow → เลือก environment

```
┌───────────┐
│   Build   │ (lint + test + build)
└─────┬─────┘
      │
      ▼
┌─────────────┐
│ Deploy DEV  │ auto — gh-pages-dev branch
└─────┬───────┘
      │ (manual)
      ▼
┌─────────────┐
│ Deploy SIT  │ manual — gh-pages-sit branch
└─────┬───────┘
      │ (manual)
      ▼
┌─────────────┐
│ Deploy UAT  │ manual + approval — gh-pages-uat branch
└─────┬───────┘
      │ (manual + approval)
      ▼
┌─────────────┐
│ Deploy PRD  │ manual + approval — gh-pages branch
└─────────────┘
```

| Environment | Branch | Protection |
|---|---|---|
| DEV | `gh-pages-dev` | ไม่มี (auto) |
| SIT | `gh-pages-sit` | ไม่มี |
| UAT | `gh-pages-uat` | ต้อง approve |
| PRD | `gh-pages` | ต้อง approve |

---

## Branch Strategy

```
main
 └── develop               ← integrate features, auto-deploy DEV
      └── feature/<name>   ← งานใหม่แต่ละ task
      └── fix/<name>       ← bug fix
      └── docs/<name>      ← document changes
```

### Workflow ปกติ

```bash
# 1. สร้าง branch ใหม่จาก develop
git checkout develop
git pull
git checkout -b feature/my-feature

# 2. แก้ code แล้ว commit
git add .
git commit -m "feat: add my feature"

# 3. push และสร้าง PR → develop
git push -u origin feature/my-feature
gh pr create --base develop --title "feat: add my feature"

# 4. หลัง PR merged → CI รันอัตโนมัติ
# 5. push to develop → deploy DEV อัตโนมัติ
```

---

## Deployment

### GitHub Pages (Production)

Site ถูก deploy ไปที่ branch `gh-pages` แล้ว GitHub Pages serve ออกมาเป็น URL:

```
https://infano2100.github.io/claude-landing-page/
```

### Deploy PRD ด้วยตัวเอง

1. ไปที่ [Actions → Deploy](https://github.com/infano2100/claude-landing-page/actions/workflows/deploy.yml)
2. กด **Run workflow**
3. Branch: `develop`, Environment: `prd`
4. รอ approval notification ทาง email
5. กด **Review deployments** → **Approve**
