# 确保脚本抛出遇到的错误
set -e
# 安装依赖
# npm install --prefer-offline --no-audit --progress=false
# 生成静态文件
npx hexo generate
tcb hosting deploy public /
git add .
git commit -m 'deploy'
git push -f origin main