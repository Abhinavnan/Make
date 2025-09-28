
function Validator(name, value) {
    let error = false, helperText = '';
    switch(name){
        case 'email':
            const emailRegex = /^[\w]+(\.[\w]*)*[^\.]@[a-zA-Z_]+(\.[a-zA-Z_]{2,}){0,1}\.[a-zA-Z_]{2,}$/;
            error = !emailRegex.test(value);
            helperText = error ? 'Enter a valid email address' : '';
            return {error, helperText};
        case 'password':
            const messages = [];
            const digitRegex = /\d/;
            const specialRegex = /\W/;
            const uppercaseRegex = /[A-Z]/;
            const lowercaseRegex = /[a-z]/;
            const passwordRegex = /^(?=.*[0-9])(?=.*[\W])(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
            if (value.length < 6) messages.push('Password must be at least 6 characters long');
            if (!digitRegex.test(value)) messages.push('Password must contain at least one digit');
            if (!specialRegex.test(value)) messages.push('Password must contain at least one special character');
            if (!uppercaseRegex.test(value)) messages.push('Password must contain at least one uppercase character');
            if (!lowercaseRegex.test(value)) messages.push('Password must contain at least one lowercase character');
            error = messages.length > 0;
            helperText = error ? messages : '';
            return {error, helperText};
        default:
            return {error, helperText};
    }   
}

export default Validator;