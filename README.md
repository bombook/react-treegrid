# React TreeGrid (Next.js App Router)

이 프로젝트는 기존 React 컴포넌트 중심 구조를 **Next.js App Router** 구조로 재편한 예제입니다.

## 디렉토리 구조

```bash
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   └── treegrid
│       ├── Body.tsx
│       ├── Header.tsx
│       ├── Row.tsx
│       ├── TreeGrid.tsx
│       └── types.ts
├── data
│   └── sampleData.ts
├── next.config.mjs
├── next-env.d.ts
├── package.json
└── tsconfig.json
```

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 후 TreeGrid를 확인할 수 있습니다.
