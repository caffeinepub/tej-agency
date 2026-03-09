# TEJ Agency

## Current State
- Landing page with hero, problem, solution, process, and "why TEJ" sections
- Contact form that captures: name, email, phone, agencyName, message
- Backend stores submissions in a map with timestamps
- `getAllSubmissions()` exists but is currently gated by a hardcoded anonymous principal check (effectively inaccessible)
- No admin login or admin UI exists

## Requested Changes (Diff)

### Add
- Password-protected admin login page at `/admin`
- Admin dashboard showing all contact form submissions in a table
- Each row shows: name, agency name, email, phone, message, and submission date/time
- Logout button for admin
- Authorization component (simple password-based admin access via the authorization module)

### Modify
- Backend `getAllSubmissions()` to use the authorization component's admin check instead of the hardcoded principal guard
- Frontend routing: `/` stays as the landing page, `/admin` routes to admin login/dashboard

### Remove
- Hardcoded `adminPrincipal` check in backend (replaced by authorization component)

## Implementation Plan
1. Select `authorization` Caffeine component
2. Regenerate Motoko backend with authorization component wired to `getAllSubmissions`
3. Add React Router to frontend for `/` and `/admin` routes
4. Create `AdminPage` component with:
   - Login form (password input + submit button) shown when not authenticated
   - Leads table shown when authenticated
   - Logout button
5. Wire `getAllSubmissions` hook to populate the table
6. Add `/admin` link in footer (subtle, not prominent)
