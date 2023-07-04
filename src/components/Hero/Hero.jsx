import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`} dir="rtl">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            الخـلـيـل الـعـبـدلـي
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            مـحـاضـر تقنية المـعلـومـات
            <br />
            مـدرب أدوات الذكـاء الإصـطـناعـي
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./alkh.png"
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:alkhalil92@hotmail.com">
          alkhalil92@hotmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>خـبـرة</div>
              <div>أعـوام</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>مـدرب مـعـتمـد</span>
            <span>من وزارة التـعليـم الـعـالـي</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
