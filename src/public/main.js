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
  const databasesContainer = document.getElementById('databasesContainer');
  const databaseSelect = document.querySelector('select[name="database"]');

  // populate database selection with custom databases from local storage
  const databases = localStorage.getItem("databases");
  const databaseFieldsets = databases.length > 0 ? JSON.parse(databases) : []
  databaseFieldsets.forEach((data, index) => {   
    const option = document.createElement('option');
    option.value = data.name;
    option.text = data.name;
    databaseSelect.appendChild(option);
  })

  const clientDatabasesInput = document.querySelector("input[name='clientDatabases']")
  clientDatabasesInput.value = databases;

  settingsTrigger.addEventListener("click", () => {
    // populate settings UI from local storage
    const openAIApiKey = localStorage.getItem("openAIApiKey");
    const openAIApiKeyInput = document.querySelector("[name='openai_api_key']")
    openAIApiKeyInput.value = openAIApiKey ? openAIApiKey : "";
  
    databasesContainer.innerHTML = "";
    const databases = localStorage.getItem("databases");
    const databaseFieldsets = databases.length > 0 ? JSON.parse(databases) : []
    
    databaseFieldsets.forEach((data, index) => {
      const fieldset = `
        <fieldset class="settings-custom-database" id="customDatabase_${index}">
            <h4>Neo4j database connection <span class="settings-custom-database-remove">- remove</span></h4>
            <div class="field">
                <label>
                    Name
                    <input name="custom_database_${index}_name" value="${data.name}" type="text" />
                </label>
            </div>
            <div class="field">
                <label>
                    URI
                    <input name="custom_database_${index}_uri" value="${data.uri}" type="text" />
                </label>
            </div>
            <div class="field">
                <label>
                    Username
                    <input name="custom_database_${index}_username" value="${data.username}" type="text" />
                </label>
            </div>
              <div class="field">
                <label>
                    Password
                    <input name="custom_database_${index}_password" value="${data.password}" type="password" />
                </label>
            </div>
        </fieldset>
      `;
      databasesContainer.innerHTML += fieldset;
    })
    settingsDialog.showModal();
  });

  // handle add database connection
  const addBtn = document.getElementById('addCustomDatabase');
  addBtn.addEventListener('click', function() {
    const lastFieldset = databasesContainer.querySelector('fieldset:last-of-type');
    const index = lastFieldset ? parseInt(lastFieldset.id.split('_')[1]) + 1 : 0;

    const fieldset = `
      <fieldset class="settings-custom-database" id="customDatabase_${index}">
          <h4>Neo4j database connection <span class="settings-custom-database-remove">- remove</span></h4>
          <div class="field">
              <label>
                  Name
                  <input name="custom_database_${index}_name" type="text" />
              </label>
          </div>
          <div class="field">
              <label>
                  URI
                  <input name="custom_database_${index}_uri" type="text" />
              </label>
          </div>
          <div class="field">
              <label>
                  Username
                  <input name="custom_database_${index}_username" type="text" />
              </label>
          </div>
            <div class="field">
              <label>
                  Password
                  <input name="custom_database_${index}_password" type="password" />
              </label>
          </div>
      </fieldset>
    `;

    databasesContainer.innerHTML += fieldset;
  });
   
  databasesContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('settings-custom-database-remove')) {
      const fieldset = e.target.closest('fieldset');
      fieldset.remove();
    }
  });
  
  const settingsSave = document.getElementById("settingsSave");
  settingsSave.addEventListener("click", function(e) {   
    e.preventDefault();
    
    const openAIApiKey = document.querySelector('input[name="openai_api_key"]').value;
    localStorage.setItem('openAIApiKey', openAIApiKey);
    
    const databases = [];

    const fieldsets = document.querySelectorAll('.settings-custom-database');
    const customSelectOptions = databaseSelect.querySelectorAll('option[value]');
    customSelectOptions.forEach(option => {
      option.remove();
    });

    fieldsets.forEach(function(fieldset) {
        const dbInfo = {
            name: fieldset.querySelector('input[name*="_name"]').value,
            uri: fieldset.querySelector('input[name*="_uri"]').value,
            username: fieldset.querySelector('input[name*="_username"]').value,
            password: fieldset.querySelector('input[name*="_password"]').value
        };

        const option = document.createElement('option');
        option.value = dbInfo.name;
        option.text = dbInfo.name;

        databaseSelect.appendChild(option);
        databases.push(dbInfo);
    });
    
    // Save the databases array to localStorage as a JSON string
    localStorage.setItem('databases', JSON.stringify(databases));

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
        event.detail.requestConfig.parameters["clientDatabases"] = databases;
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

function init() {

  initSettingsDialog();

  const lastPrompts = JSON.parse(localStorage.getItem("last_prompts"));
  renderLastPrompts(lastPrompts);  

  // fill prompt from url if present
  const promptInput = document.getElementById("promptInput");
  const promptValue = getQueryParam("prompt");

  if (promptInput && promptValue) {
    promptInput.value = decodeURIComponent(promptValue.replace(/\+/g, " "));
    updatePromptCount();
  }
}

