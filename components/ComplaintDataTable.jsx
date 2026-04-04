'use client';

import { useState, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_COMPLAINTS_DATA_URL;

const COLUMNS = [
  { key: 'Sr No',                              label: <>Sr No</> },
  { key: 'Received From',                      label: <>Received From</> },
  { key: 'Pending at the end of last month',   label: <>Pending Last Month</> },
  { key: 'Received',                           label: <>Received</> },
  { key: 'Resolved*',                          label: <>Resolved<sup>*</sup></> },
  { key: 'Total Pending#',                     label: <>Total Pending<sup>#</sup></> },
  { key: 'Pending complaints > 3 months',      label: <>Pending {'>'} 3 Months</> },
  { key: 'Average Resolution Time^ (in days)', label: <>Avg Resolution Time<sup>^</sup> (days)</> },
];

export default function ComplaintDataTable() {
  const [rows, setRows]         = useState([]);
  const [totalRow, setTotalRow] = useState(null);
  const [dateStr, setDateStr]   = useState('');
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const valid = data.filter((row) => Object.keys(row).length > 0);

        const dateRow = valid.find(
          (row) => row['Received From'] === 'Data for the month ending'
        );
        if (dateRow) setDateStr(dateRow['Pending at the end of last month'] || '');

        const total = valid.find(
          (row) => row['Received From'] === 'Total' || row['Sr No'] === 'Total'
        );
        if (total) setTotalRow(total);

        setRows(
          valid.filter(
            (row) =>
              row['Received From'] !== 'Data for the month ending' &&
              row['Received From'] !== 'Total' &&
              row['Sr No'] !== 'Total'
          )
        );
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
        Loading complaint data...
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="flex items-center justify-center py-20 text-primary/70 text-sm font-sans">
        Unable to load complaint data. Please try again later.
      </div>
    );
  }

  if (rows.length === 0 && !totalRow) {
    return (
      <div role="status" className="flex items-center justify-center py-20 text-primary/70 text-sm font-sans">
        No data available.
      </div>
    );
  }

  return (
    <div>
      {dateStr && (
        <p className="text-sm text-primary/70 mb-6 font-sans">
          Data for the month ending <span className="font-semibold">{dateStr}</span>
        </p>
      )}

      <div className="overflow-x-auto rounded-lg border border-primary/10">
        <table className="w-full text-sm font-sans border-collapse min-w-[720px]">
          <caption className="sr-only">Complaint data of Portfolio Manager</caption>
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

            {totalRow && (
              <tr className="bg-primary/10 border-t-2 border-primary/20">
                {COLUMNS.map((col) => (
                  <td key={col.key} className="px-4 py-3 font-bold text-primary whitespace-nowrap">
                    {val(totalRow, col.key)}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
