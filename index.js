window.onload = () => {
    let phoneInput = document.getElementById('phone');
    let phoneLabel = document.getElementById('phone-label');

    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            let phoneNumber = phoneInput.value;
            let phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phoneNumber)) {
                phoneLabel.textContent = 'Пожалуйста, введите номер в формате: 1234567890';
            } else {
                phoneLabel.textContent = '';
            }
        });
    }
}