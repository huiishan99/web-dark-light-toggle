const toggleSwitch = document.querySelector("#dark-mode")
toggleSwitch.addEventListener("input", () => {
  let label = toggleSwitch.labels[0]
  document.body.dataset.darkMode = label.dataset.darkMode = toggleSwitch.checked
})