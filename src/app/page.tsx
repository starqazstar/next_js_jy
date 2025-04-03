"use client";

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PageConfig {
  title: string;
  description: string;
  template: string;
}

interface SchemeResult {
  config: PageConfig;
  scheme: any;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState('form');
  const [pageConfig, setPageConfig] = useState<PageConfig>({
    title: '',
    description: '',
    template: 'form'
  });
  const [result, setResult] = useState<SchemeResult | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const templates = [
    { id: 'form', name: '表单页面', description: '包含输入框、选择器等表单元素的页面' },
    { id: 'list', name: '列表页面', description: '展示数据列表，支持分页和筛选' },
    { id: 'detail', name: '详情页面', description: '展示单条数据的详细信息' },
  ];

  const handleGenerate = () => {
    setResult({
      config: pageConfig,
      scheme: {
        type: 'page',
        title: pageConfig.title,
        description: pageConfig.description,
        template: pageConfig.template,
        components: []
      }
    });
  };

  const handleCopyToClipboard = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(result.scheme, null, 2));
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // 在客户端渲染之前显示加载状态
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">页面配置生成器</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <Tabs defaultValue="editor" className="w-full">
            <TabsList className="border-b p-2">
              <TabsTrigger value="editor">编辑器</TabsTrigger>
              <TabsTrigger value="preview">预览</TabsTrigger>
            </TabsList>
            
            <TabsContent value="editor" className="p-6">
              <div className="grid grid-cols-1 gap-6">
                {/* 测试用例卡片 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">预设模板</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {templates.map((template) => (
                      <div
                        key={template.id}
                        className={`p-4 rounded-lg border cursor-pointer ${
                          activeTemplate === template.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => {
                          setActiveTemplate(template.id);
                          setPageConfig(prev => ({ ...prev, template: template.id }));
                        }}
                      >
                        <h3 className="font-medium">{template.name}</h3>
                        <p className="text-sm text-gray-500">{template.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 页面配置卡片 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">页面配置</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        页面标题
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={pageConfig.title}
                        onChange={(e) => setPageConfig(prev => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        页面描述
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={pageConfig.description}
                        onChange={(e) => setPageConfig(prev => ({ ...prev, description: e.target.value }))}
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={handleGenerate}
                    >
                      生成配置
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preview" className="p-6">
              {result ? (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">生成结果</h2>
                    <button
                      type="button"
                      className="text-sm text-blue-500 hover:text-blue-600"
                      onClick={handleCopyToClipboard}
                    >
                      复制代码
                    </button>
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
                    {JSON.stringify(result.scheme, null, 2)}
                  </pre>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  请先在编辑器中配置并生成页面
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
