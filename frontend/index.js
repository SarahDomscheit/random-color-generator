const API_URL = "http://localhost:5555/api/color";

const hexValue = document.getElementById("hex-value");
const rgbValue = document.getElementById("rgb-value");
const hslValue = document.getElementById("hsl-value");
const generateBtn = document.getElementById("generate-btn");
const copyButtons = document.querySelectorAll(".copy-btn");
const notification = document.getElementById("notification");

async function fetchRandomColor() {
  try {
    generateBtn.disabled = true;
    generateBtn.textContent = "Generating...";

    const response = await fetch(`${API_URL}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    updateUI(data);
  } catch (error) {
    console.error("Error fetching color:", error);
    showNotification(
      "Failed to fetch color. Make sure the server is running!",
      true
    );
  } finally {
    generateBtn.disabled = false;
    generateBtn.textContent = "Generate New Color";
  }
}

function updateUI(color) {
  hexValue.textContent = color.hex;
  rgbValue.textContent = color.rgb;
  hslValue.textContent = color.hsl;

  document.body.style.backgroundColor = color.hex;
}

async function copyToClipboard(text, button) {
  try {
    await navigator.clipboard.writeText(text);

    const originalText = button.textContent;
    button.textContent = "✓ Copied";
    button.classList.add("copied");

    showNotification(`Copied: ${text}`);

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("copied");
    }, 2000);
  } catch (error) {
    console.error("Failed to copy:", error);
    showNotification("Failed to copy to clipboard!", true);
  }
}

function showNotification(message, isError = false) {
  notification.textContent = message;
  notification.style.background = isError ? "#f44336" : "#333";
  notification.classList.remove("hidden");
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
    notification.classList.add("hidden");
  }, 3000);
}

generateBtn.addEventListener("click", fetchRandomColor);

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    const textToCopy = targetElement.textContent;
    copyToClipboard(textToCopy, button);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !generateBtn.disabled) {
    e.preventDefault();
    fetchRandomColor();
  }
});

window.addEventListener("load", () => {
  fetchRandomColor();
});
