"use client";
import React from 'react'
import { useHomePage } from "../use-homepage";
import { Tag } from '@/components/tag';
import Link from 'next/link';
import styles from "./styles.module.scss";
import Image from 'next/image';
import { Loading } from '@/components/Loading';

function ResultImage() {
    const { isSubmitting, error, image, prompt } = useHomePage();

    if (error) return <p className={styles.error}>{error.message}</p>;
    if (!isSubmitting && !image) return null;

    return (
      <div className={styles.resultImage}>
        <div className={styles.animation}>
          {isSubmitting ? (
            <Loading />
          ) : (
            <>
              <div className={styles.content}>
                <p>{prompt}</p>
                <Tag
                  title={
                    <Link href={image} target="_blank" download>
                      Download
                    </Link>
                  }
                />
              </div>
              <Image src={image} alt={prompt} width={512} height={512} />
            </>
          )}
        </div>
      </div>
    );
}

export  {ResultImage}