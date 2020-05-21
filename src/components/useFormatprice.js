import { useState, useEffect } from 'react';
function useFormatprice(price) {
    const [formatted, setFormatted] = useState(null);

    useEffect(() => {
        const f = new Intl.NumberFormat('de-DE').format(price);
        setFormatted(f);
    }, [price])
    return formatted;
}
export default useFormatprice;