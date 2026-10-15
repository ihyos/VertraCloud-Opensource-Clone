"use client";

import React, { useState, useRef, useCallback } from "react";

const TIERS = [
  { ram: 4, vcpu: 1.6, projects: 40, price: 23.96 },
  { ram: 6, vcpu: 2.4, projects: 60, price: 35.94 },
  { ram: 8, vcpu: 3.2, projects: 80, price: 47.92 },
  { ram: 10, vcpu: 4.0, projects: 100, price: 59.90 },
  { ram: 12, vcpu: 4.8, projects: 120, price: 71.88 },
  { ram: 14, vcpu: 5.6, projects: 140, price: 83.86 },
  { ram: 16, vcpu: 6.4, projects: 160, price: 95.84 },
  { ram: 18, vcpu: 7.2, projects: 180, price: 107.82 },
  { ram: 20, vcpu: 8.0, projects: 200, price: 119.80 },
  { ram: 22, vcpu: 8.8, projects: 220, price: 131.78 },
  { ram: 24, vcpu: 9.6, projects: 240, price: 143.76 },
  { ram: 26, vcpu: 10.4, projects: 260, price: 155.74 },
  { ram: 28, vcpu: 11.2, projects: 280, price: 167.72 },
  { ram: 30, vcpu: 12.0, projects: 300, price: 179.70 },
  { ram: 32, vcpu: 12.8, projects: 320, price: 191.68 },
];

export function CapacitySlider() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = TIERS.length - 1;
  const current = TIERS[index];
  const percentage = (index / maxIndex) * 100;

  const updateFromPosition = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const fraction = Math.max(0, Math.min(1, relativeX / rect.width));
      const newIndex = Math.round(fraction * maxIndex);
      setIndex(newIndex);
    },
    [maxIndex]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updateFromPosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateFromPosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((prev) => Math.min(maxIndex, prev + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((prev) => Math.max(0, prev - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setIndex(maxIndex);
    }
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-6 sm:p-8 transition-colors select-none">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
            Precisa de mais? Escale até 32 GB.
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted max-w-2xl leading-relaxed">
            Configure memória e vCPU dedicadas sob medida para bancos de dados pesados e sistemas de alta concorrência.
          </p>
        </div>
        <div className="flex items-baseline gap-1 font-mono shrink-0">
          <span className="text-2xl sm:text-3xl font-bold text-[#4cc26b] tracking-tight">
            R$ {current.price.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-xs text-muted">/mês</span>
        </div>
      </div>

      {/* Official Radix-styled Slider */}
      <div className="space-y-6">
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative flex w-full touch-none select-none items-center py-4 cursor-pointer group"
          role="slider"
          aria-label="Capacidade Dedicada"
          aria-valuemin={0}
          aria-valuemax={maxIndex}
          aria-valuenow={index}
          aria-valuetext={`${current.ram} GB RAM, ${current.vcpu} vCPU`}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {/* Base Track (matching official .bg-line-2 h-1.5 rounded-full) */}
          <div className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-line-2">
            {/* Active Range Fill (matching official .bg-ink) */}
            <div
              className={`absolute left-0 top-0 h-full bg-ink rounded-full ${
                isDragging ? "transition-none" : "transition-all duration-150 ease-out"
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Sleek Thumb Knob (matching official size-4 rounded-full border-[1.5px] border-ink bg-ink hover:ring-4 hover:ring-line) */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none ${
              isDragging ? "transition-none" : "transition-all duration-150 ease-out"
            }`}
            style={{ left: `${percentage}%` }}
          >
            <div
              className={`size-4 rounded-full border-[1.5px] border-ink bg-ink shadow-sm transition-all duration-150 ${
                isDragging
                  ? "scale-125 ring-4 ring-line cursor-grabbing"
                  : "group-hover:scale-125 group-hover:ring-4 group-hover:ring-line cursor-grab"
              }`}
            />
          </div>
        </div>

        {/* 4 Metrics Columns Underneath (matching official layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs text-muted pt-1">
          <div className="text-left text-ink/90 font-medium">
            {current.ram} GB RAM
          </div>
          <div className="text-left sm:text-center text-muted">
            {current.vcpu.toFixed(1)} vCPU
          </div>
          <div className="text-left sm:text-center text-muted">
            até {current.projects} projetos
          </div>
          <div className="text-left sm:text-right text-[#4cc26b] font-semibold">
            NVMe dedicado
          </div>
        </div>
      </div>
    </div>
  );
}
