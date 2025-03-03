"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft, List, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { Item, Toc } from "@/app/types/pages";

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState<Toc[]>([]);
  const [showMobileToc, setShowMobileToc] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // バックエンドからデータをフェッチする処理
    // 実際の実装では、ここでAPIリクエストを行います
    const fetchData = async () => {
      try {
        setLoading(true);
        // 実際のAPIリクエストに置き換えてください
        // const response = await fetch(`/api/portfolio/${id}`);
        // const data = await response.json();

        // ダミーデータ
        const data = {
          title: `Portfolio Item ${id}`,
          date: "2023-06-01",
          content: `
# Project Overview
This is an overview of the portfolio project.

## Project Goals
Here are the goals of this project.

# Implementation
This section describes the implementation details.

## Technologies Used
This section lists the technologies used in the project.

### Frontend
This is a subsection that won't appear in the TOC.

## Challenges
This section discusses the challenges faced during the project.

# Results
This section presents the results of the project.
          `,
        };

        setItem(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (item && contentRef.current) {
      // h1とh2タグを抽出して目次を生成
      const headings = contentRef.current.querySelectorAll("h1, h2");
      const tocItems: Toc[] = [];

      headings.forEach((heading) => {
        const level = Number.parseInt(heading.tagName.substring(1));
        if (level <= 2) {
          // h1とh2のみを対象
          const id = heading.id || `heading-${tocItems.length}`;
          heading.id = id; // IDを設定（スクロール用）

          tocItems.push({
            id,
            text: heading.textContent || "",
            level,
          });
        }
      });

      setToc(tocItems);
    }
  }, [item]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // モバイル表示の場合、クリック後に目次を閉じる
    if (window.innerWidth < 768) {
      setShowMobileToc(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto p-8">Loading...</div>;
  }

  if (!item) {
    return <div className="container mx-auto p-8">Portfolio not found</div>;
  }

  return (
    <div className="container mx-auto p-6 md:p-8 relative">
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="ghost"
          className="flex items-center"
          onClick={() => router.push("/portfolio")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        {/* モバイル用の目次ボタン */}
        <Button
          variant="outline"
          className="md:hidden flex items-center"
          onClick={() => setShowMobileToc(!showMobileToc)}
        >
          {showMobileToc ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              Close
            </>
          ) : (
            <>
              <List className="mr-2 h-4 w-4" />
              TOC
            </>
          )}
        </Button>
      </div>

      {/* モバイル用の目次（折りたたみ可能） */}
      {showMobileToc && (
        <div className="md:hidden absolute top-100 right-4 bg-[#e7ecea] z-50">
          <Card className="border-none shadow-[0_1px_6px_0_rgba(32,33,36,.6)]">
            <CardHeader className="py-3">
              <CardTitle className="text-lg">TOC</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="toc">
                <ul className="space-y-2">
                  {toc.map((item) => (
                    <li
                      key={item.id}
                      className={`cursor-pointer hover:text-primary transition-colors ${
                        item.level === 1 ? "font-semibold" : "pl-4"
                      }`}
                      onClick={() => scrollToHeading(item.id)}
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </nav>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* デスクトップ用の目次（常に表示） */}
        <div className="hidden md:block md:col-span-1">
          <Card className="sticky top-4 border-none shadow-[0_1px_6px_0_rgba(32,33,36,.6)]">
            <CardHeader>
              <CardTitle className="text-lg">TOC</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="toc">
                <ul className="space-y-2">
                  {toc.map((item) => (
                    <li
                      key={item.id}
                      className={`cursor-pointer hover:text-primary transition-colors ${
                        item.level === 1 ? "font-semibold" : "pl-4"
                      }`}
                      onClick={() => scrollToHeading(item.id)}
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* メインコンテンツ */}
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">
                {item.date}
              </div>
              <CardTitle className="text-3xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div ref={contentRef} className="prose max-w-none">
                <ReactMarkdown
                  components={{
                    h1: (props) => (
                      <h1
                        id={`heading-${props.children}`}
                        className="text-2xl font-bold mt-8 mb-4"
                        {...props}
                      />
                    ),
                    h2: (props) => (
                      <h2
                        id={`heading-${props.children}`}
                        className="text-xl font-semibold mt-6 mb-3"
                        {...props}
                      />
                    ),
                    h3: (props) => (
                      <h3
                        className="text-lg font-medium mt-4 mb-2"
                        {...props}
                      />
                    ),
                    p: (props) => <p className="my-4" {...props} />,
                    ul: (props) => (
                      <ul className="list-disc pl-6 my-4" {...props} />
                    ),
                    ol: (props) => (
                      <ol className="list-decimal pl-6 my-4" {...props} />
                    ),
                    li: (props) => <li className="mb-1" {...props} />,
                    a: (props) => (
                      <a className="text-blue-600 hover:underline" {...props} />
                    ),
                    blockquote: (props) => (
                      <blockquote
                        className="border-l-4 border-gray-200 pl-4 italic my-4"
                        {...props}
                      />
                    ),
                    code: (props) => (
                      <code
                        className="bg-gray-100 rounded px-1 py-0.5"
                        {...props}
                      />
                    ),
                    pre: (props) => (
                      <pre
                        className="bg-gray-100 rounded p-4 overflow-x-auto my-4"
                        {...props}
                      />
                    ),
                  }}
                >
                  {item.content}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
