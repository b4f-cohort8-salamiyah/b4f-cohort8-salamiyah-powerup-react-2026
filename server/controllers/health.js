import { opportunities, posts } from "../store.js";

export function health(req, res) {
  res.json({
    status: "ok",
    opportunities: opportunities.length,
    posts: posts.length,
  });
}
