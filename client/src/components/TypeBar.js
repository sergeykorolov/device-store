import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className="type-bar">
            {device.types.map(type =>
                <div className="type-item" key={type.id}>
                    {type.name}
                </div>
            )}
        </div>
    );
});

export default TypeBar;