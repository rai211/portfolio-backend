import supabase from "../config/supabaseClient.js";

export const addVisitor = async (ip, userAgent) => {
  const { data, error } = await supabase
    .from("visitors")
    .insert([{ ip, user_agent: userAgent }]);

  if (error) throw error;
  return data;
};

export const countVisitors = async () => {
  const { count, error } = await supabase
    .from("visitors")
    .select("*", { count: "exact" });

  if (error) throw error;
  return count;
};
