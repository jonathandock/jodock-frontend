import { ReactNode } from "react";
import { clsx } from 'clsx';

import styles from "./../styles/modules/section.module.scss";

type SectionProps = {
  children: ReactNode
  verticalFlex?: boolean,
  verticalAlign?: boolean,
  fullscreenHeight?: boolean,
  alignItemsCenter?: boolean,
}

const Section = ({children, verticalFlex, verticalAlign, fullscreenHeight, alignItemsCenter}: SectionProps) => (
  <section className={`
    p-6
    ${styles.section} 
    ${clsx({
      [styles.verticalFlex]: verticalFlex,
      [styles.verticalAlign]: verticalAlign,
      [styles.fullscreenHeight]: fullscreenHeight,
      [styles.alignItemsCenter]: alignItemsCenter 
    })}
  `}>
    {children}
  </section>
)

export default Section;
