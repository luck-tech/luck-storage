# luck-storage

## 概要

自分のメモを管理する web アプリ

## 技術選定

- フロント、バックエンド
  Next.js(App Router, Route Handlers)+TypeScript
- ライブラリ
  Shadcn, Tailwind, Auth.js
- データベース
  Drizzle+PostgresSQL
- デプロイ
  Vercel

## ディレクトリ構成

```text:sample
/project-root
├── /app
│   ├── /api                // APIルートハンドラを配置するフォルダ
│   ├── /(pages)            // アプリページを配置するフォルダ
│   ├── /components         // アプリ全体で使うコンポーネントを配置するフォルダ
│   ├── /lib                // ライブラリの初期化や共通設定を行うフォルダ
│   ├── /hooks              // アプリ全体で使うカスタムReactフックを配置するフォルダ
│   ├── /types              // アプリ全体で使うTypeScriptの型定義を管理するフォルダ
│   ...
├── /features               // ページごとに関連するコンポーネント, フック, 型定義を整理するフォルダ
├── /public                 // 画像や静的ファイルを配置するフォルダ
...
```
