import { courses } from "./data/courses";

// Starting point for the Course Explorer practice project.
// Read docs/powerup-practice/POWERUP-PRACTICE-EN.pdf before you change anything.
function App() {
  return (
    <div className="app">
      <main className="page">
        <h1>Course Explorer</h1>
        <p>
          The project is set up. There are {courses.length} courses in{" "}
          <code>src/data/courses.ts</code>. Replace this screen with your app.
        </p>
      </main>
    </div>
  );
}

export default App;
