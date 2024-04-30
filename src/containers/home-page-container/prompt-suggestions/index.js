"use client";
import { SUGGESTIONS } from "./constants";
import { Tag } from "@/components/tag";
import styles from "./styles.module.scss";
import { useHomePage } from "../use-homepage";

function PromptSuggestions() {
  const { changePrompt } = useHomePage();

  return (
    <div className={styles.promptSuggestions}>
      <h3 className={styles.title}>
        Nothing in mind? Try one of these prompts:
      </h3>
      <div className={styles.suggestions}>
        {SUGGESTIONS.map((suggestion) => {
          return (
            <Tag
              onClick={changePrompt}
              key={suggestion.id}
              title={suggestion.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export { PromptSuggestions };
