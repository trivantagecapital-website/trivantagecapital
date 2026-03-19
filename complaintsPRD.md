# 📄 Product Requirements Document (PRD)

## Feature: Complaint Data Popup Component (Portfolio Manager)

---

## 1. 🧩 Overview

This feature introduces a **collapsible complaint data component** on the homepage (`/`) that dynamically displays complaint-related data fetched from a Google Sheet API.

The component will:

* Be **visible only on the homepage**
* Be **open by default**
* Allow users to **collapse/expand**
* Display structured complaint data in a **table format**
* Provide a **CTA button** to navigate to detailed complaint data

---

## 2. 🎯 Objective

To provide users with **transparent, easily accessible complaint data** in a clean and interactive UI while ensuring:

* Real-time data updates via Google Sheets
* Improved trust and compliance visibility
* Minimal UI clutter through collapsible behavior

---

## 3. 👥 Target Users

* Website visitors (investors, clients, regulators)
* Compliance reviewers
* Internal stakeholders

---

## 4. 🧱 Feature Scope

### ✅ Included

* Collapsible popup/table component
* API integration with Google Sheets
* Dynamic rendering of complaint data
* Expand/collapse UI behavior
* Navigation button

### ❌ Not Included

* Editing data from frontend
* Filtering/sorting (future scope)
* Multi-page reuse (only homepage)

---

## 5. 🧾 Functional Requirements

### 5.1 Component Structure

#### Title

```
Complaint Data of Portfolio Manager
```

#### Subheading

```
Data for the month ending <dynamic date>
```

👉 Extract date from API:

```
"Pending at the end of last month": "31-March-2026"
```

---

### 5.2 Data Source

**API Endpoint:**

```
https://opensheet.elk.sh/1FbUadoqNsEPtlFmHJWT5ZDPLZ2pOCOAwh1BcpYijL2c/month-data
```

---

### 5.3 Data Mapping Logic

| UI Column           | API Field                            |
| ------------------- | ------------------------------------ |
| Sr No               | "Sr No"                              |
| Received From       | "Received From"                      |
| Pending Last Month  | "Pending at the end of last month"   |
| Received            | "Received"                           |
| Resolved            | "Resolved*"                          |
| Total Pending       | "Total Pending#"                     |
| Pending > 3 months  | "Pending complaints > 3 months"      |
| Avg Resolution Time | "Average Resolution Time^ (in days)" |

---

### 5.4 Special Data Handling

* Ignore empty object `{}` in API
* Last row `"Total"` should be styled as **bold / highlighted**
* Extract date row separately:

  ```
  "Received From": "Data for the month ending"
  ```

---

### 5.5 UI Behavior

#### Default State

* Component is **expanded/open**

#### Collapse Behavior

* Clicking arrow toggles:

  * ⬇️ Open → Closed
  * ⬆️ Closed → Open

#### When Closed

* Show **floating button at bottom of screen**
* Button contains:

  * Up arrow icon ⬆️
  * Label (optional): "View Complaint Data"

#### When Open

* Show full table
* Show collapse arrow inside component

---

### 5.6 CTA Button

**Label:**

```
View PMS Complaint Data
```

**Action:**

```
Redirect → /complaints
```

---

## 6. 🎨 UI/UX Requirements

### Layout

* Centered container
* Card-style UI
* Soft shadow + rounded corners

### Table

* Zebra rows (optional)
* Header bold + sticky (optional enhancement)
* Last row (Total) → highlighted

### Colors (Suggested)

* Primary: Green (match brand)
* Text: Dark gray
* Background: White

---

## 7. 🔄 User Flow

1. User lands on homepage `/`
2. Component is visible and expanded
3. User:

   * Views complaint data OR
   * Collapses component
4. If collapsed:

   * Floating button appears
   * User clicks → component expands again
5. User clicks CTA → navigates to `/complaints`

---

## 8. ⚙️ Technical Requirements

### Frontend

* React / Next.js component
* State management:

  * `isOpen` (boolean)
  * `data` (array)

### API Handling

* Fetch on component mount
* Use `fetch` or `axios`
* Handle:

  * Loading state
  * Error fallback

### Data Processing

* Filter invalid rows
* Extract:

  * Table rows
  * Total row
  * Date string

---

## 9. 🧪 Edge Cases

* API returns empty → show "No data available"
* API fails → show fallback message
* Missing fields → default to "0"
* Date missing → hide subheading

---

## 10. 📱 Responsiveness

* Fully responsive:

  * Desktop → full table
  * Tablet → scrollable table
  * Mobile → horizontal scroll

---

## 11. 🚀 Future Enhancements

* Graph/chart visualization 📊
* Export as PDF/CSV
* Filters (month/year)
* Pagination
* Animation for expand/collapse

---

## 12. ✅ Acceptance Criteria

* [ ] Component visible only on `/`
* [ ] Opens by default
* [ ] Fetches and displays API data correctly
* [ ] Correct mapping of all columns
* [ ] Total row highlighted
* [ ] Date displayed correctly
* [ ] Collapse/expand works smoothly
* [ ] Floating button appears when collapsed
* [ ] CTA redirects to `/complaints`
* [ ] Fully responsive

---

## 13. 🧠 Notes for Dev

* API already structured → minimal transformation needed
* Watch for:

  * Special characters in keys (`Resolved*`, `Total Pending#`)
* Use optional chaining for safety

---

## 14. 📌 Summary

This feature adds a **clean, dynamic, and interactive complaint data module** that:

* Enhances transparency
* Improves UX with collapsibility
* Keeps homepage informative yet uncluttered

---

**End of PRD**
