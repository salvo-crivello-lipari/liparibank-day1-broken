import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Conti', path: '/conti' },
  { label: 'Investimenti', path: '/investimenti' },
  { label: 'Polizze', path: '/polizze' },
];

const Sidebar = () => {
  const location = useLocation();

  const handleNavClick = (path: string) => {
    console.log('Navigating to:', path);
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li className={styles.navItem}>
              <Link
                to={item.path}
                onclick={() => handleNavClick(item.path)}
                className={`${styles.navLink} ${
                  location.pathname === item.path ? styles.active : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
