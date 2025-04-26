# 韓国・ソウル旅行アプリ 2025

## プロジェクト構造

```
seoul-trip-app/
├── components/
│   ├── HomeScreen.jsx        # ホーム画面
│   ├── ScheduleScreen.jsx    # スケジュール画面
│   ├── InfoScreen.jsx        # 基本情報画面
│   ├── ChecklistScreen.jsx   # 持ち物チェックリスト画面
│   ├── ShoppingScreen.jsx    # 買い物リスト画面
│   ├── LinksScreen.jsx       # リンク集画面
│   └── PhotosScreen.jsx      # 写真アルバム画面
├── data/
│   ├── scheduleData.js       # スケジュールデータ
│   ├── usefulLinks.js        # リンク集データ
│   └── families.js           # 家族メンバーデータ
├── App.jsx                   # メインアプリケーションコンポーネント
├── index.jsx                 # エントリーポイント
├── index.html                # HTMLテンプレート
└── package.json              # プロジェクト設定

## 使用方法

1. 依存関係のインストール:
   ```bash
   npm install
   ```

2. 開発サーバーの起動:
   ```bash
   npm run dev
   ```

3. ビルド:
   ```bash
   npm run build
   ```

## 機能

- カウントダウンタイマー
- 日別スケジュール表示
- 持ち物チェックリスト（状態保存機能付き）
- 買い物リスト
- 便利なリンク集
- 写真アルバム（プレースホルダー）
- レスポンシブデザイン

## 技術スタック

- React 18
- Tailwind CSS
- Lucide React（アイコン）
- Vite（ビルドツール）
