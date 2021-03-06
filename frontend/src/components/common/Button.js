import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    color: black;
    background: #f8049c;
    font-weight: bold;
    padding:8px;
    border-radius:4px;
    box-shadow: none;
    font-size:1em;
    border: none;
    width: fit-content;
    display: block;
    white-space: none;

    &:disabled{
        background: #eee;
        color: #666;
    }
`;

Button.propTypes = {
    large: PropTypes.bool,
    secondary: PropTypes.bool
}

export {Button};