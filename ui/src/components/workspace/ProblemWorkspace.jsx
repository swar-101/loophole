import {loadProblem, saveProblem} from "./storage.js";
import {useEffect, useState} from "react";

const PROBLEM_ID = "current-problem";

export default function ProblemWorkspace() {
    const [code, setCode] = useState("");
    const [explanation, setExplanation] = useState("");
    const [mode, setMode] = useState("whiteboard");

    /* Autosave */
    useEffect(() => {
        const timeout = setTimeout(() => {
            saveProblem({
                id: PROBLEM_ID,
                code,
                explanation,
                mode,
                updatedAt: Date.now()
            });
        }, 500);
        return () => clearTimeout(timeout);
    }, [code, explanation, mode]);

    /* Load on mount */
    useEffect(() => {
        loadProblem(PROBLEM_ID).then(data => {
            if (!data) return;
            setCode(data.code || "");
            setExplanation(data.explanation || "");
            setMode(data.mode || "whiteboard");
        });
    }, []);

    return (
        <div style={{display: "flex", height: "100vh"}}>
            {/* Code Pane */}
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Write code here..."
                style={{
                    width: "50%",
                    height: "100%",
                    padding: "16px",
                    fontFamily: "monospace",
                    fontSize: "14px",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                    background: "#1e1e1e",
                    color: "#eaeaea"
                }}
            />

            {/*Thinking Pane*/}
            <textarea
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Explain your thinking here..."
                style={{
                    width: "50%",
                    height: "100%",
                    padding: "16px",
                    fontSize: "14px",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                    background: "#fafafa",
                    color: "#111"
                }}
            />
        </div>
    );
}