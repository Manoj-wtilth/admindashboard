'use client';
import { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import styles from "./dashboard.module.css";
import loginlogo from '../../public/loginlogo.png';
import layoutComponents from "../../config/dashboardLayout";
import SectionOne from "@/view/dashboard/SectionOne";
import SectionTwo from "@/view/dashboard/SectionTwo";

const App = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [selectedContent, setSelectedContent] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const handleButtonClick = (content: string, id: number) => {
    setSelectedId(id);
    setSelectedContent(content);
  };

  const handleSearchChange = (event : any) => {
    setSearchQuery(event.target.value);
  };

  if(selectedId == 0){
    setSelectedId(1)
  }

  const ConditonalDisplay = () => {
    if(selectedId == 1){
      return <>
      <SectionOne />
          <SectionTwo />
          <SectionOne />
      </>
    } else {
      return <div className={styles.mainContent}>{selectedContent}</div> 
    }
  }

  return (
    <>
      <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src={loginlogo.src} style={{ height : '35px'}}></img>
        <h2>Zaraaq</h2>
        </div>
        <div className={styles.userProfile}>
          <div className={styles.inputArea}>
          <FaSearch size={20}/>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          </div>
          <FaBell size={20} className={styles.bell}/>
          <img className={styles.userPhoto} src={loginlogo.src} alt="User" />
          <div>
          <h5 style={{ fontSize : '15px', color: 'black'}}>User</h5>
          <h6 style={{ fontSize : '10px', color: 'white'}}>Admin</h6>
          </div>
        </div>
      </header>
      <div className={styles.body}>
        <div className={styles.leftSection}>
          {
            layoutComponents.map((component) => (
              <button className={selectedId === component.id ? styles.selected : styles.button} key={component.id} onClick={() => handleButtonClick(component.title, component.id)}>
                {component.icon} {component.title}
              </button>
            ))
          }
        </div>
        <div className={styles.rightSection}>
          {/* <SectionOne />
          <SectionTwo />
          <SectionOne /> */}
          <ConditonalDisplay />
          {/* <div className={styles.mainContent}>{selectedContent}</div> */}
        </div>
      </div>
      </>
  );
};

export default App;
