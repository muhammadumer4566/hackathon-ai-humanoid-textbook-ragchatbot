import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics Textbook"
      description="Complete AI-Native textbook for mastering robotics, humanoids, ROS2, VLA systems, and digital twins."
    >
      {/* HERO SECTION */}
      <header
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 50%, #0f172a 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.15,
        }}>
          <div style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "pulse 4s ease-in-out infinite",
          }}></div>
          <div style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "pulse 4s ease-in-out infinite 2s",
          }}></div>
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            padding: "8px 20px",
            background: "rgba(59, 130, 246, 0.1)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "30px",
            marginBottom: "30px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#60a5fa",
          }}>
            AI-Native Learning System
          </div>

          <h1 style={{ 
            fontSize: "64px", 
            fontWeight: "800", 
            marginBottom: "25px",
            background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: "1.2",
          }}>
            Physical AI & Humanoid Robotics
          </h1>
          
          <p style={{ 
            fontSize: "22px", 
            maxWidth: "750px", 
            margin: "0 auto 50px", 
            lineHeight: "1.7",
            color: "#cbd5e1",
          }}>
            Master the future of intelligent machines. From ROS 2 to Vision-Language-Action systems, 
            build next-generation humanoid robots with cutting-edge AI.
          </p>

          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/introduction/intro"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                border: "none",
                padding: "16px 35px",
                fontSize: "18px",
                fontWeight: "700",
                borderRadius: "12px",
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                transition: "all 0.3s ease",
              }}
            >
              Start Learning →
            </Link>
            
            <Link
              className="button button--secondary button--lg"
              to="/docs/introduction/intro"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "white",
                padding: "16px 35px",
                fontSize: "18px",
                fontWeight: "700",
                borderRadius: "12px",
                transition: "all 0.3s ease",
              }}
            >
              View Curriculum
            </Link>
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.15; }
            50% { transform: scale(1.1); opacity: 0.25; }
          }
        `}</style>
      </header>

      {/* STATS BAR */}
      <section style={{ 
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "40px 20px",
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          textAlign: "center",
        }}>
          <div>
            <div style={{ fontSize: "48px", fontWeight: "800", color: "#60a5fa", marginBottom: "8px" }}>6</div>
            <div style={{ color: "#94a3b8", fontSize: "15px" }}>Core Modules</div>
          </div>
          <div>
            <div style={{ fontSize: "48px", fontWeight: "800", color: "#a78bfa", marginBottom: "8px" }}>100+</div>
            <div style={{ color: "#94a3b8", fontSize: "15px" }}>Hands-On Examples</div>
          </div>
          <div>
            <div style={{ fontSize: "48px", fontWeight: "800", color: "#ec4899", marginBottom: "8px" }}>ROS 2</div>
            <div style={{ color: "#94a3b8", fontSize: "15px" }}>Industry Standard</div>
          </div>
          <div>
            <div style={{ fontSize: "48px", fontWeight: "800", color: "#06b6d4", marginBottom: "8px" }}>VLA</div>
            <div style={{ color: "#94a3b8", fontSize: "15px" }}>AI Systems</div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ 
          fontSize: "48px", 
          marginBottom: "25px", 
          textAlign: "center",
          fontWeight: "800",
          color: "#ffffff",
        }}>
          What You'll Master
        </h2>
        <p style={{ 
          fontSize: "20px", 
          lineHeight: "1.8", 
          color: "#cbd5e1", 
          textAlign: "center",
        }}>
          A complete engineering curriculum for physical AI, embodied intelligence, and humanoid robotics. 
          Each module is designed to build your expertise progressively, from fundamentals to advanced AI systems.
        </p>
      </section>

      {/* MODULE CARDS */}
      <section style={{ padding: "0 20px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* MODULE 1 */}
          <div style={{
            ...modernCard,
            borderColor: "rgba(59, 130, 246, 0.3)",
          }}>
            <div style={{
              ...numberBadge,
              background: "rgba(59, 130, 246, 0.1)",
              color: "#60a5fa",
            }}>01</div>
            <h3 style={modernCardTitle}>Module 1: ROS 2 Foundations</h3>
            <p style={modernCardText}>
              Master ROS 2 — the nervous system of modern robots. Build nodes, topics,
              services, actions, and real robot workflows.
            </p>
            <Link style={{...modernCardBtn, background: "#3b82f6"}} to="/docs/ros2-foundations/module-1-ros2">
              Explore Module →
            </Link>
          </div>

          {/* MODULE 2 */}
          <div style={{
            ...modernCard,
            borderColor: "rgba(139, 92, 246, 0.3)",
          }}>
            <div style={{
              ...numberBadge,
              background: "rgba(139, 92, 246, 0.1)",
              color: "#a78bfa",
            }}>02</div>
            <h3 style={modernCardTitle}>Module 2: Simulation & Digital Twins</h3>
            <p style={modernCardText}>
              Master Gazebo, Unity Robotics, Isaac Sim, and digital twin workflows 
              for training and testing robots safely.
            </p>
            <Link style={{...modernCardBtn, background: "#8b5cf6"}} to="/docs/simulation/module-2-simulation">
              Explore Module →
            </Link>
          </div>

          {/* MODULE 3 */}
          <div style={{
            ...modernCard,
            borderColor: "rgba(236, 72, 153, 0.3)",
          }}>
            <div style={{
              ...numberBadge,
              background: "rgba(236, 72, 153, 0.1)",
              color: "#f472b6",
            }}>03</div>
            <h3 style={modernCardTitle}>Module 3: Hardware Foundations</h3>
            <p style={modernCardText}>
              Motors, actuators, torque control, IMUs, sensors, microcontrollers,
              embedded systems — everything real humanoids need.
            </p>
            <Link style={{...modernCardBtn, background: "#ec4899"}} to="/docs/hardware-basics/module-3-hardware">
              Explore Module →
            </Link>
          </div>

          {/* MODULE 4 */}
          <div style={{
            ...modernCard,
            borderColor: "rgba(6, 182, 212, 0.3)",
          }}>
            <div style={{
              ...numberBadge,
              background: "rgba(6, 182, 212, 0.1)",
              color: "#22d3ee",
            }}>04</div>
            <h3 style={modernCardTitle}>Module 4: VLA — Vision, Language, Action</h3>
            <p style={modernCardText}>
              Learn the most advanced robotics architecture: perception models,
              LLM-driven command systems, action planners, and embodied AI agents.
            </p>
            <Link style={{...modernCardBtn, background: "#06b6d4"}} to="/docs/vla-systems/module-4-vla-foundations">
              Explore Module →
            </Link>
          </div>

          {/* MODULE 5 */}
          <div style={{
            ...modernCard,
            borderColor: "rgba(249, 115, 22, 0.3)",
          }}>
            <div style={{
              ...numberBadge,
              background: "rgba(249, 115, 22, 0.1)",
              color: "#fb923c",
            }}>05</div>
            <h3 style={modernCardTitle}>Module 5: Advanced AI & Motion Control</h3>
            <p style={modernCardText}>
              Reinforcement learning, motion planning, MPC, trajectory optimization,
              and how robots think and move intelligently.
            </p>
            <Link style={{...modernCardBtn, background: "#f97316"}} to="/docs/advanced-ai-control/module-5-advanced-ai">
              Explore Module →
            </Link>
          </div>

          {/* MODULE 6 */}
          <div style={{
            ...modernCard,
            borderColor: "rgba(34, 197, 94, 0.3)",
          }}>
            <div style={{
              ...numberBadge,
              background: "rgba(34, 197, 94, 0.1)",
              color: "#4ade80",
            }}>06</div>
            <h3 style={modernCardTitle}>Module 6: Designing Humanoid Robots</h3>
            <p style={modernCardText}>
              Learn end-to-end humanoid creation: mechanical design, kinematics, actuators,
              morphologies, energy systems, and AI-driven movement.
            </p>
            <Link style={{...modernCardBtn, background: "#22c55e"}} to="/docs/humanoid-design/module-6-humanoid-design">
              Explore Module →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ 
        padding: "80px 20px", 
        background: "rgba(0, 0, 0, 0.2)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}>
        <h2 style={{ 
          textAlign: "center", 
          fontSize: "48px", 
          marginBottom: "60px",
          fontWeight: "800",
          color: "#ffffff",
        }}>
          Why This Textbook Stands Out
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          <div style={featureCard}>
            <div style={{
              width: "60px",
              height: "60px",
              background: "rgba(59, 130, 246, 0.2)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              fontSize: "28px",
            }}></div>
            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px", color: "#ffffff" }}>
              AI-First Design
            </h3>
            <p style={{ fontSize: "16px", color: "#cbd5e1", lineHeight: "1.7" }}>
              Built around modern workflows: LLM agents, VLA systems, and intelligent 
              controllers for next-gen robotics.
            </p>
          </div>

          <div style={featureCard}>
            <div style={{
              width: "60px",
              height: "60px",
              background: "rgba(139, 92, 246, 0.2)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              fontSize: "28px",
            }}></div>
            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px", color: "#ffffff" }}>
              Hands-On Learning
            </h3>
            <p style={{ fontSize: "16px", color: "#cbd5e1", lineHeight: "1.7" }}>
              Every module includes practical code, simulations, and real robot 
              applications you can build yourself.
            </p>
          </div>

          <div style={featureCard}>
            <div style={{
              width: "60px",
              height: "60px",
              background: "rgba(236, 72, 153, 0.2)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              fontSize: "28px",
            }}></div>
            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px", color: "#ffffff" }}>
              Industry-Inspired
            </h3>
            <p style={{ fontSize: "16px", color: "#cbd5e1", lineHeight: "1.7" }}>
              Reflects real pipelines from Tesla Bot, Figure AI, Apptronik, and 
              Sanctuary AI humanoid projects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          padding: "100px 20px",
          background: "linear-gradient(135deg, #0a0e1a 0%, #1e1b4b 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "60px 40px",
          background: "rgba(59, 130, 246, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          borderRadius: "24px",
        }}>
          <h2 style={{ fontSize: "48px", marginBottom: "20px", fontWeight: "800" }}>
            Ready to Build the Future?
          </h2>
          <p style={{ fontSize: "20px", marginBottom: "40px", color: "#cbd5e1", lineHeight: "1.7" }}>
            The era of physical AI and embodied intelligence is here. Start your journey 
            into humanoid robotics today.
          </p>

          <Link
            className="button button--primary button--lg"
            to="/docs/introduction/intro"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              border: "none",
              padding: "18px 40px",
              fontSize: "18px",
              fontWeight: "700",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)",
            }}
          >
            Start Learning Now →
          </Link>
        </div>
      </section>
    </Layout>
  );
}

/* ======== MODERN STYLES ======== */
const modernCard = {
  position: "relative",
  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)",
  backdropFilter: "blur(10px)",
  padding: "35px",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
};

const numberBadge = {
  position: "absolute",
  top: "25px",
  right: "25px",
  width: "50px",
  height: "50px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "800",
  fontSize: "20px",
};

const modernCardTitle = {
  fontSize: "24px",
  fontWeight: "700",
  marginBottom: "15px",
  marginTop: "10px",
  color: "#ffffff",
};

const modernCardText = {
  fontSize: "16px",
  color: "#cbd5e1",
  marginBottom: "25px",
  lineHeight: "1.6",
};

const modernCardBtn = {
  display: "inline-block",
  textDecoration: "none",
  padding: "12px 24px",
  color: "white",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: "600",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
};

const featureCard = {
  padding: "35px",
  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s ease",
};