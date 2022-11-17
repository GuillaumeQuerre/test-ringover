import { memo } from "react";
import AddItemButton from "./AddItemButton";

function AddItemButtonBase() {
    return <AddItemButton />
}

export default memo(AddItemButtonBase)