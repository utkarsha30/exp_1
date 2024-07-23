import "./App.css";
import "./style.css";
import RelativesList from "./components/RelativesList";
import PageLayout from "./components/PageLayout";
function App() {
  return (
    <div className="App">
      <div>
        <RelativesList />
        <PageLayout
          header="Welcome to my Website"
          footer="© 2023 My Website. All rights reserved."
        >
          <p> This is the content of my Website.</p>
        </PageLayout>
      </div>
    </div>
  );
}

export default App;
