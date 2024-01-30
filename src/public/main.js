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
  lastPromptsEl.innerHTML = "";
  prompts.forEach(({ prompt, cypher }) => {
    const promptEl = document.createElement("div");

    promptEl.setAttribute("DATA-prompt", prompt);
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

    lastPromptsEl.append(promptEl);
  });
}

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function initDownvoteDialog() {
  const validateCypher = document.querySelector("#validateCypher");
  const showvalidateCypher = document.querySelector("#voteDown");

  showvalidateCypher.addEventListener("click", () => {
    validateCypher.showModal();
  });
}

function handleLastPromptClick(event) {
  setNewPrompt(event);
  updatePromptCount();
}

function handleAskAfterRequest() {
  const cypher = document.getElementById("cypher");
  const answer = document.getElementById("answer");

  Prism.highlightAll(cypher);
  Prism.highlightAll(answer);

  updateLastPrompts();
  initDownvoteDialog();
}

function handleCypherEdit(event) {
  const cypher = document.getElementById("cypherEditSubmit");
}

window.onload = () => {
  const lastPrompts = JSON.parse(localStorage.getItem("last_prompts"));

  renderLastPrompts(lastPrompts);

  // fill prompt from url if present
  const promptInput = document.getElementById("promptInput");
  const promptValue = getQueryParam("prompt");

  if (promptInput && promptValue) {
    promptInput.value = decodeURIComponent(promptValue.replace(/\+/g, " "));
    updatePromptCount();
  }
};
