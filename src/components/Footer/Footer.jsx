import React, { useState } from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
const Footer = () => {
  const serviceID = "service_rh6837v";
  const templateID = "template_k8fk638";
  const userID = "OaaMIT1GR2a-_Vcu0";

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const statusStyles = {
    color: "#155724", // Success color
    backgroundColor: "#d4edda",
    border: "1px solid #c3e6cb",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
    marginTop: "15px",
    fontWeight: "bold",
  };
  const getStatusStyles = () => {
    if (!statusMessage) return { ...statusStyles, display: "none" }; // Hide if no status message
    if (statusMessage.startsWith("Failed")) {
      return {
        ...statusStyles,
        color: "#721c24",
        backgroundColor: "#f8d7da",
        border: "1px solid #f5c6cb",
      };
    }
    return {
      ...statusStyles,
      backgroundColor: "#d4edda",
      border: "1px solid #c3e6cb",
    };
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage("جـاري الإرسال!!");

    emailjs.send(serviceID, templateID, formValues, userID).then(
      (result) => {
        console.log(result.text);
        setStatusMessage("تـم إرسال الرسـالة بـنجـاح!");
        setFormValues({ name: "", email: "", phone: "" }); // Optional: Reset the form
      },
      (error) => {
        console.log(error.text);
        setStatusMessage("فـشـل إرسـال الـرسـالة, حـاول لاحـقا.");
      }
    );
  };

  // Alkh@946!
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText" style={{ textAlign: "center" }}>
              <label htmlFor="contact">تـواصـل</label>
            </span>
          </div>
          <form onSubmit={sendEmail} style={{ direction: "rtl" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  الإسم الكـامل:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={{
                    border: "2px solid #000",
                    borderRadius: "5px",
                    padding: "10px",
                    width: "100%",
                    outline: "none",
                  }}
                  required
                  value={formValues.user}
                  onChange={handleChange}
                />
              </li>
              <li style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  البريد الإلكتروني :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    border: "2px solid #000",
                    borderRadius: "5px",
                    padding: "10px",
                    width: "100%",
                    outline: "none",
                  }}
                  value={formValues.email}
                  onChange={handleChange}
                />
              </li>
              <li style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  رقم الهاتف :
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  style={{
                    border: "2px solid #000",
                    borderRadius: "5px",
                    padding: "10px",
                    width: "100%",
                    outline: "none",
                  }}
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </li>
              <li>
                <input
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    background: "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  value="إرسال"
                />
              </li>
              <p style={getStatusStyles()}>{statusMessage}</p>
            </ul>
          </form>
        </div>

        <div className={css.left} style={{ textAlign: "center" }}>
          <span className="primaryText">
            تـواصـل <br />
            مـعـي
          </span>
          <span className="primaryText">
            <a href="#name"> سـجـل في الدورات الآن</a>
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
