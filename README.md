# Next.js 15 Boilerplate

> 프로덕션 레디 Next.js 15 + Tailwind CSS v4 + shadcn/ui 보일러플레이트

![Project Preview](/public/preview.png)

## ✨ 주요 기능

- ⚡️ **Next.js 15** - 최신 App Router와 React Server Components
- 🎨 **Tailwind CSS v4** - 최신 CSS 프레임워크
- 🧩 **shadcn/ui** - 아름답고 접근성 높은 컴포넌트
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

## 📦 기술 스택

### 코어
- **Next.js** ^15.4.7
- **React** ^19.1.0
- **TypeScript** ^5

### 스타일링
- **Tailwind CSS** ^4.1.4
- **shadcn/ui** - Radix UI primitives 기반
- **next-themes** ^0.4.4
- **lucide-react** ^0.477.0

### 개발 도구
- **ESLint** ^8
- **Prettier** ^3.5.2

## 📁 프로젝트 구조

```
src/
├── app/              # Next.js App Router
│   ├── (Main)/      # 메인 레이아웃 그룹
│   └── layout.tsx   # 루트 레이아웃
├── components/       # React 컴포넌트
│   ├── ui/          # shadcn/ui 컴포넌트
│   ├── layouts/     # 레이아웃 컴포넌트
│   ├── theme/       # 테마 관련 컴포넌트
│   └── common/      # 공통 컴포넌트
├── constants/       # 상수 정의
├── lib/             # 유틸리티 함수
└── css/             # 글로벌 스타일
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
