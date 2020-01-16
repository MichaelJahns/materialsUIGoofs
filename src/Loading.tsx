import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading: React.FC = () => {
    const [progress, setProgress] = useState(0);

    React.useEffect(() => {
        function tick() {
            // reset when reaching 100%
            const tickWeight: number = Math.random() * Math.floor(20);
            setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + tickWeight));
        }

        const timer = setInterval(tick, 200);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <CircularProgress variant="static" value={progress} />

        </div>
    );
}

export default Loading;
