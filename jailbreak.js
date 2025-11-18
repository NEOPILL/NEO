<script>
const terminal = document.getElementById("terminal");

const sequence = [
    "Loading NEO bootstrap v1.33...",
    "Patching kernel...",
    "Injecting NEO firmware...",
    "Initializing neural uplink...",
    "Attempting full brain scan...",
    ">>> Brain scan complete.",
    "Deploying custom OS NEONIX v0.1...",
    "Rebooting system...",
    "Welcome to NEONIX."
];

let delayBetweenLines = 2200;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLineWithSpinner(text) {
    const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
    let frameIndex = 0;

    return new Promise(async resolve => {
        let running = true;

        const spinnerInterval = setInterval(() => {
            terminal.innerHTML = terminal.innerHTML.replace(/.$/, spinnerFrames[frameIndex]);
            frameIndex = (frameIndex + 1) % spinnerFrames.length;
        }, 90);

        terminal.innerHTML += text + " ";

        await sleep(delayBetweenLines);

        clearInterval(spinnerInterval);
        terminal.innerHTML = terminal.innerHTML.replace(/.$/, "✓");
        resolve();
    });
}

async function animateSequence() {
    for (let line of sequence) {
        await typeLineWithSpinner(line);
        terminal.innerHTML += "\n";
    }
}

animateSequence();
</script>
