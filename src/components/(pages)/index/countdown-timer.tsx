export const CountdownTimer = () => {
    return (
        <div>
            <div className="text-sm font-medium mb-1">Registration Closes In</div>
            <div className="countdown-timer">
                <div className="countdown-segment">
                    <div className="countdown-number">14</div>
                    <div className="countdown-label">days</div>
                </div>

                <div className="countdown-segment">
                    <div className="countdown-number">22</div>
                    <div className="countdown-label">hours</div>
                </div>

                <div className="countdown-segment">
                    <div className="countdown-number">45</div>
                    <div className="countdown-label">mins</div>
                </div>
            </div>
        </div>
    );
};