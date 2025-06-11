function toggleMenu() {
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("show");
}


const form = document.querySelector('.formular');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const lastName = document.getElementById('LastName');
    const firstName = document.getElementById('FirstName');
    const email = document.getElementById('email');
    const phone = document.getElementById('PhoneNumber');
    const arrivalDate = document.getElementById('ArrivalDate');
    const departureDate = document.getElementById('DepartureDate');
    const numarPersoane = document.getElementById('NumarPersoane');

    let errors = [];

    if (lastName.value.trim() === '') {
        errors.push('Numele este obligatoriu.');
    }

    if (firstName.value.trim() === '') {
        errors.push('Prenumele este obligatoriu.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        errors.push('Adresa de e-mail este invalidă.');
    }

    const phoneValue = phone.value.trim();
    if (phoneValue === '' || phoneValue.length !== 10 )
    {
        errors.push('Numărul de telefon trebuie să fie în formatul (07xx)-xxx-xxx.');
    } else {
        const numericPhone = phoneValue.replace(/[()-]/g, ''); 
    if (numericPhone.length !== 10 || numericPhone.slice(0, 2) !== '07' || isNaN(numericPhone)) {
        errors.push('Numărul de telefon trebuie să fie un număr valid de România în formatul (07xx)-xxx-xxx.');
    }
}


    if (arrivalDate.value === '') {
        errors.push('Data de sosire este obligatorie.');
    }
    if (departureDate.value === '') {
        errors.push('Data de plecare este obligatorie.');
    }
    if (arrivalDate.value && departureDate.value && arrivalDate.value > departureDate.value) {
        errors.push('Data de plecare trebuie să fie după data de sosire.');
    }

    if (numarPersoane.value.trim() === '' || parseInt(numarPersoane.value) <= 0) {
        errors.push('Numărul de persoane trebuie să fie un număr pozitiv.');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert('Formular trimis cu succes!');
        form.submit(); 
    }
});
