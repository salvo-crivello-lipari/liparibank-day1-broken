import WelcomeBanner from './WelcomeBanner';
import styles from './DashboardPage.module.css';

export default () => {
  return (
    <div className={styles.page}>
      <WelcomeBanner />
      <section className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Conto Corrente</h3>
          <p className={styles.cardValue}>€ 4.250,00</p>
          <span className={styles.cardLabel}>Saldo disponibile</span>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Conto Deposito</h3>
          <p className={styles.cardValue}>€ 12.800,00</p>
          <span className={styles.cardLabel}>Saldo vincolato</span>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Portafoglio</h3>
          <p className={styles.cardValue}>€ 7.640,00</p>
          <span className={styles.cardLabel}>Valore di mercato</span>
        </div>
      </section>
    </div>
  );
};
