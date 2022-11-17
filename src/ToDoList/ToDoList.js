import { memo } from "react";
import { FlatList } from "react-native";
import Element from "./Element"
function ToDoList ({list}) {
    return (
        <FlatList>
            {list.map(element, id => {
                return <Element element={element}/>
            })
            }
        </FlatList>

    )

}

export default memo(ToDoList)