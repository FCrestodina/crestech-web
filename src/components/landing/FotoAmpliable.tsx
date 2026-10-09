"use client";
import { useRef } from "react";
import Image from "next/image";
import styles from "./landing.module.css";

interface FotoAmpliableProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
}

/** Captura que se agranda al tocarla, en un <dialog> que se cierra con Esc, con la X o tocando afuera. */
export default function FotoAmpliable({ src, alt, width, height, sizes }: FotoAmpliableProps) {
  const dialogo = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" className={styles.ampliarBtn} onClick={() => dialogo.current?.showModal()} aria-label={`Ampliar: ${alt}`}>
        <Image src={src} alt={alt} fill sizes={sizes} />
        <span className={styles.ampliarHint} aria-hidden="true">Tocá para ampliar</span>
      </button>
      <dialog
        ref={dialogo}
        className={styles.ampliarDialog}
        aria-label={alt}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        <button type="button" className={styles.ampliarCerrar} onClick={() => dialogo.current?.close()} aria-label="Cerrar">
          ×
        </button>
        <Image src={src} alt={alt} width={width} height={height} sizes="100vw" className={styles.ampliarImg} />
      </dialog>
    </>
  );
}
