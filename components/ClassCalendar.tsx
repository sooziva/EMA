"use client";

import { useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Sample class dates: { "YYYY-MM-DD": [{ tier, title }] }
const SAMPLE_CLASSES: Record<string, { tier: number; title: string }[]> = {
  "2025-03-18": [{ tier: 2, title: "Color Theory Intro" }],
  "2025-03-25": [{ tier: 1, title: "Pro Bridal Bootcamp" }],
  "2025-03-28": [{ tier: 2, title: "Editorial Skin Masterclass" }],
  "2025-04-02": [{ tier: 1, title: "Film & FX Intensive" }],
  "2025-04-05": [{ tier: 3, title: "Creative Lab Workshop" }],
  "2025-04-09": [{ tier: 2, title: "Color Theory Deep Dive" }],
  "2025-04-12": [{ tier: 1, title: "Career Launch Program" }],
  "2025-04-15": [{ tier: 2, title: "Contouring & Sculpting" }],
  "2025-04-19": [{ tier: 3, title: "Industry Day Experience" }],
  "2025-04-22": [{ tier: 1, title: "Pro Bridal Bootcamp" }],
};

function getDaysInMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const days = last.getDate();
  return { startPad, days };
}

export function ClassCalendar() {
  const today = new Date();
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const { startPad, days } = getDaysInMonth(view.year, view.month);

  const goPrev = () => {
    if (view.month === 0) {
      setView({ year: view.year - 1, month: 11 });
    } else {
      setView({ year: view.year, month: view.month - 1 });
    }
  };

  const goNext = () => {
    if (view.month === 11) {
      setView({ year: view.year + 1, month: 0 });
    } else {
      setView({ year: view.year, month: view.month + 1 });
    }
  };

  const getKey = (day: number) =>
    `${view.year}-${String(view.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const getClassesForDay = (day: number) => SAMPLE_CLASSES[getKey(day)] ?? [];

  const isToday = (day: number) =>
    view.year === today.getFullYear() &&
    view.month === today.getMonth() &&
    day === today.getDate();

  const isPastDate = (day: number) => {
    const cellDate = new Date(view.year, view.month, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return cellDate < todayStart;
  };

  const cells: (number | null)[] = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button type="button" className="calendar__nav" onClick={goPrev} aria-label="Previous month">
          ←
        </button>
        <h3 className="calendar__title">
          {MONTHS[view.month]} {view.year}
        </h3>
        <button type="button" className="calendar__nav" onClick={goNext} aria-label="Next month">
          →
        </button>
      </div>
      <div className="calendar__weekdays">
        {DAYS.map((d) => (
          <span key={d} className="calendar__weekday">
            {d}
          </span>
        ))}
      </div>
      <div className="calendar__grid">
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} className="calendar__cell calendar__cell--empty" />;
          }
          const dayClasses = getClassesForDay(day);
          const hasClass = dayClasses.length > 0;
          const todayCell = isToday(day);
          const pastWithClass = hasClass && isPastDate(day);
          return (
            <div
              key={day}
              className={`calendar__cell ${hasClass ? "calendar__cell--has-class" : ""} ${todayCell ? "calendar__cell--today" : ""} ${pastWithClass ? "calendar__cell--past" : ""}`}
              data-tier={hasClass ? dayClasses[0].tier : undefined}
              title={pastWithClass ? `Completed: ${dayClasses.map((c) => c.title).join(", ")}` : hasClass ? dayClasses.map((c) => c.title).join(", ") : todayCell ? "Today" : undefined}
              aria-current={todayCell ? "date" : undefined}
            >
              <span className="calendar__day">{day}</span>
              {hasClass && !pastWithClass && (
                <span className="calendar__dot" aria-hidden>
                  •
                </span>
              )}
              {pastWithClass && (
                <span className="calendar__x" aria-label="Class completed">
                  ×
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="calendar__legend">
        <span className="calendar__legend-item">
          <span className="calendar__legend-dot calendar__legend-dot--today" /> Today
        </span>
        <span className="calendar__legend-item">
          <span className="calendar__legend-dot calendar__legend-dot--1" /> Tier 1
        </span>
        <span className="calendar__legend-item">
          <span className="calendar__legend-dot calendar__legend-dot--2" /> Tier 2
        </span>
        <span className="calendar__legend-item">
          <span className="calendar__legend-dot calendar__legend-dot--3" /> Tier 3
        </span>
        <span className="calendar__legend-item">
          <span className="calendar__legend-x" aria-hidden>×</span> Completed
        </span>
      </div>
    </div>
  );
}
