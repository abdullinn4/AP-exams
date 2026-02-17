import { MarkdownRenderer } from '@/widgets/MarkdownRenderer';
import type {QuestionForStudent} from "@/entities/test/test.ts";

interface QuestionRendererProps {
    question: QuestionForStudent;
    questionNumber: number;
}

export const QuestionRenderer = ({ question, questionNumber }: QuestionRendererProps) => {
    return (
        <div>
            {/*<div className="mg-bottom-24px">
                <h5>Question {questionNumber}</h5>
            </div>*/}

            <div>
                <MarkdownRenderer content={question.prompt} />

                {question.imageUrl && (
                    <div className="mg-top-24px">
                        <img
                            src={question.imageUrl}
                            alt={`Question ${questionNumber} illustration`}
                            style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px' }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};