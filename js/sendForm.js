$('#registerForm').submit((e) => {
  e.preventDefault();

  const formData = $('#registerForm').serializeArray();

  $.post('http://localhost:3000/users/add', {
    name: formData[0].value,
    email: formData[1].value
  })
  .done(() => {
    console.log('success');
  })
  .fail(() => {
    console.error('error');
  });
});
