import { useState } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Input from "../Input/Input";
import List from "../List/List";
import Summary from "../Summary/Summary";
import styles from "./Tips.module.css";

const Tips = () => {
  const [bill, setBill] = useState("");
  const [custName, setCustName] = useState("");
  const [quality, setQuality] = useState();
  const [custList, setCustList] = useState([]);
  const [totalCust, setTotalCust] = useState();
  const [tip, setTip] = useState([]);
  const [totalTip, setTotalTip] = useState();

  const billChangeHandler = (e) => {
    setBill(e.target.value);
    console.log(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setCustName(e.target.value);
    console.log(e.target.value);
  };

  const expChangeHandler = (e) => {
    setQuality(e.target.value);
    console.log(e.target.value);
  };

  const addCustHandler = () => {
    setTip([...tip, (+bill * quality) / 100]);
    setCustList([...custList, custName]);
    setBill("");
    setCustName("");
  };

  const summaryHandler = () => {
    setTotalCust(custList.length);
    setTotalTip(tip.reduce((s, a) => s + a, 0));
  };

  return (
    <>
      <Header />
      <div className={styles.p1}>
        <span className={styles.billheading}>
          Please enter your bill amount :{" "}
        </span>
        <Input
          placeholder="Bill Amount in Rs"
          value={bill}
          changeHandler={billChangeHandler}
          ipClass={styles.billClass}
        />
      </div>
      <div className={styles.p1}>
        <Dropdown changeHandler={expChangeHandler} />
      </div>
      <div className={styles.p1}>
        <Input
          placeholder="Customer Name"
          value={custName}
          changeHandler={nameChangeHandler}
          ipClass={styles.custClass}
        />
        <Button btnName="Add Customer" clickHandler={addCustHandler} />
      </div>
      <List listElements={custList} tipAmt={tip} />
      <div className={styles.p1}>
        <Button
          btnName="Calculate Tip and Customers"
          clickHandler={summaryHandler}
          btnClass={styles.btn}
        />
      </div>
      <div className={styles.p1}>
        <Summary totalCust={totalCust} totalTip={totalTip} />
      </div>
      <Footer />
    </>
  );
};
export default Tips;
