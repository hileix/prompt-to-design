export const sampleHtml = `
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的应用</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="font-sans antialiased text-gray-800 bg-gray-50">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <span class="text-xl font-bold text-indigo-600">AppLogo</span>
                    </div>
                </div>
                <!-- 桌面导航菜单 -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#" class="text-gray-600 hover:text-indigo-600">首页</a>
                    <a href="#" class="text-gray-600 hover:text-indigo-600">功能</a>
                    <a href="#" class="text-gray-600 hover:text-indigo-600">关于我们</a>
                    <a href="#" class="text-gray-600 hover:text-indigo-600">联系方式</a>
                    <a href="#" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">立即开始</a>
                </div>
                <!-- 移动端菜单按钮 -->
                <div class="md:hidden flex items-center">
                    <button type="button" class="text-gray-600" id="mobile-menu-button">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- 移动端导航菜单 (默认隐藏) -->
        <div class="hidden md:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="#" class="block px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 rounded-md">首页</a>
                <a href="#" class="block px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 rounded-md">功能</a>
                <a href="#" class="block px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 rounded-md">关于我们</a>
                <a href="#" class="block px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 rounded-md">联系方式</a>
                <a href="#" class="block px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">立即开始</a>
            </div>
        </div>
    </nav>

    <!-- 主要内容区 -->
    <main>
        <!-- 英雄区域 -->
        <section class="py-12 md:py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 mb-8 md:mb-0 md:pr-10">
                        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            简单、高效的应用解决方案
                        </h1>
                        <p class="text-lg md:text-xl text-gray-600 mb-6">
                            我们提供直观的用户体验和强大的功能，帮助您轻松完成工作。
                        </p>
                        <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            <a href="#" class="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 text-center">
                                免费试用
                            </a>
                            <a href="#" class="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 text-center">
                                了解更多
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <div class="bg-gray-200 rounded-lg p-4 h-64 md:h-80 flex items-center justify-center">
                            <span class="text-gray-500 text-lg">应用截图展示</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 特性区域 -->
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900">核心功能</h2>
                    <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
                        我们提供一系列强大功能，满足您的各种需求。
                    </p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- 功能1 -->
                    <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">高效处理</h3>
                        <p class="text-gray-600">
                            采用先进技术，确保快速响应和处理，提高工作效率。
                        </p>
                    </div>
                    <!-- 功能2 -->
                    <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">安全可靠</h3>
                        <p class="text-gray-600">
                            采用多层次安全防护，保障您的数据安全和隐私。
                        </p>
                    </div>
                    <!-- 功能3 -->
                    <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">个性定制</h3>
                        <p class="text-gray-600">
                            根据您的需求提供个性化服务，满足不同场景的应用。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA区域 -->
        <section class="py-12 md:py-16 bg-indigo-600">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
                    准备好开始使用了吗？
                </h2>
                <p class="text-indigo-100 mb-8 max-w-2xl mx-auto">
                    注册账号，免费试用7天，体验我们的全部功能。
                </p>
                <div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <a href="#" class="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100">
                        立即注册
                    </a>
                    <a href="#" class="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-indigo-700">
                        联系我们
                    </a>
                </div>
            </div>
        </section>
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-gray-300">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <span class="text-xl font-bold text-white">AppLogo</span>
                    <p class="mt-2 text-sm">
                        简单、高效的应用解决方案，为您提供更好的体验。
                    </p>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-white uppercase mb-4">产品</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">功能</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">价格</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">案例</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-white uppercase mb-4">公司</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">关于我们</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">博客</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">加入我们</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-white uppercase mb-4">支持</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">帮助中心</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">联系我们</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">隐私政策</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-sm">© 2025 AppName. 保留所有权利。</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="text-gray-400 hover:text-white">
                        <span class="sr-only">微信</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.91,15.19c-0.96,0-1.73-0.77-1.73-1.73s0.77-1.73,1.73-1.73s1.73,0.77,1.73,1.73S9.87,15.19,8.91,15.19z M13.37,11.74 c0.96,0,1.73,0.77,1.73,1.73s-0.77,1.73-1.73,1.73c-0.96,0-1.73-0.77-1.73-1.73S12.41,11.74,13.37,11.74z M20,0H4C1.79,0,0,1.79,0,4 v16c0,2.21,1.79,4,4,4h16c2.21,0,4-1.79,4-4V4C24,1.79,22.21,0,20,0z M17.33,18.21c-1.44,0-2.73-0.62-3.6-1.61 c-0.07,0.01-0.13,0.01-0.2,0.01c-0.09,0-0.17-0.01-0.26-0.01c-0.87,0.99-2.17,1.61-3.6,1.61C7.37,18.21,5.5,16.34,5.5,14 c0-1.23,0.62-2.33,1.56-3.06c-0.02-0.19-0.03-0.39-0.03-0.59c0-3.12,3-5.65,6.7-5.65c3.7,0,6.7,2.53,6.7,5.65 c0,0.19-0.01,0.38-0.02,0.56c0.98,0.73,1.63,1.85,1.63,3.09C22.03,16.34,20.16,18.21,17.33,18.21z" />
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <span class="sr-only">微博</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10.82,18.37c-3.47,0-6.29-2.37-6.29-5.29c0-2.92,2.82-5.29,6.29-5.29s6.29,2.37,6.29,5.29 C17.11,16,14.29,18.37,10.82,18.37z M8.56,13.97c0.15,0.64,0.8,1.06,1.46,0.92c0.66-0.14,1.08-0.79,0.92-1.44 c-0.15-0.65-0.8-1.06-1.46-0.92C8.82,12.68,8.4,13.32,8.56,13.97z M10.08,12.48c0.22-0.05,0.38,0.04,0.42,0.2 c0.05,0.15-0.08,0.33-0.27,0.38c-0.2,0.05-0.37-0.04-0.41-0.19C9.77,12.7,9.9,12.53,10.08,12.48z M20,0H4C1.79,0,0,1.79,0,4v16 c0,2.21,1.79,4,4,4h16c2.21,0,4-1.79,4-4V4C24,1.79,22.21,0,20,0z M13.49,10.51c-0.42-0.13-0.72-0.21-0.5-0.77 c0.49-1.2,0.54-2.24,0.01-2.98c-0.99-1.38-3.7-1.31-6.8-0.04c0,0-0.97,0.42-0.72-0.35c0.48-1.53,0.41-2.81-0.34-3.55 c-1.69-1.69-6.18,0.06-10.03,3.91C-1.14,13.05,1.3,15.9,5.35,15.9c3.85,0,8.09-1.69,11.01-4.83 C17.96,9.33,15.56,11.05,13.49,10.51z M16.13,7.86c-0.19,0.02-0.33-0.13-0.35-0.32c-0.02-0.19,0.13-0.34,0.33-0.34 c1,0,1.84-0.69,1.84-1.55c0-0.19,0.14-0.33,0.34-0.33c0.19,0,0.34,0.15,0.34,0.33C18.63,6.82,17.51,7.86,16.13,7.86z M21.22,5.01 c-0.39,1.53-1.65,2.62-3.35,3.09c-0.18,0.05-0.37-0.05-0.43-0.23c-0.05-0.18,0.05-0.37,0.23-0.42c1.43-0.4,2.46-1.3,2.78-2.57 c0.1-0.4,0.15-0.82,0.15-1.25c0-0.19,0.15-0.34,0.34-0.34s0.34,0.15,0.34,0.34C21.29,4.15,21.26,4.59,21.22,5.01z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // 移动端菜单切换
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
    </script>
</body>
</html>
`;
