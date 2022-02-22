import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password }) => {
    const testResult = zxcvbn(password);
    const num = testResult.score * 100 / 4;

    const createPassLabel = () => {
        switch (testResult.score) {
            case 0:
                return '';
            case 1:
                return 'Your Password is Weak';
            case 2:
                return 'Your Password is Fair';
            case 3:
                return 'Your Password is Good';
            case 4:
                return 'Your Password is Strong';
            default:
                return '';
        }
    }

    const createPassGuessTime = () => {
        switch (testResult.score) {
            case 0:
                return '';
            case 1:
                return 'It will take a second to guess your password.';
            case 2:
                return 'It will take 5 minutes to guess your password';
            case 3:
                return 'It will take a day to guess your password';
            case 4:
                return 'It will take weeks to guess your password';
            default:
                return '';
        }
    }

    const createPassSugg = () => {
        switch (testResult.score) {
            case 0:
                return '';
            case 1:
                return 'Add another word or two. Uncommon words are better.';
            case 2:
                return 'Add Capital Letters or special characters.';
            case 3:
                return 'This is good, but try to make it longer for a strong password';
            case 4:
                return 'This is a strong password.';
            default:
                return '';
        }
    }

    const funcProgressColor = () => {
        switch (testResult.score) {
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';
        }
    }

    const changePasswordColor = () => ({
        width: `${num}%`,
        background: funcProgressColor(),
        height: '7px'
    })

    return (
        <>
            <div className="progress" style={{ height: '7px' }}>
                <div className="progress-bar" style={changePasswordColor()}></div>
            </div>
            <p style={{ color: funcProgressColor() }}>{createPassLabel()}</p>
            <div>
            <p>{createPassGuessTime()}</p>
                <p>{createPassSugg()}</p>
            </div>
        </>
    )
}

export default PasswordStrengthMeter