import { z } from "zod";

export const SubredditValidator = z.object({
  name: z.string().min(3).max(12),
});

export const SubredditSubscriptionValidator = z.object({
  subredditId: z.string(),
});

export type CreateSubredditPayload = z.infer<typeof SubredditValidator>;
export type SubscribeSubredditPayload = z.infer<
  typeof SubredditSubscriptionValidator
>;
