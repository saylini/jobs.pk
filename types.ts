// Fix: Import React to use JSX types.
import React from 'react';

export interface Job {
  id: string;
  title: string;
  companyId: string;
  city: string;
  category: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salaryRange: string;
  experience: string;
  description: string;
  qualifications: string[];
  postedDate: string;
}

export interface Company {
  id: string;
  name: string;
  logoUrl: string;
  location: string;
  rating: number;
}

export interface Category {
  name: string;
  icon: JSX.Element;
}
