const form = document.querySelector('form')
const email = document.querySelector('#exampleInputEmail1')
const password = document.querySelector('#exampleInputPassword1')
const Check = document.querySelector('#exampleCheck1')
const alerts = document.querySelector('.alert')
const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/


// Alerts Function
function showAlert(alertType, alertText) {
    alerts.classList.add(alertType)
    alerts.textContent = alertText
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (email.value === '' || password.value === '') {
        alerts.style.display = 'block'
        showAlert('alert-primary', 'Hər iki xananıda doldurmalısınız!')
        setTimeout(() => alerts.style.display = 'none', 3000)

    } else if (!passRegex.test(password.value)) {

        alerts.style.display = 'block'
        showAlert('alert-danger', 'Şifrənizin sayı minimum 8 karakter olmalıdır,bir böyük herf,bir kiçik herf və rəqəm olmalıdır!');
        setTimeout(() => alerts.style.display = 'none', 3000)

    } else {
        alerts.style.display = 'block'
        showAlert('alert-success', 'Giriş Başarılıdır')
        setTimeout(() => alerts.style.display = 'none', 3000)
        console.log("email" + email.value)
        console.log("password" + password.value)
    }
})
// Checkbox Show Password
Check.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
})
