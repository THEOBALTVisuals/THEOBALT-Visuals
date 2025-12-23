
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Photo' | 'Video';
  imageUrl: string;
}

export interface NavLink {
  name: string;
  href: string;
}
