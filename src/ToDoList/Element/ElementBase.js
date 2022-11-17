import { memo } from "react";
import Element from "./Element";
function ElementBase() {
    return <Element />
}

export default memo(ElementBase)