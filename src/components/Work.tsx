import "./styles/Career.css";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "ECG Signal Classification",
    desc: "Deep learning system using BERT & GPT-2 to classify ECG signals with 96.4% accuracy. Built end-to-end pipeline for cardiac arrhythmia detection.",
    tags: ["Python", "BERT", "GPT-2", "TensorFlow"],
    link: "https://github.com/bhavesh2805",
    color: "#0f002c",
  },
  {
    title: "AI-Driven Fraud Detection",
    desc: "End-to-end fraud detection pipeline processing 590K+ transactions achieving ROC-AUC of 0.9556. Features real-time scoring and automated alerting.",
    tags: ["Python", "Scikit-learn", "SQL", "GCP"],
    link: "https://github.com/bhavesh2805",
    color: "#001a1a",
  },
  {
    title: "RAG Conversational AI",
    desc: "Intelligent product recommendation chatbot using Sentence-BERT, FAISS vector database, and GPT-4/Llama-3. Deployed with CI/CD pipeline.",
    tags: ["LangChain", "FAISS", "GPT-4", "Llama-3"],
    link: "https://github.com/bhavesh2805",
    color: "#1a0010",
  },
  {
    title: "NLP Classifier from Scratch",
    desc: "Multinomial Naive Bayes text classifier built from scratch using only NumPy. Implements tokenization, smoothing, and evaluation metrics manually.",
    tags: ["Python", "NumPy", "NLP"],
    link: "https://github.com/bhavesh2805",
    color: "#0a1a00",
  },
];

const Work = () => {
  return (
    <div className="career-section section-container" id="work">
      <div className="career-container">
        <h2>
          My <span>&</span>
          <br /> Projects
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", marginTop: "2rem" }}>
          {projects.map((p, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: p.color,
                  borderRadius: "12px",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                }}
              >
                <div style={{ position: "absolute", top: "1rem", right: "1rem", color: "white" }}>
                  <MdArrowOutward size={20} />
                </div>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "1rem", padding: "1rem", textAlign: "center" }}>
                  {p.title}
                </span>
              </a>
              <div>
                <h4 style={{ color: "white", marginBottom: "0.5rem" }}>{p.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {p.tags.map((tag, j) => (
                    <span key={j} style={{
                      background: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.8)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "999px",
                      fontSize: "0.8rem",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;