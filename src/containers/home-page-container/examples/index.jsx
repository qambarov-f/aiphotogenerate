"use client";

import React from "react";
import styles from "./styles.module.scss";
import { EXAMPLES } from "./constants";
import { Tag } from "@/components/tag";
import Image from "next/image";
import { useHomePage } from "../use-homepage";

function Examples() {
  const { changePrompt } = useHomePage();

  return (
    <div className={styles.examples}>
      {EXAMPLES.map((example) => (
        <div key={example.id} className={styles.example}>
          <h4>{example.prompt}</h4>
          <Tag title="Copy" onClick={() => changePrompt(example.prompt)} />
          <Image src={example.image} alt={example.prompt} fill />
        </div>
      ))}
    </div>
  );
}

export { Examples };
