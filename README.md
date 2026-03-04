# Next.js Boilerplate

> 프로덕션 레디 Next.js + Tailwind CSS v4 + shadcn/ui 보일러플레이트

**🔗 [Live Demo](https://nextjs-shadcn-boilerplate-beta.vercel.app/)**

![Project Preview](/public/preview.png)

## ✨ 주요 기능

- ⚡️ **Next.js** - 최신 App Router와 React Server Components
- 🎨 **Tailwind CSS v4** - 최신 CSS 프레임워크
- 🧩 **shadcn/ui 34종 컴포넌트** - 아름답고 접근성 높은 UI 컴포넌트 프리셋
- 📄 **컴포넌트 데모 페이지** - `/components`에서 모든 UI 컴포넌트 미리보기
- 🌗 **다크모드** - next-themes를 사용한 완벽한 다크모드 지원
- 📱 **완전 반응형** - 모바일부터 데스크톱까지 완벽 대응
- 🔒 **TypeScript** - 타입 안전성과 개발자 경험 향상
- ✅ **ESLint + Prettier** - 코드 품질 및 포맷팅 자동화

## 🚀 시작하기

### 설치

```bash
# 저장소 클론
git clone https://github.com/HongHyunKi/nextjs-shadcn-boilerplate.git

# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev
```

### 빌드

```bash
# 프로덕션 빌드
yarn build

# 프로덕션 서버 실행
yarn start
```

## 🧩 포함된 shadcn/ui 컴포넌트

| 카테고리       | 컴포넌트                                                                                            |
| -------------- | --------------------------------------------------------------------------------------------------- |
| **General**    | Button, Badge, Toggle, Toggle Group                                                                 |
| **Forms**      | Input, Textarea, Label, Checkbox, Radio Group, Select, Switch, Slider, Form (react-hook-form + zod) |
| **Display**    | Card, Avatar, Skeleton, Separator, Accordion, Table, Progress, Scroll Area                          |
| **Feedback**   | Alert, Alert Dialog, Dialog, Sonner (Toast)                                                         |
| **Overlay**    | Dropdown Menu, Sheet, Drawer, Popover, Tooltip, Command                                             |
| **Navigation** | Tabs, Breadcrumb, Pagination                                                                        |

> `/components` 페이지에서 모든 컴포넌트의 라이브 데모를 확인할 수 있습니다.

### 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

## 📦 기술 스택

### 코어

- **Next.js** ^16.1.5
- **React** ^19.2.4
- **TypeScript** ^5

### 스타일링

- **Tailwind CSS** ^4.2.1
- **shadcn/ui** - Radix UI primitives 기반
- **next-themes** ^0.4.6
- **lucide-react** ^0.576.0

### 폼 & 유효성 검사

- **react-hook-form** ^7.71.2
- **zod** ^4.3.6
- **@hookform/resolvers** ^5.2.2

### 개발 도구

- **ESLint** ^8
- **Prettier** ^3.8.1

## 📁 프로젝트 구조

```
src/
├── app/                # Next.js App Router
│   └── (Main)/         # 메인 레이아웃 그룹
│       ├── page.tsx            # 홈
│       ├── components/page.tsx # 컴포넌트 데모
│       └── typography/page.tsx # 타이포그래피
├── components/
│   ├── ui/             # shadcn/ui 컴포넌트 (34종)
│   ├── demos/          # 컴포넌트 데모 파일 (34개)
│   ├── layouts/        # Header, Footer, MainLayout
│   ├── theme/          # ThemeProvider, ModeToggle
│   └── common/         # 공통 컴포넌트
├── constants/          # 라우트, 상수 정의
├── lib/                # 유틸리티 함수 (cn)
├── hooks/              # 커스텀 React 훅
└── css/                # 글로벌 스타일 (OKLCH 테마)
```

## 🎯 주요 명령어

```bash
yarn dev        # 개발 서버 실행
yarn build      # 프로덕션 빌드
yarn start      # 프로덕션 서버 실행
yarn lint       # ESLint 실행
yarn prettier   # Prettier 검사
```

---
