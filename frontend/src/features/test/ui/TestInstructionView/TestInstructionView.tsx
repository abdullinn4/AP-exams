import type {LessonDetails} from "@/entities/course/course.ts";

interface TestInstructionViewProps {
    lesson: LessonDetails;
    onStartTest: () => void;
    isLoading: boolean;
}

export const TestInstructionView = ({ lesson, onStartTest, isLoading }: TestInstructionViewProps) => {
    if (!lesson.testId || !lesson.testTitle) {
        return null;
    }

    const formatTimeLimit = (sec?: number | null)=> sec ? Math.floor(sec / 60) + ' min' : 'No time limit';

    const instructions = [
        'Read each question carefully',
        'You can navigate between questions using the navigation panel',
        'Your answers are saved automatically',
        'You can review and change your answers before submitting',
        'Once you submit, you cannot retake the test',
        'The test will auto-submit when time expires',
    ];

    return (

        <div>
            <h2 className="display-6 mg-bottom-32px">{lesson.testTitle}</h2>

            <div className="mg-bottom-32px">
                <div className="mg-bottom-16px">
                    <span className="display-2 text-neutral-600">Time Limit: </span>
                    <span className="display-2 bold text-neutral-800">{formatTimeLimit(lesson.testTimeLimitSec)}</span>
                </div>
                <div>
                    <span className="display-2 text-neutral-600">Attempts: </span>
                    <span className="display-2 bold text-neutral-800">1 attempt only</span>
                </div>
            </div>

            <div className="mg-bottom-40px">
                <h4 className="display-5 bold mg-bottom-24px">Instructions</h4>
                <ol style={{ paddingLeft: '24px' }}>
                    {instructions.map((instruction, index) => (
                        <li key={index} className="display-2 text-neutral-800 mg-bottom-12px">
                            {instruction}
                        </li>
                    ))}
                </ol>
            </div>

            <button
                className="button-primary w-button"
                onClick={onStartTest}
                disabled={isLoading}
                aria-busy={isLoading}
            >
                {isLoading ? 'Starting...' : 'Start Test'}
            </button>
        </div>

    );
};