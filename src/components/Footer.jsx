import styles from "../style";
import { logo } from "../assets";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
        Copyright Ⓒ 2024 EUREKAE. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
