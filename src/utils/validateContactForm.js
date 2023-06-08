export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'I said First Name fool';
    }
    else if (values.firstName.length < 2){
        errors.firstName = "2 Characters on the min dum dum";
    }
    else if (values.firstName.length > 15){
        errors.firstName = 'Cmon your name aint really that long';
    }

    if (!values.lastName) {
        errors.lastName = 'I said Last Name fool';
    }
    else if (values.lastName.length < 2){
        errors.lastName = "2 Characters on the min dum dum";
    }
    else if (values.lastName.length > 15){
        errors.lastName = 'Cmon your last name aint really that long';
    }


    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
};