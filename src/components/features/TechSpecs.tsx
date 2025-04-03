'use client';

import { Server, Shield, Zap, Globe } from 'lucide-react';

const specs = [
  {
    name: 'Performance',
    description: 'High-performance infrastructure with 99.9% uptime guarantee',
    icon: Zap,
    metrics: [
      { name: 'Response Time', value: '<100ms' },
      { name: 'Concurrent Users', value: '10,000+' },
      { name: 'Data Processing', value: 'Real-time' },
    ],
  },
  {
    name: 'Security',
    description: 'Enterprise-grade security with end-to-end encryption',
    icon: Shield,
    metrics: [
      { name: 'Encryption', value: 'AES-256' },
      { name: 'Compliance', value: 'GDPR, HIPAA' },
      { name: 'Authentication', value: '2FA/MFA' },
    ],
  },
  {
    name: 'Infrastructure',
    description: 'Scalable cloud infrastructure powered by AWS',
    icon: Server,
    metrics: [
      { name: 'Data Centers', value: 'Global' },
      { name: 'Backup Frequency', value: 'Hourly' },
      { name: 'Storage', value: 'Unlimited' },
    ],
  },
  {
    name: 'Accessibility',
    description: 'WCAG 2.1 compliant with multi-language support',
    icon: Globe,
    metrics: [
      { name: 'Languages', value: '20+' },
      { name: 'WCAG Level', value: 'AAA' },
      { name: 'Screen Readers', value: 'Compatible' },
    ],
  },
];

export default function TechSpecs() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          技术规格
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          我们的低代码平台采用最新的技术栈，确保高性能和可扩展性
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">前端技术</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>• React 19 + TypeScript</li>
              <li>• Next.js 15 + App Router</li>
              <li>• Tailwind CSS</li>
              <li>• Shadcn UI</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">AI 能力</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>• GPT-4 Turbo</li>
              <li>• Claude 3</li>
              <li>• Stable Diffusion</li>
              <li>• 自研 LLM</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">后端服务</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>• Node.js + Express</li>
              <li>• PostgreSQL</li>
              <li>• Redis</li>
              <li>• Docker + K8s</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">代码生成</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>• 智能代码分析</li>
              <li>• 自动类型推导</li>
              <li>• 代码优化建议</li>
              <li>• 自动单元测试</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">开发工具</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>• VS Code 插件</li>
              <li>• CLI 工具</li>
              <li>• 调试工具</li>
              <li>• 性能监控</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">部署选项</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>• 云端托管</li>
              <li>• 私有部署</li>
              <li>• 混合部署</li>
              <li>• 边缘计算</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
