import React from "react";

export default function App() {
  const div1Ref = React.useRef();
  const div2Ref = React.useRef();

  const y1Ref = React.useRef(0);
  const y2Ref = React.useRef(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const div1 = div1Ref.current;
      const div2 = div2Ref.current;
      if (!div1 && !div2) return;

      const y1 = y1Ref.current;
      const y2 = y2Ref.current;

      y1Ref.current -= 0.2;
      y2Ref.current -= 0.2;

      if (y1 <= -150) {
        y1Ref.current = 150;
      }

      if (y2 <= -300) {
        y2Ref.current = 0;
      }

      div1.style.transform = `translate(0px, ${y1}px)`;
      div2.style.transform = `translate(0px, ${y2}px)`;
    }, 60 / 1000);

    return () => {
      clearInterval(interval);
    };
    
  }, []);

  return (
    <div className="App">
      <div
        ref={div1Ref}
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "red",
          transform: "translate(0px, 0px)",
        }}
      />
      <div
        ref={div2Ref}
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "blue",
          transform: "translate(0px, 0px)",
        }}
      />
    </div>
  );
}
