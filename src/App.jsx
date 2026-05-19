import { useState } from 'react'

const categories = ['全部', '数据分析平台', 'BI智能', '预测分析', '文本分析', '数据笔记本', '开源框架']

const tools = [
  { name: 'ChatExcel', desc: '通过自然语言对话操作Excel，AI自动理解意图并生成公式与图表', category: '数据分析平台', url: 'https://chatexcel.com', free: true, featured: true, icon: '📊' },
  { name: 'Julius AI', desc: 'AI驱动的数据分析助手，支持上传数据并自动生成可视化与洞察', category: '数据分析平台', url: 'https://julius.ai', free: true, featured: true, icon: '🤖' },
  { name: 'Obviously AI', desc: '无需代码的预测分析平台，几分钟内构建机器学习模型', category: '预测分析', url: 'https://obviously.ai', free: false, featured: false, icon: '🎯' },
  { name: 'Akkio', desc: 'AI预测分析工具，快速从数据中发现模式并做出预测', category: '预测分析', url: 'https://akkio.com', free: false, featured: false, icon: '⚡' },
  { name: 'DataRobot', desc: '企业级AutoML平台，自动化机器学习模型构建与部署', category: '预测分析', url: 'https://datarobot.com', free: false, featured: true, icon: '🤖' },
  { name: 'MonkeyLearn', desc: '无代码文本分析平台，自动分类和提取文本中的关键信息', category: '文本分析', url: 'https://monkeylearn.com', free: false, featured: false, icon: '🐵' },
  { name: 'Tableau AI', desc: 'Tableau的AI功能，智能数据可视分析与自然语言查询', category: 'BI智能', url: 'https://tableau.com', free: false, featured: true, icon: '📈' },
  { name: 'Power BI Copilot', desc: '微软Power BI中的AI助手，用自然语言生成报告和洞察', category: 'BI智能', url: 'https://powerbi.microsoft.com', free: false, featured: false, icon: '💡' },
  { name: 'Google Sheets AI', desc: 'Google表格内置AI功能，智能公式建议与数据分析', category: '数据分析平台', url: 'https://sheets.google.com', free: true, featured: false, icon: '📋' },
  { name: 'Rows AI', desc: 'AI增强的电子表格工具，支持自动化工作流与数据集成', category: '数据分析平台', url: 'https://rows.com', free: true, featured: false, icon: '🔀' },
  { name: 'Jupyter AI', desc: 'Jupyter生态的AI助手，在笔记本中集成大语言模型', category: '数据笔记本', url: 'https://jupyter-ai.readthedocs.io', free: true, featured: false, icon: '📓' },
  { name: 'Dataiku', desc: '协作式数据科学平台，从数据准备到模型部署一站式解决', category: '数据分析平台', url: 'https://dataiku.com', free: false, featured: false, icon: '🏗️' },
  { name: 'RapidMiner', desc: '数据科学工作台，可视化构建分析流程与预测模型', category: '预测分析', url: 'https://rapidminer.com', free: false, featured: false, icon: '⛏️' },
  { name: 'H2O.ai', desc: '开源AI/ML平台，提供自动机器学习和企业级AI解决方案', category: '开源框架', url: 'https://h2o.ai', free: true, featured: false, icon: '💧' },
  { name: 'Databricks', desc: '统一数据分析与AI平台，基于Lakehouse架构', category: '数据笔记本', url: 'https://databricks.com', free: false, featured: false, icon: '🔥' },
  { name: 'Pandas AI', desc: 'Pandas的AI扩展，用自然语言查询和操作DataFrame', category: '开源框架', url: 'https://github.com/gventuri/pandas-ai', free: true, featured: true, icon: '🐼' },
  { name: 'ChatGPT Code Interpreter', desc: 'ChatGPT内置代码执行环境，直接分析和可视化数据', category: '数据分析平台', url: 'https://chat.openai.com', free: false, featured: false, icon: '💻' },
  { name: 'Noteable', desc: 'AI驱动的数据笔记本，支持自然语言生成SQL和可视化', category: '数据笔记本', url: 'https://noteable.io', free: false, featured: false, icon: '📝' },
  { name: 'Hex', desc: '协作式数据笔记本平台，结合SQL、Python与AI分析', category: '数据笔记本', url: 'https://hex.tech', free: false, featured: false, icon: '🔮' },
  { name: 'ThoughtSpot', desc: 'AI驱动的搜索驱动分析平台，自然语言查询企业数据', category: 'BI智能', url: 'https://thoughtspot.com', free: false, featured: false, icon: '🔍' },
]

function ToolCard({ tool, expanded, onToggle }) {
  return (
    <div className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-2xl p-5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-start gap-3">
        <span className="text-3xl">{tool.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-white font-semibold text-lg">{tool.name}</h3>
            {tool.featured && <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full">编辑推荐</span>}
            {tool.free && <span className="px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">免费</span>}
          </div>
          <p className="text-gray-400 text-sm mt-1">{tool.desc}</p>
        </div>
      </div>
      {expanded && (
        <div className="mt-4 pt-4 border-t border-gray-800 space-y-2">
          <p className="text-gray-500 text-sm">分类：{tool.category}</p>
          <a href={tool.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition">
            访问官网 ↗
          </a>
        </div>
      )}
      <button onClick={onToggle} className="mt-3 text-xs text-gray-600 hover:text-gray-400 transition">
        {expanded ? '收起 ▲' : '展开详情 ▼'}
      </button>
    </div>
  )
}

export default function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('全部')
  const [showFree, setShowFree] = useState(false)
  const [expanded, setExpanded] = useState({})

  const filtered = tools.filter(t =>
    (category === '全部' || t.category === category) &&
    (!showFree || t.free) &&
    (t.name.toLowerCase().includes(search.toLowerCase()) || t.desc.includes(search))
  )

  const featured = tools.filter(t => t.featured)

  const toggleExpand = i => setExpanded(p => ({ ...p, [i]: !p[i] }))

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-950 to-cyan-900/20" />
        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI 数据分析工具导航
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            精选 20 款 AI 驱动的数据分析工具，助你高效洞察数据
          </p>
          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="搜索工具名称或描述..."
              className="w-full px-5 py-3 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
            />
            <span className="absolute right-4 top-3.5 text-gray-500">🔍</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Editor's Picks */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-300">⭐ 编辑推荐</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {featured.map(t => (
              <a key={t.name} href={t.url} target="_blank" rel="noopener"
                className="flex-shrink-0 px-4 py-3 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl hover:border-cyan-400/50 transition">
                <span className="text-2xl">{t.icon}</span>
                <p className="text-sm font-medium mt-1">{t.name}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {categories.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${category === c ? 'bg-purple-500/20 border-purple-500 text-purple-300' : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500'}`}>
              {c}
            </button>
          ))}
          <button onClick={() => setShowFree(!showFree)}
            className={`ml-auto px-4 py-1.5 rounded-full text-sm border transition ${showFree ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500'}`}>
            仅免费
          </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((t, i) => (
            <ToolCard key={t.name} tool={t} expanded={!!expanded[t.name]} onToggle={() => toggleExpand(t.name)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">未找到匹配的工具</p>
        )}

        {/* Footer */}
        <div className="mt-16 text-center text-gray-600 text-sm">
          <p>AI Data Analysis Hub · 精选 AI 数据分析工具导航</p>
        </div>
      </div>
    </div>
  )
}