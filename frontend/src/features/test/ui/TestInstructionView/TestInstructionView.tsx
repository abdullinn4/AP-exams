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

    const timeLimit = lesson.testTimeLimitSec
        ? `${Math.floor(lesson.testTimeLimitSec / 60)} minutes`
        : 'No time limit';

    return (

        <div>
            <h2>{lesson.testTitle}</h2>

            <div className="test-info">
                <div className="info-item">
                    <span className="info-label">Time Limit: </span>
                    <span className="info-value">{timeLimit}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Attempts: </span>
                    <span className="info-value">1 attempt only</span>
                </div>
            </div>

            <div className="test-instructions">
                <h4>Instructions</h4>
                <ol>
                    <li>Read each question carefully</li>
                    <li>You can navigate between questions using the navigation panel</li>
                    <li>Your answers are saved automatically</li>
                    <li>You can review and change your answers before submitting</li>
                    <li>Once you submit, you cannot retake the test</li>
                    <li>The test will auto-submit when time expires</li>
                </ol>
            </div>

            <button
                className="button-primary"
                onClick={onStartTest}
                disabled={isLoading}
            >
                {isLoading ? 'Starting...' : 'Start Test'}
            </button>
        </div>

    );
};