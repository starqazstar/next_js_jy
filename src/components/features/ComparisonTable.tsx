'use client';

import { Check, X } from 'lucide-react';

const features = [
  {
    name: 'Interactive Lessons',
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Progress Tracking',
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Custom Learning Paths',
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Advanced Analytics',
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Priority Support',
    basic: false,
    pro: false,
    enterprise: true,
  },
  {
    name: 'Custom Integrations',
    basic: false,
    pro: false,
    enterprise: true,
  },
];

export default function ComparisonTable() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          模板功能对比
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          我们提供多种预设模板，满足不同场景的需求
        </p>
        <div className="mt-16 overflow-hidden rounded-xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">功能</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">表单模板</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">列表模板</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">看板模板</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">数据录入</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 丰富的表单控件</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 快速编辑</td>
                <td className="px-6 py-4 text-sm text-gray-900">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">数据展示</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 基础展示</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 表格/卡片视图</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 多种图表</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">数据筛选</td>
                <td className="px-6 py-4 text-sm text-gray-900">-</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 高级筛选</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 维度筛选</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">数据导出</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ Excel</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ Excel/CSV</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 图表导出</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">权限控制</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 字段级</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 数据级</td>
                <td className="px-6 py-4 text-sm text-gray-900">✓ 功能级</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
