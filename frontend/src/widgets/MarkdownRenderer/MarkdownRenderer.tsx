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

export const MarkdownRenderer = ({ content, className = '' }: MarkdownRendererProps) => {
    const components: Components = {
        code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            const isInline = !match

            if (isInline) {
                return (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            }

            return (
                <SyntaxHighlighter
                    style={vscDarkPlus as any}
                    language={match[1]}
                    PreTag="div"
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
                    style={{ maxWidth: '40%', height: 'auto' }}
                />
            )
        }
    }

    return (
        <div className={`rich-text w-richtext ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={components}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}