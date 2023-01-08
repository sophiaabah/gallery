import style from "../styles/floatingList.module.css";

export default function FloatingList() {
  return (
    <div className={style.view}>
      <div className={style.text_box}>
        <p>
          <span>101</span> jobs in <span>17 </span>locations
        </p>
        <h2 className={style.heading}>Join the band!</h2>
        <div className={style.btn}>Explore more jobs</div>
      </div>

      <div className={style.list}>
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
        <div className={style.list_item_e}>
          <h3>Strokes, Berlin</h3>
          <p>Auditor, Communications Team</p>
        </div>
        <div className={style.list_item_f}>
          <h3>Paris</h3>
          <p>Communications Team</p>
        </div>
      </div>
    </div>
  );
}
