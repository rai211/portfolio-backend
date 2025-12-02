import { supabase } from "../supabaseClient.js";

export const trackVisitor = async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const userAgent = req.headers["user-agent"];

    const { error } = await supabase.from("visitors").insert([
      {
        ip: ip?.toString(),
        user_agent: userAgent
      }
    ]);

    if (error) throw error;

    res.json({ message: "Visitor tracked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getVisitorCount = async (req, res) => {
  try {
    const { count, error } = await supabase
      .from("visitors")
      .select("*", { count: "exact", head: true });

    if (error) throw error;

    res.json({ totalVisitors: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
