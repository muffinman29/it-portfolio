export default function TicketingSystem() {
    return (
        <div className="container my-5">
            <h1>Help Desk Ticket Simulation</h1>
            <p>A mock help desk scenario demonstrating troubleshooting, documentation, and communication — the core skills of an IT Support Technician.</p>

            <hr />

            <h2>Scenario</h2>
            <p>A user reports they cannot connect to the company Wi‑Fi network.</p>

            <hr />

            <h2>Tools & Skills Used</h2>
            <ul>
                <li>Windows 10</li>
                <li>Command Prompt</li>
                <li>Networking fundamentals (TCP/IP, DNS, DHCP)</li>
                <li>Troubleshooting methodology</li>
                <li>Documentation</li>
            </ul>

            <hr />

            <h2>Steps Taken</h2>
            <ol>
                <li>Verified physical connection and Wi‑Fi status</li>
                <li>Checked IP configuration</li>
            </ol>

            <pre><code>ipconfig /all
            </code></pre>

            <ol start="3">
                <li>Tested connectivity</li>
            </ol>

            <pre><code>ping 8.8.8.8
                ping google.com
            </code></pre>

            <ol start="4">
                <li>Flushed DNS</li>
            </ol>

            <pre><code>ipconfig /flushdns
            </code></pre>

            <ol start="5">
                <li>Released & renewed IP</li>
            </ol>

            <pre><code>ipconfig /release
                ipconfig /renew
            </code></pre>

            <ol start="6">
                <li>Checked network adapter drivers</li>
                <li>Confirmed DHCP server availability</li>
                <li>Reconnected user to the correct SSID</li>
            </ol>

            <hr />

            <h2>Resolution</h2>
            <p>The issue was caused by a corrupted DHCP lease. Releasing and renewing the IP resolved the problem.</p>

            <hr />

            <h2>What I Learned</h2>
            <ul>
                <li>How to systematically troubleshoot network connectivity</li>
                <li>How to communicate findings clearly</li>
                <li>How to document a ticket from start to finish</li>
            </ul>

        </div>
    );
}