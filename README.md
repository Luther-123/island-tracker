# 🌿 Melody Isle - Animal Crossing Island Manager

A full-stack, multi-user Animal Crossing island management dashboard built with Next.js App Router, Tailwind CSS, Lucide React, and PostgreSQL (Neon).

## ✨ Features

- **Multi-User Authentication**: Secure user registration, login, session management via cookies, and password visibility toggles.
- **Island Overview**: Live data tracking for island ratings, dream addresses, active resident counts, shortcuts, and latest photo snapshots.
- **Interactive Map**: Grid-based map matrix allowing mayors to inspect different island zones (Resident Services, Museum, Secret Beach, Neighborhood Plots).
- **Dynamic Photo Gallery**: Stateful photo album supporting category filtering, custom photo uploads via URLs, storage counter tracking, and image deletion.
- **Resident & Chore Management**: Track daily island tasks, resident personalities, species, collections, and custom notes.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: PostgreSQL (Neon)

## 🚀 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Luther-123/island-tracker.git](https://github.com/Luther-123/island-tracker.git)
   cd island-tracker

2. **Install dependencies**:

```bash
npm install
```

3. **Configure Environment Variables**:
Create a .env file in the root directory and add your Neon PostgreSQL connection string:

```bash
DATABASE_URL=your_postgresql_connection_string_here

```
4. **Run the development server**:

```Bash
npm run dev
```
5. **Open**:
```Bash
    http://localhost:3000 in your browser.
```
