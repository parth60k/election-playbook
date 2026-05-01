# 🗳️ The Election Playbook
**An AI-Native Civic Engagement Platform built for PromptWars.**

[![Top 6% Global Finish](https://img.shields.io/badge/Rank-Top%201000-blueviolet?style=for-the-badge)](https://github.com/parth60k/election-playbook)
[![Next.js 14](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini%203.0%20Flash-blue?style=for-the-badge&logo=google-gemini)](https://deepmind.google/technologies/gemini/)

## 🚀 Overview
**The Election Playbook** is a production-ready civic tech platform designed to combat voter apathy and information fatigue. By leveraging the **Gemini 3.0 Flash API**, it transforms dense political discourse into actionable, objective insights.

While most AI projects focus on the "happy path," this platform is engineered for **resilience**. It features a custom fail-safe architecture to ensure 100% uptime during high-traffic election cycles.

## 🛠️ Key Features

### 1. TL;DR Manifesto AI
*   **The Problem:** Political manifestos are often hundreds of pages of "fluff."
*   **The Solution:** Uses LLM distillation to extract exactly 3 objective, unbiased bullet points from any political text.
*   **Edge Case Handling:** Includes specific logic to handle fictional or theoretical platforms (the "Batman Test") without breaking context.

### 2. Smart Voter Assistant
*   **Context-Aware:** Answers complex questions regarding voting protocols and ID requirements.
*   **Safety First:** Engineered with strict temperature controls ($0.1$) to eliminate hallucinations and ensure factual accuracy.

### 3. The Power of One Vote (2019-2025)
*   **Interactive Visualization:** A dynamic, React-based data chart showing real-world razor-thin election margins. 
*   **Impact:** Visually demonstrates that local elections are often decided by fewer than 10 votes.

## 🏗️ Technical Architecture: The Fail-Safe System
The standout feature of this repo is the **Smart Local Cache**. Civic platforms notoriously crash during traffic spikes. 

**How it works:**
1.  **Detection:** The API route monitors the Gemini API response status.
2.  **Intercept:** If a `429` (Rate Limit) or `500` error is detected, the system triggers a fallback.
3.  **Intent Parsing:** A keyword-matching engine scans the user's prompt (e.g., searching for "ID", "Time", "Location").
4.  **Graceful Degradation:** The user receives a high-quality, pre-cached response relevant to their query instead of a generic error message.

## 💻 Tech Stack
*   **Framework:** Next.js 14 (App Router)
*   **AI Engine:** Google Gemini 3.0 Flash
*   **Styling:** Tailwind CSS + Framer Motion
*   **Theme:** Midnight Glassmorphism

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/parth60k/election-playbook.git](https://github.com/parth60k/election-playbook.git)
