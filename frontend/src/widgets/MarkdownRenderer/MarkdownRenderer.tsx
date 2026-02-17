import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'katex/dist/katex.min.css'
import type { Components } from 'react-markdown'

interface MarkdownRendererProps {
    content: string
    className?: string
}
const cleanMathContent = (content: string): string => {
    return content.replace(/[\u2061-\u2064]/g, '')  // Убрать все невидимые math символы
}

export const MarkdownRenderer = ({ content, className = '' }: MarkdownRendererProps) => {
    const cleanedContent = cleanMathContent(content)

    const components: Components = {
        code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            const isInline = !match

            if (isInline) {
                return (
                    <code className="inline-code" {...props}>
                        {children}
                    </code>
                )
            }

            return (
                <SyntaxHighlighter
                    style={vscDarkPlus as any}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                        borderRadius: '8px',
                        padding: '16px',
                        fontSize: '14px',
                        marginTop: '16px',
                        marginBottom: '16px'
                    }}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            )
        },
        img({ src, alt }) {
            return (
                <img
                    src={src}
                    alt={alt || ''}
                    loading="lazy"
                    style={{ maxWidth: '30%', height: 'auto', borderRadius: '8px', marginTop: '16px', marginBottom: '16px' }}
                />
            )
        },
        table({ children }) {
            return (
                <div className="table-wrapper">
                    <table className="markdown-table">
                        {children}
                    </table>
                </div>
            )
        },
        thead({ children }) {
            return <thead className="markdown-thead">{children}</thead>
        },
        tbody({ children }) {
            return <tbody className="markdown-tbody">{children}</tbody>
        },
        tr({ children }) {
            return <tr className="markdown-tr">{children}</tr>
        },
        th({ children }) {
            return <th className="markdown-th">{children}</th>
        },
        td({ children }) {
            return <td className="markdown-td">{children}</td>
        }
    }

    return (
        <div className={`rich-text w-richtext ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[
                    [rehypeKatex, {
                        strict: false,
                        throwOnError: false
                    }]
                ]}
                components={components}
            >
                {cleanedContent}
            </ReactMarkdown>
        </div>
    )
}