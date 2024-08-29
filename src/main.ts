import * as VIAM from "@viamrobotics/sdk";
import { initializeForm, getFormData } from './initializeForm';

export interface FormData {
  apiKey: string;
  apiKeyId: string;
  appAddress: string;
}

// Declare formData as a global variable
export let formData: FormData = {
  apiKey: '',
  apiKeyId: '',
  appAddress: '',
};

function displayLine(newText: string) {
    // Select the "text-container" div by its ID
    const textContainer = document.getElementById('text-container');
    if (textContainer) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = newText;
        textContainer.appendChild(newParagraph);
    } else {
        console.error('Text container not found.');
    }
}

initializeForm();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('api-form') as HTMLFormElement;

  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    formData = getFormData();

    if (formData.apiKey === "" ) formData.apiKey = import.meta.env.VITE_APP_API_KEY;
    if (formData.apiKeyId === "" ) formData.apiKeyId = import.meta.env.VITE_APP_API_KEY_ID;

    const contentDiv = document.getElementById("api");
    if (!contentDiv.classList.contains('hidden')) {
      contentDiv.classList.add('hidden');
    }

    main().catch((error) => {
     console.error("encountered an error:", error);
    });

  });
});


// This function moves a base component in a square.
async function moveInSquare(client: VIAM.RobotClient) {
  // Replace with the name of the base on your machine.
  const name = "viam_base";
  const baseClient = new VIAM.BaseClient(client, name);

  try {
    button().disabled = true;
    for (let i = 0; i < 4; i++) {
      displayLine("move straight");
      console.log("move straight");
      await baseClient.moveStraight(500, 500);
      displayLine("spin 90 degrees");
      console.log("spin 90 degrees");
      await baseClient.spin(90, 100);
    }
  } finally {
    button().disabled = false;
  }
}

// This function gets the button element
function button() {
  return <HTMLButtonElement>document.getElementById("main-button");
}


const main = async () => {
  const host = formData.appAddress;

  const machine = await VIAM.createRobotClient({
    host,
    credential: {
      type: "api-key",
      payload: formData.apiKey,
    },
    authEntity: formData.apiKeyId,
    signalingAddress: "https://app.viam.com:443",
  });

  button().onclick = async () => {
   // Clear the text container after each click
   const textContainer = document.getElementById('text-container');
   textContainer.innerHTML = '';
   await moveInSquare(machine);
  };
  button().disabled = false;
};

