import React from 'react'
import { FeatureStyle, Flex } from '../style.css'
import Check from "../assets/check.svg";

export default function Features() {
  return (
     <div className={Flex}>
          <img src={Check} alt="logo" />
          <h4 className={FeatureStyle}>
            Feature #1 - Etiam convallis, nibh vitae dui risus
          </h4>
        </div>
  )
}
