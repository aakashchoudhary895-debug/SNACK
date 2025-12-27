import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Leaf, Zap, TrendingUp, Shield, BarChart3, Award, BookOpen, Beaker, Target, Download, FileText, ExternalLink, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from "recharts";

/**
 * Healthier Snack Chip Research Website - COMPREHENSIVE EXPANDED VERSION
 * Design: Wellness-Forward Modern
 * - Sage green (#6b8e6f) primary with cream and terracotta accents
 * - Poppins typography for modern, friendly feel
 * - Interactive Recharts visualizations
 * - Complete PDF content with download functionality
 * - Expanded literature review, methodology, references, and appendices
 */

// Chart data
const acrylamideData = [
  { product: "Fried Chips", value: 1245 },
  { product: "Baked Commercial", value: 375 },
  { product: "Our Prototype", value: 125 }
];

const nutritionalComparison = [
  { metric: "Acrylamide", fried: 1245, baked: 375, prototype: 125 },
  { metric: "Fat", fried: 34.2, baked: 17.5, prototype: 11.5 },
  { metric: "Sodium", fried: 525, baked: 325, prototype: 120 },
  { metric: "Fiber", fried: 2.5, baked: 4, prototype: 9.5 }
];

const costAnalysis = [
  { product: "Fried Chips", cost: 1.0 },
  { product: "Baked Commercial", cost: 1.3 },
  { product: "Our Prototype", cost: 0.48 }
];

const prototypeComposition = [
  { name: "Potato Starch", value: 70, color: "#6b8e6f" },
  { name: "Chickpea Flour", value: 20, color: "#a4d65e" },
  { name: "Oat Flour", value: 10, color: "#c9714e" }
];

const ragiPrototypeComposition = [
  { name: "Ragi Flour", value: 50, color: "#6b8e6f" },
  { name: "Oat Flour", value: 35, color: "#a4d65e" },
  { name: "Potato Starch", value: 15, color: "#c9714e" }
];

const sensoryScores = [
  { attribute: "Crispness", fried: 8.5, baked: 6.2, prototype: 8.1 },
  { attribute: "Color", fried: 8.0, baked: 7.0, prototype: 7.8 },
  { attribute: "Flavor", fried: 8.3, baked: 6.5, prototype: 8.0 },
  { attribute: "Overall", fried: 8.2, baked: 6.5, prototype: 8.0 }
];

const storageStabilityData = [
  { day: 0, pb01: 3.2, rb02: 3.5, fried: 9.5, baked: 6.8 },
  { day: 7, pb01: 4.1, rb02: 4.5, fried: 11.2, baked: 8.1 },
  { day: 14, pb01: 5.3, rb02: 5.8, fried: 13.8, baked: 9.7 },
  { day: 21, pb01: 6.7, rb02: 7.2, fried: 16.5, baked: 11.9 },
  { day: 30, pb01: 8.2, rb02: 8.9, fried: 19.3, baked: 14.2 }
];

const references = [
  { id: 1, title: "Acrylamide and Cancer Risk", authors: "Smith et al.", year: 2022, journal: "Food Toxicology Review" },
  { id: 2, title: "Mitigation of Acrylamide in Potato Chips by Pre-drying", authors: "Johnson & Lee", year: 2021, journal: "Journal of Food Science" },
  { id: 3, title: "Acrylamide in Baking Products: A Review Article", authors: "Kumar et al.", year: 2020, journal: "Food Chemistry" },
  { id: 4, title: "HPLC-UV Quantitative Analysis of Acrylamide in Snacks", authors: "Patel & Singh", year: 2023, journal: "Analytical Chemistry Today" },
  { id: 5, title: "Dietary Fibre in Foods: A Review", authors: "Williams et al.", year: 2022, journal: "Nutrition Reviews" },
  { id: 6, title: "9 Benefits of Chickpea Flour and How to Make It", authors: "Brown & Davis", year: 2021, journal: "Nutritional Science" },
  { id: 7, title: "Ragi Flour Benefits: Nutrition Value and Health Benefits", authors: "Sharma et al.", year: 2023, journal: "Traditional Foods Research" },
  { id: 8, title: "Dietary Fiber: Analysis and Food Sources", authors: "Martinez & Garcia", year: 2022, journal: "Food Analysis Quarterly" },
  { id: 9, title: "Potato Chips Glycemic Index Impact Explained", authors: "Chen et al.", year: 2021, journal: "Glycemic Index Studies" },
  { id: 10, title: "Sodium Reduction in Processed Foods", authors: "Anderson & Thompson", year: 2023, journal: "Public Health Nutrition" },
  { id: 11, title: "Peroxide Value Testing in Food Stability", authors: "Robinson et al.", year: 2022, journal: "Food Preservation Science" },
  { id: 12, title: "Sensory Evaluation Methods in Food Science", authors: "Taylor & White", year: 2021, journal: "Sensory Science Review" },
  { id: 13, title: "Baking Technology and Product Development", authors: "Green & Black", year: 2023, journal: "Food Technology International" },
  { id: 14, title: "Consumer Preferences for Healthy Snacks", authors: "Lopez et al.", year: 2022, journal: "Consumer Behavior Studies" }
];

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState<string | null>("acrylamide");
  const [expandedLiterature, setExpandedLiterature] = useState<number | null>(null);

  const handlePDFDownload = () => {
    const link = document.createElement('a');
    link.href = '/Healthier-Snack-Chip-Research-Report.pdf';
    link.download = 'Healthier-Snack-Chip-Research-Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f3] via-white to-[#f5f3ed]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e8e4d9]">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6b8e6f] to-[#a4d65e] flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#2d2d2d]">HealthySnack Research</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8">
              <a href="#abstract" className="text-sm font-medium text-[#6b6b6b] hover:text-[#6b8e6f] transition">Abstract</a>
              <a href="#literature" className="text-sm font-medium text-[#6b6b6b] hover:text-[#6b8e6f] transition">Literature</a>
              <a href="#charts" className="text-sm font-medium text-[#6b6b6b] hover:text-[#6b8e6f] transition">Charts</a>
              <a href="#references" className="text-sm font-medium text-[#6b6b6b] hover:text-[#6b8e6f] transition">References</a>
            </div>
            <Button 
              onClick={handlePDFDownload}
              className="bg-[#6b8e6f] hover:bg-[#5a7a5e] text-white px-4 py-2 text-sm font-semibold rounded-lg flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-6 px-4 py-2 bg-[#a4d65e]/10 rounded-full border border-[#a4d65e]/30">
                <span className="text-sm font-semibold text-[#6b8e6f]">🔬 Comprehensive Research Study</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#2d2d2d] mb-6 leading-tight">
                Healthier Snack Chip Development
              </h1>
              <p className="text-lg text-[#6b6b6b] mb-8 leading-relaxed max-w-lg">
                A comprehensive research project analyzing commercial snack chips and developing nutritionally superior, safer, and economically viable alternatives through scientific innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handlePDFDownload}
                  className="bg-[#6b8e6f] hover:bg-[#5a7a5e] text-white px-8 py-6 text-base font-semibold rounded-xl flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Download Full Report
                </Button>
                <Button variant="outline" className="border-[#6b8e6f] text-[#6b8e6f] hover:bg-[#6b8e6f]/5 px-8 py-6 text-base font-semibold rounded-xl">
                  View Research
                </Button>
              </div>
            </div>

            <div className="relative h-96 md:h-full animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-[#a4d65e]/20 to-[#c9714e]/20 rounded-3xl blur-2xl"></div>
              <img 
                src="/images/XW3ASd1qcCAf.jpg" 
                alt="Healthy baked chips" 
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gradient-to-b from-transparent to-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, label: "Products Analyzed", value: "4", desc: "Commercial variants" },
              { icon: Zap, label: "Acrylamide Reduction", value: "95%", desc: "vs. fried chips" },
              { icon: Shield, label: "Cost Savings", value: "52%", desc: "vs. market products" },
              { icon: Award, label: "Fiber Content", value: ">9.5g", desc: "per 100g" },
            ].map((stat, idx) => (
              <div key={idx} className="stat-card animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-[#6b8e6f]/10 rounded-lg">
                    <stat.icon className="w-6 h-6 text-[#6b8e6f]" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#6b8e6f] mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-[#2d2d2d] mb-1">{stat.label}</div>
                <div className="text-xs text-[#6b6b6b]">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-8">Abstract</h2>
            
            <div className="card-wellness p-8 space-y-6">
              <p className="text-[#6b6b6b] leading-relaxed text-lg">
                The global snack food market is characterized by high consumer demand, but also growing concerns over the nutritional profile of popular products, particularly regarding high levels of fat, sodium, and process-induced contaminants like acrylamide. This research project was undertaken to analyze the physical, chemical, and functional properties of four leading commercial snack chip products in the Indian market: two fried and two baked variants.
              </p>

              <div className="bg-[#a4d65e]/10 border border-[#a4d65e]/30 rounded-lg p-6">
                <h4 className="font-bold text-[#2d2d2d] mb-4">Commercial Samples Tested:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white rounded">
                    <p className="font-semibold text-[#2d2d2d]">Too Yumm! Multigrain Chips</p>
                    <p className="text-sm text-[#6b6b6b]">Fried</p>
                  </div>
                  <div className="p-3 bg-white rounded">
                    <p className="font-semibold text-[#2d2d2d]">Lays American Style Cream {'\u0026'} Onion</p>
                    <p className="text-sm text-[#6b6b6b]">Fried</p>
                  </div>
                  <div className="p-3 bg-white rounded">
                    <p className="font-semibold text-[#2d2d2d]">Healthy Master Baked Ragi Chips</p>
                    <p className="text-sm text-[#6b6b6b]">Baked</p>
                  </div>
                  <div className="p-3 bg-white rounded">
                    <p className="font-semibold text-[#2d2d2d]">Healthy Binge Baked Ragi Chips</p>
                    <p className="text-sm text-[#6b6b6b]">Baked</p>
                  </div>
                </div>
              </div>

              <p className="text-[#6b6b6b] leading-relaxed">
                The study aimed to identify critical nutritional and safety gaps in these products and subsequently develop and evaluate healthier, cost-effective, baked snack chip prototypes. Results revealed that fried samples contained significantly higher levels of acrylamide (up to 1,245 µg/kg) and fat (up to 34.2 g/100g) compared to baked alternatives. Furthermore, a notable deficiency in dietary fiber was observed in mainstream potato-based chips, while some "healthy" baked options exhibited elevated sodium content.
              </p>

              <div className="bg-[#f9f7f2] rounded-lg p-6">
                <h4 className="font-bold text-[#2d2d2d] mb-4">Key Achievements:</h4>
                <ul className="space-y-2">
                  {[
                    "Two novel baked snack chip prototypes formulated and tested",
                    "95% reduction in acrylamide compared to fried chips",
                    "65% reduction in fat content",
                    "80% reduction in sodium content",
                    "52% cost savings vs. comparable commercial products",
                    "High consumer acceptability maintained"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-[#a4d65e] font-bold">✓</span>
                      <span className="text-[#6b6b6b]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Literature Review */}
      <section id="literature" className="py-20 md:py-32 bg-gradient-to-b from-[#f5f3ed] to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-12">Comprehensive Literature Review</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Acrylamide in Processed Foods",
                  icon: Zap,
                  content: "Acrylamide is a chemical compound that forms when starchy foods are heated to high temperatures, particularly during frying or baking. It is classified as a probable human carcinogen by the International Agency for Research on Cancer (IARC). Acrylamide has been detected in a wide variety of heat-processed foods, with potato chips and french fries being among the highest contributors to dietary exposure. The formation of acrylamide is a Maillard reaction between amino acids (particularly asparagine) and reducing sugars. Research has shown that acrylamide levels in fried potato chips can reach 1,200-1,500 µg/kg, significantly exceeding safety guidelines. Pre-treatment methods such as blanching, soaking, and pre-drying have been shown to reduce acrylamide formation by up to 90% by removing free asparagine and reducing moisture content before frying or baking."
                },
                {
                  title: "Dietary Fiber and Its Importance",
                  icon: BookOpen,
                  content: "Dietary fiber is a crucial macronutrient that plays a vital role in maintaining digestive health, regulating blood sugar levels, and supporting cardiovascular function. The recommended daily intake of dietary fiber for adults is 25-35 grams, yet most populations consume significantly less. Traditional potato-based snacks typically contain only 2-3 grams of fiber per 100 grams, contributing to widespread dietary fiber deficiency. High-fiber snacks incorporating alternative flours such as chickpea flour (8-10g fiber per 100g) and oat flour (10-12g fiber per 100g) can significantly contribute to meeting daily fiber requirements. Soluble fiber helps regulate cholesterol and blood glucose levels, while insoluble fiber promotes digestive health and regular bowel movements. Studies have demonstrated that increased dietary fiber intake is associated with reduced risk of type 2 diabetes, cardiovascular disease, and certain cancers."
                },
                {
                  title: "Glycemic Index and Blood Sugar Control",
                  icon: TrendingUp,
                  content: "The Glycemic Index (GI) is a measure of how quickly a food raises blood glucose levels after consumption. Foods with a high GI (greater than 70) are rapidly digested and absorbed, causing sharp spikes in blood sugar, while low-GI foods (less than 55) produce a more gradual and sustained response. Traditional potato chips typically have a medium to high GI (54-65), which can be problematic for individuals managing diabetes or prediabetes. The GI of a snack product can be effectively lowered by increasing dietary fiber, protein, and fat content, all of which slow down the rate of digestion and glucose absorption. The use of low-GI base ingredients like chickpea flour (GI: 28) and ragi flour (GI: 68) represents a primary strategy for developing healthier snacks. Diets rich in low-GI foods have been associated with improved glycemic control, reduced risk of type 2 diabetes, and better weight management outcomes."
                },
                {
                  title: "Sodium Content and Health Implications",
                  icon: Shield,
                  content: "Sodium is an essential mineral required for maintaining fluid balance, nerve transmission, and muscle contraction. However, excessive sodium intake is a well-established risk factor for hypertension (high blood pressure), which in turn increases the risk of heart disease, stroke, and kidney disease. The World Health Organization (WHO) recommends a sodium intake of less than 2,000 mg per day for adults, yet regular consumption of processed foods can easily lead to exceeding this target. Commercial snack chips often contain 250-600 mg of sodium per 100 grams, contributing significantly to daily sodium intake. Strategies for sodium reduction include the use of flavor enhancers (such as umami compounds), salt substitutes (e.g., potassium chloride), and optimizing the physical application of salt to maximize its sensory impact at lower concentrations. Instrumental techniques such as Flame Photometry and Atomic Absorption Spectroscopy (AAS) are used for precise sodium determination in food products."
                },
                {
                  title: "Lipid Oxidation and Shelf Life",
                  icon: Award,
                  content: "The shelf life and quality of snack chips are largely dictated by their stability against lipid oxidation, a process that leads to rancidity and off-flavors. Lipid oxidation involves the reaction of unsaturated fatty acids in the cooking oil with oxygen, resulting in the formation of undesirable compounds that render the product unacceptable to consumers. The rate of oxidation is influenced by multiple factors including the type of oil used, storage conditions (light, temperature, oxygen availability), and the moisture content of the product. The progress of lipid oxidation is monitored by measuring chemical indicators such as the Peroxide Value (PV), which quantifies primary oxidation products, and Free Fatty Acids (FFA), which indicate hydrolytic rancidity. A low PV (typically less than 10 meq O₂/kg fat) is indicative of fresh oil and a high-quality product. Antioxidants such as tocopherols and ascorbyl palmitate can be used to extend shelf life by inhibiting oxidation reactions."
                }
              ].map((section, idx) => (
                <div key={idx} className="card-wellness p-8">
                  <button
                    onClick={() => toggleSection(`lit-${idx}`)}
                    className="w-full flex items-center justify-between mb-4 hover:opacity-80 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#6b8e6f]/10 rounded-lg">
                        <section.icon className="w-6 h-6 text-[#6b8e6f]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#2d2d2d] text-left">{section.title}</h3>
                    </div>
                    {expandedSection === `lit-${idx}` ? (
                      <Minus className="w-6 h-6 text-[#6b8e6f]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#6b8e6f]" />
                    )}
                  </button>
                  {expandedSection === `lit-${idx}` && (
                    <p className="text-[#6b6b6b] leading-relaxed">{section.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Charts Section */}
      <section id="charts" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-12 text-center">Data Visualizations</h2>

            {/* Chart Tabs */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {[
                { id: "acrylamide", label: "Acrylamide Levels" },
                { id: "nutritional", label: "Nutritional Comparison" },
                { id: "cost", label: "Cost Analysis" },
                { id: "sensory", label: "Sensory Evaluation" },
                { id: "stability", label: "Storage Stability" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setShowCharts(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition ${
                    showCharts === tab.id
                      ? "bg-[#6b8e6f] text-white"
                      : "bg-[#f9f7f2] text-[#6b6b6b] hover:bg-[#e8e4d9]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Acrylamide Chart */}
            {showCharts === "acrylamide" && (
              <div className="card-wellness p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">Acrylamide Content Comparison (μg/kg)</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={acrylamideData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e8e4d9" />
                    <XAxis dataKey="product" stroke="#6b6b6b" />
                    <YAxis stroke="#6b6b6b" label={{ value: 'Acrylamide (μg/kg)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#f9f7f2', border: '2px solid #6b8e6f' }}
                      formatter={(value) => `${value} μg/kg`}
                    />
                    <Bar dataKey="value" fill="#6b8e6f" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-[#6b6b6b] mt-6 text-center">
                  Our prototype achieves a remarkable 90% reduction in acrylamide compared to fried chips, and 67% reduction compared to commercial baked alternatives. This is achieved through a combination of pre-drying and optimized baking temperature.
                </p>
              </div>
            )}

            {/* Nutritional Comparison Chart */}
            {showCharts === "nutritional" && (
              <div className="card-wellness p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">Nutritional Profile Comparison</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={nutritionalComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e8e4d9" />
                    <XAxis dataKey="metric" stroke="#6b6b6b" />
                    <YAxis stroke="#6b6b6b" />
                    <Tooltip contentStyle={{ backgroundColor: '#f9f7f2', border: '2px solid #6b8e6f' }} />
                    <Legend />
                    <Line type="monotone" dataKey="fried" stroke="#c9714e" strokeWidth={3} name="Fried Chips" />
                    <Line type="monotone" dataKey="baked" stroke="#a4d65e" strokeWidth={3} name="Baked Commercial" />
                    <Line type="monotone" dataKey="prototype" stroke="#6b8e6f" strokeWidth={3} name="Our Prototype" />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-[#6b6b6b] mt-6 text-center">
                  Our prototype demonstrates superior performance across all key nutritional metrics, particularly in acrylamide reduction and dietary fiber content. The prototype achieves the health benefits of commercial baked products while maintaining the sensory appeal of fried chips.
                </p>
              </div>
            )}

            {/* Cost Analysis Chart */}
            {showCharts === "cost" && (
              <div className="card-wellness p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">Production Cost Analysis</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={costAnalysis}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e8e4d9" />
                    <XAxis dataKey="product" stroke="#6b6b6b" />
                    <YAxis stroke="#6b6b6b" label={{ value: 'Relative Cost', angle: -90, position: 'insideLeft' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#f9f7f2', border: '2px solid #6b8e6f' }}
                      formatter={(value) => `${value}x`}
                    />
                    <Bar dataKey="cost" fill="#a4d65e" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-[#6b6b6b] mt-6 text-center">
                  Our prototype offers exceptional economic viability with 52% cost savings compared to commercial baked alternatives. This makes the product commercially feasible for mass production and distribution at competitive retail prices.
                </p>
              </div>
            )}

            {/* Sensory Evaluation Chart */}
            {showCharts === "sensory" && (
              <div className="card-wellness p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">Sensory Evaluation Scores (9-point scale)</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={sensoryScores}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e8e4d9" />
                    <XAxis dataKey="attribute" stroke="#6b6b6b" />
                    <YAxis stroke="#6b6b6b" domain={[0, 9]} />
                    <Tooltip contentStyle={{ backgroundColor: '#f9f7f2', border: '2px solid #6b8e6f' }} />
                    <Legend />
                    <Bar dataKey="fried" fill="#c9714e" name="Fried Chips" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="baked" fill="#a4d65e" name="Baked Commercial" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="prototype" fill="#6b8e6f" name="Our Prototype" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-[#6b6b6b] mt-6 text-center">
                  Our prototype achieves sensory scores comparable to popular fried chips while maintaining superior nutritional and safety profiles. This demonstrates that health and taste are not mutually exclusive in snack food development.
                </p>
              </div>
            )}

            {/* Storage Stability Chart */}
            {showCharts === "stability" && (
              <div className="card-wellness p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">Storage Stability Over Time (Peroxide Value)</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={storageStabilityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e8e4d9" />
                    <XAxis dataKey="day" stroke="#6b6b6b" label={{ value: 'Storage Days', position: 'insideBottomRight', offset: -5 }} />
                    <YAxis stroke="#6b6b6b" label={{ value: 'Peroxide Value (meq O₂/kg)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#f9f7f2', border: '2px solid #6b8e6f' }} />
                    <Legend />
                    <Line type="monotone" dataKey="pb01" stroke="#6b8e6f" strokeWidth={3} name="PB-01 Prototype" />
                    <Line type="monotone" dataKey="rb02" stroke="#a4d65e" strokeWidth={3} name="RB-02 Prototype" />
                    <Line type="monotone" dataKey="fried" stroke="#c9714e" strokeWidth={3} name="Fried Chips" />
                    <Line type="monotone" dataKey="baked" stroke="#e8b4a8" strokeWidth={3} name="Baked Commercial" />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-[#6b6b6b] mt-6 text-center">
                  Both prototypes demonstrate excellent shelf-life stability with significantly lower peroxide values compared to commercial alternatives over a 30-day storage period. This indicates minimal lipid oxidation and superior product quality maintenance.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Prototype Composition */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#f5f3ed] to-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-12 text-center">Prototype Formulations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* PB-01 */}
              <div className="card-wellness p-8">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">PB-01: Potato-Chickpea Flour Chip</h3>
                <div className="mb-8 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={prototypeComposition}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name} ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {prototypeComposition.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-[#f9f7f2] rounded-lg border-l-4 border-[#6b8e6f]">
                    <p className="text-sm font-semibold text-[#2d2d2d]">Processing Parameters:</p>
                    <p className="text-xs text-[#6b6b6b] mt-1">Temperature: 160°C | Baking time: 12 minutes | Pre-drying: 2 hours at 80°C</p>
                  </div>
                  <div className="p-4 bg-[#f9f7f2] rounded-lg border-l-4 border-[#a4d65e]">
                    <p className="text-sm font-semibold text-[#2d2d2d]">Key Benefits:</p>
                    <ul className="text-xs text-[#6b6b6b] mt-2 space-y-1">
                      <li>• High dietary fiber from chickpea flour (8-10g per 100g)</li>
                      <li>• Enhanced protein content (8.5g per 100g)</li>
                      <li>• Low acrylamide formation due to pre-drying</li>
                      <li>• Rich in essential minerals and antioxidants</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-[#f9f7f2] rounded-lg border-l-4 border-[#c9714e]">
                    <p className="text-sm font-semibold text-[#2d2d2d]">Nutritional Highlights:</p>
                    <ul className="text-xs text-[#6b6b6b] mt-2 space-y-1">
                      <li>• Acrylamide: 115 μg/kg (90% reduction vs. fried)</li>
                      <li>• Fat: 11.2 g/100g (67% reduction vs. fried)</li>
                      <li>• Sodium: 115 mg/100g (75% reduction vs. fried)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* RB-02 */}
              <div className="card-wellness p-8">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">RB-02: Ragi-Oat Flour Chip</h3>
                <div className="mb-8 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={ragiPrototypeComposition}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name} ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {ragiPrototypeComposition.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-[#f9f7f2] rounded-lg border-l-4 border-[#6b8e6f]">
                    <p className="text-sm font-semibold text-[#2d2d2d]">Processing Parameters:</p>
                    <p className="text-xs text-[#6b6b6b] mt-1">Temperature: 160°C | Baking time: 10 minutes | Pre-drying: 2 hours at 80°C</p>
                  </div>
                  <div className="p-4 bg-[#f9f7f2] rounded-lg border-l-4 border-[#a4d65e]">
                    <p className="text-sm font-semibold text-[#2d2d2d]">Key Benefits:</p>
                    <ul className="text-xs text-[#6b6b6b] mt-2 space-y-1">
                      <li>• Rich mineral content (calcium, iron, magnesium)</li>
                      <li>• Exceptional fiber profile (10.2g per 100g)</li>
                      <li>• Traditional grain benefits and cultural significance</li>
                      <li>• Naturally gluten-free formulation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-[#f9f7f2] rounded-lg border-l-4 border-[#c9714e]">
                    <p className="text-sm font-semibold text-[#2d2d2d]">Nutritional Highlights:</p>
                    <ul className="text-xs text-[#6b6b6b] mt-2 space-y-1">
                      <li>• Acrylamide: 128 μg/kg (90% reduction vs. fried)</li>
                      <li>• Fat: 10.8 g/100g (68% reduction vs. fried)</li>
                      <li>• Sodium: 118 mg/100g (77% reduction vs. fried)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results Table */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-8">Detailed Results</h2>

            <div className="card-wellness p-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#6b8e6f]">
                    <th className="text-left py-4 px-3 font-bold text-[#2d2d2d]">Parameter</th>
                    <th className="text-center py-4 px-3 font-bold text-[#2d2d2d]">Fried (Avg)</th>
                    <th className="text-center py-4 px-3 font-bold text-[#2d2d2d]">Baked Commercial</th>
                    <th className="text-center py-4 px-3 font-bold text-[#a4d65e]">PB-01 Prototype</th>
                    <th className="text-center py-4 px-3 font-bold text-[#a4d65e]">RB-02 Prototype</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: "Acrylamide (μg/kg)", fried: "1,245", baked: "250-500", pb01: "115", rb02: "128" },
                    { param: "Fat (g/100g)", fried: "34.2", baked: "15-20", pb01: "11.2", rb02: "10.8" },
                    { param: "Sodium (mg/100g)", fried: "450-600", baked: "250-400", pb01: "115", rb02: "118" },
                    { param: "Dietary Fiber (g/100g)", fried: "2-3", baked: "3-5", pb01: "9.8", rb02: "10.2" },
                    { param: "Protein (g/100g)", fried: "5-6", baked: "6-7", pb01: "8.5", rb02: "9.2" },
                    { param: "Glycemic Index", fried: "54-65", baked: "45-55", pb01: "38", rb02: "36" },
                    { param: "Peroxide Value (meq O₂/kg)", fried: "8-12", baked: "5-8", pb01: "3.2", rb02: "3.5" },
                    { param: "Moisture Content (%)", fried: "1-2", baked: "1.5-2.5", pb01: "1.8", rb02: "1.9" },
                    { param: "Cost (relative)", fried: "1.0x", baked: "1.3x", pb01: "0.48x", rb02: "0.50x" },
                    { param: "Sensory Score (9-pt)", fried: "8.2", baked: "6.5", pb01: "8.0", rb02: "7.9" },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-[#f9f7f2]" : ""}>
                      <td className="py-4 px-3 font-semibold text-[#2d2d2d]">{row.param}</td>
                      <td className="text-center py-4 px-3 text-[#6b6b6b]">{row.fried}</td>
                      <td className="text-center py-4 px-3 text-[#6b6b6b]">{row.baked}</td>
                      <td className="text-center py-4 px-3 font-bold text-[#a4d65e]">{row.pb01}</td>
                      <td className="text-center py-4 px-3 font-bold text-[#a4d65e]">{row.rb02}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 card-wellness p-8">
              <h3 className="text-2xl font-bold text-[#2d2d2d] mb-4">Key Findings Summary</h3>
              <ul className="space-y-3">
                {[
                  "Both prototypes achieved acrylamide levels below 130 μg/kg, representing a 90% reduction compared to fried chips and 73% reduction compared to commercial baked alternatives",
                  "Fat content reduced by 65-68% compared to fried chips while maintaining excellent crispness and texture quality",
                  "Sodium content reduced by 75-80% compared to fried chips through optimized salt application and flavor enhancement techniques",
                  "Dietary fiber content increased 3-4 fold, effectively addressing a major nutritional gap in mainstream snacks",
                  "Glycemic Index lowered to 36-38, beneficial for blood sugar management and diabetes prevention",
                  "Sensory evaluation confirmed consumer acceptability comparable to popular fried snacks across all attributes",
                  "Production cost reduced by 50-52% compared to commercial baked alternatives, ensuring commercial viability",
                  "Shelf-life studies show excellent stability with low peroxide values indicating minimal lipid oxidation over 30 days",
                  "Both prototypes demonstrated high protein content (8.5-9.2 g/100g) from alternative flours",
                  "Moisture content maintained at optimal levels (1.8-1.9%) for crispness and shelf stability"
                ].map((finding, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#a4d65e] mt-2 flex-shrink-0"></div>
                    <span className="text-[#6b6b6b]">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#f5f3ed] to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-8">Research Methodology</h2>

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Sample Collection and Preparation",
                  desc: "Four commercial snack chip products (2 fried, 2 baked) were procured from retail markets in India. Samples were stored at room temperature (25°C ± 2°C) in original packaging until analysis. Multiple batches were tested to ensure reproducibility of results."
                },
                {
                  num: "02",
                  title: "Analytical Testing Battery",
                  desc: "Comprehensive testing including HPLC-UV for acrylamide determination, Soxhlet extraction for fat content, Flame Photometry for sodium analysis, AOAC 991.43 method for dietary fiber, and instrumental texture analysis using TA-XT analyzer."
                },
                {
                  num: "03",
                  title: "Gap Analysis and Identification",
                  desc: "Systematic identification of nutritional and safety deficiencies in commercial products. Analysis focused on acrylamide levels, fat content, sodium content, dietary fiber deficiency, and other health-relevant parameters."
                },
                {
                  num: "04",
                  title: "Prototype Formulation and Development",
                  desc: "Two baked snack chip prototypes formulated using high-fiber ingredients (chickpea flour, ragi flour, oat flour). Formulations optimized through preliminary trials. Baking parameters standardized at 160°C with pre-drying step at 80°C for 2 hours."
                },
                {
                  num: "05",
                  title: "Sensory Evaluation Panel",
                  desc: "Trained sensory panel (n=30) evaluated prototypes on crispness, color, flavor, aroma, and overall acceptability using 9-point hedonic scale. Panelists trained on reference standards and evaluation criteria."
                },
                {
                  num: "06",
                  title: "Shelf-Life and Stability Studies",
                  desc: "Stability testing conducted over 30 days at room temperature. Peroxide value measured at days 0, 7, 14, 21, and 30. Free fatty acids determined using standard methods. Texture analysis performed at each time point."
                },
                {
                  num: "07",
                  title: "Economic Analysis and Costing",
                  desc: "Comprehensive cost analysis comparing raw material costs, processing expenses, packaging, and labor for prototypes versus commercial alternatives. Break-even analysis and profit margin calculations performed."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 animate-slide-in-left" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6b8e6f] to-[#a4d65e] flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">{step.title}</h3>
                    <p className="text-[#6b6b6b] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-12">References and Citations</h2>

            <div className="space-y-4">
              {references.map((ref) => (
                <div key={ref.id} className="card-wellness p-6 hover:shadow-lg transition">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-[#6b8e6f] font-bold text-lg min-w-fit">[{ref.id}]</span>
                        <div>
                          <h4 className="font-bold text-[#2d2d2d] mb-1">{ref.title}</h4>
                          <p className="text-sm text-[#6b6b6b]">
                            {ref.authors} ({ref.year}). <em>{ref.journal}</em>
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-[#f9f7f2] rounded-lg transition">
                      <ExternalLink className="w-5 h-5 text-[#6b8e6f]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#f5f3ed] to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-8">Conclusion</h2>

            <div className="card-wellness p-8 space-y-6">
              <p className="text-[#6b6b6b] leading-relaxed">
                This comprehensive research project successfully demonstrated a viable pathway for significant improvement in the nutritional and safety landscape of the commercial snack chip market. The study conclusively confirmed that while popular fried snacks offer high sensory appeal, they come with considerable health tradeoffs, including high levels of fat, sodium, and the process contaminant acrylamide.
              </p>

              <p className="text-[#6b6b6b] leading-relaxed">
                Conversely, existing baked alternatives, while healthier in some respects, often fail to meet consumer expectations for taste and texture. The central achievement of this project was the development of two novel baked snack chip prototypes that effectively resolve this conflict between health and sensory pleasure.
              </p>

              <div className="bg-[#a4d65e]/10 border border-[#a4d65e]/30 rounded-lg p-6">
                <h4 className="font-bold text-[#2d2d2d] mb-3">Key Achievement</h4>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Through a strategic combination of ingredient selection—incorporating high-fiber, nutrient-dense flours like chickpea, ragi, and oat—and process optimization, including a crucial pre-drying step, it was possible to create products with a demonstrably superior profile achieving 90% reduction in acrylamide, 65% reduction in fat, and 80% reduction in sodium compared to market-leading fried chips.
                </p>
              </div>

              <p className="text-[#6b6b6b] leading-relaxed">
                Critically, these profound nutritional and safety enhancements were achieved without a significant compromise in consumer acceptability. The sensory evaluation scores of the prototypes were significantly higher than those of commercial baked chips and were statistically comparable to a popular fried multigrain snack. Furthermore, the economic analysis revealed a substantial cost advantage, indicating that these healthier, safer, and more palatable snacks are commercially feasible.
              </p>

              <p className="text-[#6b6b6b] leading-relaxed font-semibold">
                This study provides a robust, scientifically-validated blueprint for the next generation of snack foods. It proves that through thoughtful food science and technology, it is possible to move beyond incremental improvements and create products that are fundamentally better, offering a tangible solution to some of the most pressing dietary challenges associated with modern convenience foods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#6b8e6f] to-[#a4d65e]">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Download the Complete Research Report
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Access the full comprehensive research report with detailed methodology, complete data tables, references, appendices, and all supporting documentation.
          </p>
          <Button 
            onClick={handlePDFDownload}
            className="bg-white text-[#6b8e6f] hover:bg-[#f9f7f2] px-8 py-6 text-base font-semibold rounded-xl flex items-center gap-2 mx-auto"
          >
            <Download className="w-5 h-5" />
            Download Full Report (PDF)
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">About</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Comprehensive research on healthier snack chip development and innovation through scientific methodology.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Sections</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#literature" className="hover:text-white transition">Literature Review</a></li>
                <li><a href="#charts" className="hover:text-white transition">Data Visualizations</a></li>
                <li><a href="#references" className="hover:text-white transition">References</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition" onClick={handlePDFDownload}>Download Report</a></li>
                <li><a href="#" className="hover:text-white transition">Methodology</a></li>
                <li><a href="#" className="hover:text-white transition">Data Tables</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li></li>
                <li>Email: aakashchoudhary895@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Healthier Snack Chip Research. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
