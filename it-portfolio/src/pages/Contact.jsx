export default function Contact() {
  return (
    <div className="container my-5">
      <h1 className="fw-bold mb-4">Contact Me</h1>

      <form className="bg-black p-4 rounded border border-secondary">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control bg-dark text-light border-secondary"
            placeholder="Your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control bg-dark text-light border-secondary"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control bg-dark text-light border-secondary"
            rows="4"
            placeholder="How can I help?"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary px-4">
          Send
        </button>
      </form>
    </div>
  );
}
