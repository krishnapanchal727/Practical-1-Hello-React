import React from "react";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #dbeafe, #f3e8ff, #fce7f3)",
        padding: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "25px",
          textAlign: "center",
          maxWidth: "700px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            fontSize: "45px",
            marginBottom: "15px",
          }}
        >
          Welcome to React
        </h1>

        <h2
          style={{
            color: "#9333ea",
            fontSize: "30px",
            marginBottom: "25px",
          }}
        >
          My First React Application
        </h2>

        <p
          style={{
            color: "#374151",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          This is a simple React application created using JSX and functional
          components.
        </p>

        <p
          style={{
            color: "#ec4899",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          React makes it easy to build user interfaces.
        </p>
      </div>
    </div>
  );
}

export default App;