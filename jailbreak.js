const lines = [
    "Loading NEO bootstrap v1.33...",
    "Patching kernel...",
    "Injecting NEO firmware...",
    "Initializing neural uplink...",
    "Attempting full brain scan...",
    ">>> Brain scan complete.",
    "Deploying custom OS NEONIX v0.1...",
    "Rebooting system...",
    "",
    "Welcome to NEONIX."
];

let i = 0;
let speed = 60;

function typeLine() {
    if (i < lines.length) {
        const terminal = document.getElementById("terminal");
        terminal.innerHTML += lines[i] + "\n";
        i++;
        setTimeout(typeLine, speed);
    }
}

typeLine();
