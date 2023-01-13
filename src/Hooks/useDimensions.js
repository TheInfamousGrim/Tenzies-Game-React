import { useState, useEffect } from 'react';

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

export const useDimensions = () => {
    const [dimensions, setDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return dimensions;
};
