const password = document.getElementById('password');
const invalidPassFeedback = document.getElementById('invalid-password');
const email = document.getElementById('email');
const invalidEmailFeedback = document.getElementById('invalid-email');
const username = document.getElementById('username');
const invalidUsernameFeedback = document.getElementById('invalid-username');

username.addEventListener('keydown', (e) => {
    let key = e.keyCode;
    if ((key >= 65 && key <= 90) || key === 8) {
        if (username.value.length > 14 && key !== 8) {
            invalidUsernameFeedback.innerText = 'Use 15 character maximum';
            e.preventDefault()
        } else {
            invalidUsernameFeedback.innerText = ''
            return key;
        }
    } else {
        e.preventDefault();
    }
})

email.addEventListener('change', () => {
    if (email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.][?:[a-zA-Z0-9-]+]*$/)) {
        invalidEmailFeedback.innerText = '';
    } else {
        invalidEmailFeedback.innerText = 'Enter a valid email';
    }

});


password.addEventListener('change', () => {
    if (password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        invalidPassFeedback.innerText = '';
    } else if (password.value.length < 8 || password.value.search(/(?=.*\d)/) || password.value.search(/(?=.*[a-z])/) || password.value.search(/(?=.*[A-Z])/)) {
        invalidPassFeedback.innerText = 'Use 8 or more characters with a mix of upper and lower letters & numbers';
     }
})