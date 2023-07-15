import React from "react";
import Header from "./_components/header/Header";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return (
    <main>
      <Header />
      <h1>asd</h1>
    </main>
  );
};

export default Home;
