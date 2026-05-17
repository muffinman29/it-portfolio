export default function HomeLab() {
    return (
        <div className="container my-5">
            <h1>Windows + Linux Home Lab</h1>
            <p>A virtualized environment built to practice system administration, user management, and OS configuration.</p>

            <hr />

            <h2>Tools Used</h2>
            <ul>
                <li>VirtualBox</li>
                <li>Windows Server 2025</li>
                <li>Ubuntu 22.04</li>
                <li>Basic networking</li>
                <li>File sharing & permissions</li>
            </ul>

            <hr />

            <h2>What I Built</h2>

            <h3>Windows VM</h3>
            <ul>
                <li>Created local users</li>
                <li>Configured NTFS permissions</li>
                <li>Enabled firewall rules</li>
                <li>Installed updates</li>
                <li>Set up shared folders</li>
            </ul>

            <h3>Linux VM (Ubuntu)</h3>
            <ul>
                <li>Created users & groups</li>
                <li>Managed permissions with <code>chmod</code> and <code>chown</code></li>
                <li>Installed software via APT</li>
                <li>Configured UFW firewall</li>
                <li>Set up SSH</li>
            </ul>

            <hr />

            <h2>What I Learned</h2>
            <ul>
                <li>Differences between Windows and Linux user management</li>
                <li>How virtualization works</li>
                <li>How to configure basic networking between VMs</li>
                <li>How to secure and maintain operating systems</li>
            </ul>
        </div>
    );
}