import { useState } from "react";
import { PROJECTS } from "../data";

const CATS = ["All", "E-commerce", "Ai Game", "Food"];

export default function Work() {
  const [c, setC] = useState("All");
  const list = PROJECTS.filter((p) => c === "All" || p.cat === c);

  return (
    <section id="work">
      <div className="wrap">
        <h2>Real projects, real numbers</h2>
        <p className="lead">
          Every project starts with a business goal. Here is what changed for
          these clients after launch.
        </p>

        <div className="filters">
          {CATS.map((x) => (
            <button
              key={x}
              className="chip"
              aria-pressed={c === x}
              onClick={() => setC(x)}
            >
              {x}
            </button>
          ))}
        </div>

        <div className="cases">
          {list.map((p) => (
            <article className="case" key={p.id}>
              <a
                className="thumb"
                href={p.link || undefined}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: `linear-gradient(135deg,${p.g[0]},${p.g[1]})`,
                }}
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={`${p.title} website screenshot`}
                    loading="lazy"
                  />
                ) : (
                  <div className="mock">
                    <s />
                    <s />
                    <s />
                    <s />
                    <u />
                  </div>
                )}
              </a>
              <div className="cbody">
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="result">
                  <a
                    className="btn primary sm"
                    href={p.github}
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn bg-[#FF7A5F] sm"
                    href={p.link}
                    target="_blank"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
