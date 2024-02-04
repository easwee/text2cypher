function updatePromptCount(promptMaxlength = 300) {
  const input = document.getElementById("promptInput");
  const promptCount = document.getElementById("promptCount");
  const promptInputForm = document.getElementById("promptInputForm");

  if (input.value.length > 0) {
    promptCount.textContent = `${input.value.length}/${promptMaxlength}`;
    promptInputForm.classList.add("valid");
  } else {
    promptInputForm.classList.remove("valid");
  }
}

function resetPrompt(element) {
  element.form.reset();
  updatePromptCount();
}

function updateLastPrompts() {
  const prompt = document.querySelector('input[name="prompt"]').value;
  const cypher = document.querySelector("#cypher").dataset.cypher;
  let newLastPrompts = [{ prompt, cypher }];
  const lastPrompts = JSON.parse(localStorage.getItem("last_prompts"));

  if (lastPrompts) {
    newLastPrompts = [...newLastPrompts, ...lastPrompts.slice(0, 2)];
  }

  localStorage.setItem("last_prompts", JSON.stringify(newLastPrompts));

  renderLastPrompts(newLastPrompts);
}

function setNewPrompt(event) {
  const promptInput = document.querySelector('input[name="prompt"]');

  promptInput.value = event.target.closest(".last-prompts-item").dataset.prompt;
}

function clearLastPrompts() {
  localStorage.removeItem("last_prompts");
}

function renderLastPrompts(prompts) {
  const lastPromptsEl = document.getElementById("lastPrompts");
  const lastPromptsListEl = document.getElementById("lastPromptsList");

  lastPromptsListEl.innerHTML = "";

  if (prompts) {
    lastPromptsEl.style.display = "block";
    prompts.forEach(({ prompt, cypher }) => {
      const promptEl = document.createElement("div");

      promptEl.setAttribute("data-prompt", prompt);
      promptEl.classList.add("last-prompts-item");
      promptEl.addEventListener("click", handleLastPromptClick);

      const promptElText = document.createElement("div");
      promptElText.classList.add("last-prompts-item-text");
      promptElText.title = prompt;
      promptElText.innerHTML = `${prompt}`;
      promptEl.append(promptElText);

      const promptElCypher = document.createElement("div");
      promptElCypher.classList.add("last-prompts-item-cypher");
      promptElCypher.title = cypher;
      promptElCypher.innerHTML = cypher;
      promptEl.append(promptElCypher);

      lastPromptsListEl.append(promptEl);
    });
  } else {
    lastPromptsEl.style.display = "none";
  }
}

function renderClientDatabases(clientDatabases) {
    debugger;
    if(clientDatabases) {
        const databaseSelect = document.querySelector('select[name="database"]');
        databaseSelect.innerHTML = '';

        clientDatabases.forEach(({name}) => {
            const option = document.createElement('option');
            option.value = name;
            option.text = name;    
            databaseSelect.appendChild(option);
        })
    }
}

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function initDownvoteDialog() {
  const validateCypher = document.querySelector("#validateCypher");
  const voteDown = document.querySelector("#voteDown");

  if(voteDown) {
    voteDown.addEventListener("click", () => {
      validateCypher.showModal();
    });
  }
}

function initSettingsDialog() {
  const settingsTrigger = document.querySelector("#settingsTrigger");
  const settingsDialog = document.querySelector("#settings");

  settingsTrigger.addEventListener("click", () => {
    settingsDialog.showModal();
  });

  // handle settings UI
//   const customDatabasesContainer = document.getElementById('customDatabasesContainer');
//   const addBtn = document.getElementById('addCustomDatabase');

//   const updateCloneAttributes = (clone, newIndex) => {
//     clone.id = `customDatabase_${newIndex}`;
//     clone.querySelector('h4').innerHTML = `Database connection <span class="settings-custom-database-remove">- remove</span>`;
   
//     let fields = clone.querySelectorAll('input');
//     fields.forEach(field => {
//         let newInputName = field.name.split('_')[0] + '_' + field.name.split('_')[1];         
//         field.name = `${newInputName}_${newIndex}_${field.name.split('_')[3]}`;
//         field.value = '';
//     });
//   };

//   addBtn.addEventListener('click', function() {
//     const lastFieldset = customDatabasesContainer.querySelector('fieldset:last-of-type');
//     const newIndex = lastFieldset ? parseInt(lastFieldset.id.split('_')[1]) + 1 : 0;
//     const clone = lastFieldset.cloneNode(true);
//     updateCloneAttributes(clone, newIndex);
//     customDatabasesContainer.appendChild(clone);
//   });
  
//   customDatabasesContainer.addEventListener('click', function(e) {
//     if(e.target.classList.contains('settings-custom-database-remove')) {
//         e.target.closest('fieldset').remove();
//     }
//   });

  // handle settings save
  const settingsSave = document.getElementById("settingsSave")
  settingsSave.addEventListener("click", function(e) {
    e.preventDefault();
    
    const openAIApiKey = document.querySelector('input[name="openai_api_key"]').value;
    localStorage.setItem('openAIApiKey', openAIApiKey);
    
    // const databases = [];

    // const fieldsets = document.querySelectorAll('.settings-custom-database');
    // const databaseSelect = document.querySelector('select[name="database"]');

    // databaseSelect.innerHTML = '';
    
    // fieldsets.forEach(function(fieldset) {
    //     const dbInfo = {
    //         name: fieldset.querySelector('input[name*="name"]').value,
    //         uri: fieldset.querySelector('input[name*="uri"]').value,
    //         username: fieldset.querySelector('input[name*="username"]').value,
    //         password: fieldset.querySelector('input[name*="password"]').value
    //     };

    //     const option = document.createElement('option');
    //     option.value = dbInfo.name;
    //     option.text = dbInfo.name;

    //     databaseSelect.appendChild(option);
    //     databases.push(dbInfo);
    // });
    
    // // Save the databases array to localStorage as a JSON string
    // localStorage.setItem('databases', JSON.stringify(databases));

    settingsDialog.close();
  });
}

function handleLastPromptClick(event) {
  setNewPrompt(event);
  updatePromptCount();
}

function handleAskBeforeRequest(event) {
    const openAIApiKey = localStorage.getItem("openAIApiKey")
    const databases = localStorage.getItem("databases")
    
    if(openAIApiKey) {
        event.detail.requestConfig.parameters["openAIApiKey"] = openAIApiKey;
    }

    if(databases) {
        event.detail.requestConfig.parameters["databases"] = databases;
    }
}

function handleAskAfterRequest() {
  const cypher = document.getElementById("cypher");
  const answer = document.getElementById("answer");

  Prism.highlightAll(cypher);
  Prism.highlightAll(answer);

  updateLastPrompts();
  initDownvoteDialog();
}


window.onload = () => {
  const lastPrompts = JSON.parse(localStorage.getItem("last_prompts"));
  // const clientDatabases = JSON.parse(localStorage.getItem("databases"));

  renderLastPrompts(lastPrompts);
  // renderClientDatabases(clientDatabases);

  // fill prompt from url if present
  const promptInput = document.getElementById("promptInput");
  const promptValue = getQueryParam("prompt");

  if (promptInput && promptValue) {
    promptInput.value = decodeURIComponent(promptValue.replace(/\+/g, " "));
    updatePromptCount();
  }

  initSettingsDialog();
};
