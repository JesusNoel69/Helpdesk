import styles from "./Number.module.css";
export default function Number(Props) {
  const { number, color, className } = Props;
  const classToApply = [styles.tag, className].join(" ");
  console.log(classToApply);
  return (
    <>
      <div className={classToApply} style={{ background: color }}>
        #{number}
      </div>
    </>
  );
}
