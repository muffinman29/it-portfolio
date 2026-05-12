import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="container my-5">
      <h1 className="fw-bold mb-4">Projects</h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 p-3">
            <h5 className="card-title">Home Lab Setup</h5>
            <p className="card-text text-secondary">
              Virtualized lab with Windows Server, AD, Linux VMs, and networking.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 p-3">
            <h5 className="card-title"><Link className="nav-link" to="/ticketing-system">
              Ticketing System Simulation
            </Link></h5>
            <p className="card-text text-secondary">
              Practiced help desk workflows using GLPI: triage, troubleshooting, documentation.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 p-3">
            <h5 className="card-title">PowerShell Automation</h5>
            <p className="card-text text-secondary">
              Automated user creation, log cleanup, and system checks.
            </p>
          </div>
        </div>
      </div>
      <div className="row g-4" style={{ marginTop: "0px" }}>
        <div className="col-md-4">
          <div className="card h-100 p-3">
            <h5 className="card-title">Active Directory Lab</h5>
            <p className="card-text text-secondary">
                Set up AD domain, created OUs, users, groups, and applied GPOs.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 p-3">
            <h5 className="card-title">Wireshark Network Analysis</h5>
            <p className="card-text text-secondary">
              Captured traffic to analyze protocols, identify issues, and understand network behavior.
            </p>
          </div>
        </div>        
      </div>
    </div>
  );
}
