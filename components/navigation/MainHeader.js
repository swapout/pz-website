import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUserCircle } from 'react-icons/fa';
import classes from '../../styles/components/MainHeader.module.scss';

import LogoIcon from './LogoIcon';

function MainHeader() {
  const [isOpened, setIsOpened] = useState(false);

  const menuItems = [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/about',
      name: 'About'
    },
    {
      url: '/docs',
      name: 'Docs'
    },
    {
      url: '/contact',
      name: 'Contact'
    }
  ];

  const toggleModal = () => {
    setIsOpened(!isOpened);
  };
  const closeModal = () => {
    setIsOpened(false);
  };
  const router = useRouter();
  return (
    <header className={classes.main}>
      <div className={classes.logoWrapper}>
        <LogoIcon
          linkPath="/"
          logoPath="/copro-logo-cropped-square.png"
          altText="CoPro logo"
          width={35}
          height={35}
        />
        <Link href="/">
          <h1>Project Zone</h1>
        </Link>
      </div>
      <nav>
        <ul className={classes.list}>
          {menuItems.map(item => (
            <li
              key={item.name}
              className={`${
                router.pathname === item.url ? classes.active : ''
              } ${classes.listItem}`}
            >
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
          <li className={classes.listItem} onClick={toggleModal}>
            <a>
              <FaUserCircle />
              {isOpened ? (
                <div
                  onMouseLeave={closeModal}
                  className={classes.modalContainer}
                >
                  <div className={classes.modalContent}>
                    <Link href="http://localhost:3000/signin">Login</Link>
                  </div>
                  <div className={classes.modalContent}>
                    <Link href="http://localhost:3000/signup">Register</Link>
                  </div>
                </div>
              ) : null}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
