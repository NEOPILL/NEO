const terminal = document.getElementById("terminal");

const sequence = [
    "Patching kernel...",
    "Loading firmware modules...",
    "Setting up neurolink...",
    "Neurolink status. ..",
    "Injecting linkOS...",
    "Finalizing link...",
    "Neurolink detected....",
    "Installing firmware update...",
    "installing Neo token platform...",
    "Neurolink system complete.
    "Rebooting system..."
];

// CONFIRMED WORKING FUNCTION
function typeLineWithSpinner(text, delay) {
    return new Promise((resolve) => {
        terminal.innerHTML += text;

        const spinner = document.createElement("span");
        spinner.classList.add("spinner");
        terminal.appendChild(spinner);

        setTimeout(() => {
            spinner.remove();
            terminal.innerHTML += " ✓\n";
            resolve();
        }, delay);
    });
}

// RUN SEQUENCE
async function runSequence() {
    for (let i = 0; i < sequence.length; i++) {
        await typeLineWithSpinner(sequence[i], 2000);  // 2 seconds each
    }

    terminal.innerHTML += "\nSystem unlocked....\nOpen your eyes!.\n";
}

runSequence();

