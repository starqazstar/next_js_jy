'use client';

import Image from 'next/image';

interface PreviewData {
  type: string;
  components: Array<{
    type: string;
    fields?: Array<{
      type: string;
      label: string;
    }>;
  }>;
}

interface IntegrationShowcaseProps {
  data: PreviewData | null;
}

export default function IntegrationShowcase({ data }: IntegrationShowcaseProps) {
  if (!data) {
    return (
      <div className="py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            生成结果预览
          </h2>
          <div className="mt-6 text-center text-lg text-gray-600 p-12 border border-dashed border-gray-300 rounded-lg">
            请先选择模板并生成页面
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          生成结果预览
        </h2>
        <div className="mt-6">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {data.type === 'page' ? '页面结构' : '组件结构'}
              </h3>
              <div className="mt-4">
                <pre className="mt-4 rounded-md bg-gray-50 p-4 text-sm">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <span className="font-medium text-[#7B8AF9]">提示：</span>
                <span className="text-gray-500">这是生成的代码结构预览，你可以根据需要进行进一步调整。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
