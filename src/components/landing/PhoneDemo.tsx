"use client";

import { useEffect, useState } from "react";
import type { LandingConfig } from "@/data/landings";
import styles from "./landing.module.css";

type Demo = LandingConfig["demo"];
type Active = { slot: number; bookedLabel?: string } | null;

export default function PhoneDemo({ demo }: { demo: Demo }) {
  const [clock, setClock] = useState(demo.clock);
  const [active, setActive] = useState<Active>(null);
  const [toastText, setToastText] = useState(demo.steps[0]?.toast ?? "");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const steps = demo.steps;
    const len = steps.length;
    if (len === 0) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    if (reduce) {
      const raf = requestAnimationFrame(() => {
        const s = steps[0];
        setClock(s.clock);
        setActive({ slot: s.slot, bookedLabel: s.bookedLabel });
        setToastText(s.toast);
        setShowToast(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    let i = 0;
    const cycle = () => {
      const s = steps[i % len];
      setActive(null);
      setShowToast(false);
      setClock(s.clock);
      timers.push(setTimeout(() => setActive({ slot: s.slot, bookedLabel: s.bookedLabel }), 900));
      timers.push(
        setTimeout(() => {
          setToastText(s.toast);
          setShowToast(true);
        }, 1700)
      );
      i++;
      timers.push(setTimeout(cycle, 5600));
    };
    const raf = requestAnimationFrame(cycle);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [demo]);

  return (
    <div className={styles.phoneCol}>
      <div>
        <div className={styles.phone} aria-label="Demostración del sistema">
          <div className={styles.phoneNotch} />
          <div className={styles.screen}>
            <div className={styles.appBar}>
              <span className={styles.appTitle}>{demo.appTitle}</span>
              <span className={styles.appClock}>{clock}</span>
            </div>
            <div className={styles.appDay}>{demo.day}</div>
            <div className={styles.slots}>
              {demo.slots.map((slot, i) => {
                const isBooked = active?.slot === i;
                const bookedLabel = isBooked ? active?.bookedLabel : undefined;
                const cls = [
                  styles.slot,
                  slot.variant === "full" ? styles.full : "",
                  isBooked ? styles.booked : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return (
                  <div key={i} className={cls}>
                    <div>
                      {slot.time ? <span className={styles.t}>{slot.time}</span> : null}
                      <span className={styles.name}>{slot.name}</span>
                    </div>
                    <span className={styles.spots}>{bookedLabel ?? slot.spots}</span>
                    {bookedLabel ? null : <span className={styles.check}>✓</span>}
                  </div>
                );
              })}
            </div>
            <div className={`${styles.waToast} ${showToast ? styles.show : ""}`}>
              <div className={styles.waHead}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Z" />
                </svg>
                WHATSAPP · AUTOMÁTICO
              </div>
              <span>{toastText}</span>
            </div>
          </div>
        </div>
        <p className={styles.phoneCaption}>{demo.caption}</p>
      </div>
    </div>
  );
}
