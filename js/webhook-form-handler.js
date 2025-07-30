/**
 * Webhook Form Handler - Security Enhanced
 * Handles quote form submissions with improved security practices
 */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quote-form-element");
  const webhookUrlElement = document.querySelector('[data-webhook-url]');

  if (!form) {
    console.error("Quote form element not found");
    return;
  }

  if (!webhookUrlElement) {
    console.error("Webhook URL configuration not found");
    return;
  }

  const webhookUrl = webhookUrlElement.getAttribute('data-webhook-url');
  if (!webhookUrl) {
    console.error("Webhook URL not configured");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form before submission
    if (!validateForm(form)) {
      return;
    }

    // Get form data
    const formData = new FormData(form);
    
    // Convert FormData to clean JSON object
    const jsonData = {};
    for (let [key, value] of formData.entries()) {
      jsonData[key] = sanitizeInput(value.trim());
    }

    // Add metadata
    jsonData.timestamp = new Date().toISOString();
    jsonData.source = "website_quote_form";

    // Submit to webhook endpoint
    submitForm(webhookUrl, jsonData);
  });

  function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    for (let field of requiredFields) {
      if (!field.value.trim()) {
        showError(`Please fill in the ${field.name} field.`);
        field.focus();
        return false;
      }
    }

    // Validate email format
    const emailField = form.querySelector('[name="email"]');
    if (emailField && !isValidEmail(emailField.value)) {
      showError("Please enter a valid email address.");
      emailField.focus();
      return false;
    }

    return true;
  }

  function sanitizeInput(input) {
    // Basic input sanitization
    return input.replace(/[<>]/g, '');
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function submitForm(url, data) {
    // Show loading state
    const submitButton = form.querySelector('[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          handleFormSuccess();
        } else {
          throw new Error(`HTTP ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error.message);
        handleFormError();
      })
      .finally(() => {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      });
  }

  function handleFormSuccess() {
    // Reset the form
    form.reset();

    // Show success message
    const successDiv = document.getElementById("form-success");
    if (successDiv) {
      successDiv.style.display = "block";
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successDiv.style.display = "none";
      }, 5000);
    }
  }

  function handleFormError() {
    showError("There was an error submitting your quote request. Please try again or contact us directly.");
  }

  function showError(message) {
    // Create or update error message element
    let errorDiv = document.getElementById("form-error");
    if (!errorDiv) {
      errorDiv = document.createElement("div");
      errorDiv.id = "form-error";
      errorDiv.className = "quote-form__error";
      form.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      errorDiv.style.display = "none";
    }, 5000);
  }
});
