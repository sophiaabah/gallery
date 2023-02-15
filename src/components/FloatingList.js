import React from "react";
import "../App.css";
import style from "../styles/floatingList.module.css";

export default function FloatingList() {
  const listRefA = React.useRef();
  const listRefB = React.useRef();

  const y1Ref = React.useRef(0);
  const y2Ref = React.useRef(0);
  const interval = React.useRef();

  function floatingListTransition() {
    interval.current = setInterval(() => {
      const listA = listRefA.current;
      const listB = listRefB.current;
      if (!listA && !listB) return;

      const y1 = y1Ref.current;
      const y2 = y2Ref.current;

      y1Ref.current -= 0.2;
      y2Ref.current -= 0.2;
      // this is the value on the y axis being changed per specified time.
      // console.log(listB.clientHeight);

      if (y1 <= -listB.clientHeight) {
        y1Ref.current = listB.clientHeight + 160;
      }

      if (y2 <= -(2 * listB.clientHeight)) {
        y2Ref.current = 160;
      }

      listA.style.transform = `translate(0px, ${y1}px)`;
      listB.style.transform = `translate(0px, ${y2}px)`;
    }, 60 / 1000);
  }

  React.useEffect(() => {
    floatingListTransition();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className={`cardSize ${style.view}`}>
      <div className={style.text_box}>
        <p>
          <span>101</span> jobs in <span>17 </span>locations
        </p>
        <h2 className={style.heading}>Join the band!</h2>
        <div className={style.btn}>Explore more jobs</div>
      </div>
      <div
        onMouseOver={() => clearInterval(interval.current)}
        onMouseLeave={() => floatingListTransition()}
        className={style.container}
      >
        <div ref={listRefA} className={style.list}>
          <div className={style.list_item_a}>
            <h3>Lance & Sons, Prague</h3>
            <p>Senior Backend Developer</p>
          </div>
          <div className={style.list_item_b}>
            <h3>Spotify, New York</h3>
            <p>Junior Technical writer</p>
          </div>
          <div className={style.list_item_c}>
            <h3>Joe's Juice, Oslo</h3>
            <p>Social Media Expert</p>
          </div>
          <div className={style.list_item_d}>
            <h3>Adyen, Amsterdam</h3>
            <p>Data Analyst Intern</p>
          </div>
          <div className={style.list_item_a}>
            <h3>Strokes, Berlin</h3>
            <p>Auditor, Communications Team</p>
          </div>
          <div className={style.list_item_b}>
            <h3>Lance & Sons, Prague</h3>
            <p>HR, Admin Team</p>
          </div>
        </div>
        <div
          style={{ marginTop: "80px" }}
          ref={listRefB}
          className={style.list}
        >
          <div className={style.list_item_a}>
            <h3>Lance & Sons, Prague</h3>
            <p>Senior Backend Developer</p>
          </div>
          <div className={style.list_item_b}>
            <h3>Spotify, New York</h3>
            <p>Junior Technical writer</p>
          </div>
          <div className={style.list_item_c}>
            <h3>Joe's Juice, Oslo</h3>
            <p>Social Media Expert</p>
          </div>
          <div className={style.list_item_d}>
            <h3>Adyen, Amsterdam</h3>
            <p>Data Analyst Intern</p>
          </div>
          <div className={style.list_item_a}>
            <h3>Strokes, Berlin</h3>
            <p>Auditor, Communications Team</p>
          </div>
          <div className={style.list_item_b}>
            <h3>Lance & Sons, Prague</h3>
            <p>HR, Admin Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}
