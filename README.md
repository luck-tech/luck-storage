## 概要

自分のメモを管理する web アプリ

## 技術選定

- フロント、バックエンド
  Next.js(App Router, Route Handlers)+TypeScript
- ライブラリ
  Shadcn, Tailwind, Orval, Auth.js
- データベース
  Drizzle+PostgresSQL
- デプロイ
  Vercel

## ディレクトリ構成

```text:sample
/project-root
├── /app
│ ├── /api // API ルートハンドラを配置するフォルダ
│ ├── /(pages) // アプリページを配置するフォルダ
│ ├── /components
│ │ ├── /layout // アプリ全体のレイアウトコンポーネントを配置
│ │ └── /elements // アプリ全体で使うコンポーネントを配置するフォルダ
│ ├── /lib // ライブラリの初期化や共通設定を行うフォルダ
│ ├── /hooks // アプリ全体で使うカスタム React フックを配置するフォルダ
│ ├── /types // アプリ全体で使う TypeScript の型定義を管理するフォルダ
│ └── /utils // アプリ全体で使うユーティリティ関数を配置するフォルダ
├── /features // ページごとに関連するコンポーネント, フック, 型定義を整理するフォルダ
├── /public // 画像や静的ファイルを配置するフォルダ
├── /orval // Orval で生成された API フックを配置するフォルダ
├── /drizzle // Drizzle ORM 用のマイグレーションやスキーマ定義を配置するフォルダ
...
```
