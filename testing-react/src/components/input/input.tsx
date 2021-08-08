import React, {useState, useRef} from 'react';

import styles from './input.module.css';

const Input = () => {
    const [count, setCount] = useState<number>(0);

    const handleInputChange = () => {
        setCount(inputRef.current?.value.length || 0);
    };

    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className={styles.input}>
            <input data-testid="testInput" ref={inputRef} type='text' onChange={() => handleInputChange()}/>
            <span data-testid="testInputLength">{count}</span>
        </div>
    );
};

export default Input;