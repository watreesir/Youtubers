// 工具数据
const toolsData = [
    // 一、热门爆款的选题挖掘工具
    {
        id: 'piped',
        name: 'Piped',
        keywords: 'YouTube趋势、热门视频、无广告观看',
        url: 'https://piped.kavin.rocks/trending',
        description: 'Piped是一个开源的第三方YouTube客户端，可以无广告查看当前热门趋势视频，帮助创作者发现流行内容和创作灵感。',
        usageScenarios: [
            '快速浏览YouTube上的当前热门视频，寻找灵感或研究观众关注的话题',
            '根据热门内容和趋势规划自己的视频主题，紧跟潮流，吸引更多观众',
            '查看同领域创作者的热门视频，分析其成功的标题、标签和内容策略'
        ],
        icon: 'ri-fire-line',
        category: 'topic'
    },
    {
        id: 'yewTube',
        name: 'YewTube Trending',
        keywords: 'YouTube趋势',
        url: 'https://yewtu.be/feed/trending?type=Default&region=US',
        description: 'YewTube是一个隐私友好的YouTube替代品，专注于展示美国地区的热门视频趋势，帮助创作者了解海外市场动态。',
        usageScenarios: [
            '快速了解美国地区YouTube的当前热门视频，为创作提供方向和灵感',
            '研究热门视频的标题、缩略图设计和内容结构，优化自己的创作策略',
            '浏览多样化的热门内容，发现观众感兴趣的主题并计划相关的视频创作'
        ],
        icon: 'ri-youtube-line',
        category: 'topic'
    },
    {
        id: 'tubefilter',
        name: 'Tubefilter',
        keywords: 'YouTube新闻、创作者资源、行业趋势',
        url: 'https://www.tubefilter.com/',
        description: 'Tubefilter是YouTube行业动态的权威资讯平台，提供最新的平台政策、创作者成功案例和行业趋势分析。',
        usageScenarios: [
            '了解YouTube及数字内容领域的最新新闻和变化，例如算法更新、政策调整等',
            '从热门创作者的成功故事或趋势报道中获取视频创意和创作思路',
            '学习关于广告、品牌合作和内容变现的最新策略，提高频道收益',
            '发现新兴的创作者工具或资源，优化视频制作和运营效率'
        ],
        icon: 'ri-newspaper-line',
        category: 'topic'
    },
    {
        id: 'explodingTopics',
        name: 'Exploding Topics',
        keywords: '关键词研究、内容趋势、SEO优化',
        url: 'https://explodingtopics.com/blog/top-youtube-searches',
        description: '通过分析YouTube搜索数据，发现正在快速增长的热门话题和关键词，帮助创作者抢占新兴市场和趋势流量。',
        usageScenarios: [
            '根据高搜索量的关键词，创作相关内容，吸引更多目标观众',
            '利用热门关键词优化视频标题、描述和标签，提升搜索曝光率',
            '发现正在增长或突然爆红的话题，抢占趋势流量',
            '分析不同类别的关键词，了解观众的搜索行为，为未来视频提供创作方向'
        ],
        icon: 'ri-rocket-line',
        category: 'topic'
    },
    {
        id: 'tastyeutts',
        name: 'TASTYEUTTS',
        keywords: 'YouTube选题、CPM',
        url: 'https://www.tastyedits.com/most-profitable-youtube-nichees/',
        description: '基于CPM数据分析2024年最赚钱的YouTube领域，帮助创作者选择高收益的内容方向和变现策略。',
        usageScenarios: [
            '了解不同领域的收益潜力，选择高CPM的内容方向',
            '分析赚钱领域的特点，优化自己的内容策略',
            '发现潜在的利基市场，避开过度竞争的领域'
        ],
        icon: 'ri-money-dollar-circle-line',
        category: 'topic'
    },

    // 二、频道对标挖掘工具
    {
        id: 'findAChannel',
        name: 'FindAChannel',
        keywords: 'YouTube频道发现、网红营销、SEO工具、内容创作者资源',
        url: 'https://www.findachannel.net/',
        description: '强大的YouTube频道搜索引擎，可以按主题、数据指标筛选频道，深入分析竞品，发现潜在合作伙伴。',
        usageScenarios: [
            '发现潜在的合作伙伴或竞争对手，深入了解特定领域的YouTube频道表现',
            '通过平台提供的SEO工具，优化自己的频道内容，提升在YouTube上的曝光度',
            '找到适合推广产品或服务的影响者，促进业务增长'
        ],
        icon: 'ri-search-eye-line',
        category: 'channel'
    },
    {
        id: 'similarChannels',
        name: 'SimilarChannels',
        keywords: 'YouTube频道发现、相似频道推荐、社区驱动',
        url: 'https://similarchannels.com/',
        description: '基于AI算法的YouTube频道推荐系统，输入任意频道即可找到相似内容创作者，快速定位竞品和潜在合作伙伴。',
        usageScenarios: [
            '发现潜在的合作伙伴或竞争对手，深入了解特定领域的YouTube频道表现',
            '通过平台提供的推荐功能，找到与自己兴趣或业务相关的频道，获取灵感',
            '寻找合作机会，扩大自己的创作网络'
        ],
        icon: 'ri-links-line',
        category: 'channel'
    },
    {
        id: 'favoree',
        name: 'Favoree',
        keywords: 'YouTube频道发现、频道评价、内容推荐、用户评论',
        url: 'https://www.favoree.io/',
        description: '专业的YouTube频道发现和评估平台，提供详细的频道分析和用户评价，帮助创作者找到优质合作对象。',
        usageScenarios: [
            '通过精细的筛选条件，找到与自己兴趣领域完全匹配的频道',
            '获取其他用户的真实评价，快速了解频道质量',
            '发现新的内容创作灵感和趋势'
        ],
        icon: 'ri-star-line',
        category: 'channel'
    },
    {
        id: 'youTubeLearn',
        name: 'YouTubeLearn',
        keywords: 'YouTube学习资源、技能学习、教育内容、在线视频',
        url: 'https://youtubelearn.softr.app/',
        description: '精选YouTube创作者必备的学习资源，涵盖视频制作、运营策略、变现技巧等全方位教程。',
        usageScenarios: [
            '通过教程掌握剪辑、拍摄、灯光和音效等视频制作技巧',
            '学习如何选择内容方向、优化SEO和提升观众互动率',
            '获取广告收益、品牌合作和推广的技巧，提升收入来源',
            '寻找学习类的对标账号，借鉴成功经验'
        ],
        icon: 'ri-book-2-line',
        category: 'channel'
    },
    {
        id: 'eduTube',
        name: 'EduTube',
        keywords: '教育视频、内容策划、学习资源、YouTube',
        url: 'https://www.edutube.app/',
        description: '专注于教育类YouTube视频的聚合平台，精选数学、科技等领域的优质内容，为创作者提供灵感和学习方向。',
        usageScenarios: [
            '自学新技能或深入特定领域知识',
            '节省寻找优质教育视频的时间，专注于学习和技能提升',
            '发现教育类内容的创作思路和表现形式'
        ],
        icon: 'ri-graduation-cap-line',
        category: 'channel'
    },

    // 三、关键词挖掘工具&SEO
    {
        id: 'tubeBuddy',
        name: 'TubeBuddy',
        keywords: 'YouTube SEO、频道管理、视频优化、内容创作者工具',
        url: 'https://chromewebstore.google.com/detail/tubebuddy-for-youtube/mhkhmbddkmdggbhaaaodilponhnccicb?hl=en-US',
        description: '最受欢迎的YouTube浏览器插件之一，提供关键词研究、标签优化、批量编辑等强大的SEO和管理功能。',
        usageScenarios: [
            '通过关键词浏览器，发现高效的关键词和标签，优化视频标题、描述和标签',
            '批量更新视频元数据、添加卡片和片尾屏幕等，节省手动工作时间',
            '分析竞争对手标签、描述和绩效指标，找出改进机会'
        ],
        icon: './images/TubeBuddy.png',
        category: 'keyword'
    },
    {
        id: 'googleTrends',
        name: 'Google Trends',
        keywords: '趋势分析、数据统计、关键词研究',
        url: 'https://trends.google.com/trends/',
        description: '谷歌官方趋势分析工具，可查看全球和本地的搜索热度变化，发现新兴话题和长期趋势。',
        usageScenarios: [
            '查看当前流行的关键词和话题，创作相关的视频内容，提升观看量',
            '分析哪些搜索词在YouTube上最热，优化视频标题、描述和标签，增加搜索曝光',
            '了解目标观众的兴趣点，根据地理位置和兴趣偏好调整视频创作方向',
            '追踪行业或特定话题的长期热度变化，预测未来可能的内容潮流'
        ],
        icon: 'ri-line-chart-line',
        category: 'keyword'
    },
    {
        id: 'answerThePublic',
        name: 'Answer The Public',
        keywords: '关键词研究、内容创作、搜索分析',
        url: 'https://answerthepublic.com/',
        description: '基于搜索引擎数据的问答式关键词工具，展示用户最关心的问题，帮助创作者制定内容计划。',
        usageScenarios: [
            '了解观众常见问题，创作有针对性、解答性强的内容，提升视频的观看率和互动性',
            '通过分析常见的搜索问题，选择最佳关键词来优化视频标题、描述和标签',
            '了解观众兴趣和搜索意图，规划一系列相关视频，以吸引更多目标受众',
            '查看竞争对手在特定关键词上的表现，帮助创作者找准自己的定位和差异化内容'
        ],
        icon: 'ri-question-answer-line',
        category: 'keyword'
    },
    {
        id: 'keywordTool',
        name: 'Keyword Tool',
        keywords: '关键词研究、SEO优化、内容创作、市场调研',
        url: 'https://keywordtool.io/',
        description: '专业的长尾关键词挖掘工具，利用Google自动完成功能，为每个搜索词提供多达750个相关建议。',
        usageScenarios: [
            '识别和嵌入流行的搜索词，优化视频标题和描述',
            '提高在Google搜索结果和YouTube搜索中的排名',
            '发现长尾关键词，减少竞争，提高排名机会'
        ],
        icon: 'ri-keyword-line',
        category: 'keyword'
    },

    // 四、频道分析工具
    {
        id: 'viewStats',
        name: 'ViewStats',
        keywords: 'YouTube频道统计、数据分析、内容创作者工具、视频表现',
        url: 'https://www.viewstats.com/',
        description: '全面的YouTube数据分析工具，提供详细的观看数据、受众分析和趋势报告，助你优化内容策略。',
        usageScenarios: [
            '查看单个视频的观看数据、观众互动、观看时长等，优化内容创作策略',
            '全面分析频道的增长趋势、订阅者变化和观看情况，制定发展计划',
            '了解观众的地域、性别、年龄等信息，帮助创作者精准定位内容',
            '查看竞争对手的视频表现和趋势，进行市场对比，优化自己的内容'
        ],
        icon: 'ri-bar-chart-grouped-line',
        category: 'analytics'
    },
    {
        id: 'youTubeStudio',
        name: 'YouTube Studio',
        keywords: '视频管理、创作者工具、数据分析',
        url: 'https://studio.youtube.com/',
        description: 'YouTube官方的创作者工作室，集成了视频管理、数据分析、收益监控等核心功能，是创作者必备的运营工具。',
        usageScenarios: [
            '视频管理：上传、删除、编辑视频，并对视频进行分类、添加标签和修改描述',
            '数据分析：查看观看时长、观看来源、用户互动、观众反馈等数据，帮助优化内容创作策略',
            '收入监控：跟踪广告收入和其他收入来源，帮助创作者优化盈利模式',
            '频道优化：调整频道设置、更新自定义缩略图，确保频道页面的视觉效果与内容一致'
        ],
        icon: 'ri-dashboard-line',
        category: 'analytics'
    },
    {
        id: 'noxInfluencer',
        name: 'NoxInfluencer',
        keywords: '海外网红营销、KOL数据分析、社交媒体推广、跨境电商',
        url: 'https://cn.noxinfluencer.com/',
        description: '专业的跨平台网红分析工具，提供详细的数据洞察，帮助创作者了解市场趋势和竞品表现。',
        usageScenarios: [
            '分析潜在的合作网红，评估其影响力和受众群体，寻找合适的合作伙伴',
            '查看竞争对手的频道表现、内容策略，了解行业趋势，优化自己的内容创作',
            '分析目标受众的兴趣，选择合适的合作对象进行品牌推广或跨平台合作',
            '通过查看视频的表现、观看时长、观众地域等数据，调整视频内容和发布策略'
        ],
        icon: 'ri-user-star-line',
        category: 'analytics'
    },

    // 五、频道收益分析工具
    {
        id: 'socialBlade',
        name: 'Social Blade',
        keywords: 'YouTube分析、社交媒体统计、数据追踪',
        url: 'https://socialblade.com/',
        description: '全球知名的社交媒体数据分析平台，提供详细的频道数据、收入估算和行业排名，是评估频道价值的重要工具。',
        usageScenarios: [
            '查看YouTube频道的详细表现数据，如观看量、订阅增长、视频收入等，帮助创作者优化运营策略',
            '分析竞争对手的频道表现，了解行业趋势并调整创作方向',
            '估算YouTube频道的收入范围，帮助创作者规划财务',
            '查看不同频道或视频的表现趋势，识别哪些内容类型最受欢迎'
        ],
        icon: 'ri-pie-chart-line',
        category: 'monetization'
    },
    {
        id: 'youtubeMonetizationChecker',
        name: 'YouTube Monetization Checker',
        keywords: 'YouTube货币化检测、频道分析、视频收益估算、内容创作者工具、短视频预估',
        url: 'https://ytlarge.com/youtube/monetization-checker/',
        description: '专业的YouTube变现状态检测工具，可快速评估频道是否符合收益计划要求，并提供详细的数据分析。',
        usageScenarios: [
            '评估自己的频道或视频是否符合货币化条件',
            '了解潜在收入，制定相应的内容策略',
            '分析竞争对手的频道，获取有价值的市场洞察'
        ],
        icon: './images/YouTube Monetization Checker.png',
        category: 'monetization'
    },
    {
        id: 'checkMonetization',
        name: 'Check Monetization',
        keywords: 'YouTube货币化、频道管理、收入监控',
        url: 'https://chromewebstore.google.com/detail/check-monetizaation/hcpbkgmihdmgecabghhddmppipjnkdje',
        description: '便捷的Chrome扩展工具，一键检查视频的货币化状态，实时监控频道收入表现，帮助优化变现策略。',
        usageScenarios: [
            '快速查看单个视频是否已经开启货币化，确保符合平台要求',
            '实时了解频道的收入情况，掌握每个视频或整个频道的盈利表现',
            '帮助创作者及时了解是否达到了YouTube的货币化标准，避免遗漏',
            '通过查看视频的货币化状态，优化内容和策略，提升收入'
        ],
        icon: 'ri-bank-card-line',
        category: 'monetization'
    },
    {
        id: 'ytLarge',
        name: 'YTLarge',
        keywords: 'YouTube工具、视频管理',
        url: 'https://ytlarge.com/',
        description: '多功能YouTube工具集合，提供变现检查、视频统计、元数据分析等功能，助你全方位优化频道表现。',
        usageScenarios: [
            '检查YouTube视频的变现状态',
            '获取详细的视频和频道数据',
            '分析视频的元数据，优化自己的内容'
        ],
        icon: './images/ytLarge.png',
        category: 'monetization'
    },

    // 六、内容创作工具
    // 封面工具
    {
        id: 'canva',
        name: 'Canva',
        keywords: '封面设计、图形设计、视频编辑、内容创作',
        url: 'https://www.canva.cn/',
        description: '广受欢迎的在线设计平台，提供丰富的模板和素材，让创作者轻松制作专业的视频封面和营销物料。',
        usageScenarios: [
            '视频封面设计：利用Canva的模板和设计工具，创作吸引眼球的YouTube视频封面',
            '社交媒体宣传：为YouTube视频制作引人注目的宣传图像和广告素材，提升视频的曝光率',
            '品牌视觉设计：为个人或频道创建一致的视觉风格，包括Logo、色彩搭配和字体设计',
            '视频编辑：添加字幕、动效、过渡效果等，提高视频质量'
        ],
        icon: 'ri-image-edit-line',
        category: 'content'
    },
    {
        id: 'ostendo',
        name: 'Ostendo',
        keywords: 'YouTube、封面、屏幕截图、网页捕捉、Chrome扩展',
        url: 'https://chromewebstore.google.com/detail/ostendo',
        description: '强大的Chrome截图工具，可捕获YouTube视频封面和页面内容，支持像素级编辑和标注，方便研究竞品设计。',
        usageScenarios: [
            '截取优秀YouTube封面进行研究和分析',
            '为教程视频截取屏幕内容',
            '捕捉和编辑网页内容作为视频素材'
        ],
        icon: 'ri-screenshot-line',
        category: 'content'
    },

    // 免版权音乐工具
    {
        id: 'tuneTank',
        name: 'TuneTank',
        keywords: '免费音乐素材、背景音乐、无版权音乐',
        url: 'https://tunetank.com/',
        description: '高质量的免版权音乐平台，提供丰富的背景音乐和音效，让创作者无需担心版权问题即可美化视频。',
        usageScenarios: [
            '为YouTube视频添加高质量的背景音乐，提升整体音画体验',
            '选择适合品牌推广或产品展示的视频音乐，增加吸引力',
            '为教育类或解说视频添加轻松自然的音乐，保持观众注意力',
            '使用免版税音乐，避免因版权问题导致的视频内容受限或下架'
        ],
        icon: 'ri-music-2-line',
        category: 'content'
    },
    {
        id: 'ncs',
        name: 'NCS (NoCopyrightSounds)',
        keywords: '免版权音乐、电子音乐、创作者工具',
        url: 'https://ncs.io/',
        description: '知名的免版权音乐发行平台，专注于电子音乐，为创作者提供高品质的背景音乐，支持商业使用。',
        usageScenarios: [
            '为YouTube视频选择动感、节奏感强的电子音乐，提升观众的沉浸感',
            '为游戏实况或回顾视频添加强烈氛围的音乐，吸引观众关注',
            '在TikTok、Instagram等短视频平台创作内容时使用免费的背景音乐'
        ],
        icon: 'ri-volume-up-line',
        category: 'content'
    },

    // 免版权视频&&免版权图片
    {
        id: 'pexels',
        name: 'Pexels',
        keywords: '免费图片、免费素材、视觉资源',
        url: 'https://www.pexels.com/zh-cn/',
        description: '优质的免费素材库，提供海量高清图片和视频资源，所有内容均可免费商用，是视频创作的必备资源。',
        usageScenarios: [
            '为YouTube视频添加高质量的背景素材，增强视觉效果',
            '使用Pexels上的图片为YouTube视频创建吸引人的封面图',
            '为视频制作的社交媒体宣传内容选择相关的图片素材',
            '通过免费的图片和视频素材，提高创作效率，节省时间和成本'
        ],
        icon: 'ri-image-line',
        category: 'content'
    },
    {
        id: 'pixabay',
        name: 'Pixabay',
        keywords: '免费图片、免费素材、视觉资源、视频素材',
        url: 'https://pixabay.com/',
        description: '全球知名的免费素材网站，提供数百万张图片和视频素材，支持关键词搜索，让创作更加便捷高效。',
        usageScenarios: [
            '为YouTube视频增添背景图片、插图和矢量图，提高视觉效果',
            '使用Pixabay上的高质量图片制作视频封面，吸引观众点击观看',
            '为YouTube视频在其他平台进行宣传时，使用Pixabay的免费素材制作宣传图'
        ],
        icon: 'ri-gallery-line',
        category: 'content'
    },

    // 七、下载工具
    {
        id: 'y2mate',
        name: 'Y2mate',
        keywords: '在线视频下载、格式转换、YouTube下载、免费工具',
        url: 'https://www.y2mate.com/en949',
        description: '便捷的在线视频下载工具，支持多个平台的视频下载和格式转换，帮助创作者获取参考素材。',
        usageScenarios: [
            '下载和保存在线视频，便于离线观看或分析',
            '将视频转换为其他格式，便于二次创作或推广',
            '通过搜索关键词直接找到相关视频进行下载'
        ],
        icon: 'ri-download-line',
        category: 'download'
    },
    {
        id: 'downsub',
        name: 'DownSub',
        keywords: 'YouTube字幕下载',
        url: 'https://downsub.com/',
        description: '专业的YouTube字幕下载工具，支持多语言字幕提取，方便创作者学习和参考优秀内容的文案。',
        usageScenarios: [
            '下载并学习成功YouTube视频的字幕内容',
            '获取外语视频的字幕进行翻译和学习',
            '分析热门视频的字幕内容，了解表达方式和关键点'
        ],
        icon: 'ri-file-text-line',
        category: 'download'
    }
];

// 初始化函数
function init() {
    // 渲染所有工具
    renderTools(toolsData);
    
    // 设置分类过滤器
    setupCategoryFilter();
    
    // 设置搜索功能
    setupSearch();
    
    // 设置回到顶部按钮
    setupBackToTop();
    
    // 默认选中"全部"分类
    const allCategoryBtn = document.querySelector('.category-btn[data-category="all"]');
    if (allCategoryBtn) {
        allCategoryBtn.classList.add('active');
        filterToolsByCategory('all');
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 渲染工具卡片
function renderTools(tools) {
    const toolsContainer = document.getElementById('tools-container');
    toolsContainer.innerHTML = '';
    
    // 定义分类标题映射
    const categoryTitles = {
        'topic': '一、热门爆款的选题挖掘工具',
        'channel': '二、频道对标挖掘工具',
        'keyword': '三、关键词挖掘工具&SEO',
        'analytics': '四、频道分析工具',
        'monetization': '五、频道收益分析工具',
        'content': '六、内容创作工具',
        'download': '七、下载工具'
    };

    // 定义子分类标题映射
    const subCategoryTitles = {
        'content': {
            'cover': '封面工具',
            'music': '免版权音乐工具',
            'media': '免版权视频&&免版权图片'
        }
    };

    // 按分类对工具进行分组
    const toolsByCategory = {};
    tools.forEach(tool => {
        if (!toolsByCategory[tool.category]) {
            toolsByCategory[tool.category] = [];
        }
        toolsByCategory[tool.category].push(tool);
    });

    // 按照固定顺序渲染分类
    const categoryOrder = ['topic', 'channel', 'keyword', 'analytics', 'monetization', 'content', 'download'];
    
    categoryOrder.forEach(category => {
        if (toolsByCategory[category]) {
            // 添加分类标题
            const categoryTitle = document.createElement('div');
            categoryTitle.className = 'category-title';
            categoryTitle.innerHTML = `<h2 data-category="${category}">${categoryTitles[category]}</h2>`;
            toolsContainer.appendChild(categoryTitle);

            // 如果是内容创作工具分类，需要处理子分类
            if (category === 'content') {
                let currentSubCategory = '';
                let subCategoryTools = {};
                
                // 先按子分类分组工具
                toolsByCategory[category].forEach(tool => {
                    let subCategory = '';
                    if (tool.keywords.includes('封面')) {
                        subCategory = 'cover';
                    } else if (tool.keywords.includes('音乐')) {
                        subCategory = 'music';
                    } else if (tool.keywords.includes('图片') || tool.keywords.includes('视频素材')) {
                        subCategory = 'media';
                    }
                    
                    if (!subCategoryTools[subCategory]) {
                        subCategoryTools[subCategory] = [];
                    }
                    subCategoryTools[subCategory].push(tool);
                });
                
                // 按子分类顺序渲染
                ['cover', 'music', 'media'].forEach(subCategory => {
                    if (subCategoryTools[subCategory]) {
                        const subCategoryTitle = document.createElement('div');
                        subCategoryTitle.className = 'sub-category-title';
                        subCategoryTitle.innerHTML = `<h3 data-subcategory="${subCategory}">${subCategoryTitles.content[subCategory]}</h3>`;
                        toolsContainer.appendChild(subCategoryTitle);
                        
                        subCategoryTools[subCategory].forEach((tool, index) => {
                            renderToolCard(tool, index, toolsContainer);
                        });
                    }
                });
            } else {
                // 渲染该分类下的所有工具
                toolsByCategory[category].forEach((tool, index) => {
                    renderToolCard(tool, index, toolsContainer);
                });
            }
        }
    });
}

// 抽取工具卡片渲染逻辑为单独的函数
function renderToolCard(tool, index, container, showUsageScenarios = false) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.setAttribute('data-category', tool.category);
    card.style.animationDelay = `${index * 0.05}s`;

    // 特定网站使用自定义图标
    let iconUrl;
    switch (tool.id) {
        case 'piped':
            iconUrl = 'https://piped.kavin.rocks/favicon.ico';
            break;
        case 'yewTube':
            iconUrl = 'https://yewtu.be/favicon.ico';
            break;
        case 'youTubeLearn':
            iconUrl = 'https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144.png';
            break;
        case 'tubeBuddy':
            iconUrl = './images/TubeBuddy.png';
            break;
        case 'youtubeMonetizationChecker':
            iconUrl = './images/YouTube Monetization Checker.png';
            break;
        case 'ytLarge':
            iconUrl = './images/ytLarge.png';
            break;
        case 'canva':
            iconUrl = 'https://static.canva.com/static/images/favicon-1.ico';
            break;
        default:
            const websiteUrl = new URL(tool.url);
            iconUrl = `https://www.google.com/s2/favicons?domain=${websiteUrl.hostname}&sz=64`;
    }

    // 将关键词字符串转换为数组
    const keywords = tool.keywords.split('、');

    // 构建使用场景HTML
    const usageScenariosHTML = showUsageScenarios && tool.usageScenarios ? `
        <div class="usage-scenarios">
            <h4>使用场景</h4>
            <ul>
                ${Array.isArray(tool.usageScenarios) 
                    ? tool.usageScenarios.map(scenario => `<li>${scenario}</li>`).join('')
                    : tool.usageScenarios.split('、').map(scenario => `<li>${scenario}</li>`).join('')}
            </ul>
        </div>
    ` : '';

    card.innerHTML = `
        <a href="${tool.url}" class="tool-card-link" target="_blank" rel="noopener noreferrer">
            <div class="tool-header">
                <div class="tool-icon">
                    <img src="${iconUrl}" alt="${tool.name} icon" onerror="this.src='https://via.placeholder.com/40x40'" loading="lazy">
                </div>
                <div class="tool-title">
                    <h3>${tool.name}</h3>
                    <div class="tool-tags">
                        ${keywords.map(keyword => `<span class="tag">${keyword}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="tool-body">
                <p class="tool-description">${tool.description}</p>
                ${usageScenariosHTML}
            </div>
        </a>
        `;
        
    container.appendChild(card);
}

// 分类筛选功能
function setupCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // 给当前点击的按钮添加active类
            button.classList.add('active');
            
            // 获取选中的分类
            const selectedCategory = button.getAttribute('data-category');
            
            // 调用筛选函数
            filterToolsByCategory(selectedCategory);
        });
    });
}

// 根据分类筛选工具
function filterToolsByCategory(category) {
    const toolsContainer = document.getElementById('tools-container');
    let visibleCount = 0;

    // 清空容器
    toolsContainer.innerHTML = '';

    // 定义分类标题映射
    const categoryTitles = {
        'topic': '一、热门爆款的选题挖掘工具',
        'channel': '二、频道对标挖掘工具',
        'keyword': '三、关键词挖掘工具&SEO',
        'analytics': '四、频道分析工具',
        'monetization': '五、频道收益分析工具',
        'content': '六、内容创作工具',
        'download': '七、下载工具'
    };

    // 定义子分类标题映射
    const subCategoryTitles = {
        'content': {
            'cover': '封面工具',
            'music': '免版权音乐工具',
            'media': '免版权视频&&免版权图片'
        }
    };

    // 按分类对工具进行分组
    const toolsByCategory = {};
    toolsData.forEach(tool => {
        if (!toolsByCategory[tool.category]) {
            toolsByCategory[tool.category] = [];
        }
        toolsByCategory[tool.category].push(tool);
    });

    // 按照固定顺序渲染分类
    const categoryOrder = ['topic', 'channel', 'keyword', 'analytics', 'monetization', 'content', 'download'];
    
    if (category === 'all') {
        // 显示所有分类的工具
        categoryOrder.forEach(cat => {
            if (toolsByCategory[cat]) {
                // 添加分类标题
                const categoryTitle = document.createElement('div');
                categoryTitle.className = 'category-title';
                categoryTitle.innerHTML = `<h2 data-category="${cat}">${categoryTitles[cat]}</h2>`;
                toolsContainer.appendChild(categoryTitle);

                // 如果是内容创作工具分类，需要处理子分类
                if (cat === 'content') {
                    let subCategoryTools = {
                        'cover': [],
                        'music': [],
                        'media': []
                    };
                    
                    // 按子分类分组工具
                    toolsByCategory[cat].forEach(tool => {
                        if (tool.keywords.includes('封面')) {
                            subCategoryTools.cover.push(tool);
                        } else if (tool.keywords.includes('音乐')) {
                            subCategoryTools.music.push(tool);
                        } else if (tool.keywords.includes('图片') || tool.keywords.includes('视频素材')) {
                            subCategoryTools.media.push(tool);
                        }
                    });
                    
                    // 渲染子分类
                    Object.entries(subCategoryTools).forEach(([subCat, tools]) => {
                        if (tools.length > 0) {
                            const subCategoryTitle = document.createElement('div');
                            subCategoryTitle.className = 'sub-category-title';
                            subCategoryTitle.innerHTML = `<h3 data-subcategory="${subCat}">${subCategoryTitles.content[subCat]}</h3>`;
                            toolsContainer.appendChild(subCategoryTitle);
                            
                            tools.forEach((tool, index) => {
                                renderToolCard(tool, index, toolsContainer, false);
                                visibleCount++;
                            });
                        }
                    });
                } else {
                    // 渲染该分类下的所有工具
                    toolsByCategory[cat].forEach((tool, index) => {
                        renderToolCard(tool, index, toolsContainer, false);
                        visibleCount++;
                    });
                }
            }
        });
    } else {
        // 显示特定分类的工具
        if (category === 'content') {
            // 渲染子分类
            let subCategoryTools = {
                'cover': [],
                'music': [],
                'media': []
            };
            
            // 按子分类分组工具
            toolsByCategory[category].forEach(tool => {
                if (tool.keywords.includes('封面')) {
                    subCategoryTools.cover.push(tool);
                } else if (tool.keywords.includes('音乐')) {
                    subCategoryTools.music.push(tool);
                } else if (tool.keywords.includes('图片') || tool.keywords.includes('视频素材')) {
                    subCategoryTools.media.push(tool);
                }
            });
            
            // 渲染子分类
            Object.entries(subCategoryTools).forEach(([subCat, tools]) => {
                if (tools.length > 0) {
                    const subCategoryTitle = document.createElement('div');
                    subCategoryTitle.className = 'sub-category-title';
                    subCategoryTitle.innerHTML = `<h3 data-subcategory="${subCat}">${subCategoryTitles.content[subCat]}</h3>`;
                    toolsContainer.appendChild(subCategoryTitle);
                    
                    tools.forEach((tool, index) => {
                        renderToolCard(tool, index, toolsContainer, true);
            visibleCount++;
                    });
                }
            });
        } else {
            // 直接渲染该分类下的所有工具
            toolsByCategory[category].forEach((tool, index) => {
                renderToolCard(tool, index, toolsContainer, true);
                visibleCount++;
            });
        }
    }

    // 更新工具计数
    updateToolsCount(visibleCount);
}

// 设置搜索功能
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // 如果搜索框为空，显示当前分类下的所有工具
            const activeCategory = document.querySelector('.category-btn.active').dataset.category;
            filterToolsByCategory(activeCategory);
            return;
        }
        
        // 筛选匹配搜索词的工具
        const toolCards = document.querySelectorAll('.tool-card');
        let visibleCount = 0;
        
        toolCards.forEach(card => {
            const toolName = card.querySelector('h3').textContent.toLowerCase();
            const toolTags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
            const toolDescription = card.querySelector('.tool-description').textContent.toLowerCase();
            
            if (toolName.includes(searchTerm) || toolTags.includes(searchTerm) || toolDescription.includes(searchTerm)) {
                card.style.display = '';
                card.classList.remove('category-hidden');
                visibleCount++;
            } else {
                card.style.display = 'none';
                card.classList.add('category-hidden');
            }
        });
        
        // 更新工具计数
        updateToolsCountForSearch(visibleCount, searchTerm);
        
        // 处理分类标题的显示/隐藏
        const categoryTitles = document.querySelectorAll('.category-title');
        const subCategoryTitles = document.querySelectorAll('.sub-category-title');
        
        categoryTitles.forEach(title => {
            const nextSibling = title.nextElementSibling;
            let hasVisibleCards = false;
            
            // 检查直到下一个分类标题之前的卡片
            let current = nextSibling;
            while (current && !current.classList.contains('category-title')) {
                if (current.classList.contains('tool-card') && !current.classList.contains('category-hidden')) {
                    hasVisibleCards = true;
                    break;
                }
                current = current.nextElementSibling;
            }
            
            title.style.display = hasVisibleCards ? '' : 'none';
        });
        
        // 处理子分类标题
        subCategoryTitles.forEach(title => {
            const nextSibling = title.nextElementSibling;
            let hasVisibleCards = false;
            
            // 检查直到下一个标题之前的卡片
            let current = nextSibling;
            while (current && !current.classList.contains('sub-category-title') && !current.classList.contains('category-title')) {
                if (current.classList.contains('tool-card') && !current.classList.contains('category-hidden')) {
                    hasVisibleCards = true;
                    break;
                }
                current = current.nextElementSibling;
            }
            
            title.style.display = hasVisibleCards ? '' : 'none';
        });
    });
}

// 专门用于搜索结果的工具计数更新
function updateToolsCountForSearch(count, searchTerm) {
    const toolsCountElement = document.getElementById('tools-count');
    if (toolsCountElement) {
        if (count === 0) {
            toolsCountElement.innerHTML = `未找到"<span>${searchTerm}</span>"相关工具`;
        } else {
            toolsCountElement.innerHTML = `找到 <span>${count}</span> 个"${searchTerm}"相关工具`;
        }
    }
}

// 更新工具计数
function updateToolsCount(count) {
    const toolsCountElement = document.getElementById('tools-count');
    if (toolsCountElement) {
        if (count === toolsData.length) {
            toolsCountElement.innerHTML = `显示全部 <span>${count}</span> 个工具`;
        } else {
            const activeCategory = document.querySelector('.category-btn.active');
            if (activeCategory && activeCategory.dataset.category !== 'all') {
                // 根据data-category属性获取对应的分类名称
                const categoryMap = {
                    'topic': '选题挖掘',
                    'channel': '频道对标',
                    'keyword': '关键词SEO',
                    'analytics': '频道分析',
                    'monetization': '收益分析',
                    'content': '内容创作',
                    'download': '下载'
                };
                const categoryName = categoryMap[activeCategory.dataset.category] || activeCategory.dataset.category;
                toolsCountElement.innerHTML = `显示 <span>${count}</span> 个${categoryName}工具`;
            } else {
                toolsCountElement.innerHTML = `显示 <span>${count}</span> 个匹配工具`;
            }
        }
    }
}

// 设置回到顶部按钮
function setupBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // 监听页面滚动
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // 点击事件
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
} 