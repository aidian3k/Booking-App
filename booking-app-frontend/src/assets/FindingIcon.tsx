import React, {FC} from "react";

export const FindingIcon: FC<{ name: string, is: boolean, icon: any }> = (props) => {
    const {name, is, icon} = props;

    function isHaving(): string {
        if (!is) {
            return 'line-through';
        } else {
            return ''
        }
    }

    return (
        <div className={'flex gap-2'}>
            {icon}
            <p className={'font-serif text-gray-700 ' + isHaving()}>{name}</p>
        </div>
    )
}