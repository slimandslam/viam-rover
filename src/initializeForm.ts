// initializeForm.ts -- handle the Viam rover form

interface FormData {
  apiKey: string;
  apiKeyId: string;
  appAddress: string;
}

let formData: FormData = {
  apiKey: '',
  apiKeyId: '',
  appAddress: '',
};

// Function that returns the form data
export function getFormData(): FormData {
  return formData;
}

// Function to initialize the form
export function initializeForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('api-form') as HTMLFormElement;

    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();

      const apiKey = (document.getElementById('api-key') as HTMLInputElement).value;
      const apiKeyId = (document.getElementById('api-key-id') as HTMLInputElement).value;
      const appAddress = (document.getElementById('app-address') as HTMLInputElement).value;

      formData = {
        apiKey,
        apiKeyId,
        appAddress,
      };

      console.log('Form Data:', formData);

    });
  });
}

