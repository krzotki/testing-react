
import React, {useState} from 'react';

interface Props {
    text: string
}

const Button: React.FC<Props> = (props) => {
    const clickHandler = () => {
        setButtonText('You have clicked me');
    };

    const [buttonText, setButtonText] = useState<string>(props.text);

    return (
        <button data-testid="button" onClick={() => clickHandler()}>
            {buttonText}
        </button>
    );
};

export default Button;