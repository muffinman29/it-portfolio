export default function Wireshark() {
    return (
        <div className="container my-5">
            <h1>PowerShell System Health Check Script</h1>
            <p>A PowerShell script that automates basic system diagnostics for IT Support environments.</p>

            <hr />

            <h2>Tools Used</h2>
            <ul>
                <li>PowerShell</li>
                <li>Windows Server</li>
                <li>Scripting fundamentals</li>
            </ul>

            <hr />

            <h2>Features</h2>
            <ul>
                <li>Checks disk space</li>
                <li>Lists running processes</li>
                <li>Verifies network connectivity</li>
                <li>Checks Windows Update status</li>
                <li>Outputs results to a log file</li>
            </ul>

            <hr />

            <h2>Example Script Snippet</h2>
            <pre><code>Write-Host "Running System Health Check..."
                <br />
                Get-PSDrive -PSProvider FileSystem
                <br />
                Get-Process | Sort-Object CPU -Descending | Select-Object -First 10
                <br />
                Test-Connection -ComputerName google.com -Count 2
                <br />
                Get-WindowsUpdateLog
            </code></pre>

            <hr />

            <h2>What I Learned</h2>
            <ul>
                <li>How to automate repetitive tasks</li>
                <li>How to write clean, readable scripts</li>
                <li>How automation improves IT Support efficiency</li>
            </ul>
        </div>
    );
}