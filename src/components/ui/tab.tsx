'use client';

import React from 'react';
import SparkleIcon from './SparkleIcon';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TabItem {
  id: string;
  label: string;
}

interface TabProps {
  items: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tab = ({ items, activeTab, onChange, className }: TabProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-6 bg-charcoal-900 px-6 py-3 rounded-lg text-sand-100',
        className,
      )}
    >
      {items.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={cn(
              'relative text-sm font-medium transition-colors cursor-pointer focus:outline-none',
              isActive
                ? 'text-sand-50 font-semibold'
                : 'text-charcoal-400 hover:text-sand-200',
            )}
          >
            <span>{item.label}</span>
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute -bottom-4 flex items-center justify-center w-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              >
                <div className="flex items-center gap-1 text-sand-50">
                  <span className="h-px w-3 bg-sand-50/50" />
                  <SparkleIcon className="w-3 h-3 fill-sand-50 text-sand-50" />
                  <span className="h-px w-3 bg-sand-50/50" />
                </div>
              </motion.div>
            )}
          </button>
        );
      })}
    </div>
  );
};
