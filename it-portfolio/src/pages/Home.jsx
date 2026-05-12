export default function Home() {
  return (
    <div>
      <section className="text-light text-center py-5" style={{ background: "#111" }}>
        <div className="container">
          <h1 className="display-3 fw-bold">Hi, I’m Steven</h1>
          <p className="lead mt-3 text-secondary">
            Aspiring IT Support Technician • Problem Solver • Systems Enthusiast
          </p>
        </div>
      </section>

      <div className="container my-5 fs-5">
        <p>
          Hi, I’m Steven — an aspiring IT Support Technician with a passion for solving problems,
          helping people, and keeping systems running smoothly.
        </p>
        <p>
          I’m transitioning into IT after years of building and supporting technical solutions as a
          software engineer. Now, I’m focused on the hands‑on side of technology: troubleshooting
          issues, improving user experiences, and making sure teams can rely on the tools they use
          every day.
        </p>
        <p>
          I’m building a strong foundation in Windows administration, networking, Linux, Active
          Directory, and PowerShell, supported by real projects and a growing home lab.
        </p>
        <p>
          If you’re looking for someone who learns fast, communicates clearly, and genuinely enjoys
          helping others, you’re in the right place.
        </p>

        <div className="text-center mt-5">
          <a href="/Resume.pdf" download className="btn btn-primary btn-lg px-4">
            Download My Résumé
          </a>
        </div>
      </div>
    </div>
  );
}
