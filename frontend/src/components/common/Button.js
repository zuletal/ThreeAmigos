import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    color: black;
    background: ${props=>props.color};
    font-weight: bold;
    padding:10px 9px;
    border-radius:8px;
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