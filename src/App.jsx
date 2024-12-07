import React from "react";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const queryclient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:idCategory" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
