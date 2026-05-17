export default function Wireshark() {
    return (
        <div className="container my-5">
            <h1>Wireshark Network Analysis</h1>
            <p>A hands‑on networking project analyzing real packet captures to understand how devices communicate.</p>

            <hr />

            <h2>Tools Used</h2>
            <ul>
                <li>Wireshark</li>
                <li>DNS, TCP, HTTP, ARP</li>
                <li>Packet filtering</li>
            </ul>

            <hr />

            <h2>Tasks Completed</h2>
            <ul>
                <li>Captured live network traffic</li>
                <li>Identified common protocols</li>
                <li>Analyzed DNS lookups</li>
                <li>Tracked TCP handshakes</li>
            </ul>

            <pre><code>dns
                tcp.handshake
                http
                arp
            </code></pre>

            <hr />

            <h2>What I Learned</h2>
            <ul>
                <li>How network communication actually works</li>
                <li>How to interpret packet‑level data</li>
                <li>How to use Wireshark filters to isolate issues</li>
                <li>How to identify abnormal traffic patterns</li>
            </ul>
        </div>
    );
}