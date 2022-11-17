import { memo, useCallback } from "react";
import Element from "./Element";
function ElementBase() {
    const handleDelete = useCallback(() => {
        
    }, [])
    return <Element />
}

export default memo(ElementBase)