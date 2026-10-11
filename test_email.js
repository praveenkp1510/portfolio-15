

const payload = {
  service_id: "service_rnu3n0g",
  template_id: "template_s6k3l5u",
  user_id: "U3KEbyJoBtzcVLDm8",
  template_params: {
    from_name: "Test",
    from_email: "test@test.com",
    message: "This is a test message.",
    reply_to: "test@test.com"
  }
};

fetch('https://api.emailjs.com/api/v1.0/email/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
.then(async res => {
  const text = await res.text();
  console.log(`Status: ${res.status}`);
  console.log(`Body: ${text}`);
})
.catch(err => console.error(err));
