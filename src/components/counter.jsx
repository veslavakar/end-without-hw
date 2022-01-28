import React, { useState } from "react";

const Counter = (props) => {
    const { id, value, setCounters } = props;

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };

    const getBageClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    const changeValue = (sign) => {
        setCounters(prev => prev.map(item => {
            if (item.id === id) return { ...item, value: eval(`${item.value} ${sign} 1`) };
            return item;
        }))
    }

    const handleIncrement = () => {
        changeValue('+')
    };
    const handleDecrement = () => {
        changeValue('-')
    };

    return (
        <div>
            <span> {props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleIncrement}
            >
                +
            </button>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleDecrement}
            >
                -
            </button>
            <button
                className='btn btn-danger btn-sm m-2'
                onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Counter;
