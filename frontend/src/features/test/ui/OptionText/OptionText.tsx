import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import type { Components } from 'react-markdown'

interface OptionTextProps {
    text: string
    className?: string
}

export const OptionText = ({ text, className = '' }: OptionTextProps) => {
    const components: Components = {
        p: ({ children }) => <span>{children}</span>,
        code: ({ children }) => (
            <code style={{
                backgroundColor: '#f5f5f5',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '0.9em',
                fontFamily: 'monospace'
            }}>
                {children}
            </code>
        ),
    }

    return (
        <span className={className} style={{ display: 'inline' }}>
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={components}
            >
                {text}
            </ReactMarkdown>
        </span>
    )
}