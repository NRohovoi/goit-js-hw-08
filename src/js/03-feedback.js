import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

     formEl.addEventListener('input', throttle(onTextAreaInput, 500));

     formEl.addEventListener('submit', onFormSubmit);
     
    let formData = {};
        
    function onTextAreaInput(event) {
     formData[event.target.name] = event.target.value;
     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


    function onFormSubmit(event) {
      event.preventDefault();
            
      if (formEl.email.value === '' || formEl.message.value === '') {
        alert('все поля должны быть заполнены')
      } else {
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
  }


     
};

(function updateDataFromLocalStorage() {
  let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    Object.entries(savedData).forEach(([key, value]) => {
      formData[key] = value;
      formEl.elements[key].value = value;
    
    });
  }
})();
