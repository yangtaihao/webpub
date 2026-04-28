# Azure Static Web Apps 发布说明

这个目录已经可以直接作为 `Azure Static Web Apps` 的前端目录发布。

## 当前目录约定

- `app_location`: `/login-demo`
- `api_location`: `""`
- `output_location`: `""`
- `skip_app_build`: `true`

## 最快发布方式

1. 把当前项目放进一个 GitHub 仓库。
2. 在 Azure Portal 创建一个 `Static Web App` 资源。
3. 连接到你的 GitHub 仓库和目标分支。
4. 构建配置填下面这组值：

```txt
App location: /login-demo
Api location:
Output location:
```

5. 如果 Azure 没自动生成工作流，可以直接使用仓库里的 `.github/workflows/azure-static-web-apps.yml`。
6. 在 GitHub 仓库 `Secrets and variables -> Actions` 里添加 `AZURE_STATIC_WEB_APPS_API_TOKEN`。
   这个值来自 Azure Static Web Apps 的 deployment token。

## 说明

- `staticwebapp.config.json` 已放在前端目录中。
- 这是纯静态页面，不需要 Node 构建，也不需要 Azure Functions。
- 如果以后要接真实登录接口，再单独增加 API 或接第三方认证即可。
