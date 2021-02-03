import React from 'react';

interface IItem {
    value: string;
    id: string;
}

interface IRandomListProps {
    list: IItem[];
}

export function RandomList({ list }: IRandomListProps) {
    return (
        <ul>
            {list.map((item, index) => (
              <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    );
}