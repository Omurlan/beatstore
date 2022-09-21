import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Navbar.module.scss";
import ThemeSwticher from "../ThemeSwither/ThemeSwticher";
import { useMediaQuery } from "react-responsive";
import { SocialIcon } from "react-social-icons";

import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

interface IList {
  title: string;
  list: string[];
}

const list: IList[] = [
  {
    title: "Browse",
    list: ["sflksd", "dslkfjs", "Dfklsjf", "dslfkjdsf", "dslfksj"],
  },
  {
    title: "Raev Beats",
    list: ["sflksd", "dslkfjs", "Dfklsjf", "dslfkjdsf", "dslfksj"],
  },
  {
    title: "Omurlan",
    list: ["sflksd", "dslkfjs", "Dfklsjf", "dslfkjdsf", "dslfksj"],
  },
];

const Navbar: React.FC = (): JSX.Element => {
  const [menu, setMenu] = useState<boolean>(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });

  useEffect(() => {
    if (menu && !isMobile) {
      setMenu(false);
    }
  }, [isMobile]);

  const handleMenu = () => setMenu((prev) => !prev);

  return (
    <div className={cn(styles.navbar)}>
      <div className="container">
        <div className={styles.navbarContent}>
          <div className={styles.burgerWrapper} onClick={handleMenu}>
            <span
              className={cn(styles.burger, {
                [styles.active]: menu,
              })}
            ></span>
          </div>

          <ul
            className={cn(styles.navbarList, {
              [styles.active]: menu,
            })}
          >
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/feed">Tracks</Link>

              <ul>
                {list.map((item) => (
                  <div>
                    <h5>{item.title}</h5>
                    {item.list.map((elem) => (
                      <li>{elem}</li>
                    ))}
                  </div>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/feed">Distribution</Link>
            </li>
            <li>
              <Link to="/feed">Publishing</Link>
            </li>
            <li>
              <Link to="/feed">Beat ID</Link>
            </li>
            <li>
              <Link to="/feed">Gift Cards</Link>
            </li>

            {isMobile && (
              <>
                <div className={styles.socials}>
                  <SocialIcon url="https://www.youtube.com/channel/UCToncHw7UeMyDK8HQTzkpjg" />
                  <SocialIcon url="https://www.instagram.com/raev.prod/?next=%2F" />
                  <SocialIcon url="https://vk.com/raevez" />
                  {/*<SocialIcon url="https://wa.me/79114681539" />*/}
                </div>
                <div className={styles.logoWrapper}>
                  <img src={logo} className={styles.logo} />
                  <p>Raev Beats</p>
                </div>
              </>
            )}
          </ul>
          <ThemeSwticher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
