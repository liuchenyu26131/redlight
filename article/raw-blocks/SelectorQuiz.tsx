import { useState } from "react";
import { quizQuestions } from "../content";

type Choice = "lamp" | "blanket";
type Result = Choice | "both";

const resultCopy: Record<Result, { title: string; body: string }> = {
  lamp: {
    title: "更适合：ILUXRED 1500W 红光理疗灯",
    body: "你的需求更偏向局部深层、面部护理、专业参数或固定安装空间。",
  },
  blanket: {
    title: "更适合：红光能量毯",
    body: "你的需求更偏向全身覆盖、颈部护理、操作简单和便携收纳。",
  },
  both: {
    title: "更适合：两款组合使用",
    body: "你同时存在局部强化和全身覆盖需求，组合使用更容易覆盖不同场景。",
  },
};

export function SelectorQuiz() {
  const [answers, setAnswers] = useState<Choice[]>([]);
  const current = quizQuestions[answers.length];

  function choose(value: Choice) {
    setAnswers((currentAnswers) => [...currentAnswers, value]);
  }

  if (!current) {
    const lampScore = answers.filter((answer) => answer === "lamp").length;
    const result: Result = lampScore >= 3 ? "lamp" : lampScore <= 1 ? "blanket" : "both";
    const copy = resultCopy[result];
    return (
      <div className="iluxred-quiz__result" aria-live="polite">
        <p className="iluxred-scene__recommendation">选购助手结果</p>
        <h3>{copy.title}</h3>
        <p>{copy.body}</p>
        <button type="button" className="iluxred-quiz__reset" onClick={() => setAnswers([])}>重新选择</button>
      </div>
    );
  }

  return (
    <div className="iluxred-quiz">
      <div className="iluxred-quiz__progress" aria-label={`问题 ${answers.length + 1} / ${quizQuestions.length}`}>
        <span style={{ width: `${((answers.length + 1) / quizQuestions.length) * 100}%` }} />
      </div>
      <p className="iluxred-matrix__label">问题 {answers.length + 1} / {quizQuestions.length}</p>
      <h3>{current.title}</h3>
      <div className="iluxred-quiz__options">
        {current.options.map((option) => (
          <button key={option.label} type="button" className="iluxred-quiz__option" onClick={() => choose(option.value)}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}