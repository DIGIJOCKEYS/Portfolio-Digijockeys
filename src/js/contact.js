// Form Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbxdphPJNoZv_WGnpj_D-pDTRf9gff2BzC0qBs-grAqPg7bhjxOP2KWmI2F071AXrSfkSw/exec';
const form = document.forms['mdimassyafutra_contact_form'];
const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-load');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnLoading.classList.toggle('hidden');
  btnSend.classList.toggle('hidden');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('hidden');
      btnSend.classList.toggle('hidden');

      return response.json();
    })
    .then((data) => {
      myAlert.classList.remove('hidden');
      myAlert.innerText = 'Message sent successfully';

      form.reset();

      console.log('Success!', data);

      setTimeout(() => {
        myAlert.classList.add('hidden');
      }, 3000);
    })
    .catch((error) => {
      console.error('Error!', error.message);
      myAlert.classList.remove('hidden');
      myAlert.innerText = 'An error occurred. Please try again later.';
      setTimeout(() => {
        myAlert.classList.add('hidden');
      }, 3000);
    });
});
