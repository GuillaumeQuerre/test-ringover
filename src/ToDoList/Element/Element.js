import { memo } from "react";
function Element () {
    return (
        <div>
            <Text>{Element.task}</Text>
            <Text>{Element.startDate}</Text>
            <Text>{Element.endDate}</Text>
            <div>
                <Button onPress={onModif}/>
                <Button onPress={onDelete}/>
            </div>
        </div>
    )

}

export default memo(Element)