import React from "react";
import ReactMarkdown from "react-markdown";

export default function ProblemViewer({ problem }) {
    if (!problem) {
        return <div>No problem loaded.</div>
    }

    return (
        <div style={{ maxWidth : "800px", margin: "0 auto", padding: "24px" }}>
            {/* Title */}
            <h1>{problem.title}</h1>

            {/* Source */}
            <div style={{ color: "#666", marginBottom: "16px"}}>
                Source: {problem.source}
                {problem.sourceId ? ` #${problem.sourceId}` : ""}
            </div>

            {/* Description */}
            <section style={{ marginBottom : "24 px" }}>
                <ReactMarkdown>{problem.description}</ReactMarkdown>
            </section>

            {/* Examples */}
            {problem.examples?.length > 0 && (
                <section style={{ marginBottom : "24px" }}>
                    <h2>Examples</h2>

                    {problem.examples.map((ex) => (
                        <div
                            key = {ex.id}
                            style={{
                                padding : "12px",
                                border: "1px solid #ddd",
                                borderRadius: "6px",
                                marginBottom: "12px"
                        }}>
                            <div>
                                <strong>Input</strong>
                                <pre>{ex.input}</pre>
                            </div>

                            <div>
                                <strong>Output</strong>
                                <pre>{ex.output}</pre>
                            </div>

                            {ex.explanation && (
                                <ReactMarkdown>{ex.explanation}</ReactMarkdown>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* Constraints */}
            {problem.constraints?.length > 0 && (
                <section style={{ marginBottom : "24px"}}>
                    <h2>Constraints</h2>
                    <ul>
                        {problem.constraints.map((c, idx) => (
                            <li key={idx}>
                                <ReactMarkdown>{c}</ReactMarkdown>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}