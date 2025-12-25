# EcoTrack — Sustainable Living Community

A community platform for eco-conscious people to discover and join sustainability challenges, share practical eco-tips, browse local green events, and track personal environmental impact — focused on measurable, community-driven progress.

---

## 🌿 Features

1. **Dynamic Challenges:** Browse, join, and track ongoing eco-challenges with live progress.
2. **Community Impact Stats:** Total CO₂ saved, Kg of plastic reduced, and more aggregated from all users.
3. **Eco Tips & Events:** Users can read and share sustainability tips; view upcoming local green events.
4. **Authentication:** Email/Password and Google login/register; secure protected routes for users.
5. **Progress Tracking:** Track user participation in challenges with progress percentage and updates.
6. **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices.
7. **Loading UX & Notifications:** Global spinner, skeleton loaders, and styled toast notifications for errors and success messages.
8. **Accessible & Secure:** Semantic HTML, alt tags, focus states, and secure environment variables.

---

## 🗂️ Project Structure

### Client (React + Tailwind + daisyUI)
- Public Pages: Home, Challenges Listing, Challenge Details
- Protected Pages: My Activities, Challenge Join, Profile (optional)
- Layouts: Public layout and Dashboard layout
- Components: Navbar, Footer, Cards, Hero Banner, Tips & Events Lists, Loading Spinner, Toast Notifications

### Server (Node.js + Express + MongoDB)
- Collections:
  - `challenges` – store challenges with title, category, description, duration, participants, and impact metric.
  - `userChallenges` – track each user’s participation and progress.
  - `tips` – community-submitted eco tips.
  - `events` – upcoming green events.
- Endpoints:
  - `GET /api/challenges` — list challenges (with filters)
  - `GET /api/challenges/:id` — challenge details
  - `POST /api/challenges` — create challenge (admin/owner)
  - `PATCH /api/challenges/:id` — update challenge
  - `DELETE /api/challenges/:id` — delete challenge
  - `POST /api/challenges/join/:id` — join challenge (protected)

---

