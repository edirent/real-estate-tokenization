// src/App.js
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">
      {/* ====== 顶部导航 ====== */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-blue-100">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-blue-600" aria-hidden />
            <span className="text-2xl font-extrabold text-blue-700 tracking-tight">REX</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-blue-700 transition-colors">How it works</a>
            <a href="#features" className="hover:text-blue-700 transition-colors">Features</a>
            <a href="#properties" className="hover:text-blue-700 transition-colors">Properties</a>
            <a href="#about" className="hover:text-blue-700 transition-colors">About</a>
          </nav>
          <a
            href="#cta"
            className="rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 active:scale-[0.99] transition"
          >
            Start Investing
          </a>
        </div>
      </header>

      {/* ====== Hero ====== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500" />
        {/* 装饰光斑 */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-black leading-tight">
              Real Estate, <span className="text-blue-100">Tokenized</span>
            </h1>
            <p className="mt-6 text-blue-100/90 text-lg">
              在 REX，每个代币代表真实房产的份额。透明分红、稳定租金、可交易的全球流动性——把机构级资产带到每个人的钱包里。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#properties"
                className="rounded-xl bg-white text-blue-700 px-6 py-3 font-semibold shadow hover:shadow-lg transition"
              >
                浏览房源
              </a>
              <a
                href="#how"
                className="rounded-xl border border-white/70 text-white px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                查看原理
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== How it works ====== */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-800">How it works</h2>
            <p className="mt-4 text-gray-600">
              我们将目标房产置于 SPV/LLC 结构下，将收益与权益映射为链上代币。租金按月分配，资产增值定期结算，所有交易透明可查。
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <div>
                  <p className="font-semibold">认购与铸造</p>
                  <p className="text-gray-600">KYC 后以法币/稳定币认购，对应获得房产代币（份额）。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <div>
                  <p className="font-semibold">透明分红</p>
                  <p className="text-gray-600">租金以稳定币派发至你的钱包，比例与持仓同步。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <div>
                  <p className="font-semibold">自由转让</p>
                  <p className="text-gray-600">代币可在受限白名单内转让，实现全球范围内的流动性。</p>
                </div>
              </li>
            </ul>
          </div>
          {/* 示意卡片 */}
          <div className="order-1 md:order-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 h-40 w-full" />
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-blue-700">Token Price</p>
                  <p className="text-xl font-bold text-blue-900">$100</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-blue-700">Expected Yield</p>
                  <p className="text-xl font-bold text-blue-900">6.2%</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-blue-700">Payout</p>
                  <p className="text-xl font-bold text-blue-900">Monthly</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
                模拟认购
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Features ====== */}
      <section id="features" className="bg-blue-50/60 border-y border-blue-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-extrabold text-blue-800 text-center">Why REX</h2>
          <p className="mt-3 text-center text-gray-600">
            安全、透明、可组合。用区块链把传统不动产变成可流动的数字资产。
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["合规优先", "SPV/LLC 架构 + KYC/AML，降低发行与转让风险。"],
              ["稳定现金流", "租金按月分配，收益到你自托管的钱包。"],
              ["全球流动性", "白名单内自由转让，改善传统地产的退出效率。"],
              ["低门槛", "支持小额起投，资产份额化降低单次资金压力。"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm border border-blue-100">
                <div className="h-10 w-10 rounded-xl bg-blue-600 mb-4" aria-hidden />
                <p className="font-semibold text-blue-900">{title}</p>
                <p className="text-gray-600 mt-2 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 精选房源 ====== */}
      <section id="properties" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-800">Featured Property</h2>
            <p className="text-gray-600 mt-2">示例：Boston 4B2B • 1,200 sqft • Class B 多户</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-blue-700 font-semibold hover:underline">
            查看全部房源 →
          </a>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden border border-blue-100">
            <div className="h-64 w-full bg-gradient-to-tr from-blue-400 to-blue-600" />
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Boston • Allston</p>
                <span className="rounded-full bg-blue-50 text-blue-700 text-xs px-3 py-1 border border-blue-100">
                  Tokenized
                </span>
              </div>
              <p className="text-gray-600 mt-2">
                代币价格 $100，每月按持仓分配租金，目标年化收益 6–8%，二级流动性受白名单限制。
              </p>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl bg-blue-50 p-3">
                  <p className="text-blue-700">估值</p>
                  <p className="font-semibold text-blue-900">$520,000</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3">
                  <p className="text-blue-700">流通代币</p>
                  <p className="font-semibold text-blue-900">5,200</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3">
                  <p className="text-blue-700">分红周期</p>
                  <p className="font-semibold text-blue-900">Monthly</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
                了解详情
              </button>
            </div>
          </div>

          {/* 右侧要点列表 */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6">
            <h3 className="text-xl font-semibold text-blue-900">投资要点</h3>
            <ul className="mt-4 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                校园与商业圈相邻，租赁需求稳定，空置率低于同区均值。
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                代币化后可在白名单二级市场内交易，提高退出效率。
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                运维、税务、保险等信息定期披露，确保收益透明度。
              </li>
            </ul>
            <a href="#cta" className="mt-6 inline-block text-blue-700 font-semibold hover:underline">
              我想试投 →
            </a>
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section id="cta" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold">5 分钟完成开户，开始你的第一笔代币化地产投资</h2>
          <p className="mt-3 text-blue-100">
            支持稳定币/银行卡入金，KYC 审核通过后即可认购。你的代币，你的钱包，你的分红。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="rounded-xl bg-white text-blue-700 px-6 py-3 font-semibold shadow hover:shadow-lg transition" href="#">
              创建账户
            </a>
            <a className="rounded-xl border border-white/70 px-6 py-3 font-semibold hover:bg-white/10 transition" href="#about">
              了解合规与流程
            </a>
          </div>
        </div>
      </section>

      {/* ====== Footer ====== */}
      <footer id="about" className="bg-white border-t border-blue-100">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-extrabold text-blue-800 text-xl">REX</p>
            <p className="mt-2 text-sm text-gray-600">
              Real Estate, Tokenized. 让全球更多投资者享受机构级不动产的稳健回报。
            </p>
          </div>
          <div>
            <p className="font-semibold text-blue-900">产品</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#properties" className="hover:text-blue-700">房源市场</a></li>
              <li><a href="#how" className="hover:text-blue-700">代币化流程</a></li>
              <li><a href="#features" className="hover:text-blue-700">核心能力</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-blue-900">支持</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-700">帮助中心</a></li>
              <li><a href="#" className="hover:text-blue-700">合规与风险</a></li>
              <li><a href="#" className="hover:text-blue-700">费用与税务</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-blue-900">联系我们</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>support@rex.example</li>
              <li>© {new Date().getFullYear()} REX</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
