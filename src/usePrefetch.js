import { useState, useEffect, lazy } from 'react';
function usePrefetch(factory) {
    const [component, setComponent] = useState(null);

    useEffect(() => {
        factory()
        const comp = lazy(factory)
        setComponent(comp)
    }, [factory])
    return component
}
export default usePrefetch;