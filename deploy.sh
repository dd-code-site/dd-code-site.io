# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
cloudbase framework:deploy

git add .

git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -u origin main