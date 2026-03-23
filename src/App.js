import { useState } from "react";

// NDUGU Brand Colors
// Primary: #1a5c2a (dark green), #2d8a47 (mid green), #3aaa5c (light green)
// Accent:  #d4a017 (gold), #f0c040 (bright gold)
// BG:      #0d1f12 (deep dark green), #111f15 (card bg)

const mockData = {
  family: "NDUGU",
  tagline: "Our Platform. Our Community.",
  treasury: 12480,
  goal: 20000,
  members: [
    { id: 1, name: "Emeka Okonkwo", location: "Lagos, NG", role: "Elder", contributed: 3200, avatar: "EO" },
    { id: 2, name: "Adaeze Nwosu", location: "London, UK", role: "Secretary", contributed: 2100, avatar: "AN" },
    { id: 3, name: "Chidi Okonkwo", location: "Houston, TX", role: "Treasurer", contributed: 2800, avatar: "CO" },
    { id: 4, name: "Ngozi Eze", location: "Toronto, CA", role: "Member", contributed: 1500, avatar: "NE" },
    { id: 5, name: "Tobenna Obi", location: "Abuja, NG", role: "Member", contributed: 980, avatar: "TO" },
    { id: 6, name: "Amara Okonkwo", location: "Paris, FR", role: "Member", contributed: 1900, avatar: "AO" },
  ],
  notifications: [
    { id: 1, type: "urgent", title: "Medical Support Request", body: "Mama Okonkwo requires surgery funds — ₦850,000 needed.", date: "2 hours ago" },
    { id: 2, type: "vote", title: "Vote Open: Land in Enugu", body: "Decision on purchasing family compound closes in 3 days.", date: "1 day ago" },
    { id: 3, type: "info", title: "Q1 Financial Report Ready", body: "Treasurer Chidi has published the Q1 2026 report.", date: "5 days ago" },
    { id: 4, type: "celebrate", title: "Education Milestone", body: "Kelechi passed WAEC with distinction. Community applause!", date: "1 week ago" },
  ],
  votes: [
    { id: 1, title: "Purchase Enugu Family Land", description: "Acquire 2-acre plot in Enugu for ₦4.2M as generational asset.", yes: 4, no: 1, abstain: 1, total: 6, status: "active", daysLeft: 3 },
    { id: 2, title: "Annual Education Fund Increase", description: "Raise per-child education contribution from ₦50k to ₦80k/year.", yes: 5, no: 0, abstain: 1, total: 6, status: "active", daysLeft: 7 },
    { id: 3, title: "Emergency Medical Reserve", description: "Dedicate 15% of treasury to medical emergencies only.", yes: 6, no: 0, abstain: 0, total: 6, status: "passed", daysLeft: 0 },
  ],
  transactions: [
    { id: 1, from: "Adaeze Nwosu", amount: 500, type: "contribution", date: "Mar 1", note: "Monthly pledge" },
    { id: 2, from: "Treasury", amount: -850, type: "expense", date: "Feb 28", note: "School fees - Kelechi" },
    { id: 3, from: "Chidi Okonkwo", amount: 1200, type: "contribution", date: "Feb 25", note: "Q1 top-up" },
    { id: 4, from: "Treasury", amount: -200, type: "expense", date: "Feb 20", note: "Medical — Aunty Ngozi" },
    { id: 5, from: "Amara Okonkwo", amount: 900, type: "contribution", date: "Feb 15", note: "Annual pledge" },
  ],
  documents: [
    { id: 1, name: "Family Constitution 2024.pdf", type: "constitution", size: "1.2 MB", added: "Jan 2024" },
    { id: 2, name: "Land Title - Nnewi Compound.pdf", type: "legal", size: "3.8 MB", added: "Mar 2022" },
    { id: 3, name: "Q1 2026 Financial Report.xlsx", type: "finance", size: "540 KB", added: "Mar 2026" },
    { id: 4, name: "Family Tree - Updated.pdf", type: "heritage", size: "2.1 MB", added: "Dec 2023" },
  ]
};

const tabs = ["Overview", "Treasury", "Votes", "Notifications", "Members", "Documents"];

const typeColors = {
  urgent: "#E53E3E",
  vote: "#d4a017",
  info: "#2d8a47",
  celebrate: "#3aaa5c",
  constitution: "#7B341E",
  legal: "#1a5c2a",
  finance: "#2d8a47",
  heritage: "#d4a017",
  contribution: "#2d8a47",
  expense: "#C53030",
};

const typeIcons = {
  urgent: "⚕️",
  vote: "🗳️",
  info: "📋",
  celebrate: "🎉",
  constitution: "📜",
  legal: "⚖️",
  finance: "📊",
  heritage: "🌳",
};

const primaryBtn = {
  background: "linear-gradient(135deg, #1a5c2a, #2d8a47)",
  border: "none", borderRadius: 8, cursor: "pointer",
  color: "#fff", fontFamily: "Georgia, serif", fontSize: 14,
  fontWeight: 700, letterSpacing: "0.04em",
  boxShadow: "0 4px 15px rgba(45,138,71,0.35)",
};

export default function FamilyPlatform() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [userVotes, setUserVotes] = useState({});
  const [showContribute, setShowContribute] = useState(false);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [contributed, setContributed] = useState(false);

  const progress = (mockData.treasury / mockData.goal) * 100;

  const handleVote = (voteId, choice) => {
    setUserVotes(prev => ({ ...prev, [voteId]: choice }));
  };

  const handleContribute = () => {
    if (amount && parseFloat(amount) > 0) {
      setContributed(true);
      setTimeout(() => { setShowContribute(false); setContributed(false); setAmount(""); setNote(""); }, 2000);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080f09",
      fontFamily: "'Georgia', serif",
      color: "#e8f0e8",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background texture */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 20% 10%, rgba(45,138,71,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 60% 60% at 80% 80%, rgba(26,92,42,0.12) 0%, transparent 60%),
          repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px)
        `
      }} />

      {/* Header */}
      <header style={{
        position: "relative", zIndex: 10,
        borderBottom: "1px solid rgba(45,138,71,0.3)",
        background: "rgba(5,8,6,0.97)",
        backdropFilter: "blur(12px)",
        padding: "0 32px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: "linear-gradient(135deg, #1a5c2a, #3aaa5c)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, border: "2px solid rgba(58,170,92,0.5)",
              boxShadow: "0 0 20px rgba(45,138,71,0.35)"
            }}>🌿</div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "0.06em" }}>NDUGU</div>
              <div style={{ fontSize: 11, color: "#3aaa5c", letterSpacing: "0.14em", textTransform: "uppercase" }}>{mockData.tagline}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              padding: "6px 14px", borderRadius: 20,
              background: "rgba(45,138,71,0.15)",
              border: "1px solid rgba(45,138,71,0.35)",
              fontSize: 13, color: "#3aaa5c"
            }}>🔒 Private & Secure</div>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "linear-gradient(135deg, #1a5c2a, #2d8a47)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 700, cursor: "pointer", color: "#fff",
              border: "2px solid rgba(58,170,92,0.4)"
            }}>CO</div>
          </div>
        </div>
      </header>

      {/* Nav tabs */}
      <nav style={{
        position: "relative", zIndex: 10,
        borderBottom: "1px solid rgba(45,138,71,0.18)",
        background: "rgba(5,8,6,0.9)",
        padding: "0 32px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 0 }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "14px 20px",
              background: "none", border: "none", cursor: "pointer",
              color: activeTab === tab ? "#3aaa5c" : "#3a5a3a",
              fontFamily: "Georgia, serif",
              fontSize: 14, letterSpacing: "0.05em",
              borderBottom: activeTab === tab ? "2px solid #3aaa5c" : "2px solid transparent",
              transition: "all 0.2s",
              fontWeight: activeTab === tab ? 600 : 400,
            }}>{tab}</button>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto", padding: "32px 32px" }}>

        {/* OVERVIEW */}
        {activeTab === "Overview" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h1 style={{ fontSize: 28, color: "#e8f0e8", margin: 0, fontWeight: 400, letterSpacing: "0.02em" }}>Family Dashboard</h1>
              <p style={{ color: "#3a6a3a", marginTop: 6, fontSize: 14 }}>March 2026 · {mockData.members.length} active members across 4 continents</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
              {[
                { label: "Treasury Balance", value: `$${mockData.treasury.toLocaleString()}`, sub: `${Math.round(progress)}% of annual goal`, color: "#d4a017" },
                { label: "Active Members", value: mockData.members.length, sub: "6 countries", color: "#3aaa5c" },
                { label: "Open Votes", value: mockData.votes.filter(v => v.status === "active").length, sub: "Decisions pending", color: "#f0c040" },
                { label: "Documents", value: mockData.documents.length, sub: "Secure vault", color: "#2d8a47" },
              ].map(stat => (
                <div key={stat.label} style={{
                  padding: "20px 22px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(45,138,71,0.18)",
                  borderRadius: 12,
                  borderTop: `3px solid ${stat.color}`,
                }}>
                  <div style={{ fontSize: 11, color: "#3a6a3a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{stat.label}</div>
                  <div style={{ fontSize: 26, fontWeight: 700, color: stat.color, marginBottom: 4 }}>{stat.value}</div>
                  <div style={{ fontSize: 12, color: "#2a4a2a" }}>{stat.sub}</div>
                </div>
              ))}
            </div>

            <div style={{
              padding: "24px 28px", marginBottom: 24,
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(45,138,71,0.2)",
              borderRadius: 14,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 14 }}>
                <div>
                  <div style={{ fontSize: 13, color: "#4a8a4a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Annual Goal Progress</div>
                  <div style={{ fontSize: 22, color: "#e8f0e8" }}>${mockData.treasury.toLocaleString()} <span style={{ fontSize: 15, color: "#2a4a2a" }}>of ${mockData.goal.toLocaleString()}</span></div>
                </div>
                <button onClick={() => setShowContribute(true)} style={{ ...primaryBtn, padding: "10px 22px" }}>+ Contribute</button>
              </div>
              <div style={{ height: 10, background: "rgba(255,255,255,0.06)", borderRadius: 5, overflow: "hidden" }}>
                <div style={{
                  height: "100%", width: `${progress}%`,
                  background: "linear-gradient(90deg, #1a5c2a, #2d8a47, #3aaa5c)",
                  borderRadius: 5, transition: "width 1s ease",
                  boxShadow: "0 0 10px rgba(58,170,92,0.4)"
                }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div style={{ padding: "22px 24px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(45,138,71,0.15)", borderRadius: 14 }}>
                <div style={{ fontSize: 13, color: "#4a8a4a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Recent Activity</div>
                {mockData.transactions.slice(0, 4).map(tx => (
                  <div key={tx.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <div>
                      <div style={{ fontSize: 13, color: "#b0d0b0" }}>{tx.from}</div>
                      <div style={{ fontSize: 11, color: "#2a4a2a" }}>{tx.note} · {tx.date}</div>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: tx.amount > 0 ? "#3aaa5c" : "#fc8181" }}>
                      {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount)}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "22px 24px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(45,138,71,0.15)", borderRadius: 14 }}>
                <div style={{ fontSize: 13, color: "#4a8a4a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Latest Notifications</div>
                {mockData.notifications.slice(0, 3).map(n => (
                  <div key={n.id} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <div style={{ fontSize: 20, marginTop: 2 }}>{typeIcons[n.type]}</div>
                    <div>
                      <div style={{ fontSize: 13, color: "#b0d0b0", marginBottom: 3 }}>{n.title}</div>
                      <div style={{ fontSize: 12, color: "#2a4a2a" }}>{n.date}</div>
                    </div>
                    {n.type === "urgent" && (
                      <div style={{ marginLeft: "auto", padding: "2px 10px", background: "rgba(229,62,62,0.15)", border: "1px solid rgba(229,62,62,0.3)", borderRadius: 12, fontSize: 10, color: "#fc8181", alignSelf: "flex-start", whiteSpace: "nowrap" }}>URGENT</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TREASURY */}
        {activeTab === "Treasury" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
              <div>
                <h2 style={{ fontSize: 26, color: "#e8f0e8", margin: 0, fontWeight: 400 }}>Family Treasury</h2>
                <p style={{ color: "#3a6a3a", margin: "6px 0 0", fontSize: 14 }}>Full financial transparency for all members</p>
              </div>
              <button onClick={() => setShowContribute(true)} style={{ ...primaryBtn, padding: "10px 22px" }}>+ Contribute Now</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 28 }}>
              {[
                { label: "Emergency Reserve", pct: 15, amount: 1872, color: "#fc8181" },
                { label: "Education Fund", pct: 35, amount: 4368, color: "#3aaa5c" },
                { label: "General Fund", pct: 50, amount: 6240, color: "#d4a017" },
              ].map(f => (
                <div key={f.label} style={{
                  padding: "22px 24px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(45,138,71,0.18)",
                  borderTop: `3px solid ${f.color}`,
                  borderRadius: 12,
                }}>
                  <div style={{ fontSize: 11, color: "#3a6a3a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{f.label}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: f.color, marginBottom: 4 }}>${f.amount.toLocaleString()}</div>
                  <div style={{ fontSize: 12, color: "#2a4a2a" }}>{f.pct}% of treasury</div>
                  <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, marginTop: 14 }}>
                    <div style={{ height: "100%", width: `${f.pct}%`, background: f.color, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(45,138,71,0.15)", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "18px 24px", borderBottom: "1px solid rgba(45,138,71,0.12)", fontSize: 13, color: "#4a8a4a", textTransform: "uppercase", letterSpacing: "0.1em" }}>Transaction History</div>
              {mockData.transactions.map((tx, i) => (
                <div key={tx.id} style={{
                  display: "flex", alignItems: "center", padding: "16px 24px",
                  borderBottom: i < mockData.transactions.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent"
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", marginRight: 16,
                    background: tx.amount > 0 ? "rgba(58,170,92,0.12)" : "rgba(252,129,129,0.1)",
                    border: `1px solid ${tx.amount > 0 ? "rgba(58,170,92,0.3)" : "rgba(252,129,129,0.25)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16
                  }}>{tx.amount > 0 ? "↑" : "↓"}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, color: "#b0d0b0" }}>{tx.from}</div>
                    <div style={{ fontSize: 12, color: "#2a4a2a" }}>{tx.note}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: tx.amount > 0 ? "#3aaa5c" : "#fc8181" }}>
                      {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toLocaleString()}
                    </div>
                    <div style={{ fontSize: 12, color: "#2a4a2a" }}>{tx.date}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(45,138,71,0.15)", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "18px 24px", borderBottom: "1px solid rgba(45,138,71,0.12)", fontSize: 13, color: "#4a8a4a", textTransform: "uppercase", letterSpacing: "0.1em" }}>Member Contributions — 2026</div>
              {mockData.members.sort((a, b) => b.contributed - a.contributed).map((m, i) => (
                <div key={m.id} style={{
                  display: "flex", alignItems: "center", padding: "14px 24px",
                  borderBottom: i < mockData.members.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none"
                }}>
                  <div style={{ width: 28, fontSize: 13, color: "#2a4a2a", fontWeight: 700 }}>#{i + 1}</div>
                  <div style={{
                    width: 34, height: 34, borderRadius: "50%", marginRight: 14,
                    background: "linear-gradient(135deg, #1a5c2a, #2d8a47)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 700, color: "#fff"
                  }}>{m.avatar}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, color: "#b0d0b0" }}>{m.name}</div>
                    <div style={{ fontSize: 12, color: "#2a4a2a" }}>{m.location}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#d4a017" }}>${m.contributed.toLocaleString()}</div>
                    <div style={{ height: 4, width: 80, background: "rgba(255,255,255,0.06)", borderRadius: 2, marginTop: 4 }}>
                      <div style={{ height: "100%", width: `${(m.contributed / 3200) * 100}%`, background: "linear-gradient(90deg, #1a5c2a, #3aaa5c)", borderRadius: 2 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOTES */}
        {activeTab === "Votes" && (
          <div>
            <h2 style={{ fontSize: 26, color: "#e8f0e8", margin: "0 0 8px", fontWeight: 400 }}>Family Decisions</h2>
            <p style={{ color: "#3a6a3a", margin: "0 0 28px", fontSize: 14 }}>Every adult member has an equal voice in major decisions.</p>
            {mockData.votes.map(vote => {
              const myVote = userVotes[vote.id];
              const yesPct = Math.round((vote.yes / vote.total) * 100);
              const noPct = Math.round((vote.no / vote.total) * 100);
              return (
                <div key={vote.id} style={{
                  padding: "28px 30px", marginBottom: 18,
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${vote.status === "passed" ? "rgba(58,170,92,0.3)" : "rgba(45,138,71,0.2)"}`,
                  borderRadius: 14,
                  borderLeft: `4px solid ${vote.status === "passed" ? "#3aaa5c" : "#d4a017"}`
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <h3 style={{ fontSize: 18, color: "#e8f0e8", margin: 0, fontWeight: 600 }}>{vote.title}</h3>
                    <span style={{
                      padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                      background: vote.status === "passed" ? "rgba(58,170,92,0.15)" : "rgba(212,160,23,0.15)",
                      color: vote.status === "passed" ? "#3aaa5c" : "#d4a017",
                      border: `1px solid ${vote.status === "passed" ? "rgba(58,170,92,0.3)" : "rgba(212,160,23,0.3)"}`,
                    }}>{vote.status === "passed" ? "✓ PASSED" : `${vote.daysLeft}d remaining`}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#3a6a3a", margin: "0 0 20px", lineHeight: 1.6 }}>{vote.description}</p>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#3a6a3a", marginBottom: 6 }}>
                      <span>In favour — {vote.yes} votes ({yesPct}%)</span>
                      <span>Against — {vote.no} vote{vote.no !== 1 ? "s" : ""} ({noPct}%)</span>
                    </div>
                    <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden", display: "flex" }}>
                      <div style={{ height: "100%", width: `${yesPct}%`, background: "linear-gradient(90deg, #1a5c2a, #3aaa5c)", transition: "width 0.5s" }} />
                      <div style={{ height: "100%", width: `${noPct}%`, background: "linear-gradient(90deg, #C53030, #fc8181)", transition: "width 0.5s" }} />
                    </div>
                  </div>
                  {vote.status === "active" && (
                    <div style={{ display: "flex", gap: 10 }}>
                      {["yes", "no", "abstain"].map(choice => (
                        <button key={choice} onClick={() => handleVote(vote.id, choice)} style={{
                          padding: "8px 20px", borderRadius: 8, cursor: "pointer",
                          fontFamily: "Georgia, serif", fontSize: 13, fontWeight: 600,
                          letterSpacing: "0.04em",
                          background: myVote === choice
                            ? choice === "yes" ? "rgba(58,170,92,0.2)" : choice === "no" ? "rgba(252,129,129,0.2)" : "rgba(212,160,23,0.15)"
                            : "rgba(255,255,255,0.04)",
                          border: myVote === choice
                            ? `1px solid ${choice === "yes" ? "#3aaa5c" : choice === "no" ? "#fc8181" : "#d4a017"}`
                            : "1px solid rgba(255,255,255,0.1)",
                          color: myVote === choice
                            ? choice === "yes" ? "#3aaa5c" : choice === "no" ? "#fc8181" : "#d4a017"
                            : "#4a8a4a",
                          transition: "all 0.2s",
                        }}>
                          {choice === "yes" ? "✓ In Favour" : choice === "no" ? "✗ Against" : "~ Abstain"}
                        </button>
                      ))}
                    </div>
                  )}
                  {myVote && <div style={{ marginTop: 10, fontSize: 12, color: "#3aaa5c" }}>✓ Your vote has been recorded</div>}
                </div>
              );
            })}
          </div>
        )}

        {/* NOTIFICATIONS */}
        {activeTab === "Notifications" && (
          <div>
            <h2 style={{ fontSize: 26, color: "#e8f0e8", margin: "0 0 8px", fontWeight: 400 }}>Family Notifications</h2>
            <p style={{ color: "#3a6a3a", margin: "0 0 28px", fontSize: 14 }}>Official announcements, emergencies, and celebrations from family leadership.</p>
            {mockData.notifications.map(n => (
              <div key={n.id} style={{
                display: "flex", gap: 20, padding: "24px 28px", marginBottom: 14,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(45,138,71,0.15)",
                borderRadius: 14,
                borderLeft: `4px solid ${typeColors[n.type]}`,
              }}>
                <div style={{ fontSize: 30, marginTop: 2 }}>{typeIcons[n.type]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <h3 style={{ fontSize: 16, color: "#e8f0e8", margin: 0, fontWeight: 600 }}>{n.title}</h3>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      {n.type === "urgent" && <span style={{ padding: "2px 10px", background: "rgba(229,62,62,0.15)", border: "1px solid rgba(229,62,62,0.3)", borderRadius: 12, fontSize: 10, color: "#fc8181", fontWeight: 700, letterSpacing: "0.08em" }}>URGENT</span>}
                      <span style={{ fontSize: 12, color: "#2a4a2a" }}>{n.date}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#4a7a4a", margin: 0, lineHeight: 1.6 }}>{n.body}</p>
                  {n.type === "urgent" && (
                    <button style={{
                      marginTop: 14, padding: "8px 20px",
                      background: "rgba(229,62,62,0.12)", border: "1px solid rgba(229,62,62,0.3)",
                      borderRadius: 8, cursor: "pointer", color: "#fc8181",
                      fontFamily: "Georgia, serif", fontSize: 13
                    }}>Contribute to This</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MEMBERS */}
        {activeTab === "Members" && (
          <div>
            <h2 style={{ fontSize: 26, color: "#e8f0e8", margin: "0 0 8px", fontWeight: 400 }}>Family Members</h2>
            <p style={{ color: "#3a6a3a", margin: "0 0 28px", fontSize: 14 }}>{mockData.members.length} registered members across the globe</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {mockData.members.map(m => (
                <div key={m.id} style={{
                  padding: "24px", textAlign: "center",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(45,138,71,0.15)",
                  borderRadius: 14,
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a5c2a, #2d8a47)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 700, color: "#fff",
                    margin: "0 auto 14px",
                    border: "2px solid rgba(58,170,92,0.3)",
                    boxShadow: "0 0 20px rgba(45,138,71,0.25)"
                  }}>{m.avatar}</div>
                  <div style={{ fontSize: 16, color: "#e8f0e8", fontWeight: 600, marginBottom: 4 }}>{m.name}</div>
                  <div style={{ fontSize: 12, color: "#2a4a2a", marginBottom: 10 }}>📍 {m.location}</div>
                  <div style={{ display: "inline-block", padding: "3px 12px", background: "rgba(45,138,71,0.12)", border: "1px solid rgba(45,138,71,0.25)", borderRadius: 12, fontSize: 11, color: "#3aaa5c", marginBottom: 14 }}>{m.role}</div>
                  <div style={{ fontSize: 13, color: "#3a6a3a", marginBottom: 4 }}>2026 Contribution</div>
                  <div style={{ fontSize: 20, color: "#d4a017", fontWeight: 700 }}>${m.contributed.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOCUMENTS */}
        {activeTab === "Documents" && (
          <div>
            <h2 style={{ fontSize: 26, color: "#e8f0e8", margin: "0 0 8px", fontWeight: 400 }}>Document Vault</h2>
            <p style={{ color: "#3a6a3a", margin: "0 0 28px", fontSize: 14 }}>Secure storage for family records, legal documents, and heritage files.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {mockData.documents.map(doc => (
                <div key={doc.id} style={{
                  display: "flex", gap: 18, padding: "22px 24px",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(45,138,71,0.15)",
                  borderRadius: 14,
                  borderLeft: `4px solid ${typeColors[doc.type]}`,
                  cursor: "pointer",
                }}>
                  <div style={{ fontSize: 32 }}>{typeIcons[doc.type]}</div>
                  <div>
                    <div style={{ fontSize: 15, color: "#e8f0e8", fontWeight: 600, marginBottom: 6 }}>{doc.name}</div>
                    <div style={{ fontSize: 12, color: "#2a4a2a", marginBottom: 10 }}>{doc.size} · Added {doc.added}</div>
                    <div style={{ display: "inline-block", padding: "3px 10px", background: `${typeColors[doc.type]}18`, border: `1px solid ${typeColors[doc.type]}40`, borderRadius: 10, fontSize: 10, color: typeColors[doc.type], textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>{doc.type}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 20, padding: "20px 24px",
              background: "rgba(45,138,71,0.04)",
              border: "1px dashed rgba(45,138,71,0.3)",
              borderRadius: 14, textAlign: "center", cursor: "pointer"
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>+</div>
              <div style={{ fontSize: 14, color: "#4a8a4a" }}>Upload new document</div>
              <div style={{ fontSize: 12, color: "#2a4a2a", marginTop: 4 }}>PDF, DOCX, XLSX, JPG supported · Max 25MB</div>
            </div>
          </div>
        )}
      </main>

      {/* Contribute Modal */}
      {showContribute && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 100,
          background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center"
        }} onClick={() => setShowContribute(false)}>
          <div style={{
            background: "#080f09",
            border: "1px solid rgba(45,138,71,0.35)",
            borderRadius: 18, padding: "36px 40px", width: 420,
            boxShadow: "0 0 60px rgba(0,0,0,0.6), 0 0 40px rgba(45,138,71,0.1)"
          }} onClick={e => e.stopPropagation()}>
            {contributed ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🌿</div>
                <div style={{ fontSize: 22, color: "#3aaa5c", fontWeight: 700 }}>Thank you!</div>
                <div style={{ fontSize: 14, color: "#3a6a3a", marginTop: 8 }}>Your contribution has been recorded.</div>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: 22, color: "#e8f0e8", margin: "0 0 6px", fontWeight: 400 }}>Make a Contribution</h3>
                <p style={{ fontSize: 13, color: "#3a6a3a", margin: "0 0 28px" }}>All contributions are recorded transparently on the family ledger.</p>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 11, color: "#3a6a3a", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>Amount (KES / USD)</label>
                  <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 500" type="number" style={{
                    width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(45,138,71,0.3)", borderRadius: 8,
                    color: "#e8f0e8", fontFamily: "Georgia, serif", fontSize: 16,
                    outline: "none", boxSizing: "border-box"
                  }} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 11, color: "#3a6a3a", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>Note (optional)</label>
                  <input value={note} onChange={e => setNote(e.target.value)} placeholder="e.g. Monthly pledge" style={{
                    width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(45,138,71,0.3)", borderRadius: 8,
                    color: "#e8f0e8", fontFamily: "Georgia, serif", fontSize: 14,
                    outline: "none", boxSizing: "border-box"
                  }} />
                </div>

                {/* M-Pesa badge */}
                <div style={{ marginBottom: 24, padding: "10px 14px", background: "rgba(45,138,71,0.08)", border: "1px solid rgba(45,138,71,0.2)", borderRadius: 8, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 18 }}>📱</span>
                  <div>
                    <div style={{ fontSize: 12, color: "#3aaa5c", fontWeight: 600 }}>M-Pesa & WhatsApp supported</div>
                    <div style={{ fontSize: 11, color: "#2a4a2a" }}>You'll receive a payment prompt after confirming</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={() => setShowContribute(false)} style={{
                    flex: 1, padding: "12px", background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
                    cursor: "pointer", color: "#3a6a3a", fontFamily: "Georgia, serif", fontSize: 14
                  }}>Cancel</button>
                  <button onClick={handleContribute} style={{ ...primaryBtn, flex: 2, padding: "12px" }}>
                    Confirm Contribution
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}