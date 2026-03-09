import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, LogOut, ShieldAlert, ShieldCheck, Users } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useGetAllSubmissions, useIsCallerAdmin } from "../hooks/useQueries";

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
function formatDate(timestamp: bigint): string {
  const ms = Number(timestamp / BigInt(1_000_000));
  return new Date(ms).toLocaleDateString("en-AE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function truncate(text: string, max = 60): string {
  if (!text) return "—";
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

/* ─────────────────────────────────────────
   Login Screen
───────────────────────────────────────── */
function AdminLoginScreen() {
  const { login, isLoggingIn, isInitializing } = useInternetIdentity();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.08 0.012 285) 0%, oklch(0.1 0.008 280) 50%, oklch(0.12 0.01 270) 100%)",
      }}
    >
      {/* Subtle gold radial */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 55%, oklch(0.75 0.15 75 / 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.75 0.15 75 / 0.03) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.75 0.15 75 / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm"
      >
        <div
          className="p-8 rounded-sm"
          style={{
            background: "oklch(0.12 0.01 280)",
            border: "1px solid oklch(0.28 0.018 280)",
            boxShadow:
              "0 40px 100px oklch(0 0 0 / 0.5), 0 0 60px oklch(0.75 0.15 75 / 0.04)",
          }}
        >
          {/* Logo mark */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-14 h-14 flex items-center justify-center rounded-sm mb-4"
              style={{
                background: "oklch(0.75 0.15 75)",
                boxShadow: "0 0 30px oklch(0.75 0.15 75 / 0.25)",
              }}
            >
              <span
                className="font-display font-bold text-2xl"
                style={{ color: "oklch(0.1 0.008 280)" }}
              >
                T
              </span>
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-1">
              Admin Login
            </h1>
            <p
              className="text-xs font-heading tracking-widest uppercase text-center"
              style={{ color: "oklch(0.5 0.04 75)" }}
            >
              TEJ Agency · Restricted Area
            </p>
          </div>

          {/* Divider */}
          <div
            className="mb-7 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.75 0.15 75 / 0.3), transparent)",
            }}
          />

          <div className="space-y-4">
            <p
              className="text-sm text-center leading-relaxed"
              style={{ color: "oklch(0.58 0.03 80)" }}
            >
              This area is restricted to authorized administrators only. Sign in
              with Internet Identity to continue.
            </p>

            <Button
              data-ocid="admin.login_button"
              onClick={login}
              disabled={isLoggingIn || isInitializing}
              className="w-full font-heading font-bold tracking-wide uppercase text-sm py-5 transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.78 0.16 78) 0%, oklch(0.68 0.18 68) 100%)",
                color: "oklch(0.1 0.008 280)",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 0 40px oklch(0.75 0.15 75 / 0.15)",
              }}
            >
              {isLoggingIn || isInitializing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isInitializing ? "Initializing…" : "Connecting…"}
                </>
              ) : (
                <>
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Sign in with Internet Identity
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Access Denied Screen
───────────────────────────────────────── */
function AccessDeniedScreen({ onLogout }: { onLogout: () => void }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "oklch(0.1 0.008 280)" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-sm"
      >
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6"
          style={{
            background: "oklch(0.6 0.22 25 / 0.12)",
            border: "1px solid oklch(0.6 0.22 25 / 0.3)",
          }}
        >
          <ShieldAlert
            className="h-8 w-8"
            style={{ color: "oklch(0.7 0.2 25)" }}
          />
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-3">
          Access Denied
        </h2>
        <p
          className="text-sm leading-relaxed mb-8"
          style={{ color: "oklch(0.58 0.03 80)" }}
        >
          Your account does not have administrator privileges. Contact Ajay
          Kumar to request access.
        </p>
        <Button
          data-ocid="admin.logout_button"
          onClick={onLogout}
          variant="outline"
          size="sm"
          className="font-heading tracking-wide"
          style={{
            borderColor: "oklch(0.35 0.05 75 / 0.5)",
            color: "oklch(0.65 0.08 75)",
            background: "transparent",
          }}
        >
          <LogOut className="mr-2 h-3.5 w-3.5" />
          Sign Out
        </Button>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Leads Dashboard
───────────────────────────────────────── */
function LeadsDashboard({ onLogout }: { onLogout: () => void }) {
  const { data: submissions, isLoading, isError } = useGetAllSubmissions();

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.09 0.008 280)" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-10 h-16"
        style={{
          background: "oklch(0.08 0.01 280 / 0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid oklch(0.22 0.015 280 / 0.6)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 flex items-center justify-center rounded-sm"
            style={{ background: "oklch(0.75 0.15 75)" }}
          >
            <span
              className="font-display font-bold text-sm"
              style={{ color: "oklch(0.1 0.008 280)" }}
            >
              T
            </span>
          </div>
          <span className="font-heading font-bold text-base tracking-wide text-gold">
            TEJ
            <span className="text-foreground font-light text-xs ml-1.5 tracking-widest uppercase opacity-60">
              Admin
            </span>
          </span>
        </div>

        <Button
          data-ocid="admin.logout_button"
          onClick={onLogout}
          variant="outline"
          size="sm"
          className="font-heading tracking-wide text-xs uppercase"
          style={{
            borderColor: "oklch(0.3 0.04 75 / 0.5)",
            color: "oklch(0.62 0.08 75)",
            background: "transparent",
          }}
        >
          <LogOut className="mr-1.5 h-3.5 w-3.5" />
          Sign Out
        </Button>
      </header>

      {/* Main */}
      <main className="container max-w-6xl mx-auto px-6 py-10">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-5 w-5 text-gold" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Lead Submissions
            </h2>
          </div>
          <p
            className="text-sm font-heading tracking-wide"
            style={{ color: "oklch(0.52 0.04 75)" }}
          >
            All contact form submissions from real estate advisors
          </p>
        </motion.div>

        {/* Gold divider */}
        <div
          className="mb-8 h-px"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.75 0.15 75 / 0.5), oklch(0.75 0.15 75 / 0.15), transparent)",
          }}
        />

        {/* Content */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              data-ocid="admin.loading_state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 gap-4"
            >
              <Loader2
                className="h-8 w-8 animate-spin"
                style={{ color: "oklch(0.75 0.15 75)" }}
              />
              <p
                className="text-sm font-heading tracking-wide"
                style={{ color: "oklch(0.5 0.03 80)" }}
              >
                Loading submissions…
              </p>
            </motion.div>
          ) : isError ? (
            <motion.div
              key="error"
              data-ocid="admin.error_state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 gap-4"
            >
              <ShieldAlert
                className="h-8 w-8"
                style={{ color: "oklch(0.7 0.2 25)" }}
              />
              <p
                className="text-sm font-heading"
                style={{ color: "oklch(0.65 0.12 25)" }}
              >
                Failed to load submissions. Please refresh the page.
              </p>
            </motion.div>
          ) : !submissions || submissions.length === 0 ? (
            <motion.div
              key="empty"
              data-ocid="admin.empty_state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 gap-4"
              style={{
                border: "1px dashed oklch(0.28 0.018 280)",
                borderRadius: "2px",
              }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full"
                style={{
                  background: "oklch(0.75 0.15 75 / 0.08)",
                  border: "1px solid oklch(0.75 0.15 75 / 0.2)",
                }}
              >
                <Users
                  className="h-6 w-6"
                  style={{ color: "oklch(0.65 0.1 75)" }}
                />
              </div>
              <div className="text-center">
                <p className="font-heading font-semibold text-foreground mb-1">
                  No submissions yet
                </p>
                <p className="text-sm" style={{ color: "oklch(0.5 0.03 80)" }}>
                  Contact form submissions will appear here once received.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Count badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold tracking-wide"
                  style={{
                    background: "oklch(0.75 0.15 75 / 0.1)",
                    border: "1px solid oklch(0.75 0.15 75 / 0.25)",
                    color: "oklch(0.78 0.12 75)",
                  }}
                >
                  {submissions.length}{" "}
                  {submissions.length === 1 ? "submission" : "submissions"}
                </span>
              </div>

              {/* Table */}
              <div
                className="rounded-sm overflow-hidden"
                style={{
                  border: "1px solid oklch(0.22 0.015 280)",
                  background: "oklch(0.12 0.01 280)",
                }}
              >
                <Table data-ocid="admin.submissions_table">
                  <TableHeader>
                    <TableRow
                      style={{
                        borderBottom: "1px solid oklch(0.22 0.015 280)",
                        background: "oklch(0.14 0.012 280)",
                      }}
                    >
                      <TableHead
                        className="font-heading font-semibold text-xs tracking-widest uppercase"
                        style={{ color: "oklch(0.62 0.08 75)" }}
                      >
                        Full Name
                      </TableHead>
                      <TableHead
                        className="font-heading font-semibold text-xs tracking-widest uppercase"
                        style={{ color: "oklch(0.62 0.08 75)" }}
                      >
                        Agency / Company
                      </TableHead>
                      <TableHead
                        className="font-heading font-semibold text-xs tracking-widest uppercase"
                        style={{ color: "oklch(0.62 0.08 75)" }}
                      >
                        Email
                      </TableHead>
                      <TableHead
                        className="font-heading font-semibold text-xs tracking-widest uppercase"
                        style={{ color: "oklch(0.62 0.08 75)" }}
                      >
                        Phone
                      </TableHead>
                      <TableHead
                        className="font-heading font-semibold text-xs tracking-widest uppercase hidden md:table-cell"
                        style={{ color: "oklch(0.62 0.08 75)" }}
                      >
                        Message
                      </TableHead>
                      <TableHead
                        className="font-heading font-semibold text-xs tracking-widest uppercase"
                        style={{ color: "oklch(0.62 0.08 75)" }}
                      >
                        Date
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((sub, idx) => (
                      <TableRow
                        key={`${sub.email}-${idx}`}
                        data-ocid={`admin.row.${idx + 1}`}
                        className="transition-colors duration-150"
                        style={{
                          borderBottom: "1px solid oklch(0.18 0.012 280)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "oklch(0.15 0.012 280)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "transparent";
                        }}
                      >
                        <TableCell className="font-heading font-semibold text-sm text-foreground py-4">
                          {sub.name}
                        </TableCell>
                        <TableCell
                          className="text-sm py-4"
                          style={{ color: "oklch(0.7 0.04 80)" }}
                        >
                          {sub.agencyName || "—"}
                        </TableCell>
                        <TableCell
                          className="text-sm py-4"
                          style={{ color: "oklch(0.7 0.08 75)" }}
                        >
                          <a
                            href={`mailto:${sub.email}`}
                            className="hover:text-gold transition-colors"
                          >
                            {sub.email}
                          </a>
                        </TableCell>
                        <TableCell
                          className="text-sm py-4"
                          style={{ color: "oklch(0.7 0.04 80)" }}
                        >
                          {sub.phone || "—"}
                        </TableCell>
                        <TableCell
                          className="text-sm py-4 hidden md:table-cell max-w-xs"
                          style={{ color: "oklch(0.55 0.03 80)" }}
                        >
                          {truncate(sub.message)}
                        </TableCell>
                        <TableCell
                          className="text-xs py-4 whitespace-nowrap font-heading"
                          style={{ color: "oklch(0.5 0.03 80)" }}
                        >
                          {formatDate(sub.timestamp)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────
   Admin Check Gate
───────────────────────────────────────── */
function AdminGate({ onLogout }: { onLogout: () => void }) {
  const { data: isAdmin, isLoading } = useIsCallerAdmin();
  const { isFetching: actorLoading } = useActor();

  if (isLoading || actorLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.1 0.008 280)" }}
      >
        <div
          data-ocid="admin.loading_state"
          className="flex flex-col items-center gap-4"
        >
          <Loader2
            className="h-8 w-8 animate-spin"
            style={{ color: "oklch(0.75 0.15 75)" }}
          />
          <p
            className="text-sm font-heading tracking-wide"
            style={{ color: "oklch(0.5 0.03 80)" }}
          >
            Verifying access…
          </p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return <AccessDeniedScreen onLogout={onLogout} />;
  }

  return <LeadsDashboard onLogout={onLogout} />;
}

/* ─────────────────────────────────────────
   Admin Page Root
───────────────────────────────────────── */
export default function AdminPage() {
  const { identity, isInitializing, clear } = useInternetIdentity();

  const isAuthenticated = !!identity;

  if (isInitializing) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.1 0.008 280)" }}
      >
        <div
          data-ocid="admin.loading_state"
          className="flex flex-col items-center gap-4"
        >
          <Loader2
            className="h-8 w-8 animate-spin"
            style={{ color: "oklch(0.75 0.15 75)" }}
          />
          <p
            className="text-sm font-heading tracking-wide"
            style={{ color: "oklch(0.5 0.03 80)" }}
          >
            Initializing…
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLoginScreen />;
  }

  return <AdminGate onLogout={clear} />;
}
