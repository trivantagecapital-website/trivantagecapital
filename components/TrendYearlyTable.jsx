'use client';

import { useState, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_COMPLAINTS_TREND_YEARLY_URL;

const COLUMNS = [
  { key: 'Sr No',                                label: <>Sr No</> },
  { key: 'Year',                                 label: <>Year</> },
  { key: 'Carried Forward from previous year',   label: <>Carried Forward</> },
  { key: 'Received',                             label: <>Received</> },
  { key: 'Resolved*',                            label: <>Resolved<sup>*</sup></> },
  { key: 'Pending#',                             label: <>Pending<sup>#</sup></> },
];

export default function TrendYearlyTable() {
  const [rows, setRows]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const valid = data.filter(
          (row) => Object.keys(row).length > 1 && row['Year'] && !row['Sr No']?.startsWith('Notes') && !row['Sr No']?.startsWith('^') && !row['Sr No']?.startsWith('*')
        );
        setRows(valid);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const val = (row, key) => row?.[key] ?? '0';

  if (loading) {
    return (
      <div role="status" className="flex items-center justify-center py-20 text-primary/70 text-sm font-sans">
        Loading trend data...
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="flex items-center justify-center py-20 text-primary/70 text-sm font-sans">
        Unable to load trend data. Please try again later.
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div role="status" className="flex items-center justify-center py-20 text-primary/70 text-sm font-sans">
        No data available.
      </div>
    );
  }

  return (
    <div
      className="overflow-x-auto rounded-lg border border-primary/10"
      tabIndex={0}
      role="region"
      aria-label="Trend of annual disposal of complaints (scrollable)"
    >
      <table className="w-full text-sm font-sans border-collapse min-w-[600px]">
        <caption className="sr-only">Trend of annual disposal of complaints</caption>
        <thead className="sticky top-0">
          <tr className="bg-primary text-white">
            {COLUMNS.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-primary/5 ${
                i % 2 === 1 ? 'bg-primary/[0.03]' : 'bg-white'
              }`}
            >
              {COLUMNS.map((col) => (
                <td key={col.key} className="px-4 py-3 text-primary/70 whitespace-nowrap">
                  {val(row, col.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
