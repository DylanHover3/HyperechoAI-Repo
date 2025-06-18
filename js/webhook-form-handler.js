console.log("Webhook form handler loaded");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quote-form-element");

  if (form) {
    console.log("Quote form found, adding webhook submission handler");

    form.addEventListener("submit", function (event) {
      console.log("Form submission intercepted");
      event.preventDefault(); // Prevent default form submission

      // Get form data
      const formData = new FormData(form);

      // Convert FormData to clean JSON object
      const jsonData = {};
      for (let [key, value] of formData.entries()) {
        jsonData[key] = value.trim(); // Trim whitespace
      }

      // Add timestamp and source
      jsonData.timestamp = new Date().toISOString();
      jsonData.source = "website_quote_form";

      console.log("Sending webhook data:", jsonData);

      // Make.com webhook URL
      const webhookUrl =
        "https://hook.us2.make.com/ee83lwngq75kugzd8yl3b1qzpt8ef5hr";

      // Submit to webhook endpoint
      fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      })
        .then((response) => {
          console.log("Webhook response status:", response.status);
          if (response.ok) {
            console.log("Webhook submission successful");
            handleFormSuccess();
          } else {
            console.error("Webhook submission failed:", response.status);
            handleFormError();
          }
        })
        .catch((error) => {
          console.error("Webhook submission error:", error);
          handleFormError();
        });

      function handleFormSuccess() {
        console.log("Handling form success");

        // Reset the form
        form.reset();
        console.log("Form fields cleared");

        // Show success message
        const successDiv = document.getElementById("form-success");
        if (successDiv) {
          successDiv.style.display = "block";
          console.log("Success message displayed");

          // Hide success message after 5 seconds
          setTimeout(() => {
            successDiv.style.display = "none";
            console.log("Success message hidden");
          }, 5000);
        } else {
          console.error("Success message element not found");
        }
      }

      function handleFormError() {
        console.log("Handling form error");
        alert(
          "There was an error submitting your quote request. Please try again or contact us directly."
        );
      }
    });

    console.log("Webhook form submission handler attached successfully");
  } else {
    console.error("Quote form element not found");
  }
});
