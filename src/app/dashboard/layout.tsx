import React from 'react';
import Link from 'next/link';

export default function layout() {
  return (
    <div>
        <div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
    </div>
  )
} 
