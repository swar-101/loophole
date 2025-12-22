
- `pages/` Screens of your app (e.g., Problems.jsx, ProblemDetails.jsx)
- `components/` Reusable UI parts (e.g., ProblemCard.jsx, ProblemForm.jsx)
- `services/` API calls to the backend (e.g., `problemsService.js`)
- `store/` If you later add Redux/Zustand/Context for state.
- `hooks/` Custom hooks like `useProblems()`.


Feature: Thinking space

The page has 4 things: 

1. Problem Title
2. Left Pane : Code
3. Right Pane : Thinking / Explanation 
4. A toggle : Whiteboard <> Code

Mode A: Plain textarea
This is where solving happens
- Plain text area 
- No syntax highlighting 
- No formatting pressure 
- Fast typing 
- Messy allowed 

Mode B: Code Mode
This is for after clarity 
- Syntax highlighting ON
- Readable 
- Calm 
- Teaching-ready

