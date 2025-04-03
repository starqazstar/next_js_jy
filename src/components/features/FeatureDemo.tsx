'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FeatureDemoProps {
  categoryId: string;
}

const testCases = {
  form: {
    title: '员工信息表单',
    description: '创建一个员工信息录入表单，需要包含：姓名（必填）、年龄、部门、职位、入职日期等字段。',
    image: 'https://picsum.photos/800/600?random=1',
  },
  list: {
    title: '产品列表页',
    description: '创建一个产品展示列表页面，包含产品图片、名称、价格、库存等信息，支持分页和筛选功能。',
    image: 'https://picsum.photos/800/600?random=2',
  },
  dashboard: {
    title: '数据统计看板',
    description: '创建一个数据统计看板，展示销售额、订单量、用户增长等关键指标，包含图表展示。',
    image: 'https://picsum.photos/800/600?random=3',
  },
};

export default function FeatureDemo({ categoryId }: FeatureDemoProps) {
  const [loading, setLoading] = useState(false);
  const content = testCases[categoryId as keyof typeof testCases];

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // 模拟生成过程
      await new Promise(resolve => setTimeout(resolve, 2000));
      // TODO: 实现实际的页面生成逻辑
    } catch (error) {
      console.error('生成失败:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mt-10 lg:mt-0">
            <Image
              src={content.image}
              alt={content.title}
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {content.title}
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              {content.description}
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={loading}
                className="inline-flex items-center rounded-md bg-[#7B8AF9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6470E6] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '生成中...' : '生成页面'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
