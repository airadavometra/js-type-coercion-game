import { useState } from "react";
import WidthContainer from "../../components/WidthContainer/WidthContainer";
import s from "./Quiz.module.css";
import { Quiz } from "../../components/Quiz/Quiz";
import { Link } from "../../components/Link/Link";

export const QuizPage = () => {
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);

  return (
    <WidthContainer className={s.widthContainer}>
      {isQuizStarted ? (
        <Quiz />
      ) : (
        <>
          <section className={s.section}>
            <h1 className={s.title}>
              Think you&apos;ve mastered <br />
              JavaScript type coercion?
            </h1>
            <button onClick={() => setIsQuizStarted(true)} className={s.button}>
              Test your knowledge!
            </button>
          </section>
          <section className={s.section2}>
            <h2 className={s.title2}>Need a quick recap?</h2>
            <p>
              Check out the <Link to="/cheatsheet">Cheat Sheet</Link> about JS
              type coercion rules.
            </p>
          </section>
        </>
      )}
    </WidthContainer>
  );
};