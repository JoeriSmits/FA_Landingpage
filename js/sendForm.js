$('#registerForm').submit(function() {
  e.preventDefault();

  const formData = $('#registerForm').serializeArray();

  $.ajax({
    url: 'https://dashboard.flight-academy.nl/users/add',
    type: 'POST',
    data: {
      name: formData[0].value,
      email: formData[1].value
    },
    dataType: 'json',
    success: function() {
      UIkit.notification({
        message: i18next.t('notification.sendMail.success'),
        status: 'success',
        pos: 'bottom-center',
        timeout: 5000
      });
      $('#registerForm')[0].reset();
    },
    error: function() {
      UIkit.notification({
        message: i18next.t('notification.sendMail.error'),
        status: 'danger',
        pos: 'bottom-center',
        timeout: 5000
      });
    }
  });
});
