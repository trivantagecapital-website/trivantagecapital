'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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

export default function ComplaintDataPopup() {
  const [isOpen, setIsOpen]     = useState(false);
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

  return (
    <>
      {/* ── Dim backdrop ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Bottom sheet drawer ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ height: '65vh' }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-primary/20" />
        </div>

        {/* Header */}
        <div className="relative flex flex-col items-center px-4 sm:px-6 lg:px-10 py-3 sm:py-4 border-b border-primary/10">
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-primary font-sans text-center pr-8 sm:pr-0">
            Complaint Data of Portfolio Manager
          </h2>
          {dateStr && (
            <p className="text-sm sm:text-base text-primary/70 mt-1 font-sans text-center">
              Data for the month ending {dateStr}
            </p>
          )}

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary/70 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl leading-none" aria-hidden="true">
              expand_more
            </span>
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        {/* Scrollable table area */}
        <div className="overflow-y-auto h-[calc(100%-80px)] px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
          {loading ? (
            <div className="flex items-center justify-center h-full text-primary/70 text-sm font-sans">
              Loading complaint data…
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full text-primary/70 text-sm font-sans">
              Unable to load complaint data. Please try again later.
            </div>
          ) : rows.length === 0 && !totalRow ? (
            <div className="flex items-center justify-center h-full text-primary/70 text-sm font-sans">
              No data available.
            </div>
          ) : (
            <>
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

              {/* CTA */}
              <div className="mt-5 flex justify-center">
                <Link
                  href="/grievance/complaints-data"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all"
                >
                  View PMS Complaint Data →
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Floating pill (when closed) ── */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="View complaint data"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 bg-primary text-white px-3 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:opacity-90 transition-all"
        >
          <span className="material-symbols-outlined text-base leading-none" aria-hidden="true">expand_less</span>
          <span className="hidden sm:inline">View Complaint Data</span>
          <span className="sm:hidden">Complaints</span>
        </button>
      )}
    </>
  );
}
