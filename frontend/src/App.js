import { useState } from "react";

const translations = {
  en: {
    howItWorks: "How it works",
    features: "Features",
    properties: "Properties",
    about: "About",
    startInvesting: "Start Investing",
    heroTitle: "Real Estate, Tokenized",
    heroSubtitle:
      "At REX, every token represents a share of a real property. Transparent dividends, stable rental income, and tradable global liquidity—bringing institutional-grade assets to everyone's wallet.",
    browseProperties: "Browse Properties",
    learnHow: "Learn How",
    howItWorksTitle: "How it works",
    howItWorksDescription:
      "We place target properties under an SPV/LLC structure, mapping the income and equity to on-chain tokens. Rent is distributed monthly, asset appreciation is settled periodically, and all transactions are transparent and verifiable.",
    subscriptionAndMinting: "Subscription & Minting",
    subscriptionAndMintingDescription:
      "After KYC, subscribe with fiat/stablecoins to receive corresponding property tokens (shares).",
    transparentDividends: "Transparent Dividends",
    transparentDividendsDescription:
      "Rent is distributed as stablecoins to your wallet, proportional to your holdings.",
    freeTransfer: "Free Transfer",
    freeTransferDescription:
      "Tokens can be transferred within a restricted whitelist, enabling global liquidity.",
    tokenPrice: "Token Price",
    expectedYield: "Expected Yield",
    payout: "Payout",
    monthly: "Monthly",
    simulateSubscription: "Simulate Subscription",
    whyRex: "Why REX",
    whyRexDescription:
      "Secure, transparent, and composable. Turning traditional real estate into liquid digital assets using the blockchain.",
    complianceFirst: "Compliance First",
    complianceFirstDescription:
      "SPV/LLC structure + KYC/AML to reduce issuance and transfer risks.",
    stableCashFlow: "Stable Cash Flow",
    stableCashFlowDescription:
      "Rent is distributed monthly, with proceeds going to your self-custodied wallet.",
    globalLiquidity: "Global Liquidity",
    globalLiquidityDescription:
      "Freely transferable within a whitelist, improving the exit efficiency of traditional real estate.",
    lowThreshold: "Low Threshold",
    lowThresholdDescription:
      "Supports small initial investments, with asset fractionalization reducing the one-time financial pressure.",
    featuredProperty: "Featured Property",
    featuredPropertyDescription:
      "Example: Boston 4B2B • 1,200 sqft • Class B Multifamily",
    viewAllProperties: "View all properties →",
    bostonAllston: "Boston • Allston",
    tokenized: "Tokenized",
    propertyDescription:
      "Token price of $100, monthly rent distribution based on holdings, target annualized return of 6–8%, secondary liquidity restricted to whitelist.",
    valuation: "Valuation",
    circulatingTokens: "Circulating Tokens",
    dividendCycle: "Dividend Cycle",
    learnMore: "Learn More",
    investmentHighlights: "Investment Highlights",
    highlight1:
      "Adjacent to campus and business districts, with stable rental demand and a vacancy rate lower than the district average.",
    highlight2:
      "After tokenization, it can be traded in a whitelisted secondary market, improving exit efficiency.",
    highlight3:
      "Information on operations, maintenance, taxes, and insurance is disclosed periodically to ensure income transparency.",
    tryInvesting: "I want to try investing →",
    ctaTitle:
      "Complete account opening in 5 minutes and start your first tokenized real estate investment",
    ctaSubtitle:
      "Supports funding with stablecoins/bank cards, with subscriptions available after KYC approval. Your tokens, your wallet, your dividends.",
    createAccount: "Create Account",
    learnAboutCompliance: "Learn about compliance & process",
    product: "Product",
    propertyMarket: "Property Market",
    tokenizationProcess: "Tokenization Process",
    coreCapabilities: "Core Capabilities",
    support: "Support",
    helpCenter: "Help Center",
    complianceAndRisk: "Compliance & Risk",
    feesAndTaxes: "Fees & Taxes",
    contactUs: "Contact Us",
    footerDescription:
      "Real Estate, Tokenized. Allowing more investors globally to enjoy the stable returns of institutional-grade real estate.",
    allRightsReserved: "© {new Date().getFullYear()} REX",
    language: "中",
  },
  zh: {
    howItWorks: "工作原理",
    features: "核心功能",
    properties: "精选房源",
    about: "关于我们",
    startInvesting: "开始投资",
    heroTitle: "房地产，代币化",
    heroSubtitle:
      "在 REX，每个代币代表真实房产的份额。透明分红、稳定租金、可交易的全球流动性——把机构级资产带到每个人的钱包里。",
    browseProperties: "浏览房源",
    learnHow: "查看原理",
    howItWorksTitle: "工作原理",
    howItWorksDescription:
      "我们将目标房产置于 SPV/LLC 结构下，将收益与权益映射为链上代币。租金按月分配，资产增值定期结算，所有交易透明可查。",
    subscriptionAndMinting: "认购与铸造",
    subscriptionAndMintingDescription:
      "KYC 后以法币/稳定币认购，对应获得房产代币（份额）。",
    transparentDividends: "透明分红",
    transparentDividendsDescription: "租金以稳定币派发至你的钱包，比例与持仓同步。",
    freeTransfer: "自由转让",
    freeTransferDescription: "代币可在受限白名单内转让，实现全球范围内的流动性。",
    tokenPrice: "代币价格",
    expectedYield: "预期收益率",
    payout: "派息",
    monthly: "每月",
    simulateSubscription: "模拟认购",
    whyRex: "为什么选择 REX",
    whyRexDescription: "安全、透明、可组合。用区块链把传统不动产变成可流动的数字资产。",
    complianceFirst: "合规优先",
    complianceFirstDescription: "SPV/LLC 架构 + KYC/AML，降低发行与转让风险。",
    stableCashFlow: "稳定现金流",
    stableCashFlowDescription: "租金按月分配，收益到你自托管的钱包。",
    globalLiquidity: "全球流动性",
    globalLiquidityDescription: "白名单内自由转让，改善传统地产的退出效率。",
    lowThreshold: "低门槛",
    lowThresholdDescription: "支持小额起投，资产份额化降低单次资金压力。",
    featuredProperty: "精选房源",
    featuredPropertyDescription: "示例：Boston 4B2B • 1,200 sqft • Class B 多户",
    viewAllProperties: "查看全部房源 →",
    bostonAllston: "波士顿 • 奥尔斯顿",
    tokenized: "已代币化",
    propertyDescription:
      "代币价格 $100，每月按持仓分配租金，目标年化收益 6–8%，二级流动性受白名单限制。",
    valuation: "估值",
    circulatingTokens: "流通代币",
    dividendCycle: "分红周期",
    learnMore: "了解详情",
    investmentHighlights: "投资要点",
    highlight1: "校园与商业圈相邻，租赁需求稳定，空置率低于同区均值。",
    highlight2: "代币化后可在白名单二级市场内交易，提高退出效率。",
    highlight3: "运维、税务、保险等信息定期披露，确保收益透明度。",
    tryInvesting: "我想试投 →",
    ctaTitle: "5 分钟完成开户，开始你的第一笔代币化地产投资",
    ctaSubtitle:
      "支持稳定币/银行卡入金，KYC 审核通过后即可认购。你的代币，你的钱包，你的分红。",
    createAccount: "创建账户",
    learnAboutCompliance: "了解合规与流程",
    product: "产品",
    propertyMarket: "房源市场",
    tokenizationProcess: "代币化流程",
    coreCapabilities: "核心能力",
    support: "支持",
    helpCenter: "帮助中心",
    complianceAndRisk: "合规与风险",
    feesAndTaxes: "费用与税务",
    contactUs: "联系我们",
    footerDescription: "Real Estate, Tokenized. 让全球更多投资者享受机构级不动产的稳健回报。",
    allRightsReserved: `© ${new Date().getFullYear()} REX`,
    language: "EN",
  },
};

function App() {
  const [language, setLanguage] = useState("zh");

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">
      {/* ====== Top Navigation ====== */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-blue-100">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-blue-600" aria-hidden />
            <span className="text-2xl font-extrabold text-blue-700 tracking-tight">
              REX
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-blue-700 transition-colors">
              {t.howItWorks}
            </a>
            <a
              href="#features"
              className="hover:text-blue-700 transition-colors"
            >
              {t.features}
            </a>
            <a
              href="#properties"
              className="hover:text-blue-700 transition-colors"
            >
              {t.properties}
            </a>
            <a href="#about" className="hover:text-blue-700 transition-colors">
              {t.about}
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#cta"
              className="rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 active:scale-[0.99] transition"
            >
              {t.startInvesting}
            </a>
            <button
              onClick={toggleLanguage}
              className="rounded-xl border border-gray-300 px-4 py-2 text-gray-700 font-semibold shadow-sm hover:bg-gray-50 transition"
            >
              {t.language}
            </button>
          </div>
        </div>
      </header>

      {/* ====== Hero ====== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500" />
        {/* Decorative glow */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-black leading-tight">
              {t.heroTitle.split(", ")[0]},
              <span className="text-blue-100">
                {t.heroTitle.split(", ")[1]}
              </span>
            </h1>
            <p className="mt-6 text-blue-100/90 text-lg">{t.heroSubtitle}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#properties"
                className="rounded-xl bg-white text-blue-700 px-6 py-3 font-semibold shadow hover:shadow-lg transition"
              >
                {t.browseProperties}
              </a>
              <a
                href="#how"
                className="rounded-xl border border-white/70 text-white px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                {t.learnHow}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== How it works ====== */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-800">
              {t.howItWorksTitle}
            </h2>
            <p className="mt-4 text-gray-600">{t.howItWorksDescription}</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <div>
                  <p className="font-semibold">{t.subscriptionAndMinting}</p>
                  <p className="text-gray-600">
                    {t.subscriptionAndMintingDescription}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <div>
                  <p className="font-semibold">{t.transparentDividends}</p>
                  <p className="text-gray-600">
                    {t.transparentDividendsDescription}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <div>
                  <p className="font-semibold">{t.freeTransfer}</p>
                  <p className="text-gray-600">{t.freeTransferDescription}</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Schematic card */}
          <div className="order-1 md:order-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 h-40 w-full" />
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-blue-700">{t.tokenPrice}</p>
                  <p className="text-xl font-bold text-blue-900">$100</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-blue-700">{t.expectedYield}</p>
                  <p className="text-xl font-bold text-blue-900">6.2%</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-blue-700">{t.payout}</p>
                  <p className="text-xl font-bold text-blue-900">
                    {t.monthly}
                  </p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
                {t.simulateSubscription}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Features ====== */}
      <section id="features" className="bg-blue-50/60 border-y border-blue-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-extrabold text-blue-800 text-center">
            {t.whyRex}
          </h2>
          <p className="mt-3 text-center text-gray-600">
            {t.whyRexDescription}
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              [t.complianceFirst, t.complianceFirstDescription],
              [t.stableCashFlow, t.stableCashFlowDescription],
              [t.globalLiquidity, t.globalLiquidityDescription],
              [t.lowThreshold, t.lowThresholdDescription],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm border border-blue-100"
              >
                <div
                  className="h-10 w-10 rounded-xl bg-blue-600 mb-4"
                  aria-hidden
                />
                <p className="font-semibold text-blue-900">{title}</p>
                <p className="text-gray-600 mt-2 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Featured Properties ====== */}
      <section id="properties" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-800">
              {t.featuredProperty}
            </h2>
            <p className="text-gray-600 mt-2">
              {t.featuredPropertyDescription}
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-block text-blue-700 font-semibold hover:underline"
          >
            {t.viewAllProperties}
          </a>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden border border-blue-100">
            <div className="h-64 w-full bg-gradient-to-tr from-blue-400 to-blue-600" />
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{t.bostonAllston}</p>
                <span className="rounded-full bg-blue-50 text-blue-700 text-xs px-3 py-1 border border-blue-100">
                  {t.tokenized}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{t.propertyDescription}</p>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl bg-blue-50 p-3">
                  <p className="text-blue-700">{t.valuation}</p>
                  <p className="font-semibold text-blue-900">$520,000</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3">
                  <p className="text-blue-700">{t.circulatingTokens}</p>
                  <p className="font-semibold text-blue-900">5,200</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3">
                  <p className="text-blue-700">{t.dividendCycle}</p>
                  <p className="font-semibold text-blue-900">{t.monthly}</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
                {t.learnMore}
              </button>
            </div>
          </div>

          {/* Right-side key points list */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6">
            <h3 className="text-xl font-semibold text-blue-900">
              {t.investmentHighlights}
            </h3>
            <ul className="mt-4 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                {t.highlight1}
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                {t.highlight2}
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                {t.highlight3}
              </li>
            </ul>
            <a
              href="#cta"
              className="mt-6 inline-block text-blue-700 font-semibold hover:underline"
            >
              {t.tryInvesting}
            </a>
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section id="cta" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{t.ctaTitle}</h2>
          <p className="mt-3 text-blue-100">{t.ctaSubtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="rounded-xl bg-white text-blue-700 px-6 py-3 font-semibold shadow hover:shadow-lg transition"
              href="#"
            >
              {t.createAccount}
            </a>
            <a
              className="rounded-xl border border-white/70 px-6 py-3 font-semibold hover:bg-white/10 transition"
              href="#about"
            >
              {t.learnAboutCompliance}
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
              {t.footerDescription}
            </p>
          </div>
          <div>
            <p className="font-semibold text-blue-900">{t.product}</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#properties" className="hover:text-blue-700">
                  {t.propertyMarket}
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-blue-700">
                  {t.tokenizationProcess}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-700">
                  {t.coreCapabilities}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-blue-900">{t.support}</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-700">
                  {t.helpCenter}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  {t.complianceAndRisk}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  {t.feesAndTaxes}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-blue-900">{t.contactUs}</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>support@rex.example</li>
              <li>{t.allRightsReserved}</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;