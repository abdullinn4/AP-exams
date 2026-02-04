import Countdown, { type CountdownRenderProps } from 'react-countdown';

interface TestTimerProps {
    timeLimitSec: number;
    startedAt: string;
    onTimeUp: () => void;
}

export const TestTimer = ({ timeLimitSec, startedAt, onTimeUp }: TestTimerProps) => {
    const startTime = new Date(startedAt).getTime();
    const endTime = startTime + timeLimitSec * 1000;

    const renderer = ({ hours, minutes, seconds, completed }: CountdownRenderProps) => {
        if (completed) {
            return (
                <div className="card" style={{ padding: '24px', textAlign: 'center', background: '#fee2e2', border: '2px solid #dc2626' }}>
                    <span className="display-1 text-neutral-600" style={{ display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Time</span>
                    <span className="display-3 bold text-neutral-800" style={{ display: 'block' }}>00:00</span>
                </div>
            );
        }

        const isLowTime = hours === 0 && minutes < 5;

        return (
            <div
                className={`${isLowTime ? 'timer-warning' : 'test-timer'}`}
            >
                <span>Time</span>
                <span>
                    {hours > 0 && `${hours}:`}
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </span>
            </div>
        );
    };

    return (
        <Countdown
            date={endTime}
            renderer={renderer}
            onComplete={onTimeUp}
        />
    );
};