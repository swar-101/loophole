import ProblemWorkspace from "./components/workspace/ProblemWorkspace.jsx";
import ProblemViewer from "./components/ProblemViewer.jsx";
import problemData from "./../docs/sample-problem.json"

function App() {
    // return <ProblemWorkspace />;
    return <ProblemViewer problem={problemData}/>
}

export default App;