# 确保脚本抛出遇到的错误
set -e
yarn run build
# 生成静态文件
tcb hosting deploy dist /
git add .
git commit -m 'deploy'
git push -u origin main