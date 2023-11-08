# 環境構築のために行ったこと
1 npm init  -y vite-app envader-practice  
2 npm install  
3 npm run dev  

# tailwindcssをインストールするために行ったこと
https://zenn.dev/grimm_marchen/articles/8d297bf7ea1127 を参考にした。
1 npm install -D tailwindcss@latest postcss@latest autoprefixer@latest  
2 npx tailwindcss init -p  
3 tailwindcss.config.jsの  
module.exports = {
  // purge: [],　
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
4 index.cssに  
@tailwind base;  
@tailwind components;  
@tailwind utilities；を記載した。

# 実行した環境
node.js version@14.15.5  
npm version@6.14.11

#学んだこと
2023/11/8 refとRefの違い
